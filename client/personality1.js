//this comes up true if userid exist

Template.personality.helpers({
  big5s: function(){
    return Big5.find()
  },
  formFilled : function(){
    var count = Big5.find().count();
    if(count<1){
      return false
    }
    else
        return true;
  },
  allowedToUpdate : function(){
    var date = moment(Big5.findOne().createdAt);
    var today = moment(new Date());
    var diff = date.diff(today, 'days');
    if(diff>90){
      return true
    }
    else 
        return false;
    
  },
  daysLeft : function(){
    var date = moment(Big5.findOne().createdAt);
    var today = moment(new Date());
    var diff = date.diff(today, 'days');
    return 90-diff;
    
  }
});

Template.yourScore.helpers({
  agreeableness : function(){
    var data = Big5.findOne({author: Meteor.userId()});
    var agreeableness = data.agreeableness;
    return agreeableness;
  },
    conscientious: function(){
    var data = Big5.findOne({author: Meteor.userId()});
    var conscientious = data.conscientious;
    return conscientious;
  },

    openess : function(){
    var data = Big5.findOne({author: Meteor.userId()});
    var openess = data.openess;
    return openess;
  },

    neuroticism : function(){
    var data = Big5.findOne({author: Meteor.userId()});
    var neuroticism = data.neuroticism;
    return neuroticism;
  },
    extraversion : function(){
    var data = Big5.findOne({author: Meteor.userId()});
    var extraversion = data.extraversion;
    return extraversion;
  },
});












