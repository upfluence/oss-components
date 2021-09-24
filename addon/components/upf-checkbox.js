import Component from '@ember/component';
import { observer } from '@ember/object';
import { equal } from '@ember/object/computed';

export default Component.extend({
  classNames: ['upf-checkbox'],
  classNameBindings: [
    'hasLabel:upf-checkbox--has-label', 'sizeSmall:upf-checkbox--sm',
    'disabled:upf-checkbox--disabled'
  ],
  attributeBindings: ['data-control-name'],

  sizeSmall: equal('size', 'sm'),
  disabled: false,

  onValueChange: null,
  onToggleAttempt: null,

  _: observer('value', function() {
    if (this.onValueChange) {
      this.onValueChange(this.value);
    }
  }),

  click(e) {
    e.stopPropagation();

    if (this.disabled && this.onToggleAttempt) {
      e.preventDefault();
      this.onToggleAttempt();
    }
  }
});
