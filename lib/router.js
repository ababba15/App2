/* global Meteor */
/* global Router */
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading'
});

Router.map(function () {
    this.route('home', {
        path: '/',
        template: 'home'
    });

    this.route('admin', {
        path: '/admin',
        template: 'accountsAdmin',
        onBeforeAction: function () {
            if (Meteor.loggingIn()) {
                this.render(this.loadingTemplate);
            }
            else if (!Roles.userIsInRole(Meteor.user(), ['admin'])) {
                console.log('redirecting');
                this.redirect('/');
            }
        }
    });
});

Router.route('/options', {
    name: 'options',
    template: 'options'
});

Router.route('/add-transfer', {
    name: 'addTransfer',
    template: 'addTransfer'
});

Router.route('/add-tour', {
    name: 'addTour',
    template: 'addTour'
});

Router.route('/add-taxi-route', {
    name: 'addTaxi_Route',
    template: 'addTaxi_Route'
});

Router.route('/add-visa', {
    name: 'addVisa',
    template: 'addVisa'
});

Router.route('/add-shopping', {
    name: 'addShopping',
    template: 'addShopping'
});

Router.route('/add-spa', {
    name: 'addSpa',
    template: 'addSpa'
});

Router.route('/add-provider', {
    name: 'addProvider',
    template: 'addProvider'
});

Router.route('/add-place', {
    name: 'addPlace',
    template: 'addPlace'
});

Router.route('/add-service', {
    name: 'addService',
    template: 'addService'
});

Router.route('/order-transfer', {
    name: 'Трансфер',
    template: 'orderTransfer'
});

Router.route('/order-tour', {
    name: 'Экскурсия/шоу',
    template: 'orderTour'
});

Router.route('/order-taxi', {
    name: 'Такси',
    template: 'orderTaxi'
});

Router.route('/order-visa', {
    name: 'Виза',
    template: 'orderVisa'
});

Router.route('/order-spa', {
    name: 'Spa',
    template: 'orderSpa'
});

Router.route('/order-shopping', {
    name: 'Шоппинг',
    template: 'orderShopping'
});
