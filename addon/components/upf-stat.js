import Ember from 'ember';

const {
  Component,
  isBlank
} = Ember;

export default Component.extend({
  classNames: ['upf-stat'],
  classNameBindings: [
    'small:upf-stat--new--small', 'xsmall:upf-stat--new--x-small'
  ],

  small: null,
  xsmall: null,
  name: null,
  data: null,
  dataClass: null,
  label: null,

  icon: null,
  iconPlacement: 'top',
  iconClass: '',
  iconUrl: null,
  iconLabel: null,

  didRender() {
    if (!isBlank(this.get('iconLabel'))) {
      this.$('[title]')
        .tooltip({ placement: 'bottom' })
        .attr('title', this.get('iconLabel'))
        .tooltip('fixTitle');
    }
  }
});
