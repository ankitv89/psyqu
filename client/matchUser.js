Template.matchUser.helpers({
    user : function(){
        return Profiles.find().fetch();
    },
    genderName : function (id) {
        switch (id){
            case 1 : return 'Female'
                        break;
            case 2: return 'Male'
                break;
            case 3 : return 'Non-binary'
                break;
        }
    }
});


Template.matchUser.onRendered(function(){
   var count = Profiles.find().count();
    if(count<1)
        Router.go('/');
});
