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
      let query = new RegExp(this.get('searchQuery').split(' ').join('|'), 'gi');
      return query.test(item.get(this.get('searchAttribute')));
    });
  }),

  actions: {
    performSearch(s) {
      this.set('searchQuery', s);
    }
  }
});
