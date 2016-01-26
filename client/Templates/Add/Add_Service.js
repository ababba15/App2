Meteor.subscribe("Services");


Template.addService.helpers({
	reactive_table_settings_Service: function () {
		return {
			collection: Services,
			rowsPerPage: 100,
			showFilter: false,
			multiColumnSort: false,
			showColumnToggles: false,
			class: 'table table-hover',
			fields: [{
					key: 'name',
					label: 'Название'
					},
				{
					key: 'currency',
					label: 'Валюта'
					},
				{
					key: 'url',
					label: 'Ссылка на сайт'
					},
				{
					key: 'remove',
					label: '',
					tmpl: Template.Service_removeModal,
					hideToggle: true,

					},
				{
					key: 'change',
					label: '',
					tmpl: Template.Service_updateModal,
					hideToggle: true,

					},

			]

		}
	}
});
