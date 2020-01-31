import Component from '@ember/component';
import { computed } from '@ember/object';
import { equal } from '@ember/object/computed';

const DEFAULT_OPTIONS = {
  min: null,
  max: null,
  fromPlaceholder: 'From',
  toPlaceholder: 'To'
};

export default Component.extend({
  classNames: ['upf-numeric-range'],
  classNameBindings: ['sizeSmall:upf-numeric-range--small'],

  size: null,

  sizeSmall: equal('size', 'small'),

  defaultOptions: {
  },

  _options: computed('options', function() {
    return Object.assign({}, DEFAULT_OPTIONS, this.options);
  }),

});
