Meteor.subscribe("Messages");

Template.messages.helpers({
    messages: function() {
        return Messages.find({}, {
            sort: {
                time: 1
            }
        });
    }
});



Template.input.events = {
    'keypress input#chat_input': function(event) {
        if (event.which == 13) {
            var name;
            if (Meteor.user().profile.name)
                name = Meteor.user().profile.name;
            else if (Meteor.user())
                name = Meteor.user().emails[0].address;
            else
                name = 'Гость';
            var chat_input = document.getElementById('chat_input');
            if (chat_input.value != '') {
                Messages.insert({
                    name: name,
                    message: chat_input.value,
                    time: Date.now(),
                });

                document.getElementById('chat_input').value = '';
                chat_input.value = '';
            }

            var elem = document.getElementById('messages_block');

            if ((elem.scrollTop + elem.offsetHeight) >= elem.scrollHeight - 50) {
                elem.scrollTop = elem.scrollHeight;
                $('div#down').hide(100);
            }
        }
    },
    'scroll #messages_block': function(event) {
        if ((elem.scrollTop + elem.offsetHeight) <= elem.scrollHeight - 50) {
            $('div#down').show(100);
            $('div#down').click(function() {
            	var elem = document.getElementById;
                $('messages_block').scrollTop = $('messages_block').scrollHeight;
            });
        } else {
            $('div#down').hide(100);
        }
    }
}

window.setInterval(function() {
    var elem = document.getElementById('messages_block');
    if (!elem.matches(':hover')) {
        elem.scrollTop = elem.scrollHeight;
    }
}, 30000);
