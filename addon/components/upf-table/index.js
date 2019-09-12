import { A } from '@ember/array';
import Component from '@ember/component';
import { computed, observer } from '@ember/object';
import { alias, filterBy } from '@ember/object/computed';
import { run } from '@ember/runloop';
import { isEmpty } from '@ember/utils';

const DEFAULT_OPTIONS = {
  features: {
    selection: false,
    search: false
  }
};

export default Component.extend({
  classNames: ['upf-hypertable-container'],
  //classNameBindings: ['isCompact:upf-table__container--compact'],

  contextualActions: null,
  loadingMore: false,

  /*
   * Configuration
   * =============
   *
   * Define which features of the datatable should be activated.
   *
   */
  options: DEFAULT_OPTIONS,

  /*
   * Event Hooks
   * ===========
   *
   * Actions to be called to react to various events happening on the datatable
   *
   */
  onColumnsChange: null,
  onBottomReached: null,
  onSearchQueryChange: null,

  _allRowsSelected: false,
  _hasScrollbar: false,

  //hasPagination: false,
  //hasPolymorphicColumns: false,
  //hasToggleableColumns: true,
  //isCompact: false,

  _availableColumnsPanel: false,
  _availableColumnsKeyword: '',
  //isLoading: false,
  //contentChanging: false,
  //_contentPlaceholder: new Array(3),

  _searchQuery: null,
  //searchInputPlaceholder: 'Search...',

/*  currentPage: 1,*/
  //totalPages: 1,
  //perPage: 1,
  //itemTotal: 0,
  //itemCount: 0,
  /*itemName: '',*/

  _columns: alias('manager.columns'),
  _selectedItems: filterBy('collection', 'selected', true),

  _orderedFilteredColumns: computed(
    '_columns',
    '_availableColumnsKeyword',
    function() {
      let columns = A(this._columns);

      if (!isEmpty(this._availableColumnsKeyword)) {
        let reg = RegExp(this._availableColumnsKeyword, 'i');
        columns = A(columns.filter((x) => reg.test(x.title)));
      }

      return columns.sortBy('title');
    }
  ),

  _loadingMore: computed('_hasScrollbar', 'loadingMore', function() {
    return this.onBottomReached && this._hasScrollbar && this.loadingMore;
  }),

  _selectAllObserver: observer('_allRowsSelected', function() {
    this.get('collection').forEach((item) => {
      if (this.get('_allRowsSelected')) {
        item.set('selected', true);
      } else {
        item.set('selected', false);
      }
    });
  }),

  _columnsChanged: observer(
    '_columns', '_columns.@each.{visible,sortBy,filters}',
    function() {
      if (this.onColumnsChange) {
        this.onColumnsChange(this._columns);
      }
    }
  ),

  _selectedItemsChanged: observer('_selectedItems', function() {
    if (this.contextualActions) {
      let ca = document.querySelector('.contextual-actions');

      if (this._selectedItems.length > 0) {
        ca.classList.remove('contextual-actions--no-animation');
        ca.classList.add('contextual-actions--visible');
      } else {
        ca.classList.remove('contextual-actions--visible');
        ca.classList.add('contextual-actions--hidden');
      }
    }
  }),

  _searchQueryObserver: observer('_searchQuery', function() {
    run.debounce(this, () => {
      if (this.onSearchQueryChange) {
        this.onSearchQueryChange(this.get('_searchQuery'));
      }
    }, 1000);
  }),

  didInsertElement() {
    let self = this;

    this.$('.upf-hypertable__table').on('scroll', function() {
      let tableHeight = $(this).innerHeight();
      let contentHeight = $('.upf-hypertable')[0].scrollHeight;
      let heightScrolled = $(this).scrollTop();

      self.set('_hasScrollbar', (tableHeight <= contentHeight));

      if ((heightScrolled + tableHeight) >= contentHeight) {
        if (self.onBottomReached) {
          self.onBottomReached();
        }
      }
    });
  },

  actions: {
    reorderColumns(x, itemModels, _) {
      let _cs = [x[0]].concat(itemModels.concat(x.filter(x => !x.visible)))
      _cs.forEach((c, i) => c.set('order', i))
      this.manager.updateColumns(_cs);
    },

    openAvailableColumns() {
      this.toggleProperty('_availableColumnsPanel');
    }

    //callOnRowClickCallback(action, record) {
      //this.onRowClick(record);
    //},

    //didPageChange(page) {
      //this.sendAction('didPageChange', page);
    /*},*/

    //onClickHeader(column) {
      //if (!column.get('sortKey')) {
        //return;
      //}

      //if (!column.get('sorted')) {
        //this.get('_columns').forEach((c) => c.set('sorted', false));
        //// default direction
        //column.set('sorted', true);
        //column.set('direction', 'desc');
      //} else {
        //let direction = column.get('direction') === 'desc' ? 'asc' : 'desc';
        //column.set('direction', direction);
      //}

      //this.sendAction('didSortColumn', column);
    /*},*/

    //triggerObjectCreation() {
      //this.triggerAction({ action: 'handleObjectCreation'});
    //},

    //setContentChanging(contentChanging) {
      //this.set('contentChanging', contentChanging);
    //}
  }
});
