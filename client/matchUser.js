Template.matchUser.helpers({
    user : function(){
        return Big5.find({author :{$ne: Meteor.userId()}}).fetch();
    }
});
