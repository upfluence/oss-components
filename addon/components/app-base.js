import Ember from 'ember';

export default Ember.Component.extend({
  contentContainerClass: Ember.computed('headerStyle', function() {
    if (this.get('headerStyle') === 'sidebar') {
      return 'col-xs-11';
    } else {
      return 'col-xs-12';
    }
  }),
});
