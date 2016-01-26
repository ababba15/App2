Meteor.subscribe("Visas");

Template.addVisa.helpers({
	reactive_table_settings_Visa: function () {
		return {
			collection: Visas,
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
                    key: 'visa_type',
                    label: 'Тип визы',
                    },
                {
                    key: 'location',
                    label: 'Место предоставления',
                    fn: function (value, object) {
						return Places.findOne({
							_id: value
						}).name;
					}
                    },
				{
					key: 'service',
					label: 'Сервис',
					fn: function (value, object) {
						return Services.find({
							_id: {
								$in: value
							}
						}).map(function (it) {
							return " " + it.name;
						})
					}
					},
				{
					key: 'when_avaible',
					label: 'Доступно',
					fn: function (value, object) {
						return Services.find({
							_id: {
								$in: value
							}
						}).map(function (it) {
							return " " + it.name;
						})
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
					tmpl: Template.Visa_updateModal,
					hideToggle: true
					},

				{
					key: 'remove',
					label: '',
					tmpl: Template.Visa_removeModal,
					hideToggle: true

					}
			]

		}
	}
});

