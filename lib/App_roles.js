if (Meteor.isServer) {
    Meteor.startup(function () {
        if (Meteor.users.findOne("mXbZccnZBsakdEqAp"))
            Roles.addUsersToRoles("mXbZccnZBsakdEqAp", ['admin']);

        if(!Meteor.roles.findOne({name: "moderator"}))
            Roles.createRole("moderator");

        if(!Meteor.roles.findOne({name: "operator"}))
            Roles.createRole("operator");
    });
}

if (Meteor.isClient) {
    Template.adminTemplate.helpers({
        isAdminUser: function() {
            return Roles.userIsInRole(Meteor.user(), ['admin']);
        }
    })
}

