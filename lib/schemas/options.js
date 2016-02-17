Options = new Mongo.Collection("options");

Options.attachSchema(new SimpleSchema({
	options_discount_min: {
		type: Number,
		max: 50,
		optional: true,
		label: "Размер мин скидки (в %)"
	},
	options_discount_med: {
		type: Number,
		max: 50,
		optional: true,
		label: "Размер ср скидки (в %)"
	},
	options_discount_max: {
		type: Number,
		max: 50,
		optional: true,
		label: "Размер макс скидки (в %)"
	}
}));

Options.attachSchema(new SimpleSchema({
	options_kids_weigth: {
		type: Number,
		optional: true,
		label: "Максимальный вес ребенка (кг)"
	},
	options_kids_height: {
		type: Number,
		optional: true,
		label: "Максимальный рост ребенка (см)"
	},
	options_kids_age: {
		type: Number,
		optional: true,
		label: "Максимальный возраст ребенка (лет)"
	},
}));
