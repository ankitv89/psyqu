FriendDemo = new Mongo.Collection("friendDemo");


//this comes up true if userid exist
FriendDemo.allow({
    insert: function(userId, doc){
        return !!userId
    }
});



FriendDemoSchema = (new SimpleSchema({

    FriendOp: {
      type: Number,
      label: "Are you looking for a cross-racial friend?",
      allowedValues: [
         1,
         2
         
      ],
      optional: false,
     
      autoform: {
         options: [
            {
               label: "Yes",
               value: 1
            },
            {
               label: "No",
               value: 2
            },
          
         ]
      }
   },

  location: {
        type: String,

        autoform:{
            type: 'map',
            afFieldInput:{
                    geolocation: true,
                    searchBox: true,
                    autolocate: true
                  }
        }
      },

   
      author:{
            type:String,
            label:"Author",
            autoValue: function(){
                return Meteor.userId();

            },
            autoform:{
                type: "hidden"
            }

        },

        createdAt:{
            type:Date,
            label:"CreatedAt",
            autoValue: function(){
                return new Date()
            },
            autoform:{
                type: "hidden"
            }
    }
}));

FriendDemo.attachSchema(FriendDemoSchema);
