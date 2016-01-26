Visas = new Mongo.Collection("visas");
Visas.attachSchema(new SimpleSchema({

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
	visa_type: {
		type: String,
		label: "Тип визы",
		optional: true
	},
	location: {
		type: String,
		label: "Место предоставления",
		optional: true,
		autoform: {
			type: "universe-select",
			firstOption: "",
			options: function () {
				return Places.find().map(function (it) {
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
	time: {
		type: Object,
		label: "",
		optional: true
	},
	'time.there_arrive_time': {
		type: String,
		label: "Время выезда туда",
		optional: true,
		autoform: {
			afFieldInput: {
				class: "time"
			}
		},
	},
	'time.back_arrive_time': {
		type: String,
		label: "Время выезда обратно",
		optional: true,
		autoform: {
			afFieldInput: {
				class: "time"
			}
		},
	},
	'time.duration_days': {
		type: Number,
		label: "Продолжительность в днях",
		optional: true
	},
	when_avaible: {
		type: String,
		label: "Доступно",
		optional: true,
		autoform: {
			type: "universe-select",
			options: function () {
				return [
					{
						label: "в дни недели",
						value: "week_days"
					},
					{
						label: "в конкретные даты",
						value: "exact_dates"
					}
				]
			}
		},
	},
	work_weekdays: {
		type: [String],
		label: "Дни трансфера",
		optional: true,
		autoform: {
			type: "universe-select",
			defaultValue: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", 'Sun'],
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
	dates: {
		type: [Object],
		label: "",
		optional: true
	},
	'dates.$.date': {
		type: String,
		label: "Доступная дата",
		optional: true,
		autoform: {
			afFieldInput: {
				class: "date"
			}
		},
	},
	prices: {
		type: Object,
		label: "",
		optional: true
	},
	'prices.price': {
		type: Number,
		label: "Стоимость",
		optional: true
	},
	'prices.price_net': {
		type: Number,
		label: "Стоимость (net)",
		optional: true
	},
	'prices.consular_fee': {
		type: Number,
		label: "Консульский сбор",
		optional: true
	},
	additional_info: {
		type: String,
		label: "Инфо по услуге",
		optional: true,
		autoform: {
			afFieldInput: {
				type: "textarea"
			}
		}
	},
	for_tourist_info: {
		type: String,
		label: "Что сказать туристу",
		optional: true,
		autoform: {
			afFieldInput: {
				type: "textarea"
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
