
import { Meteor } from 'meteor/meteor';


Meteor.startup(() => {
  // code to run on server at startup

});

Meteor.methods({
		'submitBig5Scale': function (big5) {
			console.log(big5);
        Big5.simpleSchema().clean(big5, {
   		extendAutoValueContext: {
    		isInsert: true,
    		isUpdate: false,
    		isUpsert: false,
    		isFromTrustedCode: false
  		}
		});
		console.log('new BIG5:', big5);
		Big5.insert(big5);

		},

    'submitDiscloseScale': function (disclose) {
      console.log(disclose);
        Disclose.simpleSchema().clean(disclose, {
      extendAutoValueContext: {
        isInsert: true,
        isUpdate: false,
        isUpsert: false,
        isFromTrustedCode: false
      }
    });
    console.log('new DISCLOSE:', disclose);
    Disclose.insert(disclose);

    },

    'submitProfile': function (profile) {
      console.log(profile);
        Profiles.simpleSchema().clean(profile, {
      extendAutoValueContext: {
        isInsert: true,
        isUpdate: false,
        isUpsert: false,
        isFromTrustedCode: false
      }
    });
    console.log('new PROFILE:', profile);
    Profiles.insert(profile);
  },

    updateProfile : function(modifier,documentId){
            Profiles.update({_id:documentId},modifier);
    },
    updateBig5Scale : function (modifier,documentId) {
                Big5.update({_id:documentId},modifier);
    }
});


// clean autoForm schema while autoValue is in use
// Meteor.methods({
//     'submitBig5Scale': function(big5) {
//       Big5Schema.simpleSchema().clean(big5);
//       check(big5, Big5Schema.simpleSchema());
//       Big5Schema.insert(big5);
//     }
//  });

 
// Meteor.subscribe("Big5");

// Meteor.publish ("Big5,function() {                               

//   return Big5.find({user:this.userId}); 
// });

