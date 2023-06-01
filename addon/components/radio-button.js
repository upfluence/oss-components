import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: 'label',
  classNames: ['btn', 'upf-radio-btn'],
  classNameBindings: ['isChecked:active', 'disabled'],
  attributeBindings: ['style', 'data-control-name'],

  style: computed('options', 'fixedWidth', function () {
    if (this.fixedWidth) return;
    return `width: ${100 / Object.keys(this.get('options')).length}%;`;
  }),

  isChecked: computed('value', 'currentValue', 'disabled', function () {
    return this.value === this.currentValue;
  }),

  click(e) {
    e.stopPropagation();
    if (!this.disabled) {
      // eslint-disable-next-line
      this.sendAction('onCheck', this.value);
    }
  }
});
