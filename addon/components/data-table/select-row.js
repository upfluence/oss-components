import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    selectRecord(record) {
      this.triggerAction({
        action: 'selectRecord',
        actionContext: [record]
      });
    },
  },
});
