import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  classNames: ['available-filters'],

  upfTableState: service(),

  sortingOptions: {
    'A — Z': 'alphanumerical:asc',
    'Z — A': 'alphanumerical:desc'
  },

  actions: {
    sortingOptionChanged(value) {
      this.upfTableState.updateSortBy(this.column, value);
    }
  }
});
