import Ember from 'ember';

const {
  Component,
  computed,
  $
} = Ember;

export default Component.extend({
  tagName: 'tr',
  classNames: ['upf-datatable__row'],
  classNameBindings: [
    'isHeaderRow:upf-datatable__row--header',
    'isSelected:upf-datatable__row--selected'
  ],

  isSelected: computed.bool('ref.selected'),

  click: function(e) {
    let clickedColumnIsUneditable = $(e.target).parents(
      'td.upf-datatable__column.upf-datatable__column--uneditable'
    ).length !== 0;
    if (this.get('onRowClickCallback') && !clickedColumnIsUneditable) {
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
