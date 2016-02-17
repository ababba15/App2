Transfers = new Mongo.Collection("transfers");
Transfers.attachSchema(new SimpleSchema({
    provider: {
        type: String,
        label: "Организатор",
        autoform: {
            type: "universe-select",
            firstOption: "",
            options: function() {
                return Providers.find().map(function(it) {
                    return {
                        label: it.name,
                        value: it._id
                    };
                });
            }
        }
    },

    service: {
        type: String,
        label: "Сервис",
        optional: true,
        autoform: {
            type: "universe-select",
            firstOption: "",
            // afFieldInput: {
            // 	template: "nothing",
            // 	multiple: true
            // },
            options: function() {
                return Services.find().map(function(it) {
                    return {
                        label: it.name,
                        value: it._id
                    };
                });
            }
        }
    },
    direction: {
        type: Object,
        label: "",
        optional: true
    },
    'direction.from_district': {
        type: String,
        label: "Выберите район (откуда)",
        optional: true,
        autoform: {
            type: "universe-select",
            firstOption: "",
            options: function() {
                return Districts.find().map(function(it) {
                    return {
                        label: it.name,
                        value: it._id
                    };
                });
            }
        }
    },
    'direction.to_district': {
        type: String,
        label: "Выберите район (куда)",
        optional: true,
        autoform: {
            type: "universe-select",
            firstOption: "",
            options: function() {
                return Districts.find().map(function(it) {
                    return {
                        label: it.name,
                        value: it._id
                    };
                });
            }
        }
    },
    off_weekdays: {
        type: [String],
        label: "Выходные",
        optional: true,
        autoform: {
            type: "universe-select",
            afFieldInput: {
                multiple: true
            },
            options: function() {
                return [{
                    label: "Понедельник",
                    value: "Mon"
                }, {
                    label: "Вторник",
                    value: "Tue"
                }, {
                    label: "Среда",
                    value: "Wed"
                }, {
                    label: "Четверг",
                    value: "Thu"
                }, {
                    label: "Пятница",
                    value: "Fri"
                }, {
                    label: "Суббота",
                    value: "Sat"
                }, {
                    label: "Воскресенье",
                    value: "Sun"
                }];
            }
        }
    },
    prices_one_direction: {
        type: Object,
        label: "",
        optional: true
    },

    'prices_one_direction.minibus': {
        type: Object,
        label: "",
        optional: true
    },
    'prices_one_direction.minibus.price_adult': {
        type: Number,
        label: "Взрослый minibus",
        optional: true
    },
    'prices_one_direction.minibus.price_adult_net': {
        type: Number,
        label: "Взрослый minibus (net)",
        optional: true
    },
    'prices_one_direction.minibus.price_child': {
        type: Number,
        label: "Детский minibus",
        optional: true
    },
    'prices_one_direction.minibus.price_child_net': {
        type: Number,
        label: "Детский minibus (net)",
        optional: true
    },

    'prices_one_direction.minibus_boat': {
        type: Object,
        label: "",
        optional: true
    },
    'prices_one_direction.minibus_boat.price_adult': {
        type: Number,
        label: "Взрослый minibus + boat",
        optional: true
    },
    'prices_one_direction.minibus_boat.price_adult_net': {
        type: Number,
        label: "Взрослый minibus + boat (net)",
        optional: true
    },
    'prices_one_direction.minibus_boat.price_child': {
        type: Number,
        label: "Детский minibus + boat",
        optional: true
    },
    'prices_one_direction.minibus_boat.price_child_net': {
        type: Number,
        label: "Детский minibus + boat (net)",
        optional: true
    },

    'prices_one_direction.minibus_boat_minibus': {
        type: Object,
        label: "",
        optional: true
    },
    'prices_one_direction.minibus_boat_minibus.price_adult': {
        type: Number,
        label: "Взрослый minibus + boat + minibus",
        optional: true
    },
    'prices_one_direction.minibus_boat_minibus.price_adult_net': {
        type: Number,
        label: "Взрослый minibus + boat + minibus (net)",
        optional: true
    },
    'prices_one_direction.minibus_boat_minibus.price_child': {
        type: Number,
        label: "Детский minibus + boat + minibus",
        optional: true
    },
    'prices_one_direction.minibus_boat_minibus.price_child_net': {
        type: Number,
        label: "Детский minibus + boat + minibus (net)",
        optional: true
    },

    'prices_one_direction.minibus_speedboat': {
        type: Object,
        label: "",
        optional: true
    },
    'prices_one_direction.minibus_speedboat.price_adult': {
        type: Number,
        label: "Взрослый minibus + speedboat",
        optional: true
    },
    'prices_one_direction.minibus_speedboat.price_adult_net': {
        type: Number,
        label: "Взрослый minibus + speedboat (net)",
        optional: true
    },
    'prices_one_direction.minibus_speedboat.price_child': {
        type: Number,
        label: "Детский minibus + speedboat",
        optional: true
    },
    'prices_one_direction.minibus_speedboat.price_child_net': {
        type: Number,
        label: "Детский minibus + speedboat (net)",
        optional: true
    },

    'prices_one_direction.minibus_speedboat_taxi': {
        type: Object,
        label: "",
        optional: true
    },
    'prices_one_direction.minibus_speedboat_taxi.price_adult': {
        type: Number,
        label: "Взрослый minibus + speedboat + taxi",
        optional: true
    },
    'prices_one_direction.minibus_speedboat_taxi.price_adult_net': {
        type: Number,
        label: "Взрослый minibus + speedboat + taxi (net)",
        optional: true
    },
    'prices_one_direction.minibus_speedboat_taxi.price_child': {
        type: Number,
        label: "Детский minibus + speedboat + taxi",
        optional: true
    },
    'prices_one_direction.minibus_speedboat_taxi.price_child_net': {
        type: Number,
        label: "Детский minibus + speedboat + taxi (net)",
        optional: true
    },

    prices_two_directions: {
        type: Object,
        label: "",
        optional: true
    },

    'prices_two_directions.minibus': {
        type: Object,
        label: "",
        optional: true
    },
    'prices_two_directions.minibus.price_adult': {
        type: Number,
        label: "Взрослый minibus",
        optional: true
    },
    'prices_two_directions.minibus.price_adult_net': {
        type: Number,
        label: "Взрослый minibus (net)",
        optional: true
    },
    'prices_two_directions.minibus.price_child': {
        type: Number,
        label: "Детский minibus",
        optional: true
    },
    'prices_two_directions.minibus.price_child_net': {
        type: Number,
        label: "Детский minibus (net)",
        optional: true
    },

    'prices_two_directions.minibus_boat': {
        type: Object,
        label: "",
        optional: true
    },
    'prices_two_directions.minibus_boat.price_adult': {
        type: Number,
        label: "Взрослый minibus + boat",
        optional: true
    },
    'prices_two_directions.minibus_boat.price_adult_net': {
        type: Number,
        label: "Взрослый minibus + boat (net)",
        optional: true
    },
    'prices_two_directions.minibus_boat.price_child': {
        type: Number,
        label: "Детский minibus + boat",
        optional: true
    },
    'prices_two_directions.minibus_boat.price_child_net': {
        type: Number,
        label: "Детский minibus + boat (net)",
        optional: true
    },

    'prices_two_directions.minibus_boat_minibus': {
        type: Object,
        label: "",
        optional: true
    },
    'prices_two_directions.minibus_boat_minibus.price_adult': {
        type: Number,
        label: "Взрослый minibus + boat + minibus",
        optional: true
    },
    'prices_two_directions.minibus_boat_minibus.price_adult_net': {
        type: Number,
        label: "Взрослый minibus + boat + minibus (net)",
        optional: true
    },
    'prices_two_directions.minibus_boat_minibus.price_child': {
        type: Number,
        label: "Детский minibus + boat + minibus",
        optional: true
    },
    'prices_two_directions.minibus_boat_minibus.price_child_net': {
        type: Number,
        label: "Детский minibus + boat + minibus (net)",
        optional: true
    },

    'prices_two_directions.minibus_speedboat': {
        type: Object,
        label: "",
        optional: true
    },
    'prices_two_directions.minibus_speedboat.price_adult': {
        type: Number,
        label: "Взрослый minibus + speedboat",
        optional: true
    },
    'prices_two_directions.minibus_speedboat.price_adult_net': {
        type: Number,
        label: "Взрослый minibus + speedboat (net)",
        optional: true
    },
    'prices_two_directions.minibus_speedboat.price_child': {
        type: Number,
        label: "Детский minibus + speedboat",
        optional: true
    },
    'prices_two_directions.minibus_speedboat.price_child_net': {
        type: Number,
        label: "Детский minibus + speedboat (net)",
        optional: true
    },

    'prices_two_directions.minibus_speedboat_taxi': {
        type: Object,
        label: "",
        optional: true
    },
    'prices_two_directions.minibus_speedboat_taxi.price_adult': {
        type: Number,
        label: "Взрослый minibus + speedboat + taxi",
        optional: true
    },
    'prices_two_directions.minibus_speedboat_taxi.price_adult_net': {
        type: Number,
        label: "Взрослый minibus + speedboat + taxi (net)",
        optional: true
    },
    'prices_two_directions.minibus_speedboat_taxi.price_child': {
        type: Number,
        label: "Детский minibus + speedboat + taxi",
        optional: true
    },
    'prices_two_directions.minibus_speedboat_taxi.price_child_net': {
        type: Number,
        label: "Детский minibus + speedboat + taxi (net)",
        optional: true
    },

    district_overpay: {
        type: [Object],
        label: "",
        optional: true
    },
    'district_overpay.$.district': {
        type: String,
        label: "Выберите район",
        optional: true,
        autoform: {
            type: "select",
            firstOption: "",
            options: function() {
                return Districts.find().map(function(it) {
                    return {
                        label: it.name,
                        value: it._id
                    };
                });
            }
        }
    },
    "district_overpay.$.overpay": {
        type: Number,
        label: "Сумма доплаты",
        optional: true
    },

    additional_info: {
        type: String,
        label: "Инфо по услуге",
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'summer'
            }
        }
    },
    for_tourist_info: {
        type: String,
        label: "Что сказать туристу",
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'summer'
            }
        }
    },
    website_link: {
        type: String,
        label: "Ссылка на сайт",
        optional: true
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
    }
}));
