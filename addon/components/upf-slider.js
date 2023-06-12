import Component from '@ember/component';
import { computed } from '@ember/object';
import jQuery from 'jquery';

export default Component.extend({
  classNames: ['upf-slider'],
  classNameBindings: ['color', 'active'],
  attributeBindings: ['data-control-name'],

  value: 0,
  active: false,
  slider: null,
  color: computed(
    'value',
    'slider',
    'active',
    'options.{highClass,lowClass,lowValue,max,mediumClass,mediumValue}',
    function () {
      if (this.value === null && this.slider !== null) {
        // eslint-disable-next-line ember/no-side-effects
        this.set('active', false);
        this.slider.update({
          from: this.options.max / 2
        });
        return;
      }

      if (!this.active) {
        // eslint-disable-next-line ember/no-side-effects
        this.set('active', true);
      }

      if (this.value <= this.options.lowValue) {
        return this.options.lowClass;
      } else if (this.value <= this.options.mediumValue) {
        return this.options.mediumClass;
      }

      return this.options.highClass;
    }
  ),

  didInsertElement() {
    this._super();
    this.element.querySelector('.slider').ionRangeSlider({
      skin: 'round',
      min: this.options.min,
      max: this.options.max,
      from: this.value !== null ? this.value : this.options.max / 2,
      hide_min_max: true,
      step: this.options.step,
      from_min: this.options.start,
      from_max: this.options.end,
      onChange: (data) => {
        if (!this.active) {
          this.toggleProperty('active');
        }
        this.set('value', data.from);
      },
      onFinish: (data) => {
        this.onChange(data.from);
      },
      prettify: this.formatValue || null
    });

    let slider = jQuery(this.element.querySelector('.slider')).data('ionRangeSlider');

    this.set('slider', slider);
  }
});
