Package.describe({
  summary: "Authorization package for Meteor",
  version: "1.0.0",
  name: "app:roles"
});

Package.onUse(function (api) {
  var both = ['client', 'server'];

  api.versionsFrom("METEOR@1.2.0.2");

  api.use(['underscore',
           'accounts-base',
           'tracker',
           'mongo',
           'check'], both);

  api.use(['blaze'], 'client', {weak: true});

  api.export('Roles');

  api.addFiles('roles_server.js', 'server');
  api.addFiles('roles_common.js', both);
  api.addFiles(['client/debug.js',
                'client/uiHelpers.js',
                'client/subscriptions.js'], 'client');
});

Package.onTest(function (api) {
  var both = ['client', 'server'];

  // `accounts-password` is included so `Meteor.users` exists

  api.use(['app:roles',
           'accounts-password',
           'underscore',
           'tinytest'], both);
});
