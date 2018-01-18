import Ember from 'ember';

const {
  Component,
  computed
} = Ember;

export default Component.extend({
  classNames: ['upf-stat--new'],
  classNameBindings: ['small:upf-stat--new--small'],

  small: null,
  name: null,
  data: null,
  label: null,

  icon: null,
  iconClass: ''
});
