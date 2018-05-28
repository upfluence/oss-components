import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  classNames: ['upf-progress'],
  classNameBindings: ['small:upf-progress--small'],

  value: null,
  colorClass: null
});
