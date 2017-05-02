import Ember from 'ember';

const {
 Route
} = Ember;

export default Route.extend({
  actions: {
    deleteStuffSuccessfully(record, defer) {
      alert('Stuff deleted');
      defer.resolve();
    },

    deleteStuffWithError(record, defer) {
      defer.reject();
    },

    runSlowAction(record, defer) {
      console.log('plplplpl');
      Ember.run.later(function() {
        defer.resolve()
      }, 5000);
    }
  }
});
