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

  _: observer('allRowsSelected', function() {
    this.get('collection').map((item) => {
      item.toggleProperty('selected');
    });
  })
});
