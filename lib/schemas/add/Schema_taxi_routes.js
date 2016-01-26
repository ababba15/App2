Taxi_Routes = new Mongo.Collection("taxi_routes");
Taxi_Routes.attachSchema(new SimpleSchema({
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
	district_from: {
		type: String,
		label: "Откуда",
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
	district_to: {
		type: String,
		label: "Куда",
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
	sedan_price: {
		type: Number,
		label: "Стоимость за седан",
		optional: true
	},
	minivan_price: {
		type: Number,
		label: "Стоимость за минивен",
		optional: true
	},
	minibus_price: {
		type: Number,
		label: "Стоимость за минибас",
		optional: true
	},
	minibus_1to4_price: {
		type: Number,
		label: "Стоимость за минибас (1-4)",
		optional: true
	},
	minibus_5to8_price: {
		type: Number,
		label: "Стоимость за минибас (5-8)",
		optional: true
	},
	sedan_price_net: {
		type: Number,
		label: "Стоимость за седан (net)",
		optional: true
	},
	minivan_price_net: {
		type: Number,
		label: "Стоимость за минивен (net)",
		optional: true
	},
	minibus_price_net: {
		type: Number,
		label: "Стоимость за минибас (net)",
		optional: true
	},
	minibus_1to4_price_net: {
		type: Number,
		label: "Стоимость за минибас (1-4) (net)",
		optional: true
	},
	minibus_5to8_price_net: {
		type: Number,
		label: "Стоимость за минибас (5-8) (net)",
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
