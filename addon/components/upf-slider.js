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
    if (this.value <= this.lowValue) {
      return this.lowClass;
    } else if (this.value <= this.mediumValue) {
      return this.mediumClass;
    }
    return this.highClass;
  }),

  didInsertElement() {
    $(".slider").ionRangeSlider({
      skin: "round",
      min: 0,
      max: 100,
      from: 50,
      force_edges: true,
      hide_min_max: true,
      onChange: (data) => {
        if(!this.active) {
          this.toggleProperty("active");
        }
        this.set("value", data.from);
        this.sendAction("onChange", data.from);
      },
      prettify: this.formatValue || null
    });

  }
});
