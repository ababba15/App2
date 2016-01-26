Locations = new Mongo.Collection("locations");
Districts = new Mongo.Collection("districts");
Places = new Mongo.Collection("places");

Locations.attachSchema(new SimpleSchema({
	name: {
		type: String,
		label: "Локация",
		optional: true
	}
}));

Districts.attachSchema(new SimpleSchema({
	location: {
		type: String,
		label: "Локация",
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
	name: {
		type: String,
		label: "Название района",
		optional: true
	}
}));

Places.attachSchema(new SimpleSchema({
	district: {
		type: String,
		label: "Район",
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
	name: {
		type: String,
		label: "Место",
		optional: true
	},
	place_type: {
		type: String,
		label: "Тип места",
		optional: true,
		autoform: {
			type: "universe-select",
			firstOption: "",
			afFieldInput: {
				options: function () {
					return [
						{
							label: "Аэропорт",
							value: 'airport'
						},
						{
							label: "Поселок",
							value: 'village'
						},
						{
							label: "Отель",
							value: 'hotel'
						},
						{
							label: "Вилла",
							value: 'villa'
						},
						{
							label: "Кондоминимум",
							value: 'condo'
						},
						{
							label: "Пирс",
							value: 'pier'
						},
						{
							label: "Магазин",
							value: 'shop'
						},
						{
							label: "Госпиталь",
							value: 'hospital'
						},
						{
							label: "Спа",
							value: 'spa'
						},
						{
							label: "Автобусная станция",
							value: 'bus_station'
						},
						{
							label: "Другое",
							value: 'other'
						},



					]
				}
			}
		}
	},

	from_center: {
		type: Number,
		label: "Расстояние от центра (км)",
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
