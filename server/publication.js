Meteor.publish('myBig5',function(){
     return Big5.find({author:this.userId});
 });

Meteor.publish('matchedUsers',function(){
    var data = Big5.findOne({author: this.userId});
    var myscore = data.total;

    var match = Big5.find({$and : [{total: {$gt : myscore-2}},{total: {$lt : myscore+2}},{author :{$ne: this.user}}]});
    return match;
});

