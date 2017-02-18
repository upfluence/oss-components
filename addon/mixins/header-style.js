import Ember from 'ember';

export default Ember.Mixin.create({
  isSidebarStyle: Ember.computed('headerStyle', function() {
    return this.get('headerStyle') === 'sidebar';
  }),

  isTopbarStyle: Ember.computed('isSidebarStyle', function() {
    return !this.get('isSidebarStyle');
  }),
});
