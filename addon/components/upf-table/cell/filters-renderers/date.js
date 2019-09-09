import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  upfTableState: service(),

  sortingOptions: {
    'Oldest — Newest': 'alphanumerical:asc',
    'Newest — Oldest': 'alphanumerical:desc'
  },

  actions: {
    sortingOptionChanged(value) {
      this.upfTableState.updateSortBy(this.column, value);
    }
  }
});
