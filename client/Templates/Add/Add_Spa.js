Meteor.subscribe("Spas");

Template.addSpa.helpers({
	reactive_table_settings_Spa: function () {
		return {
			collection: Spas,
			rowsPerPage: 100,
			showFilter: true,
			multiColumnSort: false,
			showColumnToggles: true,
			class: 'table table-hover',
			fields: [{
					key: 'spa_id',
					label: 'Название'
					},
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
					key: 'back_transfer_option',
					label: 'Условия обратного трансфера',
					},
				{
					key: 'date_created',
					label: 'Дата создания',
					hidden: true
					},
				{
					key: 'change',
					label: '',
					tmpl: Template.Spa_updateModal,
					hideToggle: true
					},

				{
					key: 'remove',
					label: '',
					tmpl: Template.Spa_removeModal,
					hideToggle: true

					}
			]

		}
	}
});

