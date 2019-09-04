import Component from '@ember/component';
import EmberObject, { computed, observer } from '@ember/object';
import { filterBy, sort } from '@ember/object/computed';
import { run } from '@ember/runloop';
import { isEmpty } from '@ember/utils';

export default Component.extend({
  classNames: ['upf-hypertable-container'],
  //classNameBindings: ['isCompact:upf-table__container--compact'],

  hasSelection: false,

  _allRowsSelected: false,

  //hasPagination: false,
  //hasSearch: false,
  //hasPolymorphicColumns: false,
  //hasToggleableColumns: true,
  //isCompact: false,

  _availableColumnsPanel: false,
  _availableColumnsKeyword: '',
  //isLoading: false,
  //contentChanging: false,
  //_contentPlaceholder: new Array(3),

  //_searchQuery: null,
  //searchInputPlaceholder: 'Search...',

/*  currentPage: 1,*/
  //totalPages: 1,
  //perPage: 1,
  //itemTotal: 0,
  //itemCount: 0,
  /*itemName: '',*/

  _columns: computed('columns', function() {
    return this.get('columns').map((column) => {
      column = EmberObject.create(column);

      column.set('visible', column.visible !== false);
      column.set('sorted', column.sorted === true);
      column.set('editable', column.editable !== false);
      column.set('unhideable', column.unhideable === true);
      column.set('type', column.type || 'text');

      return column;
    });
  }),

  _orderedFilteredColumns: computed(
    '_columns',
    '_availableColumnsKeyword',
    function() {
      let columns = Ember.A(this._columns);

      if (!isEmpty(this._availableColumnsKeyword)) {
        let reg = RegExp(this._availableColumnsKeyword, 'i');
        columns = Ember.A(columns.filter((x) => reg.test(x.title)));
      }

      return columns.sortBy('title');
    }
  ),

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
    '_columns', '_columns.@each.visible',
    function() {
      if (this.columnsChanged) {
        this.columnsChanged(this._columns);
      }
    }
  ),

/*  _bubbleSearch: function() {*/
    //if (this.performSearch) {
      //this.performSearch(this.get('_searchQuery'));
    //}
  //},

  //_searchQueryObserver: observer('_searchQuery', function() {
    //run.debounce(this, this._bubbleSearch, 100);
  //}),

  //didReceiveAttrs() {
    //if (isEmpty(this.columns)) {
      //throw new Error('[component][upf-table] Missing columns');
    //}
  //},
  actions: {
    reorderColumns(x, itemModels, y) {
      let _cs = [x[0]].concat(itemModels.concat(x.filter(x => !x.visible)))
      _cs.forEach((c, i) => c.set('order', i))
      this.set('columns', _cs);
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
