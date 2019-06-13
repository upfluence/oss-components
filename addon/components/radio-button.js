import Component from '@ember/component';
import { computed } from '@ember/object';
import { equal } from '@ember/object/computed';

export default Component.extend({
  tagName: 'label',
  classNames: ['btn', 'upf-radio-btn'],
  classNameBindings: ['isChecked:active', 'isDisabled:disabled'],
  attributeBindings: ['style'],
  style: computed('options', function() {
    return `width: ${100 / Object.keys(this.get('options')).length}%;`;
  }),

  isChecked: computed('value', 'currentValue', 'isDisabled', function() {
    if (!this.isDisabled) {
      return this.get('value') === this.get('currentValue');
    }
    return false;
  }),

  isDisabled: equal('disabled', true),

  click() {
    this.sendAction('onCheck', this.get('value'));
  }
});
