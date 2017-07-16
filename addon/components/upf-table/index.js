import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  tagName: 'table',

  hasSelection: false,
  hasSortableColumns: true,

  didInsertElement() {
    if (this.get('hasSortableColumns')) {
      this.$().tablesorter({
        cssAsc: 'upf-table__column--ascending',
        cssDesc: 'upf-table__column--descending'
      });
    }
  }
});
