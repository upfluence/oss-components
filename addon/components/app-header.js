import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nav',
  classNameBindings: ['headerStyleClass'],

  isSidebarStyle: Ember.computed('headerStyle', function() {
    return this.get('headerStyle') === 'sidebar';
  }),

  isTopbarStyle: function() {
    return !this.get('isSidebarStyle');
  },

  headerStyleClass: Ember.computed('headerStyle', function() {
    if (this.get('isSidebarStyle')) {
      return 'col-xs-1 app-header--sidebar';
    } else {
      return 'col-xs-12 app-header--topbar';
    }
  }),

});
