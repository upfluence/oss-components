import Ember from 'ember';

const {
  Component,
  computed
} = Ember;

export default Component.extend({
  classNames: ['upf-stat'],
  classNameBindings: ['statSizeModifier'],

  size: 'lg',
  type: 'upf-progress-radial--none',
  iconClass: null,
  number: 1,

  statSizeModifier: computed('size', function() {
    return `upf-stat--${this.get('size')}`;
  }),

  numberAsPercentOfMaxValue: computed('number', 'maxValue', function() {
    return Math.floor((100 * this.get('number')) / this.get('maxValue'));
  }),

  progressValueClass: computed('number', function() {
    return `upf-progress-${this.get('numberAsPercentOfMaxValue')}`;
  })
})
