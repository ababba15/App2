// Template.layout.events({
    // 'mouseover .time': function(event) {
    //     event.preventDefault();
    //     event.stopPropagation();
    //     $('.time').parent().css('position', 'relative');
    //     $('.time').datetimepicker({
    //         format: 'HH:mm',
    //         stepping: 5,
    //         useCurrent: true,
    //         locale: moment.locale('ru'),
    //         widgetPositioning: {
    //             horizontal: 'auto',
    //             vertical: 'auto'
    //         },
    //     });
    // },
    // 'mouseover .date': function(event) {
    //     event.preventDefault();
    //     event.stopPropagation();
    //     $('.date').datetimepicker({
    //         format: 'LL',
    //         locale: moment.locale('ru'),
    //     });
    // },
    // 'mouseover .datetime': function(event) {
    //     event.preventDefault();
    //     event.stopPropagation();
    //     $('.datetime').datetimepicker({
    //         format: 'LLL',
    //         stepping: 1,
    //         locale: moment.locale('ru'),
    //     });
    // },
// });

AutoForm.addHooks(null, {
    formToModifier: function(modifier) {
        if (modifier.$set.district_overpay) {
            modifier.$set.district_overpay = _.compact(modifier.$set.district_overpay);
        };
        if (modifier.$set.provider_place) {
            modifier.$set.provider_place = _.compact(modifier.$set.provider_place);
        };
        if (modifier.$set.work_time) {
            modifier.$set.work_time = _.compact(modifier.$set.work_time);
        };
        if (modifier.$set.dates) {
            modifier.$set.dates = _.compact(modifier.$set.dates);
        };
        return modifier;
    }
});

Template.sideBar.helpers({
    Shopping_Orders_Index: function() {
        return Shopping_Orders.find({});
    },
    Spa_Orders_Index: function() {
        return Spa_Orders.find({});
    },
    Taxi_Orders_Index: function() {
        return Taxi_Orders.find({});
    },
    Tour_Orders_Index: function() {
        return Tour_Orders.find({});
    },
    Transfer_Orders_Index: function() {
        return Transfer_Orders.find({});
    },
    Visa_Orders_Index: function() {
        return Visa_Orders.find({});
    },
});


Template.options.helpers({
    discount: function() {
        return Options.findOne({}, {
            fields: {
                options_discount_min: true,
                options_discount_med: true,
                options_discount_max: true
            }
        })
    },
    kids: function() {
        return Options.findOne({}, {
            fields: {
                options_kids_weigth: true,
                options_kids_height: true,
                options_kids_age: true
            }
        })
    },

});

AutoForm.addInputType('summer', {
    template: "summer",
    valueOut: this.$(".editor").val()
});

Template.summer.rendered = function() {
    Tracker.afterFlush(function() {
        this.$(".editor").summernote({

            toolbar: [
                ['style', ['style']],
                ['font', ['bold', 'italic', 'underline', 'clear']],
                ['color', ['color']],
                ['para', ['ul', 'ol', 'paragraph']],
                ['height', ['height']],
                ['table', ['table']],
                ['insert', ['hr']],
                ['view', ['fullscreen']]
            ],

        })

    })
};

AutoForm.hooks({
    TransferSchema: {
        onSuccess: function(formType, result) {
            if (formType == 'insert') {
                console.log(result)
            }
        },
        onError: function(formType, error) {
            if (formType == 'insert') {
                console.log(error)
            }
        },

    }
});