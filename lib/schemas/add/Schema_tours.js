Tours = new Mongo.Collection("tours");
Tours.attachSchema(new SimpleSchema({
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
	name: {
		type: String,
		optional: true,
		label: "Название экскурсии/шоу" //
	},
	program: {
		type: String,
		optional: true,
		label: "Программа" //
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
	location: {
		type: String,
		label: "Выберите локацию",
		optional: true,
		autoform: {
			type: "universe-select",
			firstOption: "",
			options: function () {
				return Locations.find().map(function (it) {
					return {
						label: it.name,
						value: it._id
					};
				});
			}
		}
	},
	district: {
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
	variants: {
		type: [String],
		label: "Доступные варианты цены",
		optional: true,
		autoform: {
			type: "select-checkbox",
			firstOption: "",
			options: function () {
				return [
					{
						label: "за группу",
						value: 'group'
					},
					{
						label: "за человека",
						value: 'individual'
					}
        ];
			}
		}
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
	work_time: {
		type: [Object],
		label: "",
		optional: true
	},
	'work_time.$.time_from': {
		type: String,
		label: "Время начала",
		optional: true,
		autoform: {
			afFieldInput: {
				class: "time"
			}
		},
	},
	'work_time.$.time_to': {
		type: String,
		label: "Время окончания",
		optional: true,
		autoform: {
			afFieldInput: {
				class: "time"
			}
		},
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
	district_pickup: {
		type: [Object],
		label: "",
		optional: true
	},
	'district_pickup.$.district': {
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
	"district_pickup.$.time": {
		type: String,
		label: "Время пикапа",
		optional: true,
		autoform: {
			afFieldInput: {
				class: "time"
			}
		},
	},
	price_adult: {
		type: Number,
		label: "Стоимость для взрослого",
		optional: true
	},
	price_adult_net: {
		type: Number,
		label: "Стоимость для взрослого (net)",
		optional: true
	},
	price_child: {
		type: Number,
		label: "Стоимость для ребенка",
		optional: true
	},
	price_child_net: {
		type: Number,
		label: "Стоимость для ребенка (net)",
		optional: true
	},
	price_group: {
		type: Number,
		label: "Стоимость для группы",
		optional: true
	},
	price_group_net: {
		type: Number,
		label: "Стоимость для группы (net)",
		optional: true
	},
	max_group: {
		type: Number,
		label: "Максимальный размер группы (до..)",
		optional: true
	},
	discount: {
		type: String,
		label: "Скидка",
		optional: true,
		autoform: {
			type: "universe-select",
			firstOption: "",
			options: function () {
				return [
					{
						label: "доступна",
						value: "avaible"
					},
					{
						label: "не доступна",
						value: "not_avaible"
					}
				];
			}
		}
	},
	pre_pay: {
		type: String,
		label: "Нужна редоплата",
		optional: true,
		autoform: {
			type: "universe-select",
			options: function () {
				return [
					{
						label: "Да",
						value: "yes"
					},
					{
						label: "Нет",
						value: "no"
					},
					];
			}
		}
	},
	pre_pay_system: {
		type: String,
		label: "Платежные системы",
		optional: true,
		// autoform: {
		// 	type: "select_checkbox",
		// 	options: function () {
		// 		return Payment_Systems.find().map(function (it) {
		// 			return {
		// 				label: it.name,
		// 				value: it._id
		// 			};
		// 		})
		// 	}
		// }
	},
	guide: {
		type: String,
		label: "Гид",
		optional: true,
		autoform: {
			type: "universe-select",
			firstOption: "",
			options: function () {
				return [
					{
						label: "русский",
						value: "russian"
					},
					{
						label: "европеец",
						value: "english"
					},
					{
						label: "таец",
						value: "thai"
					},
				];
			}
		}
	},
	guide_speaks: {
		type: [String],
		label: "Языки гида",
		optional: true,
		autoform: {
			type: "select-checkbox",
			firstOption: "",
			options: function () {
				return [
					{
						label: "говорит по-русски",
						value: "speaks_russian"
					},
					{
						label: "говорит по-английски",
						value: "speaks_english"
					}
				];
			}
		}
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
