import Component from '@ember/component';
import { computed } from '@ember/object';
import { notEmpty, or } from '@ember/object/computed';

export default Component.extend({
  classNames: ['upf-slider'],
  classNameBindings: ['color', 'active'],

  value: or('options.value', '0'),
  active: notEmpty('options.value'),

  color: computed('value', 'active', 'options.value', function() {
    if(!this.active) {
      return;
    }
    if (this.value <= this.options.lowValue) {
      return this.options.lowClass;
    } else if (this.value <= this.options.mediumValue) {
      return this.options.mediumClass;
    }
    return this.options.highClass;
  }),

  didInsertElement() {
    this.$('.slider').ionRangeSlider({
      skin: 'round',
      min: this.options.min,
      max: this.options.max,
      from: this.options.value || this.options.max/2,
      hide_min_max: true,
      onChange: (data) => {
        if(!this.active) {
          this.toggleProperty('active');
        }
        this.set('value', data.from);
      },
      onFinish: (data) => {
        this.onChange(data.from);
      },
      prettify: this.formatValue || null
    });

  }
});
