Taxi_Orders = new Mongo.Collection('taxi_orders');

Taxi_Orders.attachSchema(new SimpleSchema({
    place_to: {
        type: String,
        label: "Куда ехать",
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
    date_time: {
        type: String,
        label: "Дата",
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
    kids: {
        type: Number,
        label: "Детей",
        optional: true,
        defaultValue: 0
    },
    luggage: {
        type: Number,
        label: "Багажа",
        optional: true
    },
    animals: {
        type: Number,
        label: "Животных",
        optional: true
    },
    car: {
        type: String,
        label: "Автомобиль",
        optional: true,
        autoform: {
            type: "universe-select",
            afFieldInput: {
                create: false,
                multiple: false
            },
            options: function() {
                var paxVar = Session.get('paxVar');
                var luggageVar = Session.get('luggageVar');
                var allVar = +paxVar + (luggageVar / 1.3);
                console.log(allVar);
                if (allVar <= 13.5 && allVar > 9) {
                    return [{
                        label: "Микроавтобус (5-8)",
                        value: "minibus_5to8"
                    }]
                } else if (allVar <= 9 && allVar > 6) {
                    return [{
                        label: "Минивен",
                        value: "minivan"
                    }, {
                        label: "Микроавтобус (1-4)",
                        value: "minibus_1to4"
                    }]
                } else if (allVar <= 6) {
                    return [{
                        label: "Седан",
                        value: "sedan"
                    }, {
                        label: "Минивен",
                        value: "minivan"
                    }, {
                        label: "Микроавтобус (1-4)",
                        value: "minibus_1to4"
                    }]
                } else if (allVar === 0 || allVar > 13.5) {
                    return []
                }

            }
        }
    },
    price: {
        type: Number,
        label: "Цена",
        optional: true
    },
    child_seat: {
        type: Number,
        label: "Детских кресел",
        optional: true,
        defaultValue: 0
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
            type: "universe-select",
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
            return "Такси"
        }
    }
}));
