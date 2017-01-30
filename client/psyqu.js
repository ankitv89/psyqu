
//PurposeList.insert({purpose2: "Find a soulmate"})
//PurposeList.insert({purpose2: "Find flatmate"})
//PurposeList.insert({purpose2: "Find a friend"})
//UserResult = new Mongo.Collection('user_result');




// Router.route('/', {
//     name: 'login-page',
//     template:'login-page',

// });

//user go to the main page after login
Router.route('/',
  name: 'login-page',
  function () {
   if (Meteor.userId()) {
        this.render('user_profile');
    } else {
        this.next();
    }

});

//users go back to login page if they haven't login 
Router.onBeforeAction(function() {
  if (! Meteor.userId()) {
    this.render('login-page');
  } else {
    this.next();
  }
});


Router.route('/main',{
  name:'main',
  template:'main',
  trackPageView: true,
  function () {
  this.layout('HomeLayout')
}
});

Router.route('/user_profile',
  name: 'user_profile',
  function () {
   if (Profile.Gender()) {
        this.render('main');
    } else {
        this.next();
    }
});


Router.route('/partner');
Router.route('/flatmate');
Router.route('/friend');
//Router.route('/user_profile');



  
Router.route('/personality');
Router.route('/disclosure');
Router.route('/interests');
Router.route('/matchUser', {
    name : 'matchUser', 
    template: 'matchUser',
    waitOn: function () {
            return Meteor.subscribe('matchedUsers');
    }
});


Router.route('/sign-out', {
    name: 'signOut',
    onBeforeAction: function () {
        Meteor.logout(); 
        this.next();
    }
});



Template.uid2email.helpers({
  email: function(uid){
    return Meteor.users.findOne({_id:uid}).emails[0].address
  }
})


Template.friendNavi.events({
  'click .friendNavi': function(e) {
    console.log(this.name);
    $('.userRow').removeClass('highlight');
    $(e.currentTarget).addClass('highlight');
  }
});


Template.SideNav.events({
   "click #logout" : function(){
       Meteor.logout();
   }
});







