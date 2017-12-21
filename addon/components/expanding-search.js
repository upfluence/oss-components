import Ember from 'ember';

const {
  Component,
  computed,
  observer
} = Ember;

export default Component.extend({
  classNames: ['expanding-search'],
  classNameBindings: ['expandedSearch:expanding-search--opened'],

  searchQuery: '',
  emptySearchQuery: computed.empty('searchQuery'),
  expandedSearch: computed.not('emptySearchQuery'),

  _: observer('searchQuery', function() {
    this.sendAction('updateSearchQuery', this.get('searchQuery'));
  }),

  actions: {
    expandOrErase() {
      if (!this.get('expandedSearch')) {
        this.set('expandedSearch', true);
      } else {
        this.set('searchQuery', '');
        this.set('expandedSearch', false);
      }
    }
  }
});
