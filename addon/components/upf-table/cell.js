import Component from '@ember/component';
import { observer } from '@ember/object';
import { run } from '@ember/runloop';

export default Component.extend({
  classNames: ['table-v2__cell'],
  classNameBindings: [
    'header:table-v2__cell--header',
    'item.selected:table-v2__cell--selected'
  ],

  header: false
});
