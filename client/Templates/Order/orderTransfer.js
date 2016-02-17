Meteor.subscribe("Transfer_Orders");

let week_arr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let pax_ow = $('input[data-schema-key="pax_one_way"]');




Template.orderTransfer.helpers({
    _provider: function() {
        if (Session.get('transfer')) {
            provider_id = Transfers.findOne({
                _id: Session.get('transfer')
            }).provider;
            return Providers.findOne({
                _id: provider_id
            }).name;
        };
    },
    _service: function() {
        if (Session.get('transfer')) {
            service_id = Transfers.findOne({
                _id: Session.get('transfer')
            }).service;
            return Services.findOne({
                _id: service_id
            }).name;
        };
    },
    _district_from: function() {
        if (Session.get('transfer')) {
            from_id = Transfers.findOne({
                _id: Session.get('transfer')
            }).direction.from_district;
            return Districts.findOne({
                _id: from_id
            }).name;
        };
    },
    _district_to: function() {
        if (Session.get('transfer')) {
            to_id = Transfers.findOne({
                _id: Session.get('transfer')
            }).direction.to_district;
            return Districts.findOne({
                _id: to_id
            }).name;
        };
    },
    _additional_info: function() {
        if (Session.get('transfer')) {
            return Transfers.findOne({
                _id: Session.get('transfer')
            }).additional_info;
        };
    },
    _for_tourist_info: function() {
        if (Session.get('transfer')) {
            return Transfers.findOne({
                _id: Session.get('transfer')
            }).for_tourist_info;
        };
    },
    _website_link: function() {
        if (Session.get('transfer')) {
            return Transfers.findOne({
                _id: Session.get('transfer')
            }).website_link;
        };
    },
    _place_from: function() {
        return Session.get('place_from_exact');
    },
    _place_to: function() {
        return Session.get('place_to_exact');
    },
    _date_time: function() {
        return Session.get('date_time');
    },
    _pax_one_way: function() {
        return Session.get('pax_one_way');
    },
    _room: function() {
        return Session.get('room');
    },
    _flight: function() {
        return Session.get('flight');
    },
    _pax_two_ways: function() {
        return Session.get('pax_two_ways');
    },
    _direction: function() {
        return Session.get('direction');
    },
    _return_date_time: function() {
        return Session.get('return_date_time');
    },
    _prices_avaible: function() {
        return Session.get('prices_avaible');
    },
    _order_additional: function() {
        return Session.get('order_additional');
    },
    _order_question: function() {
        return Session.get('order_question');
    },

});

// Template.orderTransfer.created = function() {
//     Session.set('transfer', undefined);
//     Session.set('place_from', undefined);
//     Session.set('place_from_exact', undefined);
//     Session.set('place_to_exact', undefined);
//     Session.set('date_time', undefined);
//     Session.set('pax_one_way', undefined);
//     Session.set('room', undefined);
// };

result = [];

Template.orderTransfer.events({

    'change select[data-schema-key="transfer"]': function(event) {
        if ($('select[data-schema-key="transfer"]').val()) {
            if ($("input[name='date_time']").data("DateTimePicker")) {
                $("input[name='date_time']").data("DateTimePicker").destroy();
            };

            // Автоматический подгон выходных в форму

            Session.set('transfer', $('select[data-schema-key="transfer"]').val());
            curr_transfer = Session.get('transfer');
            var _weekDays = Transfers.findOne({
                _id: curr_transfer
            }).off_weekdays;

            result = [];

            for (var i in _weekDays) {
                result.push(week_arr.indexOf(_weekDays[i]))
            };

            $("input[name='date_time']").datetimepicker({
                daysOfWeekDisabled: result,
                sideBySide: true,

            });
            $("input[name='date_time']").val('');
        } else {
            Session.set('transfer', undefined)
        };
    },

    'change select[data-schema-key="direction"]': function(event) {
        if ($("input[name='return_date_time']").data("DateTimePicker")) {
            $("input[name='return_date_time']").data("DateTimePicker").destroy();
        };
        if ($('select[data-schema-key="direction"]').val() === 'prices_two_directions') {
            Session.set('direction', true);
            $("input[name='return_date_time']").closest('div.form-group').show();
            $("input[name='pax_two_ways']").closest('div.form-group').show();

            $("input[name='return_date_time']").datetimepicker({
                daysOfWeekDisabled: result,
                sideBySide: true
            });

            $("input[name='return_date_time']").val('');

        } else {
            Session.set('direction', undefined)
            $("input[name='return_date_time']").closest('div.form-group').hide();
            $("input[name='pax_two_ways']").closest('div.form-group').hide();
            $("input[name='return_date_time']").val('');
            $("input[name='pax_two_ways']").val('');
            $("input[name='return_date_time']").val('');
        };
    },

    'change select[data-schema-key="place_from"]': function(event) {
        Session.set('place_from', $("select[data-schema-key='place_from']").val());
        var place_from = Session.get('place_from');

        var place_type = Places.findOne({
            _id: place_from
        }).place_type;

        if (place_type === "hotel") {
            $("input[name='room']").closest('div.form-group').show();
            $("input[name='flight']").closest('div.form-group').hide();
            Session.set('flight', undefined);
        } else if (place_type === "airport") {
            $("input[name='flight']").closest('div.form-group').show();
            $("input[name='room']").closest('div.form-group').hide();
            Session.set('room', undefined);
        } else {
            $("input[name='room']").closest('div.form-group').hide();
            $("input[name='flight']").closest('div.form-group').hide();
        };

        if ($('select[data-schema-key="place_from"]')) {
            Session.set('place_from_exact', Places.findOne({
                _id: event.currentTarget.value
            }).name);
        } else {
            Session.set('place_from_exact', undefined)
        };
    },

    'change select[data-schema-key="place_to"]': function(event) {
        if ($('select[data-schema-key="place_to"]')) {
            Session.set('place_to_exact', Places.findOne({
                _id: event.currentTarget.value
            }).name);
        } else {
            Session.set('place_to_exact', undefined)
        };
    },

    'blur input[data-schema-key="date_time"]': function(event, template) {
        Session.set('date_time', event.currentTarget.value);
    },

    'blur input[data-schema-key="room"]': function(event, template) {
        Session.set('room', event.currentTarget.value);
    },

    'blur input[data-schema-key="flight"]': function(event, template) {
        Session.set('flight', event.currentTarget.value);
    },

    'blur input[data-schema-key="pax_one_way"]': function(event, template) {
        Session.set('pax_one_way', event.currentTarget.value);
    },



    'blur input[data-schema-key="pax_two_ways"]': function(event, template) {
        Session.set('pax_two_ways', event.currentTarget.value);
    },

    'blur input[data-schema-key="return_date_time"]': function(event, template) {
        if ($('select[data-schema-key="return_date_time"]')) {
            Session.set('return_date_time', event.currentTarget.value);
        } else {
            Session.set('return_date_time', undefined)
        };
    },

    'change select[data-schema-key="prices_avaible"]': function(event) {
        if ($('select[data-schema-key="prices_avaible"]')) {
            Session.set('prices_avaible', event.currentTarget.value);
        } else {
            Session.set('prices_avaible', undefined)
        };
    },

    'blur input[data-schema-key="add_to_price"]': function(event, template) {
        Session.set('add_to_price', event.currentTarget.value);
    },

    'blur textarea[data-schema-key="additional_info"]': function(event, template) {
        Session.set('order_additional', event.currentTarget.value);
        console.log(Session.get('order_additional'))
    },

    'blur textarea[data-schema-key="additional_question"]': function(event, template) {
        Session.set('order_question', event.currentTarget.value);
    },

    'click button[type="reset"]': function(event, template) {
        Session.set('transfer', undefined);
        Session.set('place_from', undefined);
        Session.set('place_from_exact', undefined);
        Session.set('place_to_exact', undefined);
        Session.set('date_time', undefined);
        Session.set('pax_one_way', undefined);
        Session.set('room', undefined);
        Session.set('flight', undefined);
        Session.set('pax_two_ways', undefined);
        Session.set('direction', undefined);
        Session.set('return_date_time', undefined);
        Session.set('prices_avaible', undefined);
        Session.set('add_to_price', 0);
        Session.set('direction', undefined);
        Session.set('order_additional', undefined);
        Session.set('order_question', undefined);
        $("input[name='room']").closest('div.form-group').hide();
        $("input[name='flight']").closest('div.form-group').hide();
        $("input[name='return_date_time']").closest('div.form-group').hide();
        $("input[name='pax_two_ways']").closest('div.form-group').hide();
        $("input[name='return_date_time']").val('');
        $("input[name='pax_two_ways']").val('');
        $("input[name='return_date_time']").val('');
        if ($("input[name='date_time']").data("DateTimePicker")) {
            $("input[name='date_time']").data("DateTimePicker").destroy();
        };
        if ($("input[name='return_date_time']").data("DateTimePicker")) {
            $("input[name='return_date_time']").data("DateTimePicker").destroy();
        };
    },

    'click button[type="button"]': function(event, template) {

        let curr_price = Transfers.findOne({
            _id: Session.get('transfer')
        })[$('select[data-schema-key="direction"]').val()][Session.get('prices_avaible')].price_adult


        let collect = (+Session.get('add_to_price') * Session.get('pax_one_way') / Session.get('pax_one_way')) + (curr_price * Session.get('pax_one_way'));

        console.log(collect)
        Session.set('collect', collect);
    },

});
