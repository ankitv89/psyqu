//this comes up true if userid exist

Template.selfDisclosure.helpers({
  discloses: function(){
    return Disclose.find()
  },

  formFilled : function(){
    var count = Disclose.find().count();
    if(count<1){
      return false
    }
    else
        return true;
  },
  allowedToUpdate : function(){
    var date = moment (Disclose.findOne().createdAt);
    var today = moment(new Date());
    var diff = date.diff(today, 'days');
    if(diff>90){
      return true
    }
    else 
        return false;
    
  },
  daysLeft : function(){
    var date = moment (Disclose.findOne().createdAt);
    var today = moment(new Date());
    var diff = date.diff(today, 'days');
    return 90-diff;
    
  }
});

Template.yourScore_disclose.helpers({
  disclose_total : function(){
    var data = Disclose.findOne({author: Meteor.userId()});
    var disclose_total = data.disclose_total;
    return disclose_total;
  },

});












