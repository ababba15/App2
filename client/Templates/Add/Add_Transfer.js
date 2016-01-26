Meteor.subscribe("Transfers");

Template.addTransfer.helpers({
	reactive_table_settings_Transfer: function () {
		return {
			collection: Transfers,
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
					key: 'service',
					label: 'Сервис',
					fn: function (value, object) {
						return Services.findOne({
							_id: value
						}).name
					}
				},
				{
					key: 'direction.from_district',
					label: 'Откуда (район)',
					fn: function (value, object) {
						return Districts.findOne({
							_id: value
						}).name;
					}
				},
				{
					key: 'direction.to_district',
					label: 'Куда (район)',
					fn: function (value, object) {
						return Districts.findOne({
							_id: value
						}).name;
					}
				},
				{
					key: 'date_created',
					label: 'Дата создания',
					hidden: true
				},
				{
					key: 'change',
					label: '',
					tmpl: Template.Transfer_updateModal,
					hideToggle: true
				},
				{
					key: 'remove',
					label: '',
					tmpl: Template.Transfer_removeModal,
					hideToggle: true
		}
		]
		}
	}
});
