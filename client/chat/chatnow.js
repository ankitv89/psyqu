Template.chatNow.helpers({
    'user' : function(){
        return Meteor.users.find();
    },

    getName : function(id){
        var data = ReactiveMethod.call('getName',id,function(err,res){
            if(err)
                console.log(err)
            else return res;
        });

        return data;
    },
    'notMe' : function(id){
        if(Meteor.userId() == id)
            return false;
        else
            return true;

    },
    imageFile : function(id){

        return Images.findOne(id);


    },
    'isCurrent': function(id){
        if(Session.get('fromid')==id)
            return true;
        else
            return false;
    },
    'hasUnread' : function(id){
        var data = ReactiveMethod.call('hadUnread',id, function(err,data){
            if(err)
                console.log(err);
            else
                return res
        });
        //  console.log(data);
        return data;
    },
    'messages': function () {


        return Msg.find().fetch();
    },
    // isReady: function () {
    //     return Template.instance().pagination.ready();
    // },
    // 'templatePagination': function () {
    //     return Template.instance().pagination;
    // },
    // 'messages': function () {
    //     return Template.instance().pagination.getPage();
    // },
    // // optional helper used to return a callback that should be executed before changing the page
    // 'clickEvent': function() {
    //     return function(e, templateInstance, clickedPage) {
    //         e.preventDefault();
    //         console.log('Changing page from ', templateInstance.data.pagination.currentPage(), ' to ', clickedPage);
    //     };
    // },
    scrollDown : function(){
        $('#messages_list').scrollTop( $('#messages_list').prop("scrollHeight") );
    },
    'received' : function(id) {
        // Meteor.subscribe('messages',Session.get('fromid'));
        var result = Msg.findOne({_id: id});
        if(result.sentFrom != Meteor.userId())
            return true;
        else
            return false;

    },
    myImage : function(){
        var image = Meteor.user().profile.picture;
        return Images.findOne(image);
    },
    senderImage : function(){
        var image = Meteor.users.findOne({_id:Session.get('fromid')}).profile.picture;
        return Images.findOne(image);
    }

});


Template.chatNow.events({

    "submit #send_message_form" : function (e) {
        e.preventDefault();
        var message = $('#msg_form').val();
        if(message.trim()!='')
        {
            Meteor.call('insertMessage',Session.get('fromid'),message, function(err,res){
                if(err)
                {
                    alert('Message Not Sent');
                }
                else{
                    $('#msg_form').val('');

                }
            });
        }

        //  console.log(message);

    },
    // "click .message_block" : function(){
    //     Meteor.call('markAsRead', Session.get('fromid'));
    //
    //
    // },
    // "click #archive" : function () {
    //     Meteor.call('archiveChat',Session.get('fromid'),Meteor.userId());
    // }
});


Template.chatNow.rendered = function () {
    Tracker.afterFlush(function(){
        Msg.find().observeChanges({

            added: function(){
                //console.log('fired');
                // console.log("scrolltop is " + $('#messages_list').scrollTop());
                var $someItem = $('#messages_list');
                //$(window).scrollTop($someItem.offset().top);
                $('#messages_list').scrollTop( $('#messages_list').prop("scrollHeight") );
                //  window.setInterval(function() {
                //      var elem = document.getElementById('messages_list');
                //      elem.scrollTop = elem.scrollHeight;
                //  }, 1000);
            }
        });
    });
};