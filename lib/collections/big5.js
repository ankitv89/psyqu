Big5 = new Mongo.Collection("big5");


//this comes up true if userid exist
Big5.allow({
    insert: function(userId, doc){
        return !!userId
    }
});



Big5Schema = (new SimpleSchema({

        extra: {
            label: "...extraverted, enthusiastic",
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
                            {label: "5", value: 5},
                            {label: "6", value: 6},
                            {label: "7", value: 7}

                        ];
                    }
                }
            }
        },
        agree_re: {
            label: "...critical, qurrelsome",
            type: Number,
            optional: false,
            autoform: {
                type: "select-radio-inline",
                options: function () {
                    return [
                        {label: "1", value: -1},
                        {label: "2", value: -2},
                        {label: "3", value: -3},
                        {label: "4", value: -4},
                        {label: "5", value: -5},
                        {label: "6", value: -6},
                        {label: "7", value: -7}
                    ];
                }
            }
        },
        cons: {
            label: "...dependable,self-disciplined",
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
                        {label: "5", value: 5},
                        {label: "6", value: 6},
                        {label: "7", value: 7}
                    ];
                }
            }
        },       
        neuro: {
            label: "...anxious, easily upset",
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
                        {label: "5", value: 5},
                        {label: "6", value: 6},
                        {label: "7", value: 7}
                    ];
                }
            }
        },
        open: {
            label: "...open to new experiences, complex",
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
                        {label: "5", value: 5},
                        {label: "6", value: 6},
                        {label: "7", value: 7}
                    ];
                }
            }
        },
      extra_re: {
            label: "...reserved,quiet",
            type: Number,
            optional: false,
            autoform: {
                type: "select-radio-inline",
                options: function () {
                    return [
                        {label: "1", value: -1},
                        {label: "2", value: -2},
                        {label: "3", value: -3},
                        {label: "4", value: -4},
                        {label: "5", value: -5},
                        {label: "6", value: -6},
                        {label: "7", value: -7}
                    ];
                }
            }
        },
    agree: {
            label: "...sympathetic, warm",
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
                        {label: "5", value: 5},
                        {label: "6", value: 6},
                        {label: "7", value: 7}
                    ];
                }
            }
        },
    cons_re: {
            label: "...disorganized,careless",
            type: Number,
            optional: false,
            autoform: {
                type: "select-radio-inline",
                options: function () {
                    return [
                        {label: "1", value: -1},
                        {label: "2", value: -2},
                        {label: "3", value: -3},
                        {label: "4", value: -4},
                        {label: "5", value: -5},
                        {label: "6", value: -6},
                        {label: "7", value: -7}
                    ];
                }
            }
        },
   neuro_re: {
            label: "...calm,emotionally stable",
            type: Number,
            optional: false,
            autoform: {
                type: "select-radio-inline",
                options: function () {
                    return [
                        {label: "1", value: -1},
                        {label: "2", value: -2},
                        {label: "3", value: -3},
                        {label: "4", value: -4},
                        {label: "5", value: -5},
                        {label: "6", value: -6},
                        {label: "7", value: -7}
                    ];
                }
            }
        },
    open_re: {
            label: "...conventional, uncreative",
            type: Number,
            optional: false,
            autoform: {
                type: "select-radio-inline",
                options: function () {
                    return [
                        {label: "1", value: -1},
                        {label: "2", value: -2},
                        {label: "3", value: -3},
                        {label: "4", value: -4},
                        {label: "5", value: -5},
                        {label: "6", value: -6},
                        {label: "7", value: -7}
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
        agreeableness : {
            type: Number,
            autoform : {
                type: "hidden",
                value : function(){
                    var agree = AutoForm.getFieldValue('agree');
                    var agree_re = AutoForm.getFieldValue('agree_re');
                    return agree+ agree_re;
                }
            }
        },
        conscientious : {
            type: Number,
            autoform : {
                type: "hidden",
                value : function(){
                    var cons = AutoForm.getFieldValue('cons');
                    var cons_re = AutoForm.getFieldValue('cons_re');
                    return cons+ cons_re;
                }
            }
        },
        openess : {
            type: Number,
            autoform : {
                type: "hidden",
                value : function(){
                    var open = AutoForm.getFieldValue('open');
                    var open_re = AutoForm.getFieldValue('open_re');
                    return open+ open_re;
                }
            }
        },
        neuroticism : {
            type: Number,
            autoform : {
                type: "hidden",
                value : function(){
                    var neuro = AutoForm.getFieldValue('neuro');
                    var neuro_re = AutoForm.getFieldValue('neuro_re');
                    return neuro+ neuro_re;
                }
            }
        },
       extraversion : {
            type: Number,
            autoform : {
                type: "hidden",
                value : function(){
                    var extra = AutoForm.getFieldValue('extra');
                    var extra_re = AutoForm.getFieldValue('extra_re');
                    return extra+ extra_re;
                }
            }
        },


    })
)

Big5.attachSchema(Big5Schema);


