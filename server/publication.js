Meteor.publish('myBig5',function(){
     return Big5.find({author:this.userId});

 });

Meteor.publish('myProfile',function(){
     return Profiles.find({author:this.userId});
     
 });

Meteor.publish('myDisclose',function(){
     return Disclose.find({author:this.userId});

 });

Meteor.publish('myFriendDemo',function(){
     return FriendDemo.find({author:this.userId});

 });

Meteor.publish('myValue',function(){
     return Value.find({author:this.userId});

 });

Meteor.publish('myPhq9',function(){
     return Phq9.find({author:this.userId});

 });




Meteor.publish('matchedUsers',function(){
    var data = Big5.findOne({author: this.userId});
    var myscore = data.extraversion;
    var match = Big5.find({$and : [{extraversion: {$gt : myscore-1}},{extraversion: {$lt : myscore+1}},{author :{$ne: this.user}}]}).fetch();
    var userId = this.userId;
    var profile_data=[];
    _.each(match,function(data){
        if(data.author!= userId){
            profile_data.push(data.author);
        }
    });
    console.log(profile_data);
// //return user profile
    var P = Profiles.find({author:{$in: profile_data}});

    return P;


});

//Messages between two users
Meteor.publish('messages', function (id) {
        check(id, String);
        return Msg.find({$and : [{sentFrom: {$in: [id, this.userId]}},{sentTo : {$in : [id , this.userId]}},{archive : {$exists: true,$not :{$elemMatch: { $eq:this.userId}}}}, {status : {$in:[1,0]}}]});


    }



    //
);



