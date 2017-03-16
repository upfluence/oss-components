import Ember from 'ember';

const {
  Component,
  computed
} = Ember;

export default Component.extend({
  classNames: ['upf-stat'],

  defaultRadialSize: 'upf-progress-radial-lg',
  defaultRadialClass: 'upf-progress-radial--none',

  type: null,
  size: null,
  iconClass: null,
  number: 1,

  radialClass: computed('type', function() {
    if (this.get('type')) {
      return this.get('type');
    }

    return this.get('defaultRadialClass');
  }),


  radialSize: computed('size', function() {
    if (this.get('size')) {
      return this.get('size');
    }

    return this.get('defaultRadialSize');
  }),

  progressValueClass: computed('number', function() {
    return `progress-${this.get('number')}`;
  })
})
