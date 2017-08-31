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
  hasPagination: false,
  hasSearch: false,

  allRowsSelected: false,
  displayedColumnsPanel: false,
  isLoading: false,

  _searchQuery: null,
  searchInputPlaceholder: 'Search...',

  currentPage: 1,
  totalPages: 1,
  perPage: 1,
  itemTotal: 0,
  itemCount: 0,
  itemName: '',

  init() {
    this._super();

    this.set('_searchQuery', this.get('searchQuery'));
  },

  _columns: computed('columns', function() {
    return this.get('columns').map((column) => {
      column.visible = column.visible !== false;
      column.sorted = column.sorted === true;
      column.editable = column.editable !== false;
      column.unhideable = column.unhideable === true;

      return Ember.Object.create(column);
    });
  }),

  _initiallyDisplayedColumns: computed.filterBy('_columns', 'visible'),
  _fullSizeColumnColspan: computed('_initiallyDisplayedColumns', function() {
    if (this.get('hasSelection')) {
      return this.get('_initiallyDisplayedColumns').length + 1;
    }

    return this.get('_initiallyDisplayedColumns').length;
  }),

  _selectAllObserver: observer('allRowsSelected', function() {
    this.get('collection').map((item) => {
      if (this.get('allRowsSelected')) {
        item.set('selected', true);
      } else {
        item.set('selected', false);
      }
    });
  }),

  _bubbleSearch: function() {
    this.get('_targetObject').send('performSearch', this.get('_searchQuery'));
  },

  _searchQueryObserver: observer('_searchQuery', function() {
    run.debounce(this, this._bubbleSearch, 2000);
  }),

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
    },

    onClickHeader(column) {
      if (!column.get('sortKey')) {
        return;
      }

      if (!column.get('sorted')) {
        this.get('_columns').forEach((c) => c.set('sorted', false));
        // default direction
        column.set('sorted', true);
        column.set('direction', 'desc');
      } else {
        let direction = column.get('direction') === 'desc' ? 'asc' : 'desc';
        column.set('direction', direction);
      }

      this.sendAction('didSortColumn', column);
    }
  }
});
