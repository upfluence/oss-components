import { alias } from '@ember/object/computed';
import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: 'th',
  classNames: ['upf-datatable__column'],
  classNameBindings: [
    'column.titleIcon:text-size-6',
    'sort'
  ],
  attributeBindings: ['width'],
  width: alias('column.width'),

  sort: computed('column.sorted', 'column.direction', function() {
    if (!this.get('column.sorted')) {
      return 'upf-datatable__column--unsorted';
    }

    // class inversed ?
    if (this.get('column.direction') === 'asc') {
      return 'upf-datatable__column--descending';
    }

    return 'upf-datatable__column--ascending';
  })
});
