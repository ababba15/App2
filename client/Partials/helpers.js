Template.layout.events({
    'mouseover .time': function(event) {
        event.preventDefault();
        event.stopPropagation();
        $('.time').parent().css('position', 'relative');
        $('.time').datetimepicker({
            format: 'HH:mm',
            stepping: 5,
            useCurrent: true,
            locale: moment.locale('ru'),
            widgetPositioning: {
                horizontal: 'auto',
                vertical: 'auto'
            },
        });
    },
    'mouseover .date': function(event) {
        event.preventDefault();
        event.stopPropagation();
        $('.date').datetimepicker({
            format: 'LL',
            locale: moment.locale('ru'),
        });
    },
    'mouseover .datetime': function(event) {
        event.preventDefault();
        event.stopPropagation();
        $('.datetime').datetimepicker({
            format: 'LLL',
            stepping: 1,
            locale: moment.locale('ru'),
        });
    },
});

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
    Shopping_Orders_Index: function () {
        return Shopping_Orders.find({});
    },
    Spa_Orders_Index: function () {
        return Spa_Orders.find({});
    },
    Taxi_Orders_Index: function () {
        return Taxi_Orders.find({});
    },
    Tour_Orders_Index: function () {
        return Tour_Orders.find({});
    },
    Transfer_Orders_Index: function () {
        return Transfer_Orders.find({});
    },
    Visa_Orders_Index: function () {
        return Visa_Orders.find({});
    },
});



// Template.Order_updateModal.helpers({
//     curr_doc: function() {
//         Meteor.subscribe('Orders');
//         return Orders.findOne({
//             _id: Order_id
//         });
//     }
// });


// Template.Order_updateModal.onCreated(function() {
//     var instance = this;
//     console.log(instance);

// instance.autorun(function() {
//     var Order_id = instance.Order_id.get();
//     console.log(Order_id);
//     instance.subscribe("Orders", Order_id);
// })

// instance.order = function() {
//     return Orders.findOne({
//         _id: instance.Order_id.get()
//     });
// }
// })
