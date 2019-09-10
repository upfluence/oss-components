import Component from '@ember/component';
import { computed, defineProperty, observer } from '@ember/object';
import { inject as service } from '@ember/service';
import { capitalize } from '@ember/string';
import { isEmpty } from '@ember/utils';

const AVAILABLE_RENDERERS = [
  'text', 'numeric', 'money', 'date'
];

export default Component.extend({
  upfTableState: service(),

  classNames: ['upf-hypertable__cell'],
  classNameBindings: [
    'header:upf-hypertable__cell--header',
    'item.selected:upf-hypertable__cell--selected',
    '_sorted:upf-hypertable__cell--sorted',
    '_filtered:upf-hypertable__cell--filtered',
    'isNumeric:upf-hypertable__cell--numeric',
    'isMoney:upf-hypertable__cell--numeric'
  ],

  header: false,
  selection: false,

  _sorted: false,
  _filtered: false,
  _showFiltersPanel: false,

  _sortingIconClass: computed('_sorted', function() {
    if (this._sorted) {
      let [_, direction] = this.column.sortBy.split(':');

      return (direction === 'asc') ? 'fa-long-arrow-up' : 'fa-long-arrow-down';
    }
  }),

  _renderingComponent: computed('column.type', function() {
    if (AVAILABLE_RENDERERS.includes(this.column.type)) {
      return `upf-table/cell/renderers/${this.column.type}`;
    }
  }),

  _filtersRenderingComponent: computed('column.type', function() {
    if (AVAILABLE_RENDERERS.includes(this.column.type)) {
      return `upf-table/cell/filters-renderers/${this.column.type}`;
    }
  }),

  _tableStateListener() {
    this.set('_sorted', !isEmpty(this.column.sortBy));
    this.set('_filtered', !isEmpty(this.column.filters));
  },

  _filtersPanelListener() {
    if (this.column.property !== this.upfTableState.applyingFiltersOn) {
      this.set('showFiltersPanel', false);
    }
  },

  init() {
    this._super();

    this.get('upfTableState');
  },

  didReceiveAttrs() {
    if (this.column) {
      AVAILABLE_RENDERERS.forEach((rendererType) => {
        defineProperty(
          this,
          `is${capitalize(rendererType)}`,
          computed('column.type', function() {
            return this.column.type === rendererType;
          })
        );
      });

      if (this.header) {
        this.addObserver(
          'upfTableState.columns.@each.sortBy',
          this,
          this._tableStateListener
        );

        this.addObserver(
          'upfTableState.applyingFiltersOn',
          this,
          this._filtersPanelListener
        );
      }

      this.set('_sorted', !isEmpty(this.column.sortBy));
      this.set('_filtered', !isEmpty(this.column.filters));
    }
  },

  actions: {
    toggleFiltersPanel() {
      this.toggleProperty('showFiltersPanel');
      this.set('upfTableState.applyingFiltersOn', this.column.property);
    }
  }
});
