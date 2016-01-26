Meteor.subscribe("Tour_Orders");

Template.orderTour.events({
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