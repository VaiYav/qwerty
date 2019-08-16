export default {
  columns: {
    'open_date': {
      'type': 'datetime',
      'nullable': true,
      'visible': false,
      'editable': false,
      'order': 3,
      'width': {
        'min': 5,
        'max': 50,
        'default': 20
      }
    },
    'last_sale': {
      'type': 'datetime',
      'nullable': true,
      'visible': false,
      'editable': false,
      'order': 4,
      'width': {
        'min': 5,
        'max': 50,
        'default': 20
      }
    },
    'last_pricerule_change': {
      'type': 'datetime',
      'nullable': true,
      'visible': false,
      'editable': false,
      'order': 5,
      'width': {
        'min': 5,
        'max': 50,
        'default': 20
      }
    },
    'sales_channel': {
      'type': 'custom',
      'nullable': false,
      'visible': false,
      'editable': false,
      'order': 6,
      'width': {
        'min': 5,
        'max': 50,
        'default': 20
      }
    },
    'account_name': {
      'type': 'string',
      'nullable': false,
      'visible': false,
      'editable': false,
      'order': 7,
      'width': {
        'min': 5,
        'max': 50,
        'default': 20
      }
    },
    'condition': {
      'type': 'string',
      'nullable': false,
      'visible': false,
      'editable': false,
      'order': 8,
      'width': {
        'min': 5,
        'max': 50,
        'default': 20
      }
    },
    'title': {
      'type': 'string',
      'nullable': false,
      'visible': true,
      'editable': false,
      'order': 9,
      'width': {
        'min': 5,
        'max': 50,
        'default': 20
      }
    },
    'sku': {
      'type': 'string',
      'nullable': false,
      'visible': true,
      'editable': false,
      'order': 10,
      'width': {
        'min': 5,
        'max': 50,
        'default': 20
      }
    },
    'article_number': {
      'type': 'string',
      'nullable': false,
      'visible': true,
      'editable': false,
      'order': 11,
      'width': {
        'min': 5,
        'max': 50,
        'default': 20
      }
    },
    'manufacturer': {
      'type': 'string',
      'nullable': true,
      'visible': true,
      'editable': false,
      'order': 12,
      'width': {
        'min': 5,
        'max': 50,
        'default': 20
      }
    },
    'part_number': {
      'type': 'string',
      'nullable': true,
      'visible': true,
      'editable': false,
      'order': 13,
      'width': {
        'min': 5,
        'max': 50,
        'default': 20
      }
    },
    'onlineprice_with_shipping_costs': {
      'type': 'float',
      'nullable': false,
      'visible': true,
      'editable': false,
      'order': 14,
      'width': {
        'min': 5,
        'max': 50,
        'default': 20
      }
    },
    'minimum_price': {
      'type': 'float',
      'nullable': true,
      'visible': true,
      'editable': true,
      'order': 15,
      'width': {
        'min': 5,
        'max': 50,
        'default': 20
      }
    },
    'maximum_price': {
      'type': 'float',
      'nullable': true,
      'visible': true,
      'editable': true,
      'order': 16,
      'width': {
        'min': 5,
        'max': 50,
        'default': 20
      }
    },
    'wish_price': {
      'type': 'float',
      'nullable': true,
      'visible': true,
      'editable': true,
      'order': 17,
      'width': {
        'min': 5,
        'max': 50,
        'default': 20
      }
    },
    'price_margin': {
      'type': 'custom',
      'nullable': true,
      'visible': true,
      'editable': false,
      'order': 18,
      'width': {
        'min': 5,
        'max': 50,
        'default': 20
      }
    },
    'strike_price': {
      'type': 'float',
      'nullable': true,
      'visible': true,
      'editable': true,
      'order': 19,
      'width': {
        'min': 5,
        'max': 50,
        'default': 20
      }
    },
    'purchase_price': {
      'type': 'float',
      'nullable': true,
      'visible': true,
      'editable': true,
      'order': 20,
      'width': {
        'min': 5,
        'max': 50,
        'default': 20
      }
    },
    'netto_costs': {
      'type': 'float',
      'nullable': true,
      'visible': true,
      'editable': true,
      'order': 21,
      'width': {
        'min': 5,
        'max': 50,
        'default': 20
      }
    },
    'margin_minprice': {
      'type': 'float',
      'nullable': true,
      'visible': true,
      'editable': true,
      'order': 22,
      'width': {
        'min': 5,
        'max': 50,
        'default': 20
      }
    },
    'margin_maxprice': {
      'type': 'float',
      'nullable': true,
      'visible': true,
      'editable': true,
      'order': 23,
      'width': {
        'min': 5,
        'max': 50,
        'default': 20
      }
    },
    'margin_wishprice': {
      'type': 'float',
      'nullable': true,
      'visible': true,
      'editable': true,
      'order': 24,
      'width': {
        'min': 5,
        'max': 50,
        'default': 20
      }
    },
    'cheapest_competitor': {
      'type': 'custom',
      'nullable': true,
      'visible': true,
      'editable': false,
      'order': 25,
      'width': {
        'min': 5,
        'max': 50,
        'default': 20
      }
    },
    'comparedwith_competitor': {
      'type': 'custom',
      'nullable': true,
      'visible': true,
      'editable': false,
      'order': 26,
      'width': {
        'min': 5,
        'max': 50,
        'default': 20
      }
    },
    'buybox_competitor': {
      'type': 'custom',
      'nullable': true,
      'visible': true,
      'editable': false,
      'order': 27,
      'width': {
        'min': 5,
        'max': 50,
        'default': 20
      }
    }
  },
  'meta': {
    'pagination': {
      'total': 550,
      'count': 50,
      'per_page': 50,
      'current_page': 1,
      'total_pages': 2,
      'links': {
        'next': '\/?page=2'
      }
    }
  },
  'data': [
    {
      'id': {
        'value': 46670286
      },
      'quantity': {
        'value': 0,
        'editable': true
      },
      'open_date': {
        'value': '2017-08-07T21:32:50.000000Z',
        'formatted': '07.08.2017'
      },
      'last_sale': {
        'value': '2017-11-16T14:45:04.000000Z',
        'formatted': '16.11.2017 (EUR 5.99)'
      },
      'last_pricerule_change': {
        'value': '2017-11-13T17:38:48.000000Z',
        'formatted': '13.11.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'Goobay Akku f\u00fcr Samsung: Galaxy Ace 2(GT-I8160P),Galaxy S Duos ersetzt EB425161LU, EB-L1M7FLU'
      },
      'sku': {
        'value': 'Rot22-8007334'
      },
      'article_number': {
        'value': 'B00DV3RSDU',
        'href': 'https:\/\/www.amazon.de\/dp\/B00DV3RSDU'
      },
      'manufacturer': {
        'value': 'digibuddy'
      },
      'part_number': {
        'value': '40628'
      },
      'onlineprice_with_shipping_costs': {
        'value': 5.99,
        'formatted': 'EUR 5,99'
      },
      'minimum_price': {
        'value': 4,
        'formatted': 'EUR 4,00',
        'editable': true
      },
      'maximum_price': {
        'value': 8,
        'formatted': 'EUR 8,00',
        'editable': true
      },
      'wish_price': {
        'value': 0,
        'formatted': '',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': 'Technic-Now',
        'formatted': 'Technic-Now'
      },
      'comparedwith_competitor': {
        'value': 'Technic-Now',
        'formatted': 'Technic-Now'
      },
      'buybox_competitor': {
        'value': 'Rocina Service',
        'formatted': 'Rocina Service'
      },
      'clousale_category': {
        'value': null,
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'OPTI_PRICE'
      }
    },
    {
      'id': {
        'value': 9275977
      },
      'quantity': {
        'value': 0,
        'editable': true
      },
      'open_date': {
        'value': '2017-07-10T21:15:36.000000Z',
        'formatted': '10.07.2017'
      },
      'last_sale': {
        'value': '2017-11-08T13:59:14.000000Z',
        'formatted': '08.11.2017 (EUR 2.93)'
      },
      'last_pricerule_change': {
        'value': '2017-11-13T17:38:48.000000Z',
        'formatted': '13.11.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'Ladeger\u00e4t OTB 5101\/5401\u00a0F\u00fcr Panasonic BLD10\u00a0(144)'
      },
      'sku': {
        'value': 'OTB-Kiste-8004587'
      },
      'article_number': {
        'value': 'B0077D2SB2',
        'href': 'https:\/\/www.amazon.de\/dp\/B0077D2SB2'
      },
      'manufacturer': {
        'value': 'OTB'
      },
      'part_number': {
        'value': 'DMW-BLD10'
      },
      'onlineprice_with_shipping_costs': {
        'value': 2.93,
        'formatted': 'EUR 2,93'
      },
      'minimum_price': {
        'value': 2.49,
        'formatted': 'EUR 2,49',
        'editable': true
      },
      'maximum_price': {
        'value': 6,
        'formatted': 'EUR 6,00',
        'editable': true
      },
      'wish_price': {
        'value': 0,
        'formatted': '',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': 'Das Gute Gesch\u00e4ft',
        'formatted': 'Das Gute Gesch\u00e4ft'
      },
      'comparedwith_competitor': {
        'value': 'Das Gute Gesch\u00e4ft',
        'formatted': 'Das Gute Gesch\u00e4ft'
      },
      'buybox_competitor': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C',
        'formatted': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'clousale_category': {
        'value': null,
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'ME_IN_BUY_BOX'
      }
    },
    {
      'id': {
        'value': 8705852
      },
      'quantity': {
        'value': 0,
        'editable': true
      },
      'open_date': {
        'value': '2009-10-15T20:34:07.000000Z',
        'formatted': '15.10.2009'
      },
      'last_sale': {
        'value': '2017-11-09T22:27:58.000000Z',
        'formatted': '09.11.2017 (EUR 31.92)'
      },
      'last_pricerule_change': {
        'value': '2017-11-13T17:38:48.000000Z',
        'formatted': '13.11.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'Sony Nickel-Metallhydrid Akkus 4er Pack Micro Ni-MH 1,2 V 1000 mAh'
      },
      'sku': {
        'value': '0230'
      },
      'article_number': {
        'value': 'B000XD6J86',
        'href': 'https:\/\/www.amazon.de\/dp\/B000XD6J86'
      },
      'manufacturer': {
        'value': 'Sony'
      },
      'part_number': {
        'value': 'NHAAAB4F'
      },
      'onlineprice_with_shipping_costs': {
        'value': 15.99,
        'formatted': 'EUR 15,99'
      },
      'minimum_price': {
        'value': 15.99,
        'formatted': 'EUR 15,99',
        'editable': true
      },
      'maximum_price': {
        'value': 19.99,
        'formatted': 'EUR 19,99',
        'editable': true
      },
      'wish_price': {
        'value': 17.99,
        'formatted': 'EUR 17,99',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': 'Amazon',
        'formatted': '<img src="http:\/\/g-ecx.images-amazon.com\/images\/G\/03\/merchants\/logos\/amazonde-logo._V192214068_.gif" \/>Amazon'
      },
      'comparedwith_competitor': {
        'value': 'Amazon',
        'formatted': '<img src="http:\/\/g-ecx.images-amazon.com\/images\/G\/03\/merchants\/logos\/amazonde-logo._V192214068_.gif" \/>Amazon'
      },
      'buybox_competitor': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C',
        'formatted': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'clousale_category': {
        'value': null,
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'MINPRICE_REACHED'
      }
    },
    {
      'id': {
        'value': 66722006
      },
      'quantity': {
        'value': 972,
        'editable': true
      },
      'open_date': {
        'value': '2015-07-30T18:46:35.000000Z',
        'formatted': '30.07.2015'
      },
      'last_sale': {
        'value': '2017-11-10T10:03:22.000000Z',
        'formatted': '10.11.2017 (EUR 8.98)'
      },
      'last_pricerule_change': {
        'value': '2017-11-12T09:26:19.000000Z',
        'formatted': '12.11.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'XCell 2er Folie Batterie Alkaline, Baby 1,5 V, (USA-Code C, IEC-Code LR14, 4914, Chem. System Alkaline'
      },
      'sku': {
        'value': 'G113327-Abverkauf'
      },
      'article_number': {
        'value': 'B003LXAGRK',
        'href': 'https:\/\/www.amazon.de\/dp\/B003LXAGRK'
      },
      'manufacturer': {
        'value': 'XCell'
      },
      'part_number': {
        'value': '113327 X-CELL'
      },
      'onlineprice_with_shipping_costs': {
        'value': 4.58,
        'formatted': 'EUR 4,58'
      },
      'minimum_price': {
        'value': 4.49,
        'formatted': 'EUR 4,49',
        'editable': true
      },
      'maximum_price': {
        'value': 9.99,
        'formatted': 'EUR 9,99',
        'editable': true
      },
      'wish_price': {
        'value': 4.58,
        'formatted': 'EUR 4,58',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': null,
        'formatted': ''
      },
      'comparedwith_competitor': {
        'value': null,
        'formatted': ''
      },
      'buybox_competitor': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C',
        'formatted': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'clousale_category': {
        'value': 'Andere',
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'ME_IN_BUY_BOX'
      }
    },
    {
      'id': {
        'value': 34577992
      },
      'quantity': {
        'value': 2,
        'editable': true
      },
      'open_date': {
        'value': '2017-06-16T19:07:37.000000Z',
        'formatted': '16.06.2017'
      },
      'last_sale': {
        'value': '2017-10-29T11:03:04.000000Z',
        'formatted': '29.10.2017 (EUR 14.72)'
      },
      'last_pricerule_change': {
        'value': '2017-11-02T19:07:36.000000Z',
        'formatted': '02.11.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'USB-LED-Licht, Schwanenhals, mit 10 LEDs'
      },
      'sku': {
        'value': 'E-1073051-001'
      },
      'article_number': {
        'value': 'B072L4QSSF',
        'href': 'https:\/\/www.amazon.de\/dp\/B072L4QSSF'
      },
      'manufacturer': {
        'value': 'Unbranded'
      },
      'part_number': {
        'value': null
      },
      'onlineprice_with_shipping_costs': {
        'value': 15.01,
        'formatted': 'EUR 15,01'
      },
      'minimum_price': {
        'value': 14.72,
        'formatted': 'EUR 14,72',
        'editable': true
      },
      'maximum_price': {
        'value': 36.8,
        'formatted': 'EUR 36,80',
        'editable': true
      },
      'wish_price': {
        'value': 15.01,
        'formatted': 'EUR 15,01',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': null,
        'formatted': ''
      },
      'comparedwith_competitor': {
        'value': null,
        'formatted': ''
      },
      'buybox_competitor': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C',
        'formatted': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'clousale_category': {
        'value': null,
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'NOCOMPETITION'
      }
    },
    {
      'id': {
        'value': 33392846
      },
      'quantity': {
        'value': 201,
        'editable': true
      },
      'open_date': {
        'value': '2017-02-05T12:29:24.000000Z',
        'formatted': '05.02.2017'
      },
      'last_sale': {
        'value': '2017-05-07T16:31:58.000000Z',
        'formatted': '07.05.2017 (EUR 3.66)'
      },
      'last_pricerule_change': {
        'value': '2017-11-02T19:07:36.000000Z',
        'formatted': '02.11.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': '2 x Renata Uhrenbatterie - Swiss made Cells Silberoxid 0% Quecksilber Knopfzellen 1.55V Renata Batterien des langen Lebens 377 ( SR626SW )'
      },
      'sku': {
        'value': 'B050418'
      },
      'article_number': {
        'value': 'B004563P34',
        'href': 'https:\/\/www.amazon.de\/dp\/B004563P34'
      },
      'manufacturer': {
        'value': 'Renata'
      },
      'part_number': {
        'value': '377'
      },
      'onlineprice_with_shipping_costs': {
        'value': 2.9,
        'formatted': 'EUR 2,90'
      },
      'minimum_price': {
        'value': 2.44,
        'formatted': 'EUR 2,44',
        'editable': true
      },
      'maximum_price': {
        'value': 7.32,
        'formatted': 'EUR 7,32',
        'editable': true
      },
      'wish_price': {
        'value': 3.66,
        'formatted': 'EUR 3,66',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': 'P & F France',
        'formatted': 'P & F France'
      },
      'comparedwith_competitor': {
        'value': 'SP Gro\u00dfhandel',
        'formatted': 'SP Gro\u00dfhandel'
      },
      'buybox_competitor': {
        'value': 'decolectrix2013',
        'formatted': 'decolectrix2013'
      },
      'clousale_category': {
        'value': 'decolectrix2013',
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'GOOD_PRICE'
      }
    },
    {
      'id': {
        'value': 11373609
      },
      'quantity': {
        'value': 312,
        'editable': true
      },
      'open_date': {
        'value': '2017-01-29T20:02:28.000000Z',
        'formatted': '29.01.2017'
      },
      'last_sale': {
        'value': '2017-11-01T07:38:19.000000Z',
        'formatted': '01.11.2017 (EUR 7.26)'
      },
      'last_pricerule_change': {
        'value': '2017-11-02T19:07:37.000000Z',
        'formatted': '02.11.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'Energizer Spot LED Multi Zweck Kopf- und Arbeitsleuchte inkl. 2x CR 2032'
      },
      'sku': {
        'value': 'ovl1447'
      },
      'article_number': {
        'value': 'B0022NHN2Q',
        'href': 'https:\/\/www.amazon.de\/dp\/B0022NHN2Q'
      },
      'manufacturer': {
        'value': 'Energizer'
      },
      'part_number': {
        'value': '631525'
      },
      'onlineprice_with_shipping_costs': {
        'value': 7.26,
        'formatted': 'EUR 7,26'
      },
      'minimum_price': {
        'value': 7.26,
        'formatted': 'EUR 7,26',
        'editable': true
      },
      'maximum_price': {
        'value': 21.78,
        'formatted': 'EUR 21,78',
        'editable': true
      },
      'wish_price': {
        'value': 0,
        'formatted': '',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': 'decolectrix2013',
        'formatted': 'decolectrix2013'
      },
      'comparedwith_competitor': {
        'value': 'Amazon',
        'formatted': '<img src="http:\/\/g-ecx.images-amazon.com\/images\/G\/03\/merchants\/logos\/amazonde-logo._V192214068_.gif" \/>Amazon'
      },
      'buybox_competitor': {
        'value': 'decolectrix2013',
        'formatted': 'decolectrix2013'
      },
      'clousale_category': {
        'value': 'decolectrix2013',
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'MINPRICE_REACHED'
      }
    },
    {
      'id': {
        'value': 4369834
      },
      'quantity': {
        'value': 31,
        'editable': true
      },
      'open_date': {
        'value': '2017-07-05T19:01:09.000000Z',
        'formatted': '05.07.2017'
      },
      'last_sale': {
        'value': '2017-10-24T20:52:43.000000Z',
        'formatted': '24.10.2017 (EUR 9.08)'
      },
      'last_pricerule_change': {
        'value': '2017-11-02T19:07:38.000000Z',
        'formatted': '02.11.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'wpro MWO111 - Mikrowellenzubeh\u00f6r\/ Mikrowellenreiniger\/ Beseitigt effektiv Fettablagerungen und Ger\u00fcche, 500ml'
      },
      'sku': {
        'value': 'N-484000008424'
      },
      'article_number': {
        'value': 'B00ZA6U5CW',
        'href': 'https:\/\/www.amazon.de\/dp\/B00ZA6U5CW'
      },
      'manufacturer': {
        'value': 'Wpro'
      },
      'part_number': {
        'value': 'MWO111'
      },
      'onlineprice_with_shipping_costs': {
        'value': 9.08,
        'formatted': 'EUR 9,08'
      },
      'minimum_price': {
        'value': 9.08,
        'formatted': 'EUR 9,08',
        'editable': true
      },
      'maximum_price': {
        'value': 20,
        'formatted': 'EUR 20,00',
        'editable': true
      },
      'wish_price': {
        'value': 0,
        'formatted': '',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': 'Lamos4u',
        'formatted': 'Lamos4u'
      },
      'comparedwith_competitor': {
        'value': 'Lamos4u',
        'formatted': 'Lamos4u'
      },
      'buybox_competitor': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C',
        'formatted': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'clousale_category': {
        'value': null,
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'MINPRICE_REACHED'
      }
    },
    {
      'id': {
        'value': 10722702
      },
      'quantity': {
        'value': 25,
        'editable': true
      },
      'open_date': {
        'value': '2017-07-05T19:04:42.000000Z',
        'formatted': '05.07.2017'
      },
      'last_sale': {
        'value': null,
        'formatted': ''
      },
      'last_pricerule_change': {
        'value': '2017-11-02T19:07:37.000000Z',
        'formatted': '02.11.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'Energizer Akku-Ladeger\u00e4t (Mini Charger inkl. 2xAAA 700mAh Akkus)'
      },
      'sku': {
        'value': 'N-EN-638584'
      },
      'article_number': {
        'value': 'B000IX15JO',
        'href': 'https:\/\/www.amazon.de\/dp\/B000IX15JO'
      },
      'manufacturer': {
        'value': 'Energizer'
      },
      'part_number': {
        'value': '27621'
      },
      'onlineprice_with_shipping_costs': {
        'value': 15.23,
        'formatted': 'EUR 15,23'
      },
      'minimum_price': {
        'value': 15.23,
        'formatted': 'EUR 15,23',
        'editable': true
      },
      'maximum_price': {
        'value': 30.46,
        'formatted': 'EUR 30,46',
        'editable': true
      },
      'wish_price': {
        'value': 19.8,
        'formatted': 'EUR 19,80',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': 'Amazon',
        'formatted': '<img src="http:\/\/g-ecx.images-amazon.com\/images\/G\/03\/merchants\/logos\/amazonde-logo._V192214068_.gif" \/>Amazon'
      },
      'comparedwith_competitor': {
        'value': 'Voelkner',
        'formatted': 'Voelkner'
      },
      'buybox_competitor': {
        'value': 'Amazon',
        'formatted': '<img src="http:\/\/g-ecx.images-amazon.com\/images\/G\/03\/merchants\/logos\/amazonde-logo._V192214068_.gif" \/>Amazon'
      },
      'clousale_category': {
        'value': null,
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'MINPRICE_REACHED'
      }
    },
    {
      'id': {
        'value': 17753152
      },
      'quantity': {
        'value': 105,
        'editable': true
      },
      'open_date': {
        'value': '2017-07-05T19:02:10.000000Z',
        'formatted': '05.07.2017'
      },
      'last_sale': {
        'value': null,
        'formatted': ''
      },
      'last_pricerule_change': {
        'value': '2017-11-02T19:07:37.000000Z',
        'formatted': '02.11.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'Bosch 00311580 Maschinenreiniger f\u00fcr Geschirrsp\u00fclmaschinen 200 g'
      },
      'sku': {
        'value': 'N-311580'
      },
      'article_number': {
        'value': 'B00Y791AKY',
        'href': 'https:\/\/www.amazon.de\/dp\/B00Y791AKY'
      },
      'manufacturer': {
        'value': 'Bosch'
      },
      'part_number': {
        'value': '00311580'
      },
      'onlineprice_with_shipping_costs': {
        'value': 10.05,
        'formatted': 'EUR 10,05'
      },
      'minimum_price': {
        'value': 10.05,
        'formatted': 'EUR 10,05',
        'editable': true
      },
      'maximum_price': {
        'value': 20.1,
        'formatted': 'EUR 20,10',
        'editable': true
      },
      'wish_price': {
        'value': 13.07,
        'formatted': 'EUR 13,07',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': 'Aquintos-Wasseraufbereitung',
        'formatted': 'Aquintos-Wasseraufbereitung'
      },
      'comparedwith_competitor': {
        'value': 'EbuyerExpress',
        'formatted': 'EbuyerExpress'
      },
      'buybox_competitor': {
        'value': 'ersatzteil-lager',
        'formatted': 'ersatzteil-lager'
      },
      'clousale_category': {
        'value': null,
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'MINPRICE_REACHED'
      }
    },
    {
      'id': {
        'value': 24968273
      },
      'quantity': {
        'value': 53,
        'editable': true
      },
      'open_date': {
        'value': '2017-07-05T19:03:17.000000Z',
        'formatted': '05.07.2017'
      },
      'last_sale': {
        'value': '2017-07-26T13:39:11.000000Z',
        'formatted': '26.07.2017 (EUR 9.08)'
      },
      'last_pricerule_change': {
        'value': '2017-11-02T19:07:36.000000Z',
        'formatted': '02.11.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'wpro FRI101 - K\u00fchlschrankzubeh\u00f6r \/ K\u00fchlschrankreiniger\/ Universell\/ 500ml'
      },
      'sku': {
        'value': 'N-484000008421'
      },
      'article_number': {
        'value': 'B00ZA6U9DW',
        'href': 'https:\/\/www.amazon.de\/dp\/B00ZA6U9DW'
      },
      'manufacturer': {
        'value': 'Wpro'
      },
      'part_number': {
        'value': 'C00380121'
      },
      'onlineprice_with_shipping_costs': {
        'value': 9.08,
        'formatted': 'EUR 9,08'
      },
      'minimum_price': {
        'value': 9.08,
        'formatted': 'EUR 9,08',
        'editable': true
      },
      'maximum_price': {
        'value': 20,
        'formatted': 'EUR 20,00',
        'editable': true
      },
      'wish_price': {
        'value': 0,
        'formatted': '',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': 'Lamos4u',
        'formatted': 'Lamos4u'
      },
      'comparedwith_competitor': {
        'value': 'Lamos4u',
        'formatted': 'Lamos4u'
      },
      'buybox_competitor': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C',
        'formatted': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'clousale_category': {
        'value': null,
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'MINPRICE_REACHED'
      }
    },
    {
      'id': {
        'value': 54459594
      },
      'quantity': {
        'value': 374,
        'editable': true
      },
      'open_date': {
        'value': '2017-07-05T19:03:17.000000Z',
        'formatted': '05.07.2017'
      },
      'last_sale': {
        'value': null,
        'formatted': ''
      },
      'last_pricerule_change': {
        'value': '2017-11-02T19:07:37.000000Z',
        'formatted': '02.11.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'HQ W9-09601GF Edelstahlreiniger, 1 St\u00fcck'
      },
      'sku': {
        'value': 'N-W9-09601GF'
      },
      'article_number': {
        'value': 'B00TWIURUY',
        'href': 'https:\/\/www.amazon.de\/dp\/B00TWIURUY'
      },
      'manufacturer': {
        'value': 'HQ'
      },
      'part_number': {
        'value': 'W9-09601GF'
      },
      'onlineprice_with_shipping_costs': {
        'value': 7.49,
        'formatted': 'EUR 7,49'
      },
      'minimum_price': {
        'value': 7.49,
        'formatted': 'EUR 7,49',
        'editable': true
      },
      'maximum_price': {
        'value': 20,
        'formatted': 'EUR 20,00',
        'editable': true
      },
      'wish_price': {
        'value': 0,
        'formatted': '',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': 'Lamos4u',
        'formatted': 'Lamos4u'
      },
      'comparedwith_competitor': {
        'value': 'Lamos4u',
        'formatted': 'Lamos4u'
      },
      'buybox_competitor': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C',
        'formatted': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'clousale_category': {
        'value': null,
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'MINPRICE_REACHED'
      }
    },
    {
      'id': {
        'value': 40545688
      },
      'quantity': {
        'value': 39,
        'editable': true
      },
      'open_date': {
        'value': '2017-07-05T19:01:40.000000Z',
        'formatted': '05.07.2017'
      },
      'last_sale': {
        'value': '2017-07-22T11:30:32.000000Z',
        'formatted': '22.07.2017 (EUR 13.31)'
      },
      'last_pricerule_change': {
        'value': '2017-11-02T19:07:38.000000Z',
        'formatted': '02.11.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'W\u00fcrth Autoinnenreiniger'
      },
      'sku': {
        'value': 'N-WU-033'
      },
      'article_number': {
        'value': 'B0095MHY1C',
        'href': 'https:\/\/www.amazon.de\/dp\/B0095MHY1C'
      },
      'manufacturer': {
        'value': 'W\u00fcrth'
      },
      'part_number': {
        'value': '0893 033'
      },
      'onlineprice_with_shipping_costs': {
        'value': 21.41,
        'formatted': 'EUR 21,41'
      },
      'minimum_price': {
        'value': 13.31,
        'formatted': 'EUR 13,31',
        'editable': true
      },
      'maximum_price': {
        'value': 26.62,
        'formatted': 'EUR 26,62',
        'editable': true
      },
      'wish_price': {
        'value': 17.3,
        'formatted': 'EUR 17,30',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': 'e-joker',
        'formatted': 'e-joker'
      },
      'comparedwith_competitor': {
        'value': 'Sengento',
        'formatted': 'Sengento'
      },
      'buybox_competitor': {
        'value': 'e-joker',
        'formatted': 'e-joker'
      },
      'clousale_category': {
        'value': null,
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'GOOD_PRICE'
      }
    },
    {
      'id': {
        'value': 43931906
      },
      'quantity': {
        'value': 337,
        'editable': true
      },
      'open_date': {
        'value': '2017-07-05T19:01:48.000000Z',
        'formatted': '05.07.2017'
      },
      'last_sale': {
        'value': null,
        'formatted': ''
      },
      'last_pricerule_change': {
        'value': '2017-11-02T19:07:37.000000Z',
        'formatted': '02.11.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'KOC Kontaktreiniger Kontakt 60 200ml Spray'
      },
      'sku': {
        'value': 'N-60\/200'
      },
      'article_number': {
        'value': 'B000YJ2AZU',
        'href': 'https:\/\/www.amazon.de\/dp\/B000YJ2AZU'
      },
      'manufacturer': {
        'value': 'KONTAKT CHEMIE'
      },
      'part_number': {
        'value': '70009'
      },
      'onlineprice_with_shipping_costs': {
        'value': 20.49,
        'formatted': 'EUR 20,49'
      },
      'minimum_price': {
        'value': 15.76,
        'formatted': 'EUR 15,76',
        'editable': true
      },
      'maximum_price': {
        'value': 31.52,
        'formatted': 'EUR 31,52',
        'editable': true
      },
      'wish_price': {
        'value': 20.49,
        'formatted': 'EUR 20,49',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': 'All-Sat',
        'formatted': 'All-Sat'
      },
      'comparedwith_competitor': {
        'value': null,
        'formatted': ''
      },
      'buybox_competitor': {
        'value': 'All-Sat',
        'formatted': 'All-Sat'
      },
      'clousale_category': {
        'value': null,
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'NOCOMPETITION_FOR_REPRICING'
      }
    },
    {
      'id': {
        'value': 43077373
      },
      'quantity': {
        'value': 67,
        'editable': true
      },
      'open_date': {
        'value': '2017-07-05T19:02:13.000000Z',
        'formatted': '05.07.2017'
      },
      'last_sale': {
        'value': null,
        'formatted': ''
      },
      'last_pricerule_change': {
        'value': '2017-11-02T19:07:37.000000Z',
        'formatted': '02.11.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'W\u00fcrth Scheibenklar'
      },
      'sku': {
        'value': 'N-WU-332840'
      },
      'article_number': {
        'value': 'B00KCKN8PC',
        'href': 'https:\/\/www.amazon.de\/dp\/B00KCKN8PC'
      },
      'manufacturer': {
        'value': 'W\u00c3\u00bcrth'
      },
      'part_number': {
        'value': '0892 332 926'
      },
      'onlineprice_with_shipping_costs': {
        'value': 11.91,
        'formatted': 'EUR 11,91'
      },
      'minimum_price': {
        'value': 11.75,
        'formatted': 'EUR 11,75',
        'editable': true
      },
      'maximum_price': {
        'value': 23.5,
        'formatted': 'EUR 23,50',
        'editable': true
      },
      'wish_price': {
        'value': 15.28,
        'formatted': 'EUR 15,28',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': 'Lamos4u',
        'formatted': 'Lamos4u'
      },
      'comparedwith_competitor': {
        'value': 'Lamos4u',
        'formatted': 'Lamos4u'
      },
      'buybox_competitor': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C',
        'formatted': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'clousale_category': {
        'value': null,
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'OPTI_PRICE'
      }
    },
    {
      'id': {
        'value': 43249524
      },
      'quantity': {
        'value': 10,
        'editable': true
      },
      'open_date': {
        'value': '2017-07-05T19:03:23.000000Z',
        'formatted': '05.07.2017'
      },
      'last_sale': {
        'value': null,
        'formatted': ''
      },
      'last_pricerule_change': {
        'value': '2017-11-02T19:07:37.000000Z',
        'formatted': '02.11.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'Cabere Abflussreiniger 3\u00a0m 934\u00a0K'
      },
      'sku': {
        'value': 'N-93491'
      },
      'article_number': {
        'value': 'B00R98PR2W',
        'href': 'https:\/\/www.amazon.de\/dp\/B00R98PR2W'
      },
      'manufacturer': {
        'value': 'CABERE'
      },
      'part_number': {
        'value': '93491'
      },
      'onlineprice_with_shipping_costs': {
        'value': 20.9,
        'formatted': 'EUR 20,90'
      },
      'minimum_price': {
        'value': 20.9,
        'formatted': 'EUR 20,90',
        'editable': true
      },
      'maximum_price': {
        'value': 41.8,
        'formatted': 'EUR 41,80',
        'editable': true
      },
      'wish_price': {
        'value': 27.17,
        'formatted': 'EUR 27,17',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': 'Lamos4u',
        'formatted': 'Lamos4u'
      },
      'comparedwith_competitor': {
        'value': 'Amazon',
        'formatted': '<img src="http:\/\/g-ecx.images-amazon.com\/images\/G\/03\/merchants\/logos\/amazonde-logo._V192214068_.gif" \/>Amazon'
      },
      'buybox_competitor': {
        'value': 'Amazon',
        'formatted': '<img src="http:\/\/g-ecx.images-amazon.com\/images\/G\/03\/merchants\/logos\/amazonde-logo._V192214068_.gif" \/>Amazon'
      },
      'clousale_category': {
        'value': null,
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'MINPRICE_REACHED'
      }
    },
    {
      'id': {
        'value': 55265154
      },
      'quantity': {
        'value': 6,
        'editable': true
      },
      'open_date': {
        'value': '2017-07-05T19:02:46.000000Z',
        'formatted': '05.07.2017'
      },
      'last_sale': {
        'value': null,
        'formatted': ''
      },
      'last_pricerule_change': {
        'value': '2017-11-02T19:07:36.000000Z',
        'formatted': '02.11.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'Cabere Abflussreiniger 5\u00a0m 936\u00a0K'
      },
      'sku': {
        'value': 'N-93693'
      },
      'article_number': {
        'value': 'B00R98NXAU',
        'href': 'https:\/\/www.amazon.de\/dp\/B00R98NXAU'
      },
      'manufacturer': {
        'value': 'CABERE'
      },
      'part_number': {
        'value': '93693'
      },
      'onlineprice_with_shipping_costs': {
        'value': 42.81,
        'formatted': 'EUR 42,81'
      },
      'minimum_price': {
        'value': 40.22,
        'formatted': 'EUR 40,22',
        'editable': true
      },
      'maximum_price': {
        'value': 72.4,
        'formatted': 'EUR 72,40',
        'editable': true
      },
      'wish_price': {
        'value': 48.26,
        'formatted': 'EUR 48,26',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': 'Lamos4u',
        'formatted': 'Lamos4u'
      },
      'comparedwith_competitor': {
        'value': 'Sengento',
        'formatted': 'Sengento'
      },
      'buybox_competitor': {
        'value': 'Amazon',
        'formatted': '<img src="http:\/\/g-ecx.images-amazon.com\/images\/G\/03\/merchants\/logos\/amazonde-logo._V192214068_.gif" \/>Amazon'
      },
      'clousale_category': {
        'value': null,
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'GOOD_PRICE'
      }
    },
    {
      'id': {
        'value': 69308940
      },
      'quantity': {
        'value': 320,
        'editable': true
      },
      'open_date': {
        'value': '2017-01-29T20:02:56.000000Z',
        'formatted': '29.01.2017'
      },
      'last_sale': {
        'value': null,
        'formatted': ''
      },
      'last_pricerule_change': {
        'value': '2017-11-02T19:07:37.000000Z',
        'formatted': '02.11.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'Energizer Taschenlampe Keyring 625704'
      },
      'sku': {
        'value': 'ovl1710'
      },
      'article_number': {
        'value': 'B000IWXXMM',
        'href': 'https:\/\/www.amazon.de\/dp\/B000IWXXMM'
      },
      'manufacturer': {
        'value': 'Energizer'
      },
      'part_number': {
        'value': '625704'
      },
      'onlineprice_with_shipping_costs': {
        'value': 10.27,
        'formatted': 'EUR 10,27'
      },
      'minimum_price': {
        'value': 10.14,
        'formatted': 'EUR 10,14',
        'editable': true
      },
      'maximum_price': {
        'value': 30.42,
        'formatted': 'EUR 30,42',
        'editable': true
      },
      'wish_price': {
        'value': 0,
        'formatted': '',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': '7dayshop Limited',
        'formatted': '7dayshop Limited'
      },
      'comparedwith_competitor': {
        'value': 'Red House Direct',
        'formatted': 'Red House Direct'
      },
      'buybox_competitor': {
        'value': 'Guilty Gadgets',
        'formatted': 'Guilty Gadgets'
      },
      'clousale_category': {
        'value': 'decolectrix2013',
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'GOOD_PRICE'
      }
    },
    {
      'id': {
        'value': 63757700
      },
      'quantity': {
        'value': 56,
        'editable': true
      },
      'open_date': {
        'value': '2017-07-05T19:05:31.000000Z',
        'formatted': '05.07.2017'
      },
      'last_sale': {
        'value': null,
        'formatted': ''
      },
      'last_pricerule_change': {
        'value': '2017-11-02T19:07:36.000000Z',
        'formatted': '02.11.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'W\u00fcrth wu-0128\u00a0KFZ-Kit'
      },
      'sku': {
        'value': 'N-WU-0128'
      },
      'article_number': {
        'value': 'B00064CJCC',
        'href': 'https:\/\/www.amazon.de\/dp\/B00064CJCC'
      },
      'manufacturer': {
        'value': 'W\u00fcrth'
      },
      'part_number': {
        'value': '0893 012 8'
      },
      'onlineprice_with_shipping_costs': {
        'value': 13.83,
        'formatted': 'EUR 13,83'
      },
      'minimum_price': {
        'value': 13.83,
        'formatted': 'EUR 13,83',
        'editable': true
      },
      'maximum_price': {
        'value': 27.66,
        'formatted': 'EUR 27,66',
        'editable': true
      },
      'wish_price': {
        'value': 17.98,
        'formatted': 'EUR 17,98',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': 'Lamos4u',
        'formatted': 'Lamos4u'
      },
      'comparedwith_competitor': {
        'value': 'Amazon',
        'formatted': '<img src="http:\/\/g-ecx.images-amazon.com\/images\/G\/03\/merchants\/logos\/amazonde-logo._V192214068_.gif" \/>Amazon'
      },
      'buybox_competitor': {
        'value': 'Amazon',
        'formatted': '<img src="http:\/\/g-ecx.images-amazon.com\/images\/G\/03\/merchants\/logos\/amazonde-logo._V192214068_.gif" \/>Amazon'
      },
      'clousale_category': {
        'value': null,
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'MINPRICE_REACHED'
      }
    },
    {
      'id': {
        'value': 62705009
      },
      'quantity': {
        'value': 1991,
        'editable': true
      },
      'open_date': {
        'value': '2017-07-05T19:04:34.000000Z',
        'formatted': '05.07.2017'
      },
      'last_sale': {
        'value': '2017-11-06T10:02:50.000000Z',
        'formatted': '06.11.2017 (EUR 20.8)'
      },
      'last_pricerule_change': {
        'value': '2017-11-02T19:07:36.000000Z',
        'formatted': '02.11.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'Servisol PRF BOOST\/520 PRF SCHAUMREINIGER'
      },
      'sku': {
        'value': 'N-PRF BOOST\/520'
      },
      'article_number': {
        'value': 'B006525RB4',
        'href': 'https:\/\/www.amazon.de\/dp\/B006525RB4'
      },
      'manufacturer': {
        'value': 'Taerosol'
      },
      'part_number': {
        'value': 'PRF BOOST\/520'
      },
      'onlineprice_with_shipping_costs': {
        'value': 10.4,
        'formatted': 'EUR 10,40'
      },
      'minimum_price': {
        'value': 10.4,
        'formatted': 'EUR 10,40',
        'editable': true
      },
      'maximum_price': {
        'value': 20.8,
        'formatted': 'EUR 20,80',
        'editable': true
      },
      'wish_price': {
        'value': 13.52,
        'formatted': 'EUR 13,52',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': 'e-joker',
        'formatted': 'e-joker'
      },
      'comparedwith_competitor': {
        'value': 'e-joker',
        'formatted': 'e-joker'
      },
      'buybox_competitor': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C',
        'formatted': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'clousale_category': {
        'value': null,
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'MINPRICE_REACHED'
      }
    },
    {
      'id': {
        'value': 61378699
      },
      'quantity': {
        'value': 233,
        'editable': true
      },
      'open_date': {
        'value': '2017-07-05T19:04:25.000000Z',
        'formatted': '05.07.2017'
      },
      'last_sale': {
        'value': '2017-10-26T18:46:59.000000Z',
        'formatted': '26.10.2017 (EUR 7.17)'
      },
      'last_pricerule_change': {
        'value': '2017-11-02T19:07:37.000000Z',
        'formatted': '02.11.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'HQ Keramikofenreiniger, 1 St\u00fcck'
      },
      'sku': {
        'value': 'N-W9-09602GF'
      },
      'article_number': {
        'value': 'B00TWIEHFK',
        'href': 'https:\/\/www.amazon.de\/dp\/B00TWIEHFK'
      },
      'manufacturer': {
        'value': 'HQ'
      },
      'part_number': {
        'value': 'W9-09602GF'
      },
      'onlineprice_with_shipping_costs': {
        'value': 7.17,
        'formatted': 'EUR 7,17'
      },
      'minimum_price': {
        'value': 7.17,
        'formatted': 'EUR 7,17',
        'editable': true
      },
      'maximum_price': {
        'value': 20,
        'formatted': 'EUR 20,00',
        'editable': true
      },
      'wish_price': {
        'value': 0,
        'formatted': '',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': 'Lamos4u',
        'formatted': 'Lamos4u'
      },
      'comparedwith_competitor': {
        'value': 'Lamos4u',
        'formatted': 'Lamos4u'
      },
      'buybox_competitor': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C',
        'formatted': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'clousale_category': {
        'value': null,
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'MINPRICE_REACHED'
      }
    },
    {
      'id': {
        'value': 49763956
      },
      'quantity': {
        'value': 16,
        'editable': true
      },
      'open_date': {
        'value': '2017-07-05T19:02:48.000000Z',
        'formatted': '05.07.2017'
      },
      'last_sale': {
        'value': null,
        'formatted': ''
      },
      'last_pricerule_change': {
        'value': '2017-11-02T19:07:37.000000Z',
        'formatted': '02.11.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'WPRO Edelstahlreiniger 250 ml'
      },
      'sku': {
        'value': 'N-484000008501'
      },
      'article_number': {
        'value': 'B01FFFDDYE',
        'href': 'https:\/\/www.amazon.de\/dp\/B01FFFDDYE'
      },
      'manufacturer': {
        'value': 'Whirlpool'
      },
      'part_number': {
        'value': '4.84E+11'
      },
      'onlineprice_with_shipping_costs': {
        'value': 8.31,
        'formatted': 'EUR 8,31'
      },
      'minimum_price': {
        'value': 8.31,
        'formatted': 'EUR 8,31',
        'editable': true
      },
      'maximum_price': {
        'value': 20,
        'formatted': 'EUR 20,00',
        'editable': true
      },
      'wish_price': {
        'value': 0,
        'formatted': '',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': 'e-joker',
        'formatted': 'e-joker'
      },
      'comparedwith_competitor': {
        'value': 'e-joker',
        'formatted': 'e-joker'
      },
      'buybox_competitor': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C',
        'formatted': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'clousale_category': {
        'value': null,
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'MINPRICE_REACHED'
      }
    },
    {
      'id': {
        'value': 53598292
      },
      'quantity': {
        'value': 23,
        'editable': true
      },
      'open_date': {
        'value': '2017-07-05T19:02:24.000000Z',
        'formatted': '05.07.2017'
      },
      'last_sale': {
        'value': null,
        'formatted': ''
      },
      'last_pricerule_change': {
        'value': '2017-11-02T19:07:37.000000Z',
        'formatted': '02.11.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'CABERE Abflussreiniger Qf120 f\u00fcr Dusche und Bad , 1 St\u00fcck, , 00120'
      },
      'sku': {
        'value': 'N-120'
      },
      'article_number': {
        'value': 'B00R990RCQ',
        'href': 'https:\/\/www.amazon.de\/dp\/B00R990RCQ'
      },
      'manufacturer': {
        'value': 'CABERE'
      },
      'part_number': {
        'value': '00120'
      },
      'onlineprice_with_shipping_costs': {
        'value': 20.5,
        'formatted': 'EUR 20,50'
      },
      'minimum_price': {
        'value': 20.5,
        'formatted': 'EUR 20,50',
        'editable': true
      },
      'maximum_price': {
        'value': 41,
        'formatted': 'EUR 41,00',
        'editable': true
      },
      'wish_price': {
        'value': 26.65,
        'formatted': 'EUR 26,65',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': 'Lamos4u',
        'formatted': 'Lamos4u'
      },
      'comparedwith_competitor': {
        'value': 'Amazon',
        'formatted': '<img src="http:\/\/g-ecx.images-amazon.com\/images\/G\/03\/merchants\/logos\/amazonde-logo._V192214068_.gif" \/>Amazon'
      },
      'buybox_competitor': {
        'value': 'Amazon',
        'formatted': '<img src="http:\/\/g-ecx.images-amazon.com\/images\/G\/03\/merchants\/logos\/amazonde-logo._V192214068_.gif" \/>Amazon'
      },
      'clousale_category': {
        'value': null,
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'MINPRICE_REACHED'
      }
    },
    {
      'id': {
        'value': 78301998
      },
      'quantity': {
        'value': 97,
        'editable': true
      },
      'open_date': {
        'value': '2017-07-05T19:05:26.000000Z',
        'formatted': '05.07.2017'
      },
      'last_sale': {
        'value': null,
        'formatted': ''
      },
      'last_pricerule_change': {
        'value': '2017-11-02T19:07:38.000000Z',
        'formatted': '02.11.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'Energizer Fotobatterie EL123AP \/ CR17345 Lithium (3Volt 2er-Packung)'
      },
      'sku': {
        'value': 'N-EL123APB2'
      },
      'article_number': {
        'value': 'B000JTKEYO',
        'href': 'https:\/\/www.amazon.de\/dp\/B000JTKEYO'
      },
      'manufacturer': {
        'value': 'Energizer'
      },
      'part_number': {
        'value': '628289'
      },
      'onlineprice_with_shipping_costs': {
        'value': 9.94,
        'formatted': 'EUR 9,94'
      },
      'minimum_price': {
        'value': 9.94,
        'formatted': 'EUR 9,94',
        'editable': true
      },
      'maximum_price': {
        'value': 20,
        'formatted': 'EUR 20,00',
        'editable': true
      },
      'wish_price': {
        'value': 0,
        'formatted': '',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': 'P & F France',
        'formatted': 'P & F France'
      },
      'comparedwith_competitor': {
        'value': 'KW-Vertrieb',
        'formatted': 'KW-Vertrieb'
      },
      'buybox_competitor': {
        'value': 'Amazon',
        'formatted': '<img src="http:\/\/g-ecx.images-amazon.com\/images\/G\/03\/merchants\/logos\/amazonde-logo._V192214068_.gif" \/>Amazon'
      },
      'clousale_category': {
        'value': null,
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'MINPRICE_REACHED'
      }
    },
    {
      'id': {
        'value': 21184843
      },
      'quantity': {
        'value': 291,
        'editable': true
      },
      'open_date': {
        'value': '2017-07-05T19:02:25.000000Z',
        'formatted': '05.07.2017'
      },
      'last_sale': {
        'value': null,
        'formatted': ''
      },
      'last_pricerule_change': {
        'value': '2017-11-02T19:07:37.000000Z',
        'formatted': '02.11.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'Taerosol PRF LAPTOP PRF LCD\/TFT\/PLASMA REINIGER'
      },
      'sku': {
        'value': 'N-PRF LAPTOP'
      },
      'article_number': {
        'value': 'B00420EY10',
        'href': 'https:\/\/www.amazon.de\/dp\/B00420EY10'
      },
      'manufacturer': {
        'value': 'Taerosol'
      },
      'part_number': {
        'value': 'PRF LAPTOP'
      },
      'onlineprice_with_shipping_costs': {
        'value': 14.5,
        'formatted': 'EUR 14,50'
      },
      'minimum_price': {
        'value': 10.98,
        'formatted': 'EUR 10,98',
        'editable': true
      },
      'maximum_price': {
        'value': 21.96,
        'formatted': 'EUR 21,96',
        'editable': true
      },
      'wish_price': {
        'value': 14.27,
        'formatted': 'EUR 14,27',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': 'Hawks Photo Video',
        'formatted': 'Hawks Photo Video'
      },
      'comparedwith_competitor': {
        'value': 'inandout',
        'formatted': 'inandout'
      },
      'buybox_competitor': {
        'value': 'SEDIVA Deutschland',
        'formatted': 'SEDIVA Deutschland'
      },
      'clousale_category': {
        'value': null,
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'GOOD_PRICE'
      }
    },
    {
      'id': {
        'value': 16037697
      },
      'quantity': {
        'value': 7751,
        'editable': true
      },
      'open_date': {
        'value': '2017-07-05T19:03:12.000000Z',
        'formatted': '05.07.2017'
      },
      'last_sale': {
        'value': null,
        'formatted': ''
      },
      'last_pricerule_change': {
        'value': '2017-11-02T19:07:36.000000Z',
        'formatted': '02.11.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'K\u00f6nig TVCLC10 CD-Linsenreiniger mit 20 ml Reinigungsfl\u00fcssigkeit'
      },
      'sku': {
        'value': 'N-TVCLC10'
      },
      'article_number': {
        'value': 'B00TWIP7FY',
        'href': 'https:\/\/www.amazon.de\/dp\/B00TWIP7FY'
      },
      'manufacturer': {
        'value': 'K\u00f6nig'
      },
      'part_number': {
        'value': 'TVCLC10'
      },
      'onlineprice_with_shipping_costs': {
        'value': 6.05,
        'formatted': 'EUR 6,05'
      },
      'minimum_price': {
        'value': 5.73,
        'formatted': 'EUR 5,73',
        'editable': true
      },
      'maximum_price': {
        'value': 20,
        'formatted': 'EUR 20,00',
        'editable': true
      },
      'wish_price': {
        'value': 0,
        'formatted': '',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': 'DeClean',
        'formatted': 'DeClean'
      },
      'comparedwith_competitor': {
        'value': '1Deins Computer GmbH',
        'formatted': '1Deins Computer GmbH'
      },
      'buybox_competitor': {
        'value': 'Amazon',
        'formatted': '<img src="http:\/\/g-ecx.images-amazon.com\/images\/G\/03\/merchants\/logos\/amazonde-logo._V192214068_.gif" \/>Amazon'
      },
      'clousale_category': {
        'value': null,
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'GOOD_PRICE'
      }
    },
    {
      'id': {
        'value': 18599660
      },
      'quantity': {
        'value': 350,
        'editable': true
      },
      'open_date': {
        'value': '2012-02-20T21:27:20.000000Z',
        'formatted': '20.02.2012'
      },
      'last_sale': {
        'value': '2016-11-09T06:07:16.000000Z',
        'formatted': '09.11.2016 (EUR 7.47)'
      },
      'last_pricerule_change': {
        'value': '2017-11-02T19:07:38.000000Z',
        'formatted': '02.11.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'Duracell Specialty Typ LR44 Alkaline Knopfbatterie, 2er Pack'
      },
      'sku': {
        'value': '01416'
      },
      'article_number': {
        'value': 'B000J656LS',
        'href': 'https:\/\/www.amazon.de\/dp\/B000J656LS'
      },
      'manufacturer': {
        'value': 'Duracell'
      },
      'part_number': {
        'value': 'LR44'
      },
      'onlineprice_with_shipping_costs': {
        'value': 2.49,
        'formatted': 'EUR 2,49'
      },
      'minimum_price': {
        'value': 2.49,
        'formatted': 'EUR 2,49',
        'editable': true
      },
      'maximum_price': {
        'value': 3.99,
        'formatted': 'EUR 3,99',
        'editable': true
      },
      'wish_price': {
        'value': 2.99,
        'formatted': 'EUR 2,99',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': 'decolectrix2013',
        'formatted': 'decolectrix2013'
      },
      'comparedwith_competitor': {
        'value': 'Amazon',
        'formatted': '<img src="http:\/\/g-ecx.images-amazon.com\/images\/G\/03\/merchants\/logos\/amazonde-logo._V192214068_.gif" \/>Amazon'
      },
      'buybox_competitor': {
        'value': 'Amazon',
        'formatted': '<img src="http:\/\/g-ecx.images-amazon.com\/images\/G\/03\/merchants\/logos\/amazonde-logo._V192214068_.gif" \/>Amazon'
      },
      'clousale_category': {
        'value': 'zap24',
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'MINPRICE_REACHED'
      }
    },
    {
      'id': {
        'value': 23689726
      },
      'quantity': {
        'value': 428,
        'editable': true
      },
      'open_date': {
        'value': '2017-07-05T19:02:09.000000Z',
        'formatted': '05.07.2017'
      },
      'last_sale': {
        'value': null,
        'formatted': ''
      },
      'last_pricerule_change': {
        'value': '2017-11-02T19:07:37.000000Z',
        'formatted': '02.11.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'HQ Keramikkochfeldreiniger f\u00fcr Jeden Tag, 1 St\u00fcck'
      },
      'sku': {
        'value': 'N-W9-09603GF'
      },
      'article_number': {
        'value': 'B00TWINUMQ',
        'href': 'https:\/\/www.amazon.de\/dp\/B00TWINUMQ'
      },
      'manufacturer': {
        'value': 'HQ'
      },
      'part_number': {
        'value': 'W9-09603GF'
      },
      'onlineprice_with_shipping_costs': {
        'value': 7.82,
        'formatted': 'EUR 7,82'
      },
      'minimum_price': {
        'value': 7.08,
        'formatted': 'EUR 7,08',
        'editable': true
      },
      'maximum_price': {
        'value': 20,
        'formatted': 'EUR 20,00',
        'editable': true
      },
      'wish_price': {
        'value': 0,
        'formatted': '',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': 'Lamos4u',
        'formatted': 'Lamos4u'
      },
      'comparedwith_competitor': {
        'value': 'e-joker',
        'formatted': 'e-joker'
      },
      'buybox_competitor': {
        'value': 'Lamos4u',
        'formatted': 'Lamos4u'
      },
      'clousale_category': {
        'value': null,
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'GOOD_PRICE'
      }
    },
    {
      'id': {
        'value': 7226833
      },
      'quantity': {
        'value': 14,
        'editable': true
      },
      'open_date': {
        'value': '2017-07-05T19:03:06.000000Z',
        'formatted': '05.07.2017'
      },
      'last_sale': {
        'value': null,
        'formatted': ''
      },
      'last_pricerule_change': {
        'value': '2017-11-02T19:07:37.000000Z',
        'formatted': '02.11.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'Felgen Intensivreiniger'
      },
      'sku': {
        'value': 'N-WU-476'
      },
      'article_number': {
        'value': 'B009JOTY3M',
        'href': 'https:\/\/www.amazon.de\/dp\/B009JOTY3M'
      },
      'manufacturer': {
        'value': 'W\u00fcrth'
      },
      'part_number': {
        'value': '0893 476'
      },
      'onlineprice_with_shipping_costs': {
        'value': 33.08,
        'formatted': 'EUR 33,08'
      },
      'minimum_price': {
        'value': 30.63,
        'formatted': 'EUR 30,63',
        'editable': true
      },
      'maximum_price': {
        'value': 55.13,
        'formatted': 'EUR 55,13',
        'editable': true
      },
      'wish_price': {
        'value': 36.76,
        'formatted': 'EUR 36,76',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': 'Onlinehandel Am Alten Amtsgericht',
        'formatted': 'Onlinehandel Am Alten Amtsgericht'
      },
      'comparedwith_competitor': {
        'value': 'Sengento',
        'formatted': 'Sengento'
      },
      'buybox_competitor': {
        'value': 'AnyTools , Preise inkl. MwSt.',
        'formatted': 'AnyTools , Preise inkl. MwSt.'
      },
      'clousale_category': {
        'value': null,
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'GOOD_PRICE'
      }
    },
    {
      'id': {
        'value': 5847279
      },
      'quantity': {
        'value': 56,
        'editable': true
      },
      'open_date': {
        'value': '2017-07-05T19:01:13.000000Z',
        'formatted': '05.07.2017'
      },
      'last_sale': {
        'value': null,
        'formatted': ''
      },
      'last_pricerule_change': {
        'value': '2017-11-02T19:07:37.000000Z',
        'formatted': '02.11.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'WPRO Reiniger Klimaanlage 500 ml'
      },
      'sku': {
        'value': 'N-484000008642'
      },
      'article_number': {
        'value': 'B01LRW7VUG',
        'href': 'https:\/\/www.amazon.de\/dp\/B01LRW7VUG'
      },
      'manufacturer': {
        'value': 'WPRO'
      },
      'part_number': {
        'value': '484000008642'
      },
      'onlineprice_with_shipping_costs': {
        'value': 19.74,
        'formatted': 'EUR 19,74'
      },
      'minimum_price': {
        'value': 13.26,
        'formatted': 'EUR 13,26',
        'editable': true
      },
      'maximum_price': {
        'value': 26.52,
        'formatted': 'EUR 26,52',
        'editable': true
      },
      'wish_price': {
        'value': 17.24,
        'formatted': 'EUR 17,24',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': 'Lamos4u',
        'formatted': 'Lamos4u'
      },
      'comparedwith_competitor': {
        'value': 'inandout',
        'formatted': 'inandout'
      },
      'buybox_competitor': {
        'value': 'SEDIVA Deutschland',
        'formatted': 'SEDIVA Deutschland'
      },
      'clousale_category': {
        'value': null,
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'GOOD_PRICE'
      }
    },
    {
      'id': {
        'value': 5891057
      },
      'quantity': {
        'value': 134,
        'editable': true
      },
      'open_date': {
        'value': '2017-07-05T19:01:25.000000Z',
        'formatted': '05.07.2017'
      },
      'last_sale': {
        'value': null,
        'formatted': ''
      },
      'last_pricerule_change': {
        'value': '2017-11-02T19:07:38.000000Z',
        'formatted': '02.11.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'Varta Rechargeable Accu Ready2Use vorgeladener AAA Micro Ni-Mh Akku (4-er Pack, 800mAh), wiederaufladbar ohne Memory-Effekt - sofort einsatzbereit'
      },
      'sku': {
        'value': 'N-VARTA-56703B'
      },
      'article_number': {
        'value': 'B000EGQT78',
        'href': 'https:\/\/www.amazon.de\/dp\/B000EGQT78'
      },
      'manufacturer': {
        'value': 'Varta'
      },
      'part_number': {
        'value': '56703'
      },
      'onlineprice_with_shipping_costs': {
        'value': 25.7,
        'formatted': 'EUR 25,70'
      },
      'minimum_price': {
        'value': 19.77,
        'formatted': 'EUR 19,77',
        'editable': true
      },
      'maximum_price': {
        'value': 39.54,
        'formatted': 'EUR 39,54',
        'editable': true
      },
      'wish_price': {
        'value': 25.7,
        'formatted': 'EUR 25,70',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': 'DIES&DAS',
        'formatted': 'DIES&DAS'
      },
      'comparedwith_competitor': {
        'value': null,
        'formatted': ''
      },
      'buybox_competitor': {
        'value': 'Amazon',
        'formatted': '<img src="http:\/\/g-ecx.images-amazon.com\/images\/G\/03\/merchants\/logos\/amazonde-logo._V192214068_.gif" \/>Amazon'
      },
      'clousale_category': {
        'value': null,
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'NOCOMPETITION_FOR_REPRICING'
      }
    },
    {
      'id': {
        'value': 52148345
      },
      'quantity': {
        'value': 617,
        'editable': true
      },
      'open_date': {
        'value': '2017-01-18T20:55:19.000000Z',
        'formatted': '18.01.2017'
      },
      'last_sale': {
        'value': '2017-03-16T20:57:47.000000Z',
        'formatted': '16.03.2017 (EUR 17.54)'
      },
      'last_pricerule_change': {
        'value': '2017-11-02T19:07:37.000000Z',
        'formatted': '02.11.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'Duracell Specialty Typ AAAA Alkaline Batterie, 2er Pack'
      },
      'sku': {
        'value': '1801243'
      },
      'article_number': {
        'value': 'B00008JNWT',
        'href': 'https:\/\/www.amazon.de\/dp\/B00008JNWT'
      },
      'manufacturer': {
        'value': 'Duracell'
      },
      'part_number': {
        'value': 'MX2500'
      },
      'onlineprice_with_shipping_costs': {
        'value': 13.99,
        'formatted': 'EUR 13,99'
      },
      'minimum_price': {
        'value': 11.99,
        'formatted': 'EUR 11,99',
        'editable': true
      },
      'maximum_price': {
        'value': 19.99,
        'formatted': 'EUR 19,99',
        'editable': true
      },
      'wish_price': {
        'value': 13.99,
        'formatted': 'EUR 13,99',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': 'decolectrix2013',
        'formatted': 'decolectrix2013'
      },
      'comparedwith_competitor': {
        'value': null,
        'formatted': ''
      },
      'buybox_competitor': {
        'value': 'Amazon',
        'formatted': '<img src="http:\/\/g-ecx.images-amazon.com\/images\/G\/03\/merchants\/logos\/amazonde-logo._V192214068_.gif" \/>Amazon'
      },
      'clousale_category': {
        'value': 'DIES&DAS',
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'NOCOMPETITION_FOR_REPRICING'
      }
    },
    {
      'id': {
        'value': 47614981
      },
      'quantity': {
        'value': 27,
        'editable': true
      },
      'open_date': {
        'value': '2017-07-05T19:03:22.000000Z',
        'formatted': '05.07.2017'
      },
      'last_sale': {
        'value': null,
        'formatted': ''
      },
      'last_pricerule_change': {
        'value': '2017-11-02T19:07:37.000000Z',
        'formatted': '02.11.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'wpro VTC101 - Backofen- & Herdzubeh\u00f6r\/ Glaskeramikreiniger\/ Reiniger f\u00fcr Kochfeld\/ Universell\/ 250ml'
      },
      'sku': {
        'value': 'N-484000008420'
      },
      'article_number': {
        'value': 'B00ZA6URP2',
        'href': 'https:\/\/www.amazon.de\/dp\/B00ZA6URP2'
      },
      'manufacturer': {
        'value': 'Wpro'
      },
      'part_number': {
        'value': 'VTC101'
      },
      'onlineprice_with_shipping_costs': {
        'value': 8.74,
        'formatted': 'EUR 8,74'
      },
      'minimum_price': {
        'value': 8.68,
        'formatted': 'EUR 8,68',
        'editable': true
      },
      'maximum_price': {
        'value': 20,
        'formatted': 'EUR 20,00',
        'editable': true
      },
      'wish_price': {
        'value': 0,
        'formatted': '',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': 'Putz Spezialisten',
        'formatted': 'Putz Spezialisten'
      },
      'comparedwith_competitor': {
        'value': 'e-joker',
        'formatted': 'e-joker'
      },
      'buybox_competitor': {
        'value': 'SEDIVA Deutschland',
        'formatted': 'SEDIVA Deutschland'
      },
      'clousale_category': {
        'value': null,
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'GOOD_PRICE'
      }
    },
    {
      'id': {
        'value': 44914665
      },
      'quantity': {
        'value': 871,
        'editable': true
      },
      'open_date': {
        'value': '2017-07-05T19:02:35.000000Z',
        'formatted': '05.07.2017'
      },
      'last_sale': {
        'value': null,
        'formatted': ''
      },
      'last_pricerule_change': {
        'value': '2017-11-02T19:07:36.000000Z',
        'formatted': '02.11.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'Energizer Lithium Knopfzelle CR 2032'
      },
      'sku': {
        'value': 'N-EN-53508304000'
      },
      'article_number': {
        'value': 'B000IWZVZY',
        'href': 'https:\/\/www.amazon.de\/dp\/B000IWZVZY'
      },
      'manufacturer': {
        'value': 'Energizer'
      },
      'part_number': {
        'value': '35035779'
      },
      'onlineprice_with_shipping_costs': {
        'value': 3.21,
        'formatted': 'EUR 3,21'
      },
      'minimum_price': {
        'value': 3.2,
        'formatted': 'EUR 3,20',
        'editable': true
      },
      'maximum_price': {
        'value': 15,
        'formatted': 'EUR 15,00',
        'editable': true
      },
      'wish_price': {
        'value': 0,
        'formatted': '',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': 'decolectrix2013',
        'formatted': 'decolectrix2013'
      },
      'comparedwith_competitor': {
        'value': 'KW-Vertrieb',
        'formatted': 'KW-Vertrieb'
      },
      'buybox_competitor': {
        'value': 'Amazon',
        'formatted': '<img src="http:\/\/g-ecx.images-amazon.com\/images\/G\/03\/merchants\/logos\/amazonde-logo._V192214068_.gif" \/>Amazon'
      },
      'clousale_category': {
        'value': null,
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'GOOD_PRICE'
      }
    },
    {
      'id': {
        'value': 49827476
      },
      'quantity': {
        'value': 11,
        'editable': true
      },
      'open_date': {
        'value': '2017-07-05T19:03:02.000000Z',
        'formatted': '05.07.2017'
      },
      'last_sale': {
        'value': null,
        'formatted': ''
      },
      'last_pricerule_change': {
        'value': '2017-11-02T19:07:37.000000Z',
        'formatted': '02.11.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'Bison PE-HANDCLEAN2 HANDREINIGER'
      },
      'sku': {
        'value': 'N-PE-HANDCLEAN2'
      },
      'article_number': {
        'value': 'B007FNHU8A',
        'href': 'https:\/\/www.amazon.de\/dp\/B007FNHU8A'
      },
      'manufacturer': {
        'value': 'Griffon'
      },
      'part_number': {
        'value': '6307283'
      },
      'onlineprice_with_shipping_costs': {
        'value': 17.26,
        'formatted': 'EUR 17,26'
      },
      'minimum_price': {
        'value': 14.41,
        'formatted': 'EUR 14,41',
        'editable': true
      },
      'maximum_price': {
        'value': 28.82,
        'formatted': 'EUR 28,82',
        'editable': true
      },
      'wish_price': {
        'value': 18.73,
        'formatted': 'EUR 18,73',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': 'ExpressPro',
        'formatted': 'ExpressPro'
      },
      'comparedwith_competitor': {
        'value': 'Hawks Photo Video',
        'formatted': 'Hawks Photo Video'
      },
      'buybox_competitor': {
        'value': 'ExpressPro',
        'formatted': 'ExpressPro'
      },
      'clousale_category': {
        'value': null,
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'GOOD_PRICE'
      }
    },
    {
      'id': {
        'value': 75064381
      },
      'quantity': {
        'value': 746,
        'editable': true
      },
      'open_date': {
        'value': '2017-07-05T19:04:51.000000Z',
        'formatted': '05.07.2017'
      },
      'last_sale': {
        'value': null,
        'formatted': ''
      },
      'last_pricerule_change': {
        'value': '2017-11-02T19:07:36.000000Z',
        'formatted': '02.11.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'wpro AFR301 - Reinigertabs f\u00fcr Waschmaschinen\/ Entfernt unangenehme Ger\u00fcche'
      },
      'sku': {
        'value': 'N-484000001180'
      },
      'article_number': {
        'value': 'B01540KN34',
        'href': 'https:\/\/www.amazon.de\/dp\/B01540KN34'
      },
      'manufacturer': {
        'value': 'Wpro'
      },
      'part_number': {
        'value': 'AFR301 C00376307'
      },
      'onlineprice_with_shipping_costs': {
        'value': 9.79,
        'formatted': 'EUR 9,79'
      },
      'minimum_price': {
        'value': 9.79,
        'formatted': 'EUR 9,79',
        'editable': true
      },
      'maximum_price': {
        'value': 20,
        'formatted': 'EUR 20,00',
        'editable': true
      },
      'wish_price': {
        'value': 0,
        'formatted': '',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': 'Certified Supply Solutions',
        'formatted': 'Certified Supply Solutions'
      },
      'comparedwith_competitor': {
        'value': '1stSparesUK (VAT Registered)',
        'formatted': '1stSparesUK (VAT Registered)'
      },
      'buybox_competitor': {
        'value': 'Lamos4u',
        'formatted': 'Lamos4u'
      },
      'clousale_category': {
        'value': null,
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'MINPRICE_REACHED'
      }
    },
    {
      'id': {
        'value': 30098359
      },
      'quantity': {
        'value': 0,
        'editable': true
      },
      'open_date': {
        'value': '2016-04-14T09:04:59.000000Z',
        'formatted': '14.04.2016'
      },
      'last_sale': {
        'value': '2017-11-07T17:37:10.000000Z',
        'formatted': '07.11.2017 (EUR 19.99)'
      },
      'last_pricerule_change': {
        'value': '2017-11-02T14:56:49.000000Z',
        'formatted': '02.11.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'Commander Double Window Leder Case f\u00fcr Sony Xperia Z3 purpur'
      },
      'sku': {
        'value': 'Blau26-14660'
      },
      'article_number': {
        'value': 'B00OZLXF6G',
        'href': 'https:\/\/www.amazon.de\/dp\/B00OZLXF6G'
      },
      'manufacturer': {
        'value': 'Commander'
      },
      'part_number': {
        'value': '14660'
      },
      'onlineprice_with_shipping_costs': {
        'value': 19.99,
        'formatted': 'EUR 19,99'
      },
      'minimum_price': {
        'value': 19.99,
        'formatted': 'EUR 19,99',
        'editable': true
      },
      'maximum_price': {
        'value': 25,
        'formatted': 'EUR 25,00',
        'editable': true
      },
      'wish_price': {
        'value': 0,
        'formatted': '',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': 'Amazon',
        'formatted': '<img src="http:\/\/g-ecx.images-amazon.com\/images\/G\/03\/merchants\/logos\/amazonde-logo._V192214068_.gif" \/>Amazon'
      },
      'comparedwith_competitor': {
        'value': 'Amazon',
        'formatted': '<img src="http:\/\/g-ecx.images-amazon.com\/images\/G\/03\/merchants\/logos\/amazonde-logo._V192214068_.gif" \/>Amazon'
      },
      'buybox_competitor': {
        'value': 'Amazon',
        'formatted': '<img src="http:\/\/g-ecx.images-amazon.com\/images\/G\/03\/merchants\/logos\/amazonde-logo._V192214068_.gif" \/>Amazon'
      },
      'clousale_category': {
        'value': 'Andere',
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'MINPRICE_REACHED'
      }
    },
    {
      'id': {
        'value': 20905830
      },
      'quantity': {
        'value': 0,
        'editable': true
      },
      'open_date': {
        'value': '2017-10-05T10:12:30.000000Z',
        'formatted': '05.10.2017'
      },
      'last_sale': {
        'value': '2017-11-08T14:34:03.000000Z',
        'formatted': '08.11.2017 (EUR 21.74)'
      },
      'last_pricerule_change': {
        'value': '2017-11-02T19:07:37.000000Z',
        'formatted': '02.11.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'PETER J\u00c3\u201eCKEL COMMANDER BOOK CASE ELITE schwarz f\u00c3\u00bcr Samsung S7 Edge'
      },
      'sku': {
        'value': 'O-Kiste-15392'
      },
      'article_number': {
        'value': 'B01C673GK0',
        'href': 'https:\/\/www.amazon.de\/dp\/B01C673GK0'
      },
      'manufacturer': {
        'value': 'Peter J\u00e4ckel'
      },
      'part_number': {
        'value': '15392'
      },
      'onlineprice_with_shipping_costs': {
        'value': 21.11,
        'formatted': 'EUR 21,11'
      },
      'minimum_price': {
        'value': 15,
        'formatted': 'EUR 15,00',
        'editable': true
      },
      'maximum_price': {
        'value': 25,
        'formatted': 'EUR 25,00',
        'editable': true
      },
      'wish_price': {
        'value': 0,
        'formatted': '',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': 'limuno',
        'formatted': 'limuno'
      },
      'comparedwith_competitor': {
        'value': 'limuno',
        'formatted': 'limuno'
      },
      'buybox_competitor': {
        'value': 'schreiner-modellbau',
        'formatted': 'schreiner-modellbau'
      },
      'clousale_category': {
        'value': null,
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'OPTI_PRICE'
      }
    },
    {
      'id': {
        'value': 36241404
      },
      'quantity': {
        'value': 179,
        'editable': true
      },
      'open_date': {
        'value': '2016-07-03T15:48:28.000000Z',
        'formatted': '03.07.2016'
      },
      'last_sale': {
        'value': '2017-11-04T11:33:09.000000Z',
        'formatted': '04.11.2017 (EUR 12.11)'
      },
      'last_pricerule_change': {
        'value': '2017-11-02T19:07:37.000000Z',
        'formatted': '02.11.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'Sanyo \/ FDK CR 17450 SE mit Print L\u00f6tfahne, Lithium CR17450'
      },
      'sku': {
        'value': 'G105675'
      },
      'article_number': {
        'value': 'B000NPIKYA',
        'href': 'https:\/\/www.amazon.de\/dp\/B000NPIKYA'
      },
      'manufacturer': {
        'value': 'FDK, ehemals Sanyo'
      },
      'part_number': {
        'value': 'CR17450P'
      },
      'onlineprice_with_shipping_costs': {
        'value': 12.11,
        'formatted': 'EUR 12,11'
      },
      'minimum_price': {
        'value': 8.49,
        'formatted': 'EUR 8,49',
        'editable': true
      },
      'maximum_price': {
        'value': 15.99,
        'formatted': 'EUR 15,99',
        'editable': true
      },
      'wish_price': {
        'value': 9.99,
        'formatted': 'EUR 9,99',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': 'accu-by-seidel GmbH',
        'formatted': 'accu-by-seidel GmbH'
      },
      'comparedwith_competitor': {
        'value': 'accu-by-seidel GmbH',
        'formatted': 'accu-by-seidel GmbH'
      },
      'buybox_competitor': {
        'value': 'AkkuShop Deutschland',
        'formatted': 'AkkuShop Deutschland'
      },
      'clousale_category': {
        'value': 'accu-by-seidel GmbH',
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'OPTI_PRICE'
      }
    },
    {
      'id': {
        'value': 45711522
      },
      'quantity': {
        'value': 99,
        'editable': true
      },
      'open_date': {
        'value': '2017-01-16T14:04:21.000000Z',
        'formatted': '16.01.2017'
      },
      'last_sale': {
        'value': '2017-10-27T09:26:25.000000Z',
        'formatted': '27.10.2017 (EUR 103.2)'
      },
      'last_pricerule_change': {
        'value': '2017-09-28T10:35:27.000000Z',
        'formatted': '28.09.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'Sub-C-Akku SANYO KR-1800SCE'
      },
      'sku': {
        'value': 'G105498-1'
      },
      'article_number': {
        'value': 'B00H0W8UZI',
        'href': 'https:\/\/www.amazon.de\/dp\/B00H0W8UZI'
      },
      'manufacturer': {
        'value': 'Sanyo \/ Panasonic'
      },
      'part_number': {
        'value': '0090280'
      },
      'onlineprice_with_shipping_costs': {
        'value': 6.99,
        'formatted': 'EUR 6,99'
      },
      'minimum_price': {
        'value': 6.99,
        'formatted': 'EUR 6,99',
        'editable': true
      },
      'maximum_price': {
        'value': 12.99,
        'formatted': 'EUR 12,99',
        'editable': true
      },
      'wish_price': {
        'value': 6.99,
        'formatted': 'EUR 6,99',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': null,
        'formatted': ''
      },
      'comparedwith_competitor': {
        'value': null,
        'formatted': ''
      },
      'buybox_competitor': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C',
        'formatted': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'clousale_category': {
        'value': 'AkkuShop Deutschland',
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'NOCOMPETITION'
      }
    },
    {
      'id': {
        'value': 17317793
      },
      'quantity': {
        'value': 5,
        'editable': true
      },
      'open_date': {
        'value': '2013-04-21T20:56:25.000000Z',
        'formatted': '21.04.2013'
      },
      'last_sale': {
        'value': null,
        'formatted': ''
      },
      'last_pricerule_change': {
        'value': '2017-09-28T10:35:27.000000Z',
        'formatted': '28.09.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'Akku f\u00fcr Philips TD9200'
      },
      'sku': {
        'value': 'G105043'
      },
      'article_number': {
        'value': 'B00030MTTW',
        'href': 'https:\/\/www.amazon.de\/dp\/B00030MTTW'
      },
      'manufacturer': {
        'value': 'Mobile Elektronik und Kommunikation'
      },
      'part_number': {
        'value': 'B3679'
      },
      'onlineprice_with_shipping_costs': {
        'value': 12.72,
        'formatted': 'EUR 12,72'
      },
      'minimum_price': {
        'value': 12.72,
        'formatted': 'EUR 12,72',
        'editable': true
      },
      'maximum_price': {
        'value': 23,
        'formatted': 'EUR 23,00',
        'editable': true
      },
      'wish_price': {
        'value': 12.72,
        'formatted': 'EUR 12,72',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': null,
        'formatted': ''
      },
      'comparedwith_competitor': {
        'value': null,
        'formatted': ''
      },
      'buybox_competitor': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C',
        'formatted': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'clousale_category': {
        'value': 'Andere',
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'NOCOMPETITION'
      }
    },
    {
      'id': {
        'value': 15077255
      },
      'quantity': {
        'value': 1,
        'editable': true
      },
      'open_date': {
        'value': '2013-04-21T20:58:00.000000Z',
        'formatted': '21.04.2013'
      },
      'last_sale': {
        'value': '2016-06-11T08:13:39.000000Z',
        'formatted': '11.06.2016 (EUR 58.68)'
      },
      'last_pricerule_change': {
        'value': '2017-09-28T10:35:27.000000Z',
        'formatted': '28.09.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'Akku f\u00fcr Handlampe Ceag CW270 kompatibel 4,8V, 5000mAh, Ni-C'
      },
      'sku': {
        'value': 'G305045'
      },
      'article_number': {
        'value': 'B0040GUSO8',
        'href': 'https:\/\/www.amazon.de\/dp\/B0040GUSO8'
      },
      'manufacturer': {
        'value': null
      },
      'part_number': {
        'value': null
      },
      'onlineprice_with_shipping_costs': {
        'value': 45.14,
        'formatted': 'EUR 45,14'
      },
      'minimum_price': {
        'value': 45.14,
        'formatted': 'EUR 45,14',
        'editable': true
      },
      'maximum_price': {
        'value': 67.71,
        'formatted': 'EUR 67,71',
        'editable': true
      },
      'wish_price': {
        'value': 45.14,
        'formatted': 'EUR 45,14',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': null,
        'formatted': ''
      },
      'comparedwith_competitor': {
        'value': null,
        'formatted': ''
      },
      'buybox_competitor': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C',
        'formatted': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'clousale_category': {
        'value': 'Andere',
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'NOCOMPETITION'
      }
    },
    {
      'id': {
        'value': 35399177
      },
      'quantity': {
        'value': 0,
        'editable': true
      },
      'open_date': {
        'value': '2017-10-26T12:05:39.000000Z',
        'formatted': '26.10.2017'
      },
      'last_sale': {
        'value': '2017-10-26T12:29:54.000000Z',
        'formatted': '26.10.2017 (EUR 6.49)'
      },
      'last_pricerule_change': {
        'value': null,
        'formatted': ''
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'Intenso Alu Line 16 GB USB-Stick USB 2.0 anthrazit'
      },
      'sku': {
        'value': 'AV-4034303016334'
      },
      'article_number': {
        'value': 'B008RDCE4W',
        'href': 'https:\/\/www.amazon.de\/dp\/B008RDCE4W'
      },
      'manufacturer': {
        'value': 'Intenso'
      },
      'part_number': {
        'value': '3521471'
      },
      'onlineprice_with_shipping_costs': {
        'value': 6.49,
        'formatted': 'EUR 6,49'
      },
      'minimum_price': {
        'value': 6.49,
        'formatted': 'EUR 6,49',
        'editable': true
      },
      'maximum_price': {
        'value': 9,
        'formatted': 'EUR 9,00',
        'editable': true
      },
      'wish_price': {
        'value': 0,
        'formatted': '',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': 'Amazon',
        'formatted': '<img src="http:\/\/g-ecx.images-amazon.com\/images\/G\/03\/merchants\/logos\/amazonde-logo._V192214068_.gif" \/>Amazon'
      },
      'comparedwith_competitor': {
        'value': 'Amazon',
        'formatted': '<img src="http:\/\/g-ecx.images-amazon.com\/images\/G\/03\/merchants\/logos\/amazonde-logo._V192214068_.gif" \/>Amazon'
      },
      'buybox_competitor': {
        'value': 'rohling-express',
        'formatted': 'rohling-express'
      },
      'clousale_category': {
        'value': null,
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'MINPRICE_REACHED'
      }
    },
    {
      'id': {
        'value': 62268096
      },
      'quantity': {
        'value': 151,
        'editable': true
      },
      'open_date': {
        'value': '2017-07-05T19:05:04.000000Z',
        'formatted': '05.07.2017'
      },
      'last_sale': {
        'value': '2017-10-12T09:48:13.000000Z',
        'formatted': '12.10.2017 (EUR 7.64)'
      },
      'last_pricerule_change': {
        'value': '2017-09-28T10:35:27.000000Z',
        'formatted': '28.09.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'HQ Standard Scart Stecker - S-VHS Stecker + 2x Cinch'
      },
      'sku': {
        'value': 'N-HQSV-120-1.5'
      },
      'article_number': {
        'value': 'B0050NF9L2',
        'href': 'https:\/\/www.amazon.de\/dp\/B0050NF9L2'
      },
      'manufacturer': {
        'value': 'HQ'
      },
      'part_number': {
        'value': 'HQSV-120-1.5'
      },
      'onlineprice_with_shipping_costs': {
        'value': 7.64,
        'formatted': 'EUR 7,64'
      },
      'minimum_price': {
        'value': 6.23,
        'formatted': 'EUR 6,23',
        'editable': true
      },
      'maximum_price': {
        'value': 20,
        'formatted': 'EUR 20,00',
        'editable': true
      },
      'wish_price': {
        'value': 0,
        'formatted': '',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': 'schatz',
        'formatted': 'schatz'
      },
      'comparedwith_competitor': {
        'value': 'schatz',
        'formatted': 'schatz'
      },
      'buybox_competitor': {
        'value': 'Amazon',
        'formatted': '<img src="http:\/\/g-ecx.images-amazon.com\/images\/G\/03\/merchants\/logos\/amazonde-logo._V192214068_.gif" \/>Amazon'
      },
      'clousale_category': {
        'value': null,
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'OPTI_PRICE'
      }
    },
    {
      'id': {
        'value': 65616811
      },
      'quantity': {
        'value': 14,
        'editable': true
      },
      'open_date': {
        'value': '2017-07-05T19:02:05.000000Z',
        'formatted': '05.07.2017'
      },
      'last_sale': {
        'value': '2017-10-28T11:34:03.000000Z',
        'formatted': '28.10.2017 (EUR 21.41)'
      },
      'last_pricerule_change': {
        'value': '2017-09-28T10:35:27.000000Z',
        'formatted': '28.09.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'AEG 9000846957 Teleskoprohr, Typ: ZE040'
      },
      'sku': {
        'value': 'N-9000846957'
      },
      'article_number': {
        'value': 'B00B2W1EOG',
        'href': 'https:\/\/www.amazon.de\/dp\/B00B2W1EOG'
      },
      'manufacturer': {
        'value': 'AEG'
      },
      'part_number': {
        'value': '9000846957'
      },
      'onlineprice_with_shipping_costs': {
        'value': 21.41,
        'formatted': 'EUR 21,41'
      },
      'minimum_price': {
        'value': 21.41,
        'formatted': 'EUR 21,41',
        'editable': true
      },
      'maximum_price': {
        'value': 42.82,
        'formatted': 'EUR 42,82',
        'editable': true
      },
      'wish_price': {
        'value': 27.83,
        'formatted': 'EUR 27,83',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': 'Lamos4u',
        'formatted': 'Lamos4u'
      },
      'comparedwith_competitor': {
        'value': 'Lamos4u',
        'formatted': 'Lamos4u'
      },
      'buybox_competitor': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C',
        'formatted': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'clousale_category': {
        'value': null,
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'MINPRICE_REACHED'
      }
    },
    {
      'id': {
        'value': 9982649
      },
      'quantity': {
        'value': 1257,
        'editable': true
      },
      'open_date': {
        'value': '2017-07-05T19:04:38.000000Z',
        'formatted': '05.07.2017'
      },
      'last_sale': {
        'value': '2017-10-24T10:20:03.000000Z',
        'formatted': '24.10.2017 (EUR 15.96)'
      },
      'last_pricerule_change': {
        'value': '2017-09-28T10:35:27.000000Z',
        'formatted': '28.09.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'HQ W9-20565N Geschirrsp\u00fclerzubeh\u00f6r \/ Auffangschale'
      },
      'sku': {
        'value': 'N-W9-20565N'
      },
      'article_number': {
        'value': 'B00RBF8CMA',
        'href': 'https:\/\/www.amazon.de\/dp\/B00RBF8CMA'
      },
      'manufacturer': {
        'value': 'HQ'
      },
      'part_number': {
        'value': 'W9-20565N'
      },
      'onlineprice_with_shipping_costs': {
        'value': 15.96,
        'formatted': 'EUR 15,96'
      },
      'minimum_price': {
        'value': 15.96,
        'formatted': 'EUR 15,96',
        'editable': true
      },
      'maximum_price': {
        'value': 31.92,
        'formatted': 'EUR 31,92',
        'editable': true
      },
      'wish_price': {
        'value': 20.75,
        'formatted': 'EUR 20,75',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': 'Lamos4u',
        'formatted': 'Lamos4u'
      },
      'comparedwith_competitor': {
        'value': 'Lamos4u',
        'formatted': 'Lamos4u'
      },
      'buybox_competitor': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C',
        'formatted': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'clousale_category': {
        'value': null,
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'MINPRICE_REACHED'
      }
    },
    {
      'id': {
        'value': 13893107
      },
      'quantity': {
        'value': 478,
        'editable': true
      },
      'open_date': {
        'value': '2015-04-29T11:40:50.000000Z',
        'formatted': '29.04.2015'
      },
      'last_sale': {
        'value': '2017-10-17T22:57:40.000000Z',
        'formatted': '17.10.2017 (EUR 2.05)'
      },
      'last_pricerule_change': {
        'value': '2017-09-28T10:35:27.000000Z',
        'formatted': '28.09.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'Philips CR2025\/01b Lithium Minizelle 1er Pack'
      },
      'sku': {
        'value': 'V-802729'
      },
      'article_number': {
        'value': 'B00009M6YJ',
        'href': 'https:\/\/www.amazon.de\/dp\/B00009M6YJ'
      },
      'manufacturer': {
        'value': 'Philips'
      },
      'part_number': {
        'value': 'CR2025\/01B'
      },
      'onlineprice_with_shipping_costs': {
        'value': 2.05,
        'formatted': 'EUR 2,05'
      },
      'minimum_price': {
        'value': 1.99,
        'formatted': 'EUR 1,99',
        'editable': true
      },
      'maximum_price': {
        'value': 4.99,
        'formatted': 'EUR 4,99',
        'editable': true
      },
      'wish_price': {
        'value': 2.99,
        'formatted': 'EUR 2,99',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': 'Battery Warehouse',
        'formatted': 'Battery Warehouse'
      },
      'comparedwith_competitor': {
        'value': 'Battery Warehouse',
        'formatted': 'Battery Warehouse'
      },
      'buybox_competitor': {
        'value': 'P & F France',
        'formatted': 'P & F France'
      },
      'clousale_category': {
        'value': 'Andere',
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'OPTI_PRICE'
      }
    },
    {
      'id': {
        'value': 31717088
      },
      'quantity': {
        'value': 5209,
        'editable': true
      },
      'open_date': {
        'value': '2009-10-11T18:32:21.000000Z',
        'formatted': '11.10.2009'
      },
      'last_sale': {
        'value': '2017-10-23T19:58:04.000000Z',
        'formatted': '23.10.2017 (EUR 13.25)'
      },
      'last_pricerule_change': {
        'value': '2017-09-28T10:35:27.000000Z',
        'formatted': '28.09.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'Energizer NiMH Akku AA Mignon 2200 mAh 4er Pack'
      },
      'sku': {
        'value': '0126'
      },
      'article_number': {
        'value': 'B000IX2GCE',
        'href': 'https:\/\/www.amazon.de\/dp\/B000IX2GCE'
      },
      'manufacturer': {
        'value': 'Energizer'
      },
      'part_number': {
        'value': '26258'
      },
      'onlineprice_with_shipping_costs': {
        'value': 13.25,
        'formatted': 'EUR 13,25'
      },
      'minimum_price': {
        'value': 12.99,
        'formatted': 'EUR 12,99',
        'editable': true
      },
      'maximum_price': {
        'value': 17.99,
        'formatted': 'EUR 17,99',
        'editable': true
      },
      'wish_price': {
        'value': 13.25,
        'formatted': 'EUR 13,25',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': null,
        'formatted': ''
      },
      'comparedwith_competitor': {
        'value': null,
        'formatted': ''
      },
      'buybox_competitor': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C',
        'formatted': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'clousale_category': {
        'value': null,
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'NOCOMPETITION'
      }
    },
    {
      'id': {
        'value': 46567525
      },
      'quantity': {
        'value': 0,
        'editable': true
      },
      'open_date': {
        'value': '2017-07-05T19:02:04.000000Z',
        'formatted': '05.07.2017'
      },
      'last_sale': {
        'value': '2017-10-01T13:31:11.000000Z',
        'formatted': '01.10.2017 (EUR 19.9)'
      },
      'last_pricerule_change': {
        'value': '2017-09-28T10:35:27.000000Z',
        'formatted': '28.09.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'Sitecom LN-118 Switch 5 Port (10\/100 Mbit\/s)'
      },
      'sku': {
        'value': 'N-CMPSC-LN118'
      },
      'article_number': {
        'value': 'B001EGP4KA',
        'href': 'https:\/\/www.amazon.de\/dp\/B001EGP4KA'
      },
      'manufacturer': {
        'value': 'Sitecom'
      },
      'part_number': {
        'value': 'LN-118UK'
      },
      'onlineprice_with_shipping_costs': {
        'value': 19.9,
        'formatted': 'EUR 19,90'
      },
      'minimum_price': {
        'value': 19.9,
        'formatted': 'EUR 19,90',
        'editable': true
      },
      'maximum_price': {
        'value': 39.8,
        'formatted': 'EUR 39,80',
        'editable': true
      },
      'wish_price': {
        'value': 25.87,
        'formatted': 'EUR 25,87',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': 'Amazon',
        'formatted': '<img src="http:\/\/g-ecx.images-amazon.com\/images\/G\/03\/merchants\/logos\/amazonde-logo._V192214068_.gif" \/>Amazon'
      },
      'comparedwith_competitor': {
        'value': 'Amazon',
        'formatted': '<img src="http:\/\/g-ecx.images-amazon.com\/images\/G\/03\/merchants\/logos\/amazonde-logo._V192214068_.gif" \/>Amazon'
      },
      'buybox_competitor': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C',
        'formatted': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'clousale_category': {
        'value': null,
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'MINPRICE_REACHED'
      }
    },
    {
      'id': {
        'value': 67538873
      },
      'quantity': {
        'value': 11,
        'editable': true
      },
      'open_date': {
        'value': '2017-07-05T19:03:46.000000Z',
        'formatted': '05.07.2017'
      },
      'last_sale': {
        'value': '2017-10-15T09:38:15.000000Z',
        'formatted': '15.10.2017 (EUR 7.79)'
      },
      'last_pricerule_change': {
        'value': '2017-09-28T10:35:27.000000Z',
        'formatted': '28.09.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'HQ HIGH END KOAX KUPPLUNGEN (2x)'
      },
      'sku': {
        'value': 'N-HQS-SCXSOCK\/B'
      },
      'article_number': {
        'value': 'B0019QTSBG',
        'href': 'https:\/\/www.amazon.de\/dp\/B0019QTSBG'
      },
      'manufacturer': {
        'value': 'HQ'
      },
      'part_number': {
        'value': 'HQS-SCXSOCKET'
      },
      'onlineprice_with_shipping_costs': {
        'value': 7.79,
        'formatted': 'EUR 7,79'
      },
      'minimum_price': {
        'value': 7.54,
        'formatted': 'EUR 7,54',
        'editable': true
      },
      'maximum_price': {
        'value': 20,
        'formatted': 'EUR 20,00',
        'editable': true
      },
      'wish_price': {
        'value': 0,
        'formatted': '',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': 'ExpressPro',
        'formatted': 'ExpressPro'
      },
      'comparedwith_competitor': {
        'value': 'Amazon',
        'formatted': '<img src="http:\/\/g-ecx.images-amazon.com\/images\/G\/03\/merchants\/logos\/amazonde-logo._V192214068_.gif" \/>Amazon'
      },
      'buybox_competitor': {
        'value': 'Amazon',
        'formatted': '<img src="http:\/\/g-ecx.images-amazon.com\/images\/G\/03\/merchants\/logos\/amazonde-logo._V192214068_.gif" \/>Amazon'
      },
      'clousale_category': {
        'value': null,
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'GOOD_PRICE'
      }
    },
    {
      'id': {
        'value': 28340053
      },
      'quantity': {
        'value': 98,
        'editable': true
      },
      'open_date': {
        'value': '2017-01-16T14:06:23.000000Z',
        'formatted': '16.01.2017'
      },
      'last_sale': {
        'value': null,
        'formatted': ''
      },
      'last_pricerule_change': {
        'value': '2017-09-28T10:35:27.000000Z',
        'formatted': '28.09.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'Sub-C-Akku SANYO N-1250SCRL CADNICA'
      },
      'sku': {
        'value': 'G105517-2'
      },
      'article_number': {
        'value': 'B00H0X1Q44',
        'href': 'https:\/\/www.amazon.de\/dp\/B00H0X1Q44'
      },
      'manufacturer': {
        'value': 'BBMBD'
      },
      'part_number': {
        'value': null
      },
      'onlineprice_with_shipping_costs': {
        'value': 6.45,
        'formatted': 'EUR 6,45'
      },
      'minimum_price': {
        'value': 6.45,
        'formatted': 'EUR 6,45',
        'editable': true
      },
      'maximum_price': {
        'value': 12.99,
        'formatted': 'EUR 12,99',
        'editable': true
      },
      'wish_price': {
        'value': 6.45,
        'formatted': 'EUR 6,45',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': null,
        'formatted': ''
      },
      'comparedwith_competitor': {
        'value': null,
        'formatted': ''
      },
      'buybox_competitor': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C',
        'formatted': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'clousale_category': {
        'value': 'Andere',
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'NOCOMPETITION'
      }
    },
    {
      'id': {
        'value': 35802648
      },
      'quantity': {
        'value': 0,
        'editable': true
      },
      'open_date': {
        'value': '2017-08-07T12:43:08.000000Z',
        'formatted': '07.08.2017'
      },
      'last_sale': {
        'value': '2017-10-25T16:19:15.000000Z',
        'formatted': '25.10.2017 (EUR 7.68)'
      },
      'last_pricerule_change': {
        'value': '2017-09-28T10:35:27.000000Z',
        'formatted': '28.09.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'Akku f\u00fcr Siemens Gigaset 100 \/ A100'
      },
      'sku': {
        'value': 'Rot30-116425'
      },
      'article_number': {
        'value': 'B00030MYQ0',
        'href': 'https:\/\/www.amazon.de\/dp\/B00030MYQ0'
      },
      'manufacturer': {
        'value': 'Mobile Elektronik und Kommunikation'
      },
      'part_number': {
        'value': 'B38341'
      },
      'onlineprice_with_shipping_costs': {
        'value': 7.68,
        'formatted': 'EUR 7,68'
      },
      'minimum_price': {
        'value': 6,
        'formatted': 'EUR 6,00',
        'editable': true
      },
      'maximum_price': {
        'value': 12,
        'formatted': 'EUR 12,00',
        'editable': true
      },
      'wish_price': {
        'value': 0,
        'formatted': '',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': 'weltatec',
        'formatted': 'weltatec'
      },
      'comparedwith_competitor': {
        'value': 'weltatec',
        'formatted': 'weltatec'
      },
      'buybox_competitor': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C',
        'formatted': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'clousale_category': {
        'value': null,
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'OPTI_PRICE'
      }
    },
    {
      'id': {
        'value': 37742270
      },
      'quantity': {
        'value': 99,
        'editable': true
      },
      'open_date': {
        'value': '2017-01-16T14:04:24.000000Z',
        'formatted': '16.01.2017'
      },
      'last_sale': {
        'value': null,
        'formatted': ''
      },
      'last_pricerule_change': {
        'value': '2017-10-03T18:49:53.000000Z',
        'formatted': '03.10.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'Sanyo KR-1800SCE Akku Sub-C Einzelzelle mit L\u00f6tfahne Z-Form'
      },
      'sku': {
        'value': 'G105498-3'
      },
      'article_number': {
        'value': 'B005V8RAOU',
        'href': 'https:\/\/www.amazon.de\/dp\/B005V8RAOU'
      },
      'manufacturer': {
        'value': 'Sanyo'
      },
      'part_number': {
        'value': 'KR-1800LFZ'
      },
      'onlineprice_with_shipping_costs': {
        'value': 6.99,
        'formatted': 'EUR 6,99'
      },
      'minimum_price': {
        'value': 6.99,
        'formatted': 'EUR 6,99',
        'editable': true
      },
      'maximum_price': {
        'value': 12.99,
        'formatted': 'EUR 12,99',
        'editable': true
      },
      'wish_price': {
        'value': 6.99,
        'formatted': 'EUR 6,99',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': 'GWS-PowerCell',
        'formatted': 'GWS-PowerCell'
      },
      'comparedwith_competitor': {
        'value': null,
        'formatted': ''
      },
      'buybox_competitor': {
        'value': 'GWS-PowerCell',
        'formatted': 'GWS-PowerCell'
      },
      'clousale_category': {
        'value': 'GWS-PowerCell',
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'NOCOMPETITION_FOR_REPRICING'
      }
    },
    {
      'id': {
        'value': 40047795
      },
      'quantity': {
        'value': 72,
        'editable': true
      },
      'open_date': {
        'value': '2015-10-08T20:25:35.000000Z',
        'formatted': '08.10.2015'
      },
      'last_sale': {
        'value': '2017-10-24T13:11:28.000000Z',
        'formatted': '24.10.2017 (EUR 18.54)'
      },
      'last_pricerule_change': {
        'value': '2017-09-28T10:35:27.000000Z',
        'formatted': '28.09.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'Werkzeugakku f\u00fcr Metabo powerGrip 2 - Matabo PowerGrip Flashlight - Matabo PowerMaxx - Matabo 6.00063.50, 6.02410.50, 6.00064.50,6.31 858 - 6.27 270 - 6.27 271 - 6.27 273'
      },
      'sku': {
        'value': 'G340140'
      },
      'article_number': {
        'value': 'B009IEVP5I',
        'href': 'https:\/\/www.amazon.de\/dp\/B009IEVP5I'
      },
      'manufacturer': {
        'value': 'Sila'
      },
      'part_number': {
        'value': null
      },
      'onlineprice_with_shipping_costs': {
        'value': 18.54,
        'formatted': 'EUR 18,54'
      },
      'minimum_price': {
        'value': 18.54,
        'formatted': 'EUR 18,54',
        'editable': true
      },
      'maximum_price': {
        'value': 29.99,
        'formatted': 'EUR 29,99',
        'editable': true
      },
      'wish_price': {
        'value': 25.99,
        'formatted': 'EUR 25,99',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': 'accu-by-seidel GmbH',
        'formatted': 'accu-by-seidel GmbH'
      },
      'comparedwith_competitor': {
        'value': 'accu-by-seidel GmbH',
        'formatted': 'accu-by-seidel GmbH'
      },
      'buybox_competitor': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C',
        'formatted': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'clousale_category': {
        'value': 'accu-by-seidel GmbH',
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'MINPRICE_REACHED'
      }
    },
    {
      'id': {
        'value': 23476696
      },
      'quantity': {
        'value': 0,
        'editable': true
      },
      'open_date': {
        'value': '2017-01-16T14:01:19.000000Z',
        'formatted': '16.01.2017'
      },
      'last_sale': {
        'value': null,
        'formatted': ''
      },
      'last_pricerule_change': {
        'value': '2017-09-28T10:35:27.000000Z',
        'formatted': '28.09.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'Sanyo KR-7000F Cadnica F Size Einzelzelle mit L\u00f6tfahne'
      },
      'sku': {
        'value': 'G106542-1'
      },
      'article_number': {
        'value': 'B000NPKOVC',
        'href': 'https:\/\/www.amazon.de\/dp\/B000NPKOVC'
      },
      'manufacturer': {
        'value': 'Sanyo'
      },
      'part_number': {
        'value': 'KR7000FLF'
      },
      'onlineprice_with_shipping_costs': {
        'value': 15.36,
        'formatted': 'EUR 15,36'
      },
      'minimum_price': {
        'value': 14.49,
        'formatted': 'EUR 14,49',
        'editable': true
      },
      'maximum_price': {
        'value': 25.99,
        'formatted': 'EUR 25,99',
        'editable': true
      },
      'wish_price': {
        'value': 16.99,
        'formatted': 'EUR 16,99',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': 'AkkuShop Deutschland',
        'formatted': 'AkkuShop Deutschland'
      },
      'comparedwith_competitor': {
        'value': 'AkkuShop Deutschland',
        'formatted': 'AkkuShop Deutschland'
      },
      'buybox_competitor': {
        'value': 'AkkuShop Deutschland',
        'formatted': 'AkkuShop Deutschland'
      },
      'clousale_category': {
        'value': 'AkkuShop Deutschland',
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': null
      }
    },
    {
      'id': {
        'value': 57392689
      },
      'quantity': {
        'value': 46,
        'editable': true
      },
      'open_date': {
        'value': '2017-01-26T11:51:04.000000Z',
        'formatted': '26.01.2017'
      },
      'last_sale': {
        'value': '2017-10-18T10:13:59.000000Z',
        'formatted': '18.10.2017 (EUR 48.96)'
      },
      'last_pricerule_change': {
        'value': '2017-09-28T10:35:27.000000Z',
        'formatted': '28.09.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'Monoakku SAFT VT D'
      },
      'sku': {
        'value': 'G111054-1'
      },
      'article_number': {
        'value': 'B00IONY3OE',
        'href': 'https:\/\/www.amazon.de\/dp\/B00IONY3OE'
      },
      'manufacturer': {
        'value': 'Saft'
      },
      'part_number': {
        'value': 'VNTDH'
      },
      'onlineprice_with_shipping_costs': {
        'value': 12.3,
        'formatted': 'EUR 12,30'
      },
      'minimum_price': {
        'value': 8.99,
        'formatted': 'EUR 8,99',
        'editable': true
      },
      'maximum_price': {
        'value': 15.99,
        'formatted': 'EUR 15,99',
        'editable': true
      },
      'wish_price': {
        'value': 11.99,
        'formatted': 'EUR 11,99',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': 'AkkuShop Deutschland',
        'formatted': 'AkkuShop Deutschland'
      },
      'comparedwith_competitor': {
        'value': 'AkkuShop Deutschland',
        'formatted': 'AkkuShop Deutschland'
      },
      'buybox_competitor': {
        'value': 'AkkuShop Deutschland',
        'formatted': 'AkkuShop Deutschland'
      },
      'clousale_category': {
        'value': 'AkkuShop Deutschland',
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'OPTI_PRICE'
      }
    },
    {
      'id': {
        'value': 31450832
      },
      'quantity': {
        'value': 0,
        'editable': true
      },
      'open_date': {
        'value': '2016-06-30T09:02:27.000000Z',
        'formatted': '30.06.2016'
      },
      'last_sale': {
        'value': '2017-10-31T18:09:41.000000Z',
        'formatted': '31.10.2017 (EUR 18.96)'
      },
      'last_pricerule_change': {
        'value': '2017-09-28T10:35:27.000000Z',
        'formatted': '28.09.2017'
      },
      'sales_channel': {
        'value': 1,
        'formatted': 'Amazon.de <i class="flag flag-DE" \/>'
      },
      'account_name': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'condition': {
        'value': 'NEW'
      },
      'title': {
        'value': 'Commander Roma XXL5.0 Leder Case f\u00fcr Samsung i9505 Galaxy S4\/Apple iPhone 6 mustard'
      },
      'sku': {
        'value': 'Rot25-14547'
      },
      'article_number': {
        'value': 'B00NFA8BGC',
        'href': 'https:\/\/www.amazon.de\/dp\/B00NFA8BGC'
      },
      'manufacturer': {
        'value': 'Commander'
      },
      'part_number': {
        'value': '14547'
      },
      'onlineprice_with_shipping_costs': {
        'value': 18.96,
        'formatted': 'EUR 18,96'
      },
      'minimum_price': {
        'value': 16.99,
        'formatted': 'EUR 16,99',
        'editable': true
      },
      'maximum_price': {
        'value': 25,
        'formatted': 'EUR 25,00',
        'editable': true
      },
      'wish_price': {
        'value': 0,
        'formatted': '',
        'editable': true
      },
      'price_margin': {
        'value': -2.7,
        'formatted': 'EUR -2,70'
      },
      'strike_price': {
        'value': 0,
        'formatted': ''
      },
      'purchase_price': {
        'value': null,
        'formatted': ''
      },
      'netto_costs': {
        'value': null,
        'formatted': ''
      },
      'margin_minprice': {
        'value': null,
        'formatted': ''
      },
      'margin_maxprice': {
        'value': null,
        'formatted': ''
      },
      'margin_wishprice': {
        'value': null,
        'formatted': ''
      },
      'cheapest_competitor': {
        'value': 'profi-shop-expresss',
        'formatted': 'profi-shop-expresss'
      },
      'comparedwith_competitor': {
        'value': 'profi-shop-expresss',
        'formatted': 'profi-shop-expresss'
      },
      'buybox_competitor': {
        'value': 'Onlineversand Leipzig (DE) - B2B & B2C',
        'formatted': 'Onlineversand Leipzig (DE) - B2B & B2C'
      },
      'clousale_category': {
        'value': 'Deltatecc GmbH',
        'editable': true
      },
      'optimize_active': {
        'value': true,
        'editable': true
      },
      'is_fba': {
        'value': false
      },
      'rank': {
        'value': 'OPTI_PRICE'
      }
    }
  ]
}
