import { bool } from '@ember/object/computed';
import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
  tagName: 'tr',
  classNames: ['upf-datatable__row'],
  classNameBindings: [
    'isHeaderRow:upf-datatable__row--header',
    'isSelected:upf-datatable__row--selected',
    'isHovering:upf-datatable__row--polymorphic'
  ],

  isSelected: bool('ref.selected'),

  mouseEnter() {
    this.$().parentsUntil('.upf-datatable').find(
      '.upf-datatable__row--polymorphic'
    ).removeClass('upf-datatable__row--polymorphic');

    if (this.get('hasPolymorphicColumns')) {
      this.set('isHovering', true);
    }
  },

  mouseLeave() {
    if (this.get('hasPolymorphicColumns')) {
      this.set('isHovering', false);
    }
  },

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
