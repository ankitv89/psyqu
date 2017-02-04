
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
    'submitValueScale': function (value) {
      console.log(value);
        Value.simpleSchema().clean(value, {
      extendAutoValueContext: {
        isInsert: true,
        isUpdate: false,
        isUpsert: false,
        isFromTrustedCode: false
      }
    });
    console.log('new VALUE:', value);
    Value.insert(value);

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
    },
    updateDiscloseScale : function (modifier,documentId) {
                Disclose.update({_id:documentId},modifier);
    },
    updateValueScale : function (modifier,documentId) {
                Value.update({_id:documentId},modifier);
    }
});



