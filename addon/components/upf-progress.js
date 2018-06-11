import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({
  classNames: ['upf-progress'],
  classNameBindings: ['small:upf-progress--small'],

  value: null,
  colorClass: null,

  maxWidthStyle: computed('value', function() {
    return `max-width: ${this.get('value')}%`;
  })
});
