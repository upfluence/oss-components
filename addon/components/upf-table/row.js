import Component from '@ember/component';
import { computed } from '@ember/object';
import { bool } from '@ember/object/computed';

export default Component.extend({
  tagName: '',

  isSelected: bool('ref.selected'),

  computedClasses: computed('isHeaderRow', 'isSelected', 'isHovering', function () {
    const classes = ['upf-datatable__row'];

    if (this.isHeaderRow) classes.push('upf-datatable__row--header');
    if (this.isSelected) classes.push('upf-datatable__row--selected');
    if (this.isHovering) classes.push('upf-datatable__row--polymorphic');

    return classes.join(' ');
  }),

  actions: {
    onRowClick(event) {
      event.stopPropagation();
      this.onRowClick?.(this.ref);
    }
  }
});
