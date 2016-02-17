Template.allOrders.helpers({
    orders: function() {
        ordersArr = [],
            transfers = Transfer_Orders.find({}).fetch(),
            tours = Tour_Orders.find({}).fetch(),
            taxis = Taxi_Orders.find({}).fetch(),
            visas = Visa_Orders.find({}).fetch(),
            shoppings = Shopping_Orders.find({}).fetch(),
            spas = Spa_Orders.find({}).fetch();

        ordersArr.push(transfers);
        ordersArr.push(tours);
        ordersArr.push(taxis);
        ordersArr.push(visas);
        ordersArr.push(shoppings);
        ordersArr.push(spas);

        ordersArr = _.flatten(ordersArr);
        ordersArr.sort(function(a, b) {
            var c = new Date(a.date_created);
            var d = new Date(b.date_created);
            return d - c;
        });
        return ordersArr;
    }
});

// var EVENTS, OFFSCREEN_CLASS, hooks;

// OFFSCREEN_CLASS = 'off';

// EVENTS = 'webkitTransitionEnd oTransitionEnd transitionEnd msTransitionEnd transitionend';

// hooks = {
//     insertElement: function(node, next) {
//         $(node).addClass(OFFSCREEN_CLASS).insertBefore(next);
//         return Deps.afterFlush(function() {
//             return $(node).removeClass(OFFSCREEN_CLASS);
//         });
//     },
//     removeElement: function(node) {
//         return $(node).addClass(OFFSCREEN_CLASS).on(EVENTS, function() {
//             return $(node).remove();
//         });
//     }
// };

// Template.transition.rendered = function() {
//     return this.firstNode.parentNode._uihooks = hooks;
// };
