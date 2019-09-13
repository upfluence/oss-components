import Component from '@ember/component';
import { equal } from '@ember/object/computed';

export default Component.extend({
  classNames: ['upf-checkbox'],
  classNameBindings: [
    'hasLabel:upf-checkbox--has-label', 'sizeSmall:upf-checkbox--sm'
  ],

  sizeSmall: equal('size', 'sm')
});
