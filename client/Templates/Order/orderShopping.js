Meteor.subscribe("Shopping_Orders");

var curr_shopping_id,
    _minDate,
    _maxDate,
    _weekDays,
    place_type,
    place_from;

var minDate = {};
var maxDate = {};

var week_arr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

Template.orderShopping.rendered = function() {
	$('.date').datetimepicker();
	$('.time').datetimepicker();
};

Template.orderShopping.events({

    'change select[data-schema-key="shopping_place_to"]': function(event) {

       	$('.date').data("DateTimePicker").destroy();
        $('.time').data("DateTimePicker").destroy();

        Session.set('shopping_place_to', $("select[data-schema-key='shopping_place_to']").val());
        curr_shopping_id = Session.get('shopping_place_to');

        _minDate = Shoppings.findOne({
            shop_id: curr_shopping_id
        }).work_time_from;

        _maxDate = Shoppings.findOne({
            shop_id: curr_shopping_id
        }).work_time_to;

        _weekDays = Shoppings.findOne({
            shop_id: curr_shopping_id
        }).off_weekdays;

        var result = [];
        for (var i in _weekDays) {
            result.push(week_arr.indexOf(_weekDays[i]))
        }



        $('.date').datetimepicker({
            daysOfWeekDisabled: result,
            format: "LL"
        });


        minDate.h = _minDate.split(':')[0];
        minDate.m = _minDate.split(':')[1];

        maxDate.h = _maxDate.split(':')[0];
        maxDate.m = _maxDate.split(':')[1];

        $('.time').datetimepicker({
            format: "HH:mm",
            minDate: moment(minDate),
            maxDate: moment(maxDate)
        });

    },

    'change select[data-schema-key="place_from"]': function(event) {
        Session.set('place_from', $("select[data-schema-key='place_from']").val());
        place_from = Session.get('place_from');

        place_type = Places.findOne({
            _id: place_from
        }).place_type;

        if (place_type === "hotel") {
            $("input[name='room']").closest('div.form-group').show();
        } else {
            $("input[name='room']").closest('div.form-group').hide();
        };
    }
});
