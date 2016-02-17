Order_id = new ReactiveVar;

Template.sideBar.events({
    'click .order': function(event) {
        Order_id = event.currentTarget.getAttribute('data-order-id');
        return Order_id;
    }
});
