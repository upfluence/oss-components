import Mixin from '@ember/object/mixin';
import { get, defineProperty, computed } from '@ember/object';

export default Mixin.create({
  searchCollection: 'model',
  searchQuery: '',

  init() {
    this._super();
    defineProperty(
      this,
      'filteredCollection',
      computed('searchQuery', 'searchAttribute', 'searchCollection', this.get('searchCollection'), function () {
        let searchWords = this.get('searchQuery')
          .split(' ')
          .map((x) => {
            return x.toLowerCase();
          });
        let collection = get(this, this.get('searchCollection')).filterBy('isNew', false);

        if (searchWords === []) {
          return collection;
        }

        return collection.filter((item) => {
          let itemName = item.get(this.get('searchAttribute') ?? '').toLowerCase();

          let i;

          for (i = 0; i < searchWords.length; i++) {
            let searchMatch = itemName.includes(searchWords[i]);

            if (searchMatch) {
              return true;
            }
          }
        });
      })
    );
  },

  actions: {
    performSearch(s) {
      this.set('page', 1);
      this.set('searchQuery', s);
    }
  }
});
