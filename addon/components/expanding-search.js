import Ember from 'ember';

const {
  Component,
  computed
} = Ember;

export default Component.extend({
  classNames: ['expanding-search'],
  classNameBindings: [
    'expandedSearch:expanding-search--opened',
    'small:expanding-search--small'
  ],

  searchQuery: '',
  emptySearchQuery: computed.empty('searchQuery'),
  expandedSearch: computed.not('emptySearchQuery'),

  actions: {
    expandOrErase() {
      if (!this.get('expandedSearch')) {
        this.set('expandedSearch', true);
        this.$('.upf-input').focus();
      } else {
        this.set('searchQuery', '');
        this.set('expandedSearch', false);
      }
    }
  }
});
