export default ({
  'context': {
    'type': 'custom',
    'component': 'RowControl',
    'nullable': false,
    'visible': true,
    'editable': false,
    'settable': false,
    'filterable': false,
    'fixed': {
      active: true,
      position: 'left'
    },
    'order': 0,
    'width': {
      'min': 88,
      'max': 88,
      'default': 88
    }
  },
  'id': {
    'type': 'int',
    'nullable': false,
    'visible': true,
    'editable': false,
    'settable': true,
    'filterable': false,
    'sortable': {
      status: true,
      direction: '',
      default: 'desc'
    },
    'fixed': {
      active: true,
      position: 'left'
    },
    'order': 1,
    'width': {
      'min': 55,
      'max': 150,
      'default': 100
    }
  },
  'quantity': {
    'type': 'int',
    'nullable': false,
    'visible': true,
    'settable': true,
    'filterable': false,
    'isSammary': true,
    'sortable': {
      status: true,
      direction: '',
      default: 'asc'
    },
    'fixed': {
      active: true,
      position: 'right'
    },
    'editable': true,
    'order': 2,
    'width': {
      'min': 55,
      'max': 250,
      'default': 100
    }
  }
})
