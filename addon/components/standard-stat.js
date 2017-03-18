import Ember from 'ember';

const {
  Component,
  computed
} = Ember;

export default Component.extend({
  classNames: ['upf-stat'],
  attributeBindings: ['number', 'title', 'type', 'upfIcon', 'upfIconColor'],

  size: 'upf-progress-radial-lg',
  type: 'upf-progress-radial--none',
  iconClass: null,
  number: 1,

  progressValueClass: computed('number', function() {
    return `progress-${this.get('number')}`;
  })
})
