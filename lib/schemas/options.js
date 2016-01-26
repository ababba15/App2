Options = new Mongo.Collection("options");

Options.attachSchema(new SimpleSchema({
	discount: {
		type: Object
	},
	'discount.min': {
		type: Number,
		max: 100,
		label: "Размер мин скидки (в %)"
	},
	'discount.med': {
		type: Number,
		max: 100,
		label: "Размер ср скидки (в %)"
	},
	'discount.max': {
		type: Number,
		max: 100,
		label: "Размер макс скидки (в %)"
	},
}));
