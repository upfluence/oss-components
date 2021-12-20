import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['upf-stat'],
  classNameBindings: ['statSizeModifier'],

  size: 'lg',
  type: 'upf-progress-radial--none',
  iconClass: null,
  number: 1,

  renderFunction: '',

  statSizeModifier: computed('size', function () {
    return `upf-stat--${this.get('size')}`;
  }),

  numberAsPercentOfMaxValue: computed('number', 'maxValue', function () {
    return Math.floor((100 * this.get('number')) / this.get('maxValue'));
  }),

  progressValueClass: computed('number', 'numberAsPercentOfMaxValue', function () {
    return `upf-progress-${this.get('numberAsPercentOfMaxValue')}`;
  }),

  displayNumber: computed('number', 'renderFunction', 'targetObject', function () {
    let render = this.get('renderFunction');

    if (!render) {
      return this.get('number');
    }

    return render.call(this.get('targetObject') || this, this.get('number'));
  })
});
