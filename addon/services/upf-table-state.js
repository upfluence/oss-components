import { A } from '@ember/array';
import Service from '@ember/service';
import EmberObject from '@ember/object';
import { isEmpty, typeOf } from '@ember/utils';

export default Service.extend({
  columns: [],

  updateSortBy(column, sortBy) {
    this.columns.forEach((c) => c.set('sortBy', null));
    column.set('sortBy', sortBy);
  },

  addFilters(column, type, value) {
    if (isEmpty(column.filters)) {
      let f = EmberObject.create({ type, value })
      column.set('filters', [f]);
    } else {
      column.set('filters', column.filters.map((f) => {
        if (f.type === type) {
          f.set('value', value);
        }

        return f;
      }));
    }
  },

  clearFilters(column) {
    column.set('filters', []);
  },

  updateColumns(columns) {
    this.set('columns', columns.map((column) => {
      if (typeOf(column) !== 'instance') {
        column = EmberObject.create(column);
      }

      column.set('visible', column.visible !== false);
      column.set('sortBy', column.sortBy || null);
      column.set(
        'filters',
        (column.filters || []).map((x) => EmberObject.create(x))
      );
      column.set('type', column.type || 'text');

      return column;
    }));
  }
});
