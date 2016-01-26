Meteor.methods({
	deleteUser: function (userId) {
		var user = Meteor.user();
		if (!user || !Roles.userIsInRole(user, ['admin']))
			throw new Meteor.Error(401, "Вы не обладаете правами администратора.");

		if (user._id == userId)
			throw new Meteor.Error(422, 'Вы не можете удалить свой аккаунт.');

		// remove the user
		Meteor.users.remove(userId);
	},

	addUserRole: function (userId, role) {
		var user = Meteor.user();
		if (!user || !Roles.userIsInRole(user, ['admin']))
			throw new Meteor.Error(401, "Вы не обладаете правами администратора.");

		// handle invalid role
		if (Meteor.roles.find({
				name: role
			}).count() < 1)
			throw new Meteor.Error(422, 'Роли ' + role + ' не существует.');

		// handle user already has role
		if (Roles.userIsInRole(userId, role))
			throw new Meteor.Error(422, 'Данный аккаунт не обладает ролью ' + role);

		// add the user to the role
		Roles.addUsersToRoles(userId, role);
	},

	removeUserRole: function (userId, role) {
		var user = Meteor.user();
		if (!user || !Roles.userIsInRole(user, ['admin']))
			throw new Meteor.Error(401, "Вы не обладаете правами администратора.");

		// handle invalid role
		if (Meteor.roles.find({
				name: role
			}).count() < 1)
			throw new Meteor.Error(422, 'Роли ' + role + ' не существует.');

		// handle user already has role
		if (!Roles.userIsInRole(userId, role))
			throw new Meteor.Error(422, 'Данный аккаунт не обладает ролью ' + role);

		Roles.removeUsersFromRoles(userId, role);
	},

	addRole: function (role) {
		var user = Meteor.user();
		if (!user || !Roles.userIsInRole(user, ['admin']))
			throw new Meteor.Error(401, "Вы не обладаете правами администратора.");

		// handle existing role
		if (Meteor.roles.find({
				name: role
			}).count() > 0)
			throw new Meteor.Error(422, 'Роль ' + role + ' уже есть.');

		Roles.createRole(role);
	},

	removeRole: function (role) {
		var user = Meteor.user();
		if (!user || !Roles.userIsInRole(user, ['admin']))
			throw new Meteor.Error(401, "Вы не обладаете правами администратора.");

		// handle non-existing role
		if (Meteor.roles.find({
				name: role
			}).count() < 1)
			throw new Meteor.Error(422, 'Роли ' + role + ' не существует.');

		if (role === 'admin')
			throw new Meteor.Error(422, 'Нельзя удалить роль супер-администратора.');

		// remove the role from all users who currently have the role
		// if successfull remove the role
		Meteor.users.update({
				roles: role
			}, {
				$pull: {
					roles: role
				}
			}, {
				multi: true
			},
			function (error) {
				if (error) {
					throw new Meteor.Error(422, error);
				} else {
					Roles.deleteRole(role);
				}
			}
		);
	},

	updateUserInfo: function (id, property, value) {
		var user = Meteor.user();
		if (!user || !Roles.userIsInRole(user, ['admin']))
			throw new Meteor.Error(401, "Вы не обладаете правами администратора.");

		if (property !== 'profile.name')
			throw new Meteor.Error(422, "Введите корректное имя.");

		obj = {};
		obj[property] = value;
		Meteor.users.update({
			_id: id
		}, {
			$set: obj
		});

	}
});
