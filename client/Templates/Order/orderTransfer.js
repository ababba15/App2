Meteor.subscribe("Transfer_Orders");

var week_arr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

Template.orderTransfer.rendered = function() {
    $('.date').datetimepicker();
};

Template.orderTransfer.events({

    'change select[data-schema-key="transfer"]': function(event) {
        if ($("div[data-value].item").attr("data-value")) {
            $('.date').data("DateTimePicker").destroy();

            Session.set('transfer', $("div[data-value].item").attr("data-value"));
            curr_transfer = Session.get('transfer');

            var _weekDays = Transfers.findOne({
                _id: curr_transfer
            }).off_weekdays;

            var result = [];
            for (var i in _weekDays) {
                result.push(week_arr.indexOf(_weekDays[i]))
            };

            $('.date').datetimepicker({
                daysOfWeekDisabled: result,
                format: "LL"
            });

            pricesArr = [];
            pricesArr.splice(0, pricesArr.length)
            pricesArr.push(Object.keys(Transfers.findOne({
                _id: curr_transfer
            }).prices_one_direction));
            pricesArr.concat(Object.keys(Transfers.findOne({
                _id: curr_transfer
            }).prices_two_directions));
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
        } else {
            $("input[name='room']").closest('div.form-group').hide();
        };
    }
});
