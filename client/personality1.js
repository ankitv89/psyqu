//this comes up true if userid exist





Template.personality.helpers({
  big5s: function(){
    return Big5.find()
  },
  formFilled : function(){
    var count = Big5.find().count();
    if(count<1){
      return false
    }
    else
        return true;
  },
  allowedToUpdate : function(){
    var date = moment(Big5.findOne().createdAt);
    var today = moment(new Date());
    var diff = date.diff(today, 'days');
    if(diff>90){
      return true
    }
    else 
        return false;
    
  },
  daysLeft : function(){
    var date = moment(Big5.findOne().createdAt);
    var today = moment(new Date());
    var diff = date.diff(today, 'days');
    return 90-diff;
    
  }
});

Template.yourScore.helpers({
  myScore : function(){
    var data = Big5.findOne({author: Meteor.userId()});
    var score = data.total;
    return score;
  }
});



// Template.personality.helpers({
//   big5s: function (){
//     return Big5.find()

//   }
// })



// Template.score.helpers({
//   add: function(aa,bb){
//     return aa+bb
//   }
// })

// Template.neurotic.helpers({
//   add: function(bb,cc,ee,ff,gg,hh,ii,jj){
//     return bb-cc+ee+ff-gg+hh-ii+jj
//   }
// })

// Template.agreeable.helpers({
//   add: function(j,k,l,m,n,o,p,q,r){
//     return j+k-l+m+n-o+p-q+r
//   }
// })

// Template.openness.helpers({
//   add: function(a,b,d,e,dx,ex,f,g,h,I){
//     return Meteor.user().a+b+d+e+dx+ex-f+g-h+I
//   }
// })

// Template.extraversion.helpers({
//   add: function(kk,ll,mm,nn,oo,pp,qq,rr){
//     return Meteor.user().kk-ll+mm+nn-oo+pp-qq+rr
//   }
// })

// Template.conscientiousness.helpers({
//   add: function(s,t,u,v,w,x,y,z,zx){
//     return Meteor.user().s-t+u-v-w+x+y+z-zx
//   }
// })

// Template.user.helpers({
//   firstName: function() {
//     return (Meteor.userId().Meteor.users.findOne({_id:Meteor.userId()}))
//   }
// });





// Template.testing.helpers({

//     'neuroScore': function(bb,cc,ee,ff,gg,hh,ii,jj){
//         return bb-cc+ee+ff-gg+hh-ii+jj

//      },

//     'agreeableScore': function(j,k,l,m,n,o,p,q,r){
//         return j+k-l+m+n-o+p-q+r

//     }

//     'opennessScore': function(a,b,d,e,dx,ex,f,g,h,I){
//     return a+b+d+e+dx+ex-f+g-h+I
//   }
// });











