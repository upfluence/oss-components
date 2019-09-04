import Component from '@ember/component';
import { computed } from '@ember/object';
import { empty } from '@ember/object/computed';

export default Component.extend({
  tagName: '',

  currency: computed('column', 'column.currency_key', function() {
    if (this.column && !this.column.currency_key) {
      throw new Error(
        '[upf-table/cell-renderers][money] You are trying to render Money without a currency'
      );
    }

    return this.item.get(this.column.currency_key);
  }),

  amount: computed('item', 'column.property', function() {
    return this.item.get(this.column.property);
  }),

  emptyAmount: empty('amount')
});
