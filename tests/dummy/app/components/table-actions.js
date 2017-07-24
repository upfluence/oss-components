import Ember from 'ember';

const {
  Component,
  get
} = Ember;

export default Component.extend({
  actions: {
    thatMyButton() {
      alert(`Contacting ${this.get('item.name')} (${this.get('item.email')})...`)
    }
  }
});
