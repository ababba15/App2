// Template.loading.rendered = function() {
//     if (!Session.get('loadingSplash')) {
//         this.loading = window.pleaseWait({
//             logo: '/meteor.png',
//             backgroundColor: '#000000',
//             loadingHtml: message + spinner
//         });
//         Session.set('loadingSplash', true);
//     };

//     var loading = this.loading;
//     Meteor.setTimeout(function() {
//         loading.finish();
//         Session.set('splashLoaded', true);
//     }, 2000);
// };

// Template.loading.destroyed = function() {
//     this.loading.finish();
// };

// var message = '<p class="loading-message">A&E-Partner</p>';
// var spinner = '<div class="sk-spinner sk-spinner-pulse"></div>';
