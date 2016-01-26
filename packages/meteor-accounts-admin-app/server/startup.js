Meteor.startup(function() {

	if (Meteor.roles.find({name: 'admin'}).count() < 1 ) {
		Roles.createRole('admin');
	}
});