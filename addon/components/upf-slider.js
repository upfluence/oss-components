import Component from '@ember/component';
import { computed } from '@ember/object';
import { notEmpty } from '@ember/object/computed';

export default Component.extend({
  classNames: ['upf-slider'],
  classNameBindings: ['color', 'active'],

  value: 0,
  active: false,
  slider: null,
  color: computed('value', 'slider', function() {
    if(this.value === null && this.slider !== null) {
      this.set('active', false);
      this.slider.update({
        from: this.options.max/2
      });
      return;
    }

    if(!this.active) {
      this.set('active', true);
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
      from: this.value !== null ? this.value : this.options.max/2,
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

    let slider = $(".slider").data("ionRangeSlider");

    this.set('slider', slider);
  },
});
