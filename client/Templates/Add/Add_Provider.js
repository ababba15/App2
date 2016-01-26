Meteor.subscribe("Providers");
// reVar = new ReactiveVar();

Template.addProvider.helpers({
    reactive_table_settings_provider: function() {
        return {
            collection: Providers,
            rowsPerPage: 100,
            showFilter: true,
            multiColumnSort: false,
            showColumnToggles: true,
            class: 'table table-hover',
            fields: [{
                    key: 'name',
                    label: 'Название'
                }, {
                    key: 'service',
                    label: 'Сервис',
                    fn: function(value, object) {
                        return Services.find({
                            _id: {
                                $in: value
                            }
                        }).map(function(it) {
                            return " " + it.name;
                        })
                    }
                }, {
                    key: 'provider_place',
                    label: 'Локация',
                    fn: function(value, object) {
                        return Locations.find({
                            _id: {
                                $in: value.location
                            }
                        }).map(function(it) {
                            return " " + it.name;
                        })
                    }
                }, {
                    key: 'provider_place',
                    label: 'Район',
                    fn: function(value, object) {
                        return Districts.find({
                            _id: {
                                $in: value.district
                            }
                        }).map(function(it) {
                            return " " + it.name;
                        })
                    },
                    hidden: true
                }, {
                    key: 'provider_place',
                    label: 'Место',
                    fn: function(value, object) {
                        return Places.find({
                            _id: {
                                $in: value.place
                            }
                        }).map(function(it) {
                            return " " + it.name;
                        })
                    },
                    hidden: true
                }, {
                    key: 'provider_lineID',
                    label: 'Line',
                }, {
                    key: 'provider_tel',
                    label: 'Телефон',
                    hidden: true
                }, {
                    key: 'provider_email',
                    label: 'E-mail',
                }, {
                    key: 'date_created',
                    label: 'Дата создания',
                    hidden: true
                },

                {
                    key: 'remove',
                    label: '',
                    tmpl: Template.Provider_removeModal,
                    hideToggle: true,

                }, {
                    key: 'change',
                    label: '',
                    tmpl: Template.Provider_updateModal,
                    hideToggle: true,

                },

            ]

        }
    }
});

// Template.addProvider.events ({
// 	'change select' : function(event){
//         reVar.set($(this).text( $( "div" ).data()));
//     }
// })
