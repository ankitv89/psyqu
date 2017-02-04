//this comes up true if userid exist

Template.Phq9.helpers({
  Phq9s: function(){
    return Phq9.find()
  },

  formFilled : function(){
    var count = Phq9.find().count();
    if(count<1){
      return false
    }
    else
        return true;
  },
  allowedToUpdate : function(){
    var date = moment (Phq9.findOne().createdAt);
    var today = moment(new Date());
    var diff = date.diff(today, 'days');
    if(diff>90){
      return true
    }
    else 
        return false;
    
  },
  daysLeft : function(){
    var date = moment (Phq9.findOne().createdAt);
    var today = moment(new Date());
    var diff = date.diff(today, 'days');
    return 90-diff;
    
  }
});

Template.yourScore_Phq9.helpers({
  Phq9_total : function(){
    var data = Phq9.findOne({author: Meteor.userId()});
    var Phq9_total = data.Phq9_total;
    return Phq9_total;
  },

});
