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
    let collection = get(this, this.get('searchCollection'));

    if (this.get('searchQuery') === '') {
      return collection;
    }

    return collection.filter((item) => {
      let i;
      let searchWords = this.get('searchQuery').split(' ');

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
