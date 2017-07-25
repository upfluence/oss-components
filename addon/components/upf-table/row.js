import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  tagName: 'tr',
  classNames: ['upf-datatable__row'],
  classNameBindings: ['isHeaderRow:upf-datatable__row--header'],

  click: function(e) {
    if(this.get('onRowClickCallback')) {
      this.send('handleRowClickCallback');
    }
  },

  actions: {
    handleRowClickCallback() {
      this.sendAction(
        'action',
        this.get('onRowClickCallback'),
        this.get('ref')
      );
    }
  }
});
