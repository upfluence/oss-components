import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: 'label',
  classNames: ['btn', 'upf-radio-btn'],
  classNameBindings: ['isChecked:active', 'disabled'],
  attributeBindings: ['style', 'data-control-name'],

  style: computed('options', function () {
    return `width: ${100 / Object.keys(this.get('options')).length}%;`;
  }),

  isChecked: computed('value', 'currentValue', 'disabled', function () {
    return !this.disabled && this.value === this.currentValue;
  }),

  click() {
    this.sendAction('onCheck', this.get('value'));
  }
});
