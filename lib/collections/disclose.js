Disclose = new Mongo.Collection("disclose");


//this comes up true if userid exist
Disclose.allow({
    insert: function(userId, doc){
        return !!userId
    }
});



DiscloseSchema = (new SimpleSchema({

        disclose_1: {
            label: "My personal habits",
            type: Number,
            optional: false,
            autoform: {
                afFormGroup: {
                    type: "select-radio-inline",
                    'formgroup-class': 'custom-radio-class',
                    options: function () {
                        return [
                            {label: "1", value: 1},
                            {label: "2", value: 2},
                            {label: "3", value: 3},
                            {label: "4", value: 4},
                            {label: "5", value: 5}

                        ];
                    }
                }
            }
        },
        disclose_2: {
            label: "Things I have done which I feel guilty about",
            type: Number,
            optional: false,
            autoform: {
                type: "select-radio-inline",
                options: function () {
                    return [
                        {label: "1", value: 1},
                        {label: "2", value: 2},
                        {label: "3", value: 3},
                        {label: "4", value: 4},
                        {label: "5", value: 5}
            
                    ];
                }
            }
        },
        disclose_3: {
            label: "Things I wouldn't do in public",
            type: Number,
            optional: false,
            autoform: {
                type: "select-radio-inline",
                options: function () {
                    return [
                        {label: "1", value: 1},
                        {label: "2", value: 2},
                        {label: "3", value: 3},
                        {label: "4", value: 4},
                        {label: "5", value: 5}
                  
                    ];
                }
            }
        },       
        disclose_4: {
            label: "My deepest feelings",
            type: Number,
            optional: false,
            autoform: {
                type: "select-radio-inline",
                options: function () {
                    return [
                        {label: "1", value: 1},
                        {label: "2", value: 2},
                        {label: "3", value: 3},
                        {label: "4", value: 4},
                        {label: "5", value: 5}
                     
                    ];
                }
            }
        },
        disclose_5: {
            label: "What I like and dislike about myself",
            type: Number,
            optional: false,
            autoform: {
                type: "select-radio-inline",
                options: function () {
                    return [
                        {label: "1", value: 1},
                        {label: "2", value: 2},
                        {label: "3", value: 3},
                        {label: "4", value: 4},
                        {label: "5", value: 5}
                     
                    ];
                }
            }
        },
      disclose_6: {
            label: "What is important to me in life",
            type: Number,
            optional: false,
            autoform: {
                type: "select-radio-inline",
                options: function () {
                    return [
                        {label: "1", value: 1},
                        {label: "2", value: 2},
                        {label: "3", value: 3},
                        {label: "4", value: 4},
                        {label: "5", value: 5}
                       
                    ];
                }
            }
        },
    disclose_7: {
            label: "What makes me the person I am",
            type: Number,
            optional: false,
            autoform: {
                type: "select-radio-inline",
                options: function () {
                    return [
                        {label: "1", value: 1},
                        {label: "2", value: 2},
                        {label: "3", value: 3},
                        {label: "4", value: 4},
                        {label: "5", value: 5}
                     
                    ];
                }
            }
        },
    disclose_8: {
            label: "My worst fears",
            type: Number,
            optional: false,
            autoform: {
                type: "select-radio-inline",
                options: function () {
                    return [
                        {label: "1", value: 1},
                        {label: "2", value: 2},
                        {label: "3", value: 3},
                        {label: "4", value: 4},
                        {label: "5", value: 5}
                        
                    ];
                }
            }
        },
   disclose_9: {
            label: "Things I have done which I am proud of",
            type: Number,
            optional: false,
            autoform: {
                type: "select-radio-inline",
                options: function () {
                    return [
                        {label: "1", value: 1},
                        {label: "2", value: 2},
                        {label: "3", value: 3},
                        {label: "4", value: 4},
                        {label: "5", value: 5}
                     
                    ];
                }
            }
        },
    disclose_10: {
            label: "My close relationships with other people",
            type: Number,
            optional: false,
            autoform: {
                type: "select-radio-inline",
                options: function () {
                    return [
                        {label: "1", value: 1},
                        {label: "2", value: 2},
                        {label: "3", value: 3},
                        {label: "4", value: 4},
                        {label: "5", value: 5}
                  
                    ];
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

        },
        disclose_total : {
            type: Number,
            autoform : {
                type: "hidden",
                value : function(){
                    var disclose_1 = AutoForm.getFieldValue('disclose_1');
                    var disclose_2 = AutoForm.getFieldValue('disclose_2');
                    var disclose_3 = AutoForm.getFieldValue('disclose_3');
                    var disclose_4 = AutoForm.getFieldValue('disclose_4');
                    var disclose_5 = AutoForm.getFieldValue('disclose_5');
                    var disclose_6 = AutoForm.getFieldValue('disclose_6');
                    var disclose_7 = AutoForm.getFieldValue('disclose_7');
                    var disclose_8 = AutoForm.getFieldValue('disclose_8');
                    var disclose_9 = AutoForm.getFieldValue('disclose_9');
                    var disclose_10 = AutoForm.getFieldValue('disclose_10');
                    return disclose_1+ disclose_2+ disclose_3+ disclose_4+ disclose_5
                    + disclose_6+ disclose_7+ disclose_8+ disclose_9+ disclose_10;
                }
            }
        },
        

    })
)

Disclose.attachSchema(DiscloseSchema);


