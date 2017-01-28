Profile = new Mongo.Collection("profile");


//this comes up true if userid exist
Profile.allow({
    insert: function(userId, doc){
        return !!userId
    }
});



ProfileSchema = (new SimpleSchema({

   Age: {
      type: Number,
      min: 1,
      max: 100
   },

    Gender: {
      type: Number,
      allowedValues: [
         1,
         2,
         3
      ],
      optional: true,
     
      autoform: {
         options: [
            {
               label: "Female",
               value: 1
            },
            {
               label: "Male",
               value: 2
            },
            {
               label: "Non-binary",
               value: 2
            },
         ]
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

Profile.attachSchema(ProfileSchema);