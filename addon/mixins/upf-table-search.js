import Ember from 'ember';

const {
  Mixin,
  computed,
  get
} = Ember;

export default Mixin.create({
  searchCollection: 'model',
  searchQuery: '',

  filteredCollection: computed('searchQuery', function() {
    let searchWords = this.get('searchQuery').split(' ').map(x => x.toLowerCase());
    let collection = get(this, this.get('searchCollection'));

    if (searchWords === []) {
      return collection;
    }

    return collection.filter((item) => {
      let itemName = item.get(this.get('searchAttribute')).toLowerCase();
      let i;

      for (i = 0; i < searchWords.length; i++) {
        let searchMatch = itemName.includes(searchWords[i]);

        if (searchMatch) {
          return true;
        }
      }
    });
  }),

  actions: {
    performSearch(s) {
      this.set('searchQuery', s);
    }
  }
});
