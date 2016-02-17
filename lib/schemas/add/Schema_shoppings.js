Shoppings = new Mongo.Collection("shoppings");
Shoppings.attachSchema(new SimpleSchema({

	provider: {
		type: String,
		label: "Организатор",
		autoform: {
			type: "universe-select",
			firstOption: "",
			options: function () {
				return Providers.find().map(function (it) {
					return {
						label: it.name,
						value: it._id
					};
				});
			}
		}
	},
	shop_id: {
		type: String,
		optional: true,
		label: "Магазин",
		autoform: {
			type: "universe-select",
			firstOption: "",
			options: function () {
				return Places.find({'place_type':'shop'}).map(function (it) {
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
			options: function () {
				return Services.find().map(function (it) {
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
			options: function () {
				return [
					{
						label: "Понедельник",
						value: "Mon"
					},
					{
						label: "Вторник",
						value: "Tue"
					},
					{
						label: "Среда",
						value: "Wed"
					},
					{
						label: "Четверг",
						value: "Thu"
					},
					{
						label: "Пятница",
						value: "Fri"
					},
					{
						label: "Суббота",
						value: "Sat"
					},
					{
						label: "Воскресенье",
						value: "Sun"
					}
        	];
			}
		}
	},
	work_time_from: {
		type: String,
		label: "Время работы с..",
		optional: true,
		autoform: {
			afFieldInput: {
				class: "time"
			}
		},
	},
	work_time_to: {
		type: String,
		label: "Время работы до..",
		optional: true,
		autoform: {
			afFieldInput: {
				class: "time"
			}
		},
	},
	transfer_time_from: {
		type: String,
		label: "Время трансфера с..",
		optional: true,
		autoform: {
			afFieldInput: {
				class: "time"
			}
		},
	},
	transfer_time_to: {
		type: String,
		label: "Время трансфера до..",
		optional: true,
		autoform: {
			afFieldInput: {
				class: "time"
			}
		},
	},
	transfer_option: {
		type: String,
		label: "Условия предоставления трансфера",
		optional: true,
		autoform: {
			type: "universe-select",
			firstOption: "",
			options: function () {
				return [
					{
						label: "не предоставляется",
						value: "not_provided"
					},
					{
						label: "бесплатно",
						value: "for_free"
					},
					{
						label: "платный в одну сторону",
						value: "for_free_one_direction"
					},
					{
						label: "бесплатный при покупке от..",
						value: "buy_from"
					},
					{
						label: "платный",
						value: "payed"
					},
					{
						label: "особые условия",
						value: "exeptional"
					}
        ];
			}
		}
	},
	buy_from_sum_transfer: {
		type: Number,
		label: "Сумма покупки",
		optional: true
	},
	transfer_price: {
		type: Number,
		label: "Стоимость трансфера",
		optional: true
	},
	transfer_price_net: {
		type: Number,
		label: "Стоимость трансфера (net)",
		optional: true
	},
	transfer_price_one_direction: {
		type: Number,
		label: "Стоимость трансфера в одну сторону",
		optional: true
	},
	transfer_price_one_direction_net: {
		type: Number,
		label: "Стоимость трансфера в одну сторону (net)",
		optional: true
	},
	transfer_exeptional: {
		type: String,
		label: "Особые условия трансфера",
		optional: true,
		autoform: {
			afFieldInput: {
				type: 'summernote'
			}
		}
	},
	district_overpay: {
		type: [Object],
		minCount: 1,
		label: "",
		optional: true
	},
	'district_overpay.$.district': {
		type: String,
		label: "Выберите район",
		optional: true,
		autoform: {
			type: "universe-select",
			firstOption: "",
			options: function () {
				return Districts.find().map(function (it) {
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
	delivery_option: {
		type: String,
		label: "Условия доставки товара",
		optional: true,
		autoform: {
			type: "universe-select",
			firstOption: "",
			options: function () {
				return [
					{
						label: "не предоставляется",
						value: "not_provided"
					},
					{
						label: "бесплатно",
						value: "for_free"
					},
					{
						label: "при покупке от..",
						value: "buy_from"
					},
					{
						label: "платный",
						value: "payed"
					},
					{
						label: "особые условия",
						value: "exeptional"
					}
        ];
			}
		}
	},
	buy_from_sum_delivery: {
		type: Number,
		label: "Сумма покупки",
		optional: true
	},
	delivery_price: {
		type: Number,
		label: "Стоимость доставки",
		optional: true
	},
	delivery_exeptional: {
		type: String,
		label: "Особые условия доставки",
		optional: true,
		autoform: {
            afFieldInput: {
                type: 'summer'
            }
        }
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
		autoValue: function () {
			if (this.isInsert) {
				return new Date;
			}
			else if (this.isUpsert) {
				return {
					$setOnInsert: new Date
				};
			}
			else {
				this.unset();
			}
		}
	},
	who_created: {
		type: String,
		autoform: {
			type: 'hidden'
		},
		autoValue: function () {
			return this.userId;
		}
	}

}));
