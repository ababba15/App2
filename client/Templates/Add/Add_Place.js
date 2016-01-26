Meteor.subscribe("Locations");
Meteor.subscribe("Districts");
Meteor.subscribe("Places");

Template.addPlace.helpers({
	reactive_table_settings_location: function () {
		return {
			collection: Locations,
			rowsPerPage: 100,
			showFilter: false,
			multiColumnSort: false,
			showColumnToggles: false,
			class: 'table table-hover',
			fields: [
				{
					key: 'name',
					label: 'Локация'
				},
				{
					key: 'change',
					label: '',
					tmpl: Template.Location_updateModal,
					hideToggle: true
				},
				{

					key: 'remove',
					label: '',
					tmpl: Template.Location_removeModal,
					hideToggle: true
				},

			]

		}
	},
	reactive_table_settings_district: function () {
		return {
			collection: Districts,
			rowsPerPage: 100,
			showFilter: false,
			multiColumnSort: false,
			showColumnToggles: false,
			class: 'table table-hover',
			fields: [
				{
					key: 'location',
					label: 'Локация',
					fn: function (value) {
						return Locations.findOne({
							_id: value
						}).name;
					}

				},
				{
					key: 'name',
					label: 'Район'
				},
				{
					key: 'change',
					label: '',
					tmpl: Template.District_updateModal,
					hideToggle: true
				},
				{
					key: 'remove',
					label: '',
					tmpl: Template.District_removeModal,
					hideToggle: true
				},

			]

		}
	},
	reactive_table_settings_place: function () {
		return {
			collection: Places,
			rowsPerPage: 100,
			showFilter: true,
			multiColumnSort: false,
			showColumnToggles: true,
			class: 'table table-hover',
			fields: [
				{
					key: 'name',
					label: 'Место'
				},
				{
					label: 'Локация',
					fn: function (value, object) {

						var locId = Districts.findOne({
							_id: object.district
						}).location;
						return Locations.findOne({
							_id: locId
						}).name;
					}
				},
				{
					key: 'district',
					label: 'Район',
					fn: function (value) {
						return Districts.findOne({
							_id: value
						}).name;
					}
				},
				{
					key: 'place_type',
					label: 'Тип места'
				},
				{
					key: 'from_center',
					label: 'От центра'
				},
				{
					key: 'change',
					label: '',
					tmpl: Template.Place_updateModal,
					hideToggle: true
				},
				{
					key: 'remove',
					label: '',
					tmpl: Template.Place_removeModal,
					hideToggle: true
				},

			]

		}
	}
});
