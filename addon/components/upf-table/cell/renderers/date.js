import Component from '@ember/component';
import { computed } from '@ember/object';
import { empty, or } from '@ember/object/computed';

import moment from 'moment';

export default Component.extend({
  tagName: '',

  value: computed('item', 'column.property', function() {
    return this.item.get(this.column.property);
  }),

  emptyValue: empty('value'),

  _defaultDateFormat: 'MM/DD/YYYY',
  _dateFormat: or('column.date_format', '_defaultDateFormat'),

  _formattedDate: computed('value', '_dateFormat', function() {
    return moment.unix(this.value).format(this._defaultDateFormat);
  })
});
