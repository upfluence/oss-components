import Ember from 'ember';

export default Ember.Controller.extend({
  selectedFormat: 'value1',
  types: {
    'Label 1': 'value1',
    'Label 2': 'value2',
    'Label 3': 'value3'
  },

  actions: {
    typeChanged(type) {
      this.set('selectedFormat', type);
    }
  }
});
