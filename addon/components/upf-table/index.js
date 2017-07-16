import Ember from 'ember';

const {
  Component,
  computed
} = Ember;

export default Component.extend({
  hasSelection: false,
  hasSortableColumns: true,

  _columns: computed('columns', function() {
    return this.get('columns').map((column) => {
      column.visible = (column.visible !== false) ? true : column.visible;
      return Ember.Object.create(column);
    });
  }),

  didInsertElement() {
    if (this.get('hasSortableColumns')) {
      this.$('table').tablesorter({
        cssAsc: 'upf-table__column--ascending',
        cssDesc: 'upf-table__column--descending',
        headers: {
          0: {
            sorter: !this.get('hasSelection')
          }
        }
      });
    }
  },

  actions: {
    selectAll() {
      this.get('collection').map((item) => {
        item.toggleProperty('selected');
      });
    }
  }
});
