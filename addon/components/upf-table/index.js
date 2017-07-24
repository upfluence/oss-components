import Ember from 'ember';

const {
  Component,
  computed,
  observer
} = Ember;

export default Component.extend({
  classNames: ['upf-table__container'],

  hasSelection: false,
  hasSortableColumns: true,

  allRowsSelected: false,
  displayedColumnsPanel: false,

  _columns: computed('columns', function() {
    return this.get('columns').map((column) => {
      column.visible = (column.visible !== false) ? true : column.visible;
      column.sorted = (column.sorted !== true) ? false : column.sorted;
      return Ember.Object.create(column);
    });
  }),

  _sortList: computed('_columns', function() {
    let self = this;
    let sortList = [];

    this.get('_columns').map(function(column, i) {
      if (column.get('sorted')) {
        let startingIndex = (self.get('hasSelection')) ? i : i - 1;
        sortList.push([startingIndex, 0]);
      }
    });

    return sortList;
  }),

  _sortingHeaders: computed('hasSelection', function() {
    let headers = {}

    if(this.get('hasSelection')) {
      headers[0] = { sorter: false }
    }

    return headers;
  }),

  _: observer('allRowsSelected', function() {
    this.get('collection').map((item) => {
      if (this.get('allRowsSelected')) {
        item.set('selected', true);
      } else {
        item.set('selected', false);
      }
    });
  }),

  didInsertElement() {
    if (this.get('hasSortableColumns')) {
      this.$('.upf-datatable__table').tablesorter({
        cssAsc: 'upf-datatable__column--ascending',
        cssDesc: 'upf-datatable__column--descending',
        cssHeader: 'upf-datatable__column--unsorted',
        sortList: this.get('_sortList'),
        headers: this.get('_sortingHeaders')
      });
    }
  },

  actions: {
    toggleDisplayedColumnVisibilityPanel() {
      this.toggleProperty('displayedColumnsPanel')
    }
  }
});
