import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  currency: computed('column', 'column.currency_key', function() {
    if (this.column && !this.column.currency_key) {
      throw new Error(
        '[upf-table/cell-renderers][money] You are trying to render Money without a currency'
      );
    }

    return this.item.get(this.column.currency_key);
  }),
});
