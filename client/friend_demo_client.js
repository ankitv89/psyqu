Template.friend_Demo.helpers({
    friendDemoExists : function(){
        var count = FriendDemo.find().count();
        if(count<1){
            return true
            
        }
        else 
            return false;
    },
    currentDoc2 : function(){
        //console.log(Profile.)
        return FriendDemo.findOne();
    }
});