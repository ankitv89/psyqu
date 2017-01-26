//this comes up true if userid exist





Template.personality.helpers({
  big5s: Big5.find()
})


// Template.personality.helpers({
//   big5s: function (){
//     return Big5.find()

//   }
// })

// Template.personality.helpers({
//   myScore: function(){
//     score=(Scores.findOne({gameId: this._id, userId: Meteor.userId()}));
//     console.log("SCR:" ,score);
//     return Big5[cons8];
//   },
// });

// Template.score.helpers({
//   add: function(aa,bb){
//     return aa+bb
//   }
// })

// Template.neurotic.helpers({
//   add: function(bb,cc,ee,ff,gg,hh,ii,jj){
//     return Meteor.user().bb-cc+ee+ff-gg+hh-ii+jj
//   }
// })

// Template.agreeable.helpers({
//   add: function(j,k,l,m,n,o,p,q,r){
//     return Meteor.user().j+k-l+m+n-o+p-q+r
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











