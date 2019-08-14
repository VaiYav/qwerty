export default {
  columns: {
    'open_date': {
      'type': 'datetime',
      'nullable': true,
      'visible': true,
      'editable': false,
      'order': 4,
      'width': {
        'min': 5,
        'max': 50,
        'default': 20
      }
    },
    'last_sale': {
      'type': 'datetime',
      'nullable': true,
      'visible': true,
      'editable': false,
      'order': 5,
      'width': {
        'min': 5,
        'max': 50,
        'default': 20
      }
    },
    'last_pricerule_change': {
      'type': 'datetime',
      'nullable': true,
      'visible': true,
      'editable': false,
      'order': 6,
      'width': {
        'min': 5,
        'max': 50,
        'default': 20
      }
    },
    'sales_channel': {
      'type': 'custom',
      'nullable': false,
      'visible': true,
      'editable': false,
      'order': 7,
      'width': {
        'min': 5,
        'max': 50,
        'default': 20
      }
    },
    'account_name': {
      'type': 'string',
      'nullable': false,
      'visible': true,
      'editable': false,
      'order': 8,
      'width': {
        'min': 5,
        'max': 50,
        'default': 20
      }
    }
  }
}
