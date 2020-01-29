import Component from '@ember/component';
import { computed } from '@ember/object';
import { equal } from '@ember/object/computed';

export default Component.extend({
  classNames: ['upf-numeric-range'],
  classNameBindings: ['sizeSmall:upf-numeric-range--small'],

  size: null,

  sizeSmall: equal('size', 'small'),

  defaultOptions: {
    min: null,
    max: null,
    fromPlaceholder: 'From',
    toPlaceholder: 'To'
  },

  _options: computed('defaultOptions', 'options', function() {
    return Object.assign({}, this.defaultOptions, this.options);
  }),

});
