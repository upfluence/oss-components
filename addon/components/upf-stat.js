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
  dataClass: null,
  label: null,

  icon: null,
  iconClass: '',

  dataClass: computed('data', function() {
    if (this.get('data') === 0) {
      return ' upf-stat__data--null'
    }
  })
});
