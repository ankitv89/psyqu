Meteor.publish(null,function(){ 
     return Big5.find({author:this.userId});
 });

