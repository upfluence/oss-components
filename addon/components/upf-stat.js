import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  classNames: ['upf-stat'],

  name: null,
  data: null,

  progressValue: null,
  progressLabel: null,

  icon: null,
  iconClass: ''
});
