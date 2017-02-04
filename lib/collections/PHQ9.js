Phq9 = new Mongo.Collection("phq9");


//this comes up true if userid exist
Phq9.allow({
    insert: function(userId, doc){
        return !!userId
    }
});



Phq9Schema = (new SimpleSchema({

        Phq9_1: {
            label: "Little interest or pleasure in doing things?",
            type: Number,
            optional: false,
            autoform: {
                afFormGroup: {
                    type: "select-radio-inline",
                    'formgroup-class': 'custom-radio-class',
                    options: function () {
                        return [
                            {label: "1", value: 0},
                            {label: "2", value: 1},
                            {label: "3", value: 2},
                            {label: "4", value: 3},
            

                        ];
                    }
                }
            }
        },
        Phq9_2: {
            label: "Feeling down, depressed, or hopeless?",
            type: Number,
            optional: false,
            autoform: {
                type: "select-radio-inline",
                options: function () {
                    return [
                         {label: "1", value: 0},
                            {label: "2", value: 1},
                            {label: "3", value: 2},
                            {label: "4", value: 3},
               
            
                    ];
                }
            }
        },
        Phq9_3: {
            label: "Trouble falling or staying asleep, or sleeping too much?",
            type: Number,
            optional: false,
            autoform: {
                type: "select-radio-inline",
                options: function () {
                    return [
                            {label: "1", value: 0},
                            {label: "2", value: 1},
                            {label: "3", value: 2},
                            {label: "4", value: 3},
                     
                  
                    ];
                }
            }
        },       
        Phq9_4: {
            label: "Feeling tired or having little energy?",
            type: Number,
            optional: false,
            autoform: {
                type: "select-radio-inline",
                options: function () {
                    return [
                            {label: "1", value: 0},
                            {label: "2", value: 1},
                            {label: "3", value: 2},
                            {label: "4", value: 3},
                     
                     
                    ];
                }
            }
        },
        Phq9_5: {
            label: "Poor appetite or overeating?",
            type: Number,
            optional: false,
            autoform: {
                type: "select-radio-inline",
                options: function () {
                    return [
                            {label: "1", value: 0},
                            {label: "2", value: 1},
                            {label: "3", value: 2},
                            {label: "4", value: 3},
                  
                     
                    ];
                }
            }
        },
      Phq9_6: {
            label: "Feeling bad about yourself - or that you are a failure or have let yourself or your family down?",
            type: Number,
            optional: false,
            autoform: {
                type: "select-radio-inline",
                options: function () {
                    return [
                            {label: "1", value: 0},
                            {label: "2", value: 1},
                            {label: "3", value: 2},
                            {label: "4", value: 3},
                    
                    ];
                }
            }
        },
    Phq9_7: {
            label: "Trouble concentrating on things, such as reading the newspaper or watching television?",
            type: Number,
            optional: false,
            autoform: {
                type: "select-radio-inline",
                options: function () {
                    return [
                            {label: "1", value: 0},
                            {label: "2", value: 1},
                            {label: "3", value: 2},
                            {label: "4", value: 3},
                                      
                    ];
                }
            }
        },
    Phq9_8: {
            label: "Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual?",
            type: Number,
            optional: false,
            autoform: {
                type: "select-radio-inline",
                options: function () {
                    return [
                            {label: "1", value: 0},
                            {label: "2", value: 1},
                            {label: "3", value: 2},
                            {label: "4", value: 3},
                      
                        
                    ];
                }
            }
        },
   Phq9_9: {
            label: "Things I have done which I am proud of",
            type: Number,
            optional: false,
            autoform: {
                type: "select-radio-inline",
                options: function () {
                    return [
                            {label: "1", value: 0},
                            {label: "2", value: 1},
                            {label: "3", value: 2},
                            {label: "4", value: 3},
                   
                     
                    ];
                }
            }
        },
    Phq9_10: {
            label: "Thoughts that you would be better off dead, or of hurting yourself in some way?",
            type: Number,
            optional: false,
            autoform: {
                type: "select-radio-inline",
                options: function () {
                    return [
                            {label: "1", value: 0},
                            {label: "2", value: 1},
                            {label: "3", value: 2},
                            {label: "4", value: 3},
            
                  
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
        Phq9_total : {
            type: Number,
            autoform : {
                type: "hidden",
                value : function(){
                    var Phq9_1 = AutoForm.getFieldValue('Phq9_1');
                    var Phq9_2 = AutoForm.getFieldValue('Phq9_2');
                    var Phq9_3 = AutoForm.getFieldValue('Phq9_3');
                    var Phq9_4 = AutoForm.getFieldValue('Phq9_4');
                    var Phq9_5 = AutoForm.getFieldValue('Phq9_5');
                    var Phq9_6 = AutoForm.getFieldValue('Phq9_6');
                    var Phq9_7 = AutoForm.getFieldValue('Phq9_7');
                    var Phq9_8 = AutoForm.getFieldValue('Phq9_8');
                    var Phq9_9 = AutoForm.getFieldValue('Phq9_9');
                    var Phq9_10 = AutoForm.getFieldValue('Phq9_10');
                    return Phq9_1+ Phq9_2+ Phq9_3+ Phq9_4+ Phq9_5
                    + Phq9_6+ Phq9_7+ Phq9_8+ Phq9_9+ Phq9_10;
                }
            }
        },
        

    })
)

Phq9.attachSchema(Phq9Schema);


