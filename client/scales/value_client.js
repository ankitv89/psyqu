//this comes up true if userid exist

Template.Value.helpers({
  values: function(){
    return Value.find()
  },

  formFilled : function(){
    var count = Value.find().count();
    if(count<1){
      return false
    }
    else
        return true;
  },
  allowedToUpdate : function(){
    var date = moment (Value.findOne().createdAt);
    var today = moment(new Date());
    var diff = date.diff(today, 'days');
    if(diff>90){
      return true
    }
    else 
        return false;
    
  },
  daysLeft : function(){
    var date = moment (Value.findOne().createdAt);
    var today = moment(new Date());
    var diff = date.diff(today, 'days');
    return 90-diff;
    
  }
});

Template.yourScore_Value.helpers({
  Value_total : function(){
    var data = Value.findOne({author: Meteor.userId()});
    var Value_total = data.Value_total;
    return Value_total;
  },

});












