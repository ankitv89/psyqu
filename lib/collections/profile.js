Profiles = new Mongo.Collection("profile");


//this comes up true if userid exist
Profiles.allow({
    insert: function(userId, doc){
        return !!userId
    }
});



ProfileSchema = (new SimpleSchema({

  Name: {
      type: String
   },

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
      optional: false,
     
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
               value: 3
            },
         ]
      }
   },

    Degree: {
      type: Number,
      label: "What is your highest degree?",
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
               label: "High school degree",
               value: 1
            },
            {
               label: "Associate Degree",
               value: 2
            },
            {
               label: "Bachelor's degree",
               value: 3
            },
            {
               label: "Master's degree",
               value: 4
            },
            {
               label: "Doctoral Degree",
               value: 5
            },
         ]
      }
   },

  Hobbies: {
      type: String,
      label: "Hobbies: use ',' to separate each hobby"

   },

  country: {
      type: String,
      label: "Where are you from?"    

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

Profiles.attachSchema(ProfileSchema);
