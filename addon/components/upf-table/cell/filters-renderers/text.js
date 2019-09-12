import Component from '@ember/component';

export default Component.extend({
  classNames: ['available-filters'],

  sortingOptions: {
    'A — Z': 'alphanumerical:asc',
    'Z — A': 'alphanumerical:desc'
  },

  actions: {
    sortingOptionChanged(value) {
      this.manager.updateSortBy(this.column, value);
    }
  }
});
