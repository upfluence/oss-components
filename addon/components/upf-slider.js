import Component from "@ember/component";
import { computed } from "@ember/object";

export default Component.extend({
  classNames: ["upf-slider"],
  classNameBindings: ["color"],

  value: 0,
  active: false,

  color: computed("value", "active", function() {
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
    this.$(".slider").ionRangeSlider({
      skin: "round",
      min: this.options.min,
      max: this.options.max,
      from: this.options.max/2,
      force_edges: true,
      hide_min_max: true,
      onChange: (data) => {
        if(!this.active) {
          this.toggleProperty("active");
        }
        this.set("value", data.from);
        this.options.onChange(data.from);
      },
      prettify: this.formatValue || null
    });

  }
});
