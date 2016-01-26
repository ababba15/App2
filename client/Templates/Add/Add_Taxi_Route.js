Meteor.subscribe("Taxi_Routes");

Template.addTaxi_Route.helpers({
	reactive_table_settings_Taxi_Route: function () {
		return {
			collection: Taxi_Routes,
			rowsPerPage: 100,
			showFilter: true,
			multiColumnSort: false,
			showColumnToggles: true,
			class: 'table table-hover',
			fields: [
				{
					key: 'provider',
					label: 'Организатор',
					fn: function (value) {
						return Providers.findOne({
							_id: value
						}).name;
					}
							},
				{
					key: 'district_from',
					label: 'Откуда',
					fn: function (value, object) {
						return Districts.findOne({
							_id: value
						}).name;
					}
					},
				{
					key: 'district_to',
					label: 'Куда',
					fn: function (value, object) {
						return Districts.findOne({
							_id: value
						}).name;
					}
					},
				{
					key: 'sedan_price',
					label: 'седан',
					},
				{
					key: 'minivan_price',
					label: 'минивен',
					},
				{
					key: 'minibus_price',
					label: 'минибас',
					},
				{
					key: 'minibus_1to4_price',
					label: 'минибас (1-4)',
					},
				{
					key: 'minibus_5to8_price',
					label: 'минибас (5-8)',
					},
				{
					key: 'date_created',
					label: 'Дата создания',
					hidden: true
					},
				{
					key: 'change',
					label: '',
					tmpl: Template.Taxi_Route_updateModal,
					hideToggle: true
					},

				{
					key: 'remove',
					label: '',
					tmpl: Template.Taxi_Route_removeModal,
					hideToggle: true

					}
			]

		}
	}
});

