Providers = new Mongo.Collection("providers");

Providers.attachSchema(new SimpleSchema({
	name: {
		type: String,
		label: "Название",
		optional: true
	},
	off_name: {
		type: String,
		label: "Юридическое название",
		optional: true
	},

	service: {
		type: String,
		label: "Сервис",
		optional: true,
		autoform: {
			type: "universe-select",
			firstOption: "",
			options: function () {
				return Services.find().map(function (it) {
					return {
						label: it.name,
						value: it._id
					};
				});
			}
		}
	},

	provider_place: {
		type: Object,
		optional: true
	},

	'provider_place.location': {
		type: [String],
		label: "Локация",
		optional: true,
		autoform: {
			type: "universe-select",
			firstOption: "",
			afFieldInput: {
				template: "nothing",
				multiple: true
			},
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
	'provider_place.district': {
		type: [String],
		label: "Район",
		optional: true,
		autoform: {
			type: "universe-select",
			firstOption: "",
			afFieldInput: {
				template: "nothing",
				multiple: true
			},
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
	'provider_place.place': {
		type: [String],
		label: "Место",
		optional: true,
		autoform: {
			type: "universe-select",
			firstOption: "",
			afFieldInput: {
				template: "nothing",
				multiple: true
			},
			options: function () {
				return Places.find().map(function (it) {
					return {
						label: it.name,
						value: it._id
					};
				});
			}
		}
	},

	booking_time_from: {
		type: String,
		label: "Время букинга с..",
		optional: true,
		autoform: {
			afFieldInput: {
				class: "time"
			}
		},
	},
	booking_time_to: {
		type: String,
		label: "Время букинга до..",
		optional: true,
		autoform: {
			afFieldInput: {
				class: "time"
			}
		},
	},

	night_time_from: {
		type: String,
		label: "Ночное время с..",
		optional: true,
		autoform: {
			afFieldInput: {
				class: "time"
			}
		},
	},
	night_time_to: {
		type: String,
		label: "Ночное время до..",
		optional: true,
		autoform: {
			afFieldInput: {
				class: "time"
			}
		},
	},

	night_tax: {
		type: Number,
		label: "Доплата за ночное время",
		optional: true,
	},
	child_seat_tax: {
		type: Number,
		label: "Доплата за детское кресло",
		optional: true
	},
	animal_tax: {
		type: Number,
		label: "Доплата за животного",
		optional: true
	},

	provider_lineID: {
		type: String,
		label: "Line-ID организатора",
		optional: true
	},
	provider_tel: {
		type: String,
		label: "Номер телефона организатора",
		optional: true,
		autoform: {
			afFieldInput: {
				type: "tel"
			}
		},
	},
	provider_email: {
		type: String,
		label: "E-mail организатора",
		optional: true,
		autoform: {
			afFieldInput: {
				type: "email"
			}
		},
	},
	provider_info: {
		type: String,
		label: "Доп. информация об организаторе",
		optional: true,
		autoform: {
			afFieldInput: {
				type: 'summernote'
			}
		},
	},

	provider_invoice_lineID: {
		type: String,
		label: "Line-ID для инвоиса",
		optional: true
	},
	provider_invoice_tel: {
		type: String,
		label: "Номер телефона для инвоиса",
		optional: true,
		autoform: {
			afFieldInput: {
				type: "tel"
			}
		},
	},
	provider_invoice_email: {
		type: String,
		label: "E-mail для инвоиса",
		optional: true,
		autoform: {
			afFieldInput: {
				type: "email"
			}
		},
	},
	provider_invoice_requisites: {
		type: String,
		label: "Реквизиты для инвоиса",
		optional: true,
		autoform: {
            afFieldInput: {
                type: 'summer'
            }
        }
	},
	provider_invoice_person: {
		type: String,
		label: "Контактное лицо для инвоиса",
		optional: true,
		autoform: {
            afFieldInput: {
                type: 'summer'
            }
        }
	},
	provider_invoice_email_template: {
		type: String,
		label: "Шаблон для инвоиса",
		optional: true,
		autoform: {
            afFieldInput: {
                type: 'summer'
            }
        }
	},
	provider_invoice_info: {
		type: String,
		label: "Доп. информация по инвоисам",
		optional: true,
		autoform: {
            afFieldInput: {
                type: 'summer'
            }
        }
	},

	// file: {
	// 	type: afSlingshot.fileSchema,
	// 	autoform: {
	// 		type: 'slingshot',
	// 		afFieldInput: {
	// 			slingshotdirective: 'myDefinedDirective'
	// 		}
	// 	}
	// },

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
