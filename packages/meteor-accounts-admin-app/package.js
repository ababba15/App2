Package.describe({
	summary: "A roles based account management system using bootstrap 3",
  version: "1.0.0"
});

Package.on_use(function (api, where) {
  api.versionsFrom("METEOR@0.9.0");
	api.use('standard-app-packages', ['client', 'server']);
	api.use("app:roles@1.0.0", ['client', 'server']);

	api.add_files('libs/user_query.js', ['client', 'server']);

	api.add_files('client/startup.js', 'client');
	api.add_files('client/accounts_admin.html', 'client');
	api.add_files('client/accounts_admin.js', 'client');
	api.add_files('client/delete_account_modal.html', 'client');
	api.add_files('client/delete_account_modal.js', 'client');
	api.add_files('client/info_account_modal.html', 'client');
	api.add_files('client/info_account_modal.js', 'client');
	api.add_files('client/update_account_modal.html', 'client');
	api.add_files('client/update_account_modal.js', 'client');
	api.add_files('client/update_roles_modal.html', 'client');
	api.add_files('client/update_roles_modal.js', 'client');

	api.add_files('style/style.css', 'client');

	api.add_files('server/startup.js', 'server');
	api.add_files('server/publish.js', 'server');
	api.add_files('server/methods.js', 'server');
});
