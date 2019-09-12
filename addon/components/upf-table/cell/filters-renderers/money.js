import Component from '@ember/component';

export default Component.extend({
  classNames: ['available-filters'],

  sortingOptions: {
    '0 — 9': 'alphanumerical:asc',
    '9 — 0': 'alphanumerical:desc'
  },

  actions: {
    sortingOptionChanged(value) {
      this.manager.updateSortBy(this.column, value);
    }
  }
});
