
//PurposeList.insert({purpose2: "Find a soulmate"})
//PurposeList.insert({purpose2: "Find flatmate"})
//PurposeList.insert({purpose2: "Find a friend"})
//UserResult = new Mongo.Collection('user_result');




// Router.route('/', {
//     name: 'login-page',
//     template:'login-page',

// });

//user go to the main page after login
Router.route('/',{
  name: 'login-page',
    template : "login-page",
  onBeforeAction: function () {
      if (Meteor.userId()) {
          this.render('user_profile');
      } else {
          this.next();
      }
  },
    waitOn : function () {
        return Meteor.subscribe('myProfile');
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

//want to direct user to main page once profile is submitted

Router.route('/user_profile',{
    name: 'user_profile',
    template : 'user_profile',
    waitOn : function(){
        return Meteor.subscribe('myProfile');
    }

});

Router.route('/partner');
Router.route('/flatmate');
Router.route('/friend');
Router.route('/chat');
//Router.route('/user_profile');



  
Router.route('/personality',{
    waitOn: function(){
        return Meteor.subscribe('myBig5');
    }
});

Router.route('/selfDisclosure',{
    waitOn: function(){
        return Meteor.subscribe('myDisclose');
    }
});

Router.route('/Value',{
    waitOn: function(){
        return Meteor.subscribe('myValue');
    }
});


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



// Template.uid2email.helpers({
//   email: function(uid){
//     return Meteor.users.findOne({_id:uid}).emails[0].address
//   }
// });


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







