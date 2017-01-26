Big5 = new Mongo.Collection("big5");


//this comes up true if userid exist
Big5.allow({
    insert: function(userId, doc){
        return !!userId
    }
});



Big5Schema = (new SimpleSchema({

        extra1: {
            label: "...is talkative",
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
        agree1_re: {
            label: "...Tends to find fault with others",
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

        }
        //  cons1: {
        // label: "...Does a thorough job",
        //    type: Number,
        //    optional: false,
        //    autoform: {
        //      type: "select-radio-inline",
        //      options: function () {
        //        return [
        //          {label: "1", value: 1},
        //          {label: "2", value: 2},
        //          {label: "3", value: 3},
        //          {label: "4", value: 4},
        //          {label: "5", value: 5}
        //        ];
        //      }
        //    }
        // },
        //  agree1_re: {
        // label: "...Tends to find fault with others",
        //    type: Number,
        //    optional: false,
        //    autoform: {
        //      type: "select-radio-inline",
        //      options: function () {
        //        return [
        //          {label: "1", value: 1},
        //          {label: "2", value: 2},
        //          {label: "3", value: 3},
        //          {label: "4", value: 4},
        //          {label: "5", value: 5}
        //        ];
        //      }
        //    }
        // },
        //  neuro1: {
        // label: "...Is depressed, blue",
        //    type: Number,
        //    optional: false,
        //    autoform: {
        //      type: "select-radio-inline",
        //      options: function () {
        //        return [
        //          {label: "1", value: 1},
        //          {label: "2", value: 2},
        //          {label: "3", value: 3},
        //          {label: "4", value: 4},
        //          {label: "5", value: 5}
        //        ];
        //      }
        //    }
        // },
        //   open1: {
        // label: "...Is original, comes up with new ideas",
        //    type: Number,
        //    optional: false,
        //    autoform: {
        //      type: "select-radio-inline",
        //      options: function () {
        //        return [
        //          {label: "1", value: 1},
        //          {label: "2", value: 2},
        //          {label: "3", value: 3},
        //          {label: "4", value: 4},
        //          {label: "5", value: 5}
        //        ];
        //      }
        //    }
        // },
        //  agree1_re: {
        // label: "...Tends to find fault with others",
        //    type: Number,
        //    optional: false,
        //    autoform: {
        //      type: "select-radio-inline",
        //      options: function () {
        //        return [
        //          {label: "1", value: 1},
        //          {label: "2", value: 2},
        //          {label: "3", value: 3},
        //          {label: "4", value: 4},
        //          {label: "5", value: 5}
        //        ];
        //      }
        //    }
        // },
        //  extra2_re: {
        // label: "...Is reserved",
        //    type: Number,
        //    optional: false,
        //    autoform: {
        //      type: "select-radio-inline",
        //      options: function () {
        //        return [
        //          {label: "1", value: 1},
        //          {label: "2", value: 2},
        //          {label: "3", value: 3},
        //          {label: "4", value: 4},
        //          {label: "5", value: 5}
        //        ];
        //      }
        //    }
        // },
        //  agree2: {
        // label: "...Is helpful and unselfish with others",
        //    type: Number,
        //    optional: false,
        //    autoform: {
        //      type: "select-radio-inline",
        //      options: function () {
        //        return [
        //          {label: "1", value: 1},
        //          {label: "2", value: 2},
        //          {label: "3", value: 3},
        //          {label: "4", value: 4},
        //          {label: "5", value: 5}
        //        ];
        //      }
        //    }
        // },
        //  cons2_re: {
        // label: "...Can be somewhat careless",
        //    type: Number,
        //    optional: false,
        //    autoform: {
        //      type: "select-radio-inline",
        //      options: function () {
        //        return [
        //          {label: "1", value: 1},
        //          {label: "2", value: 2},
        //          {label: "3", value: 3},
        //          {label: "4", value: 4},
        //          {label: "5", value: 5}
        //        ];
        //      }
        //    }
        // },
        //   neuro2_re: {
        // label: "...Is relaxed, handles stress well",
        //    type: Number,
        //    optional: false,
        //    autoform: {
        //      type: "select-radio-inline",
        //      options: function () {
        //        return [
        //          {label: "1", value: 1},
        //          {label: "2", value: 2},
        //          {label: "3", value: 3},
        //          {label: "4", value: 4},
        //          {label: "5", value: 5}
        //        ];
        //      }
        //    }
        // },
        //  open2: {
        // label: "...Is curious about many different things",
        //    type: Number,
        //    optional: false,
        //    autoform: {
        //      type: "select-radio-inline",
        //      options: function () {
        //        return [
        //          {label: "1", value: 1},
        //          {label: "2", value: 2},
        //          {label: "3", value: 3},
        //          {label: "4", value: 4},
        //          {label: "5", value: 5}
        //        ];
        //      }
        //    }
        // },
        //  extra3: {
        // label: "...Is full of energy",
        //    type: Number,
        //    optional: false,
        //    autoform: {
        //      type: "select-radio-inline",
        //      options: function () {
        //        return [
        //          {label: "1", value: 1},
        //          {label: "2", value: 2},
        //          {label: "3", value: 3},
        //          {label: "4", value: 4},
        //          {label: "5", value: 5}
        //        ];
        //      }
        //    }
        // },
        //  agree3_re: {
        // label: "...Starts quarrels with others",
        //    type: Number,
        //    optional: false,
        //    autoform: {
        //      type: "select-radio-inline",
        //      options: function () {
        //        return [
        //          {label: "1", value: 1},
        //          {label: "2", value: 2},
        //          {label: "3", value: 3},
        //          {label: "4", value: 4},
        //          {label: "5", value: 5}
        //        ];
        //      }
        //    }
        // },
        //  cons3: {
        // label: "...Is a reliable worker",
        //    type: Number,
        //    optional: false,
        //    autoform: {
        //      type: "select-radio-inline",
        //      options: function () {
        //        return [
        //          {label: "1", value: 1},
        //          {label: "2", value: 2},
        //          {label: "3", value: 3},
        //          {label: "4", value: 4},
        //          {label: "5", value: 5}
        //        ];
        //      }
        //    }
        // },
        //  neuro3: {
        // label: "...Can be tense",
        //    type: Number,
        //    optional: false,
        //    autoform: {
        //      type: "select-radio-inline",
        //      options: function () {
        //        return [
        //          {label: "1", value: 1},
        //          {label: "2", value: 2},
        //          {label: "3", value: 3},
        //          {label: "4", value: 4},
        //          {label: "5", value: 5}
        //        ];
        //      }
        //    }
        // },
        //   open4: {
        // label: "...Is ingenious, a deep thinker",
        //    type: Number,
        //    optional: false,
        //    autoform: {
        //      type: "select-radio-inline",
        //      options: function () {
        //        return [
        //          {label: "1", value: 1},
        //          {label: "2", value: 2},
        //          {label: "3", value: 3},
        //          {label: "4", value: 4},
        //          {label: "5", value: 5}
        //        ];
        //      }
        //    }
        // },
        //   extra4: {
        // label: "...Generates a lot of enthusiasm",
        //    type: Number,
        //    optional: false,
        //    autoform: {
        //      type: "select-radio-inline",
        //      options: function () {
        //        return [
        //          {label: "1", value: 1},
        //          {label: "2", value: 2},
        //          {label: "3", value: 3},
        //          {label: "4", value: 4},
        //          {label: "5", value: 5}
        //        ];
        //      }
        //    }
        // },
        //   agree4: {
        // label: "...Has a forgiving nature",
        //    type: Number,
        //    optional: false,
        //    autoform: {
        //      type: "select-radio-inline",
        //      options: function () {
        //        return [
        //          {label: "1", value: 1},
        //          {label: "2", value: 2},
        //          {label: "3", value: 3},
        //          {label: "4", value: 4},
        //          {label: "5", value: 5}
        //        ];
        //      }
        //    }
        // },
        //   cons4_re: {
        // label: "...Tends to be disorganized",
        //    type: Number,
        //    optional: false,
        //    autoform: {
        //      type: "select-radio-inline",
        //      options: function () {
        //        return [
        //          {label: "1", value: 1},
        //          {label: "2", value: 2},
        //          {label: "3", value: 3},
        //          {label: "4", value: 4},
        //          {label: "5", value: 5}
        //        ];
        //      }
        //    }
        // },
        //   neuro3: {
        // label: "...Can be tense",
        //    type: Number,
        //    optional: false,
        //    autoform: {
        //      type: "select-radio-inline",
        //      options: function () {
        //        return [
        //          {label: "1", value: 1},
        //          {label: "2", value: 2},
        //          {label: "3", value: 3},
        //          {label: "4", value: 4},
        //          {label: "5", value: 5}
        //        ];
        //      }
        //    }
        // },

        //    cons4: {
        // label: "...Tends to be disorganized",
        //    type: Number,
        //    optional: false,
        //    autoform: {
        //      type: "select-radio-inline",
        //      options: function () {
        //        return [
        //          {label: "1", value: 1},
        //          {label: "2", value: 2},
        //          {label: "3", value: 3},
        //          {label: "4", value: 4},
        //          {label: "5", value: 5}
        //        ];
        //      }
        //    }
        // },
        //    neuro4: {
        // label: "...Worries a lot",
        //    type: Number,
        //    optional: false,
        //    autoform: {
        //      type: "select-radio-inline",
        //      options: function () {
        //        return [
        //          {label: "1", value: 1},
        //          {label: "2", value: 2},
        //          {label: "3", value: 3},
        //          {label: "4", value: 4},
        //          {label: "5", value: 5}
        //        ];
        //      }
        //    }
        // },

        //     open5: {
        // label: "...Has an active imagination",
        //    type: Number,
        //    optional: false,
        //    autoform: {
        //      type: "select-radio-inline",
        //      options: function () {
        //        return [
        //          {label: "1", value: 1},
        //          {label: "2", value: 2},
        //          {label: "3", value: 3},
        //          {label: "4", value: 4},
        //          {label: "5", value: 5}
        //        ];
        //      }
        //    }
        // },
        //    extra5_re: {
        // label: "...Tends to be quiet",
        //    type: Number,
        //    optional: false,
        //    autoform: {
        //      type: "select-radio-inline",
        //      options: function () {
        //        return [
        //          {label: "1", value: 1},
        //          {label: "2", value: 2},
        //          {label: "3", value: 3},
        //          {label: "4", value: 4},
        //          {label: "5", value: 5}
        //        ];
        //      }
        //    }
        // },
        //    agree5: {
        // label: "...is generally trusting",
        //    type: Number,
        //    optional: false,
        //    autoform: {
        //      type: "select-radio-inline",
        //      options: function () {
        //        return [
        //          {label: "1", value: 1},
        //          {label: "2", value: 2},
        //          {label: "3", value: 3},
        //          {label: "4", value: 4},
        //          {label: "5", value: 5}
        //        ];
        //      }
        //    }
        // },
        //    cons5_re: {
        // label: "...Worries a lot",
        //    type: Number,
        //    optional: false,
        //    autoform: {
        //      type: "select-radio-inline",
        //      options: function () {
        //        return [
        //          {label: "1", value: 1},
        //          {label: "2", value: 2},
        //          {label: "3", value: 3},
        //          {label: "4", value: 4},
        //          {label: "5", value: 5}
        //        ];
        //      }
        //    }
        // },
        //   neuro5_re: {
        // label: "...Is emotionally stable, not easily upset",
        //    type: Number,
        //    optional: false,
        //    autoform: {
        //      type: "select-radio-inline",
        //      options: function () {
        //        return [
        //          {label: "1", value: 1},
        //          {label: "2", value: 2},
        //          {label: "3", value: 3},
        //          {label: "4", value: 4},
        //          {label: "5", value: 5}
        //        ];
        //      }
        //    }
        // },

        //   open6: {
        // label: "...Is inventive",
        //    type: Number,
        //    optional: false,
        //    autoform: {
        //      type: "select-radio-inline",
        //      options: function () {
        //        return [
        //          {label: "1", value: 1},
        //          {label: "2", value: 2},
        //          {label: "3", value: 3},
        //          {label: "4", value: 4},
        //          {label: "5", value: 5}
        //        ];
        //      }
        //    }
        // },
        //    extra6: {
        // label: "...Has an assertive personality",
        //    type: Number,
        //    optional: false,
        //    autoform: {
        //      type: "select-radio-inline",
        //      options: function () {
        //        return [
        //          {label: "1", value: 1},
        //          {label: "2", value: 2},
        //          {label: "3", value: 3},
        //          {label: "4", value: 4},
        //          {label: "5", value: 5}
        //        ];
        //      }
        //    }
        // },
        //    agree6_re: {
        // label: "...Can be cold and aloof",
        //    type: Number,
        //    optional: false,
        //    autoform: {
        //      type: "select-radio-inline",
        //      options: function () {
        //        return [
        //          {label: "1", value: 1},
        //          {label: "2", value: 2},
        //          {label: "3", value: 3},
        //          {label: "4", value: 4},
        //          {label: "5", value: 5}
        //        ];
        //      }
        //    }
        // },
        //    cons6: {
        // label: "...Perseveres until the task is finished",
        //    type: Number,
        //    optional: false,
        //    autoform: {
        //      type: "select-radio-inline",
        //      options: function () {
        //        return [
        //          {label: "1", value: 1},
        //          {label: "2", value: 2},
        //          {label: "3", value: 3},
        //          {label: "4", value: 4},
        //          {label: "5", value: 5}
        //        ];
        //      }
        //    }
        // },
        //    neuro6: {
        // label: "...Can be moody",
        //    type: Number,
        //    optional: false,
        //    autoform: {
        //      type: "select-radio-inline",
        //      options: function () {
        //        return [
        //          {label: "1", value: 1},
        //          {label: "2", value: 2},
        //          {label: "3", value: 3},
        //          {label: "4", value: 4},
        //          {label: "5", value: 5}
        //        ];
        //      }
        //    }
        // },
        //   open7: {
        // label: "...Values artistic, aesthetic experiences",
        //    type: Number,
        //    optional: false,
        //    autoform: {
        //      type: "select-radio-inline",
        //      options: function () {
        //        return [
        //          {label: "1", value: 1},
        //          {label: "2", value: 2},
        //          {label: "3", value: 3},
        //          {label: "4", value: 4},
        //          {label: "5", value: 5}
        //        ];
        //      }
        //    }
        // },
        //    extra7_re: {
        // label: "...Is sometimes shy, inhibited",
        //    type: Number,
        //    optional: false,
        //    autoform: {
        //      type: "select-radio-inline",
        //      options: function () {
        //        return [
        //          {label: "1", value: 1},
        //          {label: "2", value: 2},
        //          {label: "3", value: 3},
        //          {label: "4", value: 4},
        //          {label: "5", value: 5}
        //        ];
        //      }
        //    }
        // },

        //    agree7: {
        // label: "...Is considerate and kind to almost everyone",
        //    type: Number,
        //    optional: false,
        //    autoform: {
        //      type: "select-radio-inline",
        //      options: function () {
        //        return [
        //          {label: "1", value: 1},
        //          {label: "2", value: 2},
        //          {label: "3", value: 3},
        //          {label: "4", value: 4},
        //          {label: "5", value: 5}
        //        ];
        //      }
        //    }
        // },
        //    cons7: {
        // label: "...Does things efficiently",
        //    type: Number,
        //    optional: false,
        //    autoform: {
        //      type: "select-radio-inline",
        //      options: function () {
        //        return [
        //          {label: "1", value: 1},
        //          {label: "2", value: 2},
        //          {label: "3", value: 3},
        //          {label: "4", value: 4},
        //          {label: "5", value: 5}
        //        ];
        //      }
        //    }
        // },
        //    neuro7_re: {
        // label: "...Remains calm in tense situations",
        //    type: Number,
        //    optional: false,
        //    autoform: {
        //      type: "select-radio-inline",
        //      options: function () {
        //        return [
        //          {label: "1", value: 1},
        //          {label: "2", value: 2},
        //          {label: "3", value: 3},
        //          {label: "4", value: 4},
        //          {label: "5", value: 5}
        //        ];
        //      }
        //    }
        // },
        //    open8_re: {
        // label: "...Prefers work that is routine",
        //    type: Number,
        //    optional: false,
        //    autoform: {
        //      type: "select-radio-inline",
        //      options: function () {
        //        return [
        //          {label: "1", value: 1},
        //          {label: "2", value: 2},
        //          {label: "3", value: 3},
        //          {label: "4", value: 4},
        //          {label: "5", value: 5}
        //        ];
        //      }
        //    }
        // },
        //    open8_re: {
        // label: "...Prefers work that is routine",
        //    type: Number,
        //    optional: false,
        //    autoform: {
        //      type: "select-radio-inline",
        //      options: function () {
        //        return [
        //          {label: "1", value: 1},
        //          {label: "2", value: 2},
        //          {label: "3", value: 3},
        //          {label: "4", value: 4},
        //          {label: "5", value: 5}
        //        ];
        //      }
        //    }
        // },
        //    extra8: {
        // label: "...Is outgoing, sociable",
        //    type: Number,
        //    optional: false,
        //    autoform: {
        //      type: "select-radio-inline",
        //      options: function () {
        //        return [
        //          {label: "1", value: 1},
        //          {label: "2", value: 2},
        //          {label: "3", value: 3},
        //          {label: "4", value: 4},
        //          {label: "5", value: 5}
        //        ];
        //      }
        //    }
        // },
        //    agree8_re: {
        // label: "...Is sometimes rude to others",
        //    type: Number,
        //    optional: false,
        //    autoform: {
        //      type: "select-radio-inline",
        //      options: function () {
        //        return [
        //          {label: "1", value: 1},
        //          {label: "2", value: 2},
        //          {label: "3", value: 3},
        //          {label: "4", value: 4},
        //          {label: "5", value: 5}
        //        ];
        //      }
        //    }
        // },
        //    cons8: {
        // label: "...Makes plans and follows through with them",
        //    type: Number,
        //    optional: false,
        //    autoform: {
        //      type: "select-radio-inline",
        //      options: function () {
        //        return [
        //          {label: "1", value: 1},
        //          {label: "2", value: 2},
        //          {label: "3", value: 3},
        //          {label: "4", value: 4},
        //          {label: "5", value: 5}
        //        ];
        //      }
        //    }
        // },
        // cons8: {
        // label: "...Makes plans and follows through with them",
        //    type: Number,
        //    optional: false,
        //    autoform: {
        //      type: "select-radio-inline",
        //      options: function () {
        //        return [
        //          {label: "1", value: 1},
        //          {label: "2", value: 2},
        //          {label: "3", value: 3},
        //          {label: "4", value: 4},
        //          {label: "5", value: 5}
        //        ];
        //      }
        //    }
        // },
        //  neuro8: {
        // label: "...Gets nervous easily",
        //    type: Number,
        //    optional: false,
        //    autoform: {
        //      type: "select-radio-inline",
        //      options: function () {
        //        return [
        //          {label: "1", value: 1},
        //          {label: "2", value: 2},
        //          {label: "3", value: 3},
        //          {label: "4", value: 4},
        //          {label: "5", value: 5}
        //        ];
        //      }
        //    }
        // },
        //  open9: {
        // label: "...Makes plans and follows through with them",
        //    type: Number,
        //    optional: false,
        //    autoform: {
        //      type: "select-radio-inline",
        //      options: function () {
        //        return [
        //          {label: "1", value: 1},
        //          {label: "2", value: 2},
        //          {label: "3", value: 3},
        //          {label: "4", value: 4},
        //          {label: "5", value: 5}
        //        ];
        //      }
        //    }
        // },
        //  cons8: {
        // label: "...Likes to reflect, play with ideas",
        //    type: Number,
        //    optional: false,
        //    autoform: {
        //      type: "select-radio-inline",
        //      options: function () {
        //        return [
        //          {label: "1", value: 1},
        //          {label: "2", value: 2},
        //          {label: "3", value: 3},
        //          {label: "4", value: 4},
        //          {label: "5", value: 5}
        //        ];
        //      }
        //    }
        // },
        //  open10_re: {
        // label: "...Has few artistic interests",
        //    type: Number,
        //    optional: false,
        //    autoform: {
        //      type: "select-radio-inline",
        //      options: function () {
        //        return [
        //          {label: "1", value: 1},
        //          {label: "2", value: 2},
        //          {label: "3", value: 3},
        //          {label: "4", value: 4},
        //          {label: "5", value: 5}
        //        ];
        //      }
        //    }
        // },
        // agree9: {
        // label: "...Likes to cooperate with others",
        //    type: Number,
        //    optional: false,
        //    autoform: {
        //      type: "select-radio-inline",
        //      options: function () {
        //        return [
        //          {label: "1", value: 1},
        //          {label: "2", value: 2},
        //          {label: "3", value: 3},
        //          {label: "4", value: 4},
        //          {label: "5", value: 5}
        //        ];
        //      }
        //    }
        // },
        // cons9_re: {
        // label: "...Is easily distracted",
        //    type: Number,
        //    optional: false,
        //    autoform: {
        //      type: "select-radio-inline",
        //      options: function () {
        //        return [
        //          {label: "1", value: 1},
        //          {label: "2", value: 2},
        //          {label: "3", value: 3},
        //          {label: "4", value: 4},
        //          {label: "5", value: 5}
        //        ];
        //      }
        //    }
        // },
        // open11: {
        // label: "...Is sophisticated in art, music, or literature",
        //    type: Number,
        //    optional: false,
        //    autoform: {
        //      type: "select-radio-inline",
        //      options: function () {
        //        return [
        //          {label: "1", value: 1},
        //          {label: "2", value: 2},
        //          {label: "3", value: 3},
        //          {label: "4", value: 4},
        //          {label: "5", value: 5}
        //        ];
        //      }
        //    }
        // },


    })
)

Big5.attachSchema(Big5Schema);


