import Ember from 'ember';

const {
  Component,
  computed
} = Ember;

export default Component.extend({
  tagName: 'tr',
  classNames: ['upf-datatable__row'],
  classNameBindings: [
    'isHeaderRow:upf-datatable__row--header',
    'isSelected:upf-datatable__row--selected'
  ],

  isSelected: computed('ref.selected', function() {
    return this.get('ref.selected') === true;
  }),

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
