Template.user_profile.helpers({
    profileExists : function(){
        var count = Profiles.find().count();
        if(count<1){
            return true
            
        }
        else 
            return false;
    },
    currentDoc : function(){
        //console.log(Profile.)
        return Profiles.findOne();
    }
});