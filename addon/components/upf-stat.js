import Component from '@ember/component';

export default Component.extend({
  classNames: ['upf-stat'],
  classNameBindings: ['small:upf-stat--small', 'xsmall:upf-stat--x-small'],

  small: null,
  xsmall: null,
  name: null,
  data: null,
  dataClass: null,
  label: null,
  tooltip: null,

  icon: null,
  iconPlacement: 'top',
  iconClass: '',
  iconUrl: null,
  iconLabel: null
});
