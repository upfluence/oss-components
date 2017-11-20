import Ember from 'ember';

const {
  Component,
  computed
} = Ember;

export default Component.extend({
  tagName: 'label',
  classNames: ['btn', 'upf-radio-btn'],
  classNameBindings: ['isChecked:active'],
  attributeBindings: ['style'],
  style: computed('options', function() {
    return `width: ${100 / Object.keys(this.get('options')).length}%;`;
  }),

  isChecked: computed('value', 'currentValue', function() {
    return this.get('value') === this.get('currentValue');
  }),

  click() {
    this.sendAction('onCheck', this.get('value'));
  }
});
