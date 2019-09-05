import Service from '@ember/service';
import EmberObject from '@ember/object';
import { typeOf } from '@ember/utils';

export default Service.extend({
  columns: [],

  updateColumns(columns) {
    this.set('columns', columns.map((column) => {
      if (typeOf(column) !== 'instance') {
        column = EmberObject.create(column);
      }

      column.set('visible', column.visible !== false);
      column.set('sortBy', column.sortBy || null);
      column.set('type', column.type || 'text');

      return column;
    }));
  }
});
