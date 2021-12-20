import { empty, not } from '@ember/object/computed';
import Component from '@ember/component';

export default Component.extend({
  classNames: ['expanding-search'],
  classNameBindings: ['expandedSearch:expanding-search--opened', 'small:expanding-search--small'],
  attributeBindings: ['data-control-name'],

  searchQuery: '',
  emptySearchQuery: empty('searchQuery'),
  expandedSearch: not('emptySearchQuery'),

  actions: {
    expandOrErase() {
      if (!this.get('expandedSearch')) {
        this.set('expandedSearch', true);
        this.$('.expanding-search__input').focus();
      } else {
        this.set('searchQuery', '');
        this.set('expandedSearch', false);
      }
    }
  }
});
