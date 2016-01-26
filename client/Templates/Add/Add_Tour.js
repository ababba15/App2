Meteor.subscribe("Tours");

Template.addTour.helpers({
	reactive_table_settings_Tour: function () {
		return {
			collection: Tours,
			rowsPerPage: 100,
			showFilter: true,
			multiColumnSort: false,
			showColumnToggles: true,
			class: 'table table-hover',
			fields: [{
					key: 'name',
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
					key: 'program',
					label: 'Программа',
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
					key: 'location',
					label: 'Локация',
					fn: function (value, object) {
						return Locations.findOne({
							_id: value
						}).name;
					}
					},
				{
					key: 'district',
					label: 'Район',
					fn: function (value, object) {
						return Districts.findOne({
							_id: value
						}).name;
					}
					},
				{
					key: 'variants',
					label: 'Групп./индив.',
					hidden: true
					},
				{
					key: 'price_adult',
					label: 'Стоимость (взр)',
					hidden: true
					},
				{
					key: 'price_child',
					label: 'Стоимость (реб)',
					hidden: true
					},
				{
					key: 'price_group',
					label: 'Стоимость (группа)',
					hidden: true
					},
				{
					key: 'website_link',
					label: 'Ссылка',
					hidden: true
					},
				{
					key: 'date_created',
					label: 'Дата создания',
					hidden: true
					},
				{
					key: 'change',
					label: '',
					tmpl: Template.Tour_updateModal,
					hideToggle: true
					},

				{
					key: 'remove',
					label: '',
					tmpl: Template.Tour_removeModal,
					hideToggle: true

					}
			]

		}
	}
});

