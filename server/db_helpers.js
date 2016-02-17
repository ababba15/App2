Meteor.publish("Shopping_Orders", function () {
  return Shopping_Orders.find();
});

Shopping_Orders.allow({
  insert: function () {
    return true;
  },
  update: function () {
    return true;
  },
  remove: function () {
    return true;
  }
});

Meteor.publish("Spa_Orders", function () {
  return Spa_Orders.find();
});

Spa_Orders.allow({
  insert: function () {
    return true;
  },
  update: function () {
    return true;
  },
  remove: function () {
    return true;
  }
});

Meteor.publish("Taxi_Orders", function () {
  return Taxi_Orders.find();
});

Taxi_Orders.allow({
  insert: function () {
    return true;
  },
  update: function () {
    return true;
  },
  remove: function () {
    return true;
  }
});

Meteor.publish("Tour_Orders", function () {
  return Tour_Orders.find();
});

Tour_Orders.allow({
  insert: function () {
    return true;
  },
  update: function () {
    return true;
  },
  remove: function () {
    return true;
  }
});

Meteor.publish("Transfer_Orders", function () {
  return Transfer_Orders.find();
});

Transfer_Orders.allow({
  insert: function () {
    return true;
  },
  update: function () {
    return true;
  },
  remove: function () {
    return true;
  }
});

Meteor.publish("Visa_Orders", function () {
  return Visa_Orders.find();
});

Visa_Orders.allow({
  insert: function () {
    return true;
  },
  update: function () {
    return true;
  },
  remove: function () {
    return true;
  }
});




// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


Meteor.publish("Options", function () {
  return Options.find();
});

Options.allow({
  insert: function () {
    return true;
  },
  update: function () {
    return true;
  },
  remove: function () {
    return true;
  }
});


Meteor.publish("Locations", function () {
  return Locations.find();
});

Locations.allow({
  insert: function () {
    return true;
  },
  update: function () {
    return true;
  },
  remove: function () {
    return true;
  }
});

Meteor.publish("Districts", function () {
  return Districts.find();
});

Districts.allow({
  insert: function () {
    return true;
  },
  update: function () {
    return true;
  },
  remove: function () {
    return true;
  }
});

Meteor.publish("Places", function () {
  return Places.find();
});

Places.allow({
  insert: function () {
    return true;
  },
  update: function () {
    return true;
  },
  remove: function () {
    return true;
  }
});

Meteor.publish("Providers", function () {
  return Providers.find();
});

Providers.allow({
  insert: function () {
    return true;
  },
  update: function () {
    return true;
  },
  remove: function () {
    return true;
  }
});

Meteor.publish("Transfers", function () {
  return Transfers.find();
});

Transfers.allow({
  insert: function () {
    return true;
  },
  update: function () {
    return true;
  },
  remove: function () {
    return true;
  }
});

Meteor.publish("Tours", function () {
  return Tours.find();
});

Tours.allow({
  insert: function () {
    return true;
  },
  update: function () {
    return true;
  },
  remove: function () {
    return true;
  }
});

Meteor.publish("Taxi_Routes", function () {
  return Taxi_Routes.find();
});

Taxi_Routes.allow({
  insert: function () {
    return true;
  },
  update: function () {
    return true;
  },
  remove: function () {
    return true;
  }
});

Meteor.publish("Visas", function () {
  return Visas.find();
});

Visas.allow({
  insert: function () {
    return true;
  },
  update: function () {
    return true;
  },
  remove: function () {
    return true;
  }
});

Meteor.publish("Shoppings", function () {
  return Shoppings.find();
});

Shoppings.allow({
  insert: function () {
    return true;
  },
  update: function () {
    return true;
  },
  remove: function () {
    return true;
  }
});

Meteor.publish("Spas", function () {
  return Spas.find();
});

Spas.allow({
  insert: function () {
    return true;
  },
  update: function () {
    return true;
  },
  remove: function () {
    return true;
  }
});

Meteor.publish("Services", function () {
  return Services.find();
});

Services.allow({
  insert: function () {
    return true;
  },
  update: function () {
    return true;
  },
  remove: function () {
    return true;
  }
});

Meteor.publish("Messages", function () {
  return Messages.find();
});

Messages.allow({
  insert: function () {
    return true;
  },
  update: function () {
    return true;
  },
  remove: function () {
    return true;
  }
});

Meteor.publish("User", function () {
  return Meteor.users.find();
});
