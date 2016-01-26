Meteor.subscribe("Shoppings");

Template.addShopping.helpers({
    reactive_table_settings_shopping: function() {
        return {
            collection: Shoppings,
            rowsPerPage: 100,
            showFilter: true,
            multiColumnSort: false,
            showColumnToggles: true,
            class: 'table table-hover',
            fields: [{
                    key: 'shop_id',
                    label: 'Магазин',
                    fn: function(value) {
                        return Places.findOne({
                            _id: value
                        }).name;
                    }

                }, {
                	key: 'provider',
                    label: 'Организатор',
                    fn: function(value) {
                        return Providers.findOne({
                            _id: value
                        }).name;
                    }
                }, {
                    label: 'Трансфер',
                    fn: function(value, object) {
                        if (object.transfer_time_from !== undefined && object.transfer_time_to !== undefined) {
                            return (object.transfer_time_from + "  - " + object.transfer_time_to);
                        } else {
                            return " --- "
                        }
                    }
                }, {
                    label: 'Время работы',
                    fn: function(value, object) {
                        if (object.work_time_from && object.work_time_to) {
                            return (object.work_time_from + "  -  " + object.work_time_to);
                        } else {
                            return " --- "
                        }
                    }
                }, {
                    label: 'Выходные',
                    fn: function(value, object) {
                        if (object.off_weekdays) {
                            return (object.off_weekdays.join(', '));
                        } else {
                            return " --- "
                        }
                    }
                }, {
                    key: 'date_created',
                    label: 'Дата создания',
                    hidden: true
                }, {
                    key: 'change',
                    label: '',
                    tmpl: Template.Shopping_updateModal,
                    hideToggle: true
                },

                {
                    key: 'remove',
                    label: '',
                    tmpl: Template.Shopping_removeModal,
                    hideToggle: true

                }
            ]

        }
    }
});
