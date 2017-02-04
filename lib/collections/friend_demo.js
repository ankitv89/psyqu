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
  Sport: {
      type: Number,
      label: "How often do you go to the gym?",
      allowedValues: [
         1,
         2,
         3,
         4,
         5
         
      ],
      optional: false,
     
      autoform: {
         options: [
            {
               label: "Everyday",
               value: 1
            },
            {
               label: "At least twice a week",
               value: 2
            },
             {
               label: "Once a week",
               value: 3
            },
             {
               label: "Once or Twice a month",
               value: 4
            },
             {
               label: "Never",
               value: 5
            },
          
         ]
      }
   },

  location: {
        type: String,
        optional: false,

        autoform:{
            type: 'map',
            afFieldInput:{
                    geolocation: false,
                    searchBox: false,
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
