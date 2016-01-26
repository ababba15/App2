Spa_Orders = new Mongo.Collection('spa_orders');

Spa_Orders.attachSchema(new SimpleSchema({
    spa_place_to: {
        type: String,
        label: "Выберите SPA",
        optional: true,
        autoform: {
            type: "universe-select",
            firstOption: "",
            options: function() {
                return Places.find({
                    'place_type': 'spa'
                }).map(function(it) {
                    return {
                        label: it.name,
                        value: it._id
                    };
                });
            }
        }
    },
    place_from: {
        type: String,
        label: "Откуда ехать",
        optional: true,
        autoform: {
            type: "universe-select",
            firstOption: "",
            options: function() {
                return Places.find().map(function(it) {
                    return {
                        label: it.name,
                        value: it._id
                    };
                });
            }
        }
    },
    date: {
        type: String,
        label: "Дата",
        optional: true,
        autoform: {
            afFieldInput: {
                class: "date"
            }
        },
    },
    time: {
        type: String,
        label: "Время",
        optional: true,
        autoform: {
            afFieldInput: {
                class: "time"
            }
        },
    },
    pax: {
        type: Number,
        label: "Взрослых",
        optional: true
    },
    kids: {
        type: Number,
        label: "Детей",
        optional: true,
        defaultValue: 0
    },
    price: {
        type: Number,
        label: "Цена",
        optional: true
    },
    room: {
        type: String,
        label: "Номер комнаты",
        optional: true,
    },
    additional_info: {
        type: String,
        label: "Дополнительно",
        optional: true,
        autoform: {
            afFieldInput: {
                type: "textarea"
            }
        }
    },
    additional_question: {
        type: String,
        label: "Доп. вопросы организатору",
        optional: true,
        autoform: {
            afFieldInput: {
                type: "textarea"
            }
        }
    },
    date_created: {
        type: Date,
        autoform: {
            type: 'hidden',
        },
        autoValue: function() {
            if (this.isInsert) {
                return new Date;
            } else if (this.isUpsert) {
                return {
                    $setOnInsert: new Date
                };
            } else {
                this.unset();
            }
        }
    },
    who_created: {
        type: String,
        autoform: {
            type: 'hidden'
        },
        autoValue: function() {
            return this.userId;
        }
    },
    type: {
        type: String,
        autoform: {
            type: 'hidden'
        },
        autoValue: function() {
            if (Meteor.isClient) {
                return Router.current().route.getName();
            };
        }
    }
}));