import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    selectRecord(record) {
      this.get('targetObject').send('selectRecord', record);
    },
  },
});
