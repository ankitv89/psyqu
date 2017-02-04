Value = new Mongo.Collection("value");


//this comes up true if userid exist
Value.allow({
    insert: function(userId, doc){
        return !!userId
    }
});



ValueSchema = (new SimpleSchema({

        Value_1: {
            label: "My personal habits",
            type: Number,
            optional: false,
            autoform: {
                afFormGroup: {
                    type: "select-radio-inline",
                    'formgroup-class': 'custom-radio-class',
                    options: function () {
                        return [
                            {label: "0", value: 1},
                            {label: "1", value: 1},
                            {label: "2", value: 2},
                            {label: "3", value: 3},
                            {label: "4", value: 4},
                            {label: "5", value: 5},
                            {label: "6", value: 6},
                            {label: "7", value: 7},
                            {label: "8", value: 8}

                        ];
                    }
                }
            }
        },
        Value_2: {
            label: "Things I have done which I feel guilty about",
            type: Number,
            optional: false,
            autoform: {
                type: "select-radio-inline",
                options: function () {
                    return [
                        {label: "0", value: 1},
                            {label: "1", value: 1},
                            {label: "2", value: 2},
                            {label: "3", value: 3},
                            {label: "4", value: 4},
                            {label: "5", value: 5},
                            {label: "6", value: 6},
                            {label: "7", value: 7},
                            {label: "8", value: 8}
            
                    ];
                }
            }
        },
        Value_3: {
            label: "Things I wouldn't do in public",
            type: Number,
            optional: false,
            autoform: {
                type: "select-radio-inline",
                options: function () {
                    return [
                            {label: "0", value: 1},
                            {label: "1", value: 1},
                            {label: "2", value: 2},
                            {label: "3", value: 3},
                            {label: "4", value: 4},
                            {label: "5", value: 5},
                            {label: "6", value: 6},
                            {label: "7", value: 7},
                            {label: "8", value: 8}
                  
                    ];
                }
            }
        },       
        Value_4: {
            label: "My deepest feelings",
            type: Number,
            optional: false,
            autoform: {
                type: "select-radio-inline",
                options: function () {
                    return [
                            {label: "0", value: 1},
                            {label: "1", value: 1},
                            {label: "2", value: 2},
                            {label: "3", value: 3},
                            {label: "4", value: 4},
                            {label: "5", value: 5},
                            {label: "6", value: 6},
                            {label: "7", value: 7},
                            {label: "8", value: 8}
                     
                    ];
                }
            }
        },
        Value_5: {
            label: "What I like and dislike about myself",
            type: Number,
            optional: false,
            autoform: {
                type: "select-radio-inline",
                options: function () {
                    return [
                            {label: "0", value: 1},
                            {label: "1", value: 1},
                            {label: "2", value: 2},
                            {label: "3", value: 3},
                            {label: "4", value: 4},
                            {label: "5", value: 5},
                            {label: "6", value: 6},
                            {label: "7", value: 7},
                            {label: "8", value: 8}
                     
                    ];
                }
            }
        },
      Value_6: {
            label: "What is important to me in life",
            type: Number,
            optional: false,
            autoform: {
                type: "select-radio-inline",
                options: function () {
                    return [
                            {label: "0", value: 1},
                            {label: "1", value: 1},
                            {label: "2", value: 2},
                            {label: "3", value: 3},
                            {label: "4", value: 4},
                            {label: "5", value: 5},
                            {label: "6", value: 6},
                            {label: "7", value: 7},
                            {label: "8", value: 8}
                       
                    ];
                }
            }
        },
    Value_7: {
            label: "What makes me the person I am",
            type: Number,
            optional: false,
            autoform: {
                type: "select-radio-inline",
                options: function () {
                    return [
                            {label: "0", value: 1},
                            {label: "1", value: 1},
                            {label: "2", value: 2},
                            {label: "3", value: 3},
                            {label: "4", value: 4},
                            {label: "5", value: 5},
                            {label: "6", value: 6},
                            {label: "7", value: 7},
                            {label: "8", value: 8}
                     
                    ];
                }
            }
        },
    Value_8: {
            label: "My worst fears",
            type: Number,
            optional: false,
            autoform: {
                type: "select-radio-inline",
                options: function () {
                    return [
                            {label: "0", value: 1},
                            {label: "1", value: 1},
                            {label: "2", value: 2},
                            {label: "3", value: 3},
                            {label: "4", value: 4},
                            {label: "5", value: 5},
                            {label: "6", value: 6},
                            {label: "7", value: 7},
                            {label: "8", value: 8}
                        
                    ];
                }
            }
        },
   Value_9: {
            label: "Things I have done which I am proud of",
            type: Number,
            optional: false,
            autoform: {
                type: "select-radio-inline",
                options: function () {
                    return [
                            {label: "0", value: 1},
                            {label: "1", value: 1},
                            {label: "2", value: 2},
                            {label: "3", value: 3},
                            {label: "4", value: 4},
                            {label: "5", value: 5},
                            {label: "6", value: 6},
                            {label: "7", value: 7},
                            {label: "8", value: 8}
                     
                    ];
                }
            }
        },
    Value_10: {
            label: "My close relationships with other people",
            type: Number,
            optional: false,
            autoform: {
                type: "select-radio-inline",
                options: function () {
                    return [
                            {label: "0", value: 1},
                            {label: "1", value: 1},
                            {label: "2", value: 2},
                            {label: "3", value: 3},
                            {label: "4", value: 4},
                            {label: "5", value: 5},
                            {label: "6", value: 6},
                            {label: "7", value: 7},
                            {label: "8", value: 8}
                  
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
        Value_total : {
            type: Number,
            autoform : {
                type: "hidden",
                value : function(){
                    var Value_1 = AutoForm.getFieldValue('Value_1');
                    var Value_2 = AutoForm.getFieldValue('Value_2');
                    var Value_3 = AutoForm.getFieldValue('Value_3');
                    var Value_4 = AutoForm.getFieldValue('Value_4');
                    var Value_5 = AutoForm.getFieldValue('Value_5');
                    var Value_6 = AutoForm.getFieldValue('Value_6');
                    var Value_7 = AutoForm.getFieldValue('Value_7');
                    var Value_8 = AutoForm.getFieldValue('Value_8');
                    var Value_9 = AutoForm.getFieldValue('Value_9');
                    var Value_10 = AutoForm.getFieldValue('Value_10');
                    return Value_1+ Value_2+ Value_3+ Value_4+ Value_5
                    + Value_6+ Value_7+ Value_8+ Value_9+ Value_10;
                }
            }
        },
        

    })
)

Value.attachSchema(ValueSchema);


