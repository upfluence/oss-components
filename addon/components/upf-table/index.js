import Ember from 'ember';

const {
  Component,
  computed,
  observer,
  run
} = Ember;

export default Component.extend({
  classNames: ['upf-table__container'],

  hasSelection: false,
  hasSortableColumns: true,
  hasPagination: false,
  hasSearch: false,

  allRowsSelected: false,
  displayedColumnsPanel: false,

  searchQuery: null,
  searchInputPlaceholder: 'Search...',

  currentPage: 1,
  totalPages: 1,
  perPage: 1,
  itemTotal: 0,
  itemCount: 0,
  itemName: '',

  _columns: computed('columns', function() {
    return this.get('columns').map((column) => {
      column.visible = column.visible !== false;
      column.sorted = column.sorted === true;
      column.editable = column.editable !== false;
      column.unhideable = column.unhideable === true;

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
    let headers = {};

    if(this.get('hasSelection')) {
      headers[0] = { sorter: false };
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

  _: observer('searchQuery', function() {
    run.debounce(this, function() {
      this.get('_targetObject').send('performSearch', this.get('searchQuery'));
    }, 3000);
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
      this.toggleProperty('displayedColumnsPanel');
    },

    callOnRowClickCallback: function(action, record) {
      this.get('_targetObject').send(
        action,
        record
      );
    },

    didPageChange(page) {
      this.sendAction('didPageChange', page);
    }
  }
});
