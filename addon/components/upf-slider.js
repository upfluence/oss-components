import Component from "@ember/component";
import { computed } from "@ember/object";

export default Component.extend({
  classNames: ["upf-slider"],

  value: 0,
  active: false,
  color: computed("value", "active", function() {
    if(!this.active) {
      return;
    }
    if (this.value <= 50) {
      return "red";
    } else if (this.value < 80) {
      return "yellow";
    }
    return "green";
  }),

  didInsertElement() {
    console.log("HERE");
  },

  actions: {
    onChange(value) {
      if(!this.active) {
        this.toggleProperty("active");
      }
      this.set("value", value);
      this.sendAction("onChange", value);
    }
  }
});
