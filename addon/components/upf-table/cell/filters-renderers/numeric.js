import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  upfTableState: service(),

  sortingOptions: {
    '0 — 9': 'alphanumerical:asc',
    '9 — 0': 'alphanumerical:desc'
  },

  actions: {
    sortingOptionChanged(value) {
      this.upfTableState.updateSortBy(this.column, value);
    }
  }
});
