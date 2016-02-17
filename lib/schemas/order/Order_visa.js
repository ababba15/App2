Visa_Orders = new Mongo.Collection('visa_orders');

Visa_Orders.attachSchema(new SimpleSchema({
    visa_place_to: {
        type: String,
        label: "Визовая услуга",
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
            return "Виза"
        }
    }
}));
