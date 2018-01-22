import Ember from 'ember';

const {
  Component,
  computed,
  isBlank
} = Ember;

export default Component.extend({
  classNames: ['upf-stat--new'],
  classNameBindings: ['small:upf-stat--new--small'],

  small: null,
  name: null,
  data: null,
  label: null,

  icon: null,
  iconClass: '',
  iconUrl: null,
  iconLabel: null,

  didRender() {
    if (!isBlank(this.get('iconLabel'))) {
      this.$('[title]').tooltip({ placement: 'bottom' });
    }
  }
});
