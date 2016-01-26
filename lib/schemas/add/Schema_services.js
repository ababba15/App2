Services = new Mongo.Collection("services");

Services.attachSchema(new SimpleSchema({
	name: {
		type: String,
		label: "Название",
		optional: true
	},
	currency: {
		type: String,
		label: "Валюта",
		optional: true,
		autoform: {
			type: "universe-select",
			firstOption: "",
			options: function () {
				return [
					{
						label: "Бат",
						value: 'THB'
						},
					{
						label: "Доллар",
						value: 'USD'
						},
					{
						label: "Рубль",
						value: 'RUB'
						}
					]
			}
		}
	},
	url: {
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
