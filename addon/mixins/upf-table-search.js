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
    var searchWords = this.get('searchQuery').split(' ');
    let collection = get(this, this.get('searchCollection'));

    if (searchWords === []) {
      return collection;
    }

    return collection.filter((item) => {
      let i;
      for (i = 0; i < searchWords.length; i++) {
        let searchMatch = item.get(
          this.get('searchAttribute')
        ).toLowerCase().includes(searchWords[i].toLowerCase());

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
