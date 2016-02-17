Transfer_Orders = new Mongo.Collection('transfer_orders');

Transfer_Orders.attachSchema(new SimpleSchema({
    transfer: {
        type: String,
        label: "Выберите трансфер",
        optional: true,
        autoform: {
            type: "select",
            firstOption: "",
            options: function() {
                return Transfers.find().map(function(it) {
                    return {
                        label: Districts.findOne({
                            _id: it.direction.from_district
                        }).name + ' - ' + Districts.findOne({
                            _id: it.direction.to_district
                        }).name,
                        value: it._id
                    };
                });
            }
        }
    },
    date_time: {
        type: String,
        label: "Дата и время",
        optional: true,
        autoform: {
            afFieldInput: {
                class: "date"
            }
        },
    },
    return_date_time: {
        type: String,
        label: "Дата и время возвращения",
        optional: true,
        autoform: {
            afFieldInput: {
                class: "date"
            }
        },
    },
    pax: {
        type: Number,
        label: "Взрослых",
        optional: true
    },
    place_from: {
        type: String,
        label: "Откуда ехать",
        optional: true,
        autoform: {
            type: "select",
            firstOption: "",
            options: function() {
                if (Meteor.isClient) {

                    var curr_transfer2 = '';
                    var district_from = '';

                    curr_transfer2 = AutoForm.getFieldValue('transfer', 'TransferSchema');

                    if (curr_transfer2) {

                        district_from = Transfers.findOne({
                            _id: curr_transfer2
                        }).direction.from_district;

                        return Places.find({
                            district: district_from
                        }).map(function(it) {
                            return {
                                label: it.name,
                                value: it._id
                            };
                        });
                    };
                };
                return []
            }
        }
    },
    place_to: {
        type: String,
        label: "Куда ехать",
        optional: true,
        autoform: {
            type: "select",
            firstOption: "",
            options: function() {
                if (Meteor.isClient) {

                    var curr_transfer3 = '';
                    var district_from = '';

                    curr_transfer3 = AutoForm.getFieldValue('transfer', 'TransferSchema');

                    if (curr_transfer3) {

                        district_to = Transfers.findOne({
                            _id: curr_transfer3
                        }).direction.to_district;

                        return Places.find({
                            district: district_to
                        }).map(function(it) {
                            return {
                                label: it.name,
                                value: it._id
                            };
                        });
                    };
                };
                return []
            }
        }
    },

    add_to_price: {
        type: Number,
        label: "Добавить к стоимости",
        optional: true
    },
    room: {
        type: String,
        label: "Номер комнаты",
        optional: true,
    },
    flight: {
        type: String,
        label: "Номер рейса",
        optional: true,
    },
    order_status: {
        type: String,
        label: "Присвоить статус",
        optional: true,
        autoform: {
            type: "select",
            firstOption: "",
            options: function() {
                return [

                    {
                        label: "Лид",
                        value: 'order_lead'
                    }, {
                        label: "Перезвонить клиенту",
                        value: 'order_recall'
                    }, {
                        label: "Ожидание данных",
                        value: 'order_waiting'
                    }, {
                        label: "Отправить организатору",
                        value: 'order_sent'
                    }

                ]
            }
        }
    },
    direction: {
        type: String,
        label: "Направление",
        optional: true,
        autoform: {
            type: "select",
            firstOption: "",
            options: function() {
                return [

                    {
                        label: "В один конец",
                        value: 'prices_one_direction'
                    }, {
                        label: "В оба конца",
                        value: 'prices_two_directions'
                    }

                ]
            }
        }
    },

    prices_avaible: {
        type: String,
        label: "Способы",
        optional: true,
        autoform: {
            type: "select",
            firstOption: "",
            options: function() {
                curr_transfer4 = AutoForm.getFieldValue('transfer', 'TransferSchema');
                curr_prices = AutoForm.getFieldValue('direction', 'TransferSchema');

                pricesArr = [];
                if (curr_prices === 'prices_one_direction') {
                    pricesArr.splice(0, pricesArr.length);
                    pricesArr.push(Object.keys(Transfers.findOne({
                        _id: curr_transfer4
                    }).prices_one_direction));
                } else if (curr_prices === 'prices_two_directions') {
                    pricesArr.splice(0, pricesArr.length);
                    pricesArr.push(Object.keys(Transfers.findOne({
                        _id: curr_transfer4
                    }).prices_two_directions));
                } else {
                    pricesArr.splice(0, pricesArr.length);
                };

                return _.flatten(pricesArr).map(function(a) {
                    return {
                        value: a,
                        label: a
                    }
                })

            }
        }
    },

    pax_one_way: {
        type: Number,
        label: "Людей (туда)",
        optional: true
    },
    pax_two_ways: {
        type: Number,
        label: "Людей (назад)",
        optional: true
    },
    additional_info: {
        type: String,
        label: "Дополнительно",
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'textarea'
            }
        }
    },
    additional_question: {
        type: String,
        label: "Доп. вопросы организатору",
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'textarea'
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
                return new Date();
            } else if (this.isUpsert) {
                return {
                    $setOnInsert: new Date()
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
            return "Трансфер"
        }
    }
}));
