import Ember from 'ember';

const {
  Mixin,
  computed
} = Ember;

export default Mixin.create({
  selectedItems: computed('collection.@each.selected', function() {
    return this.get('collection').filter((item) => {
      return item.get('selected');
    });
  }),

  emptySelection: computed.equal('selectedItems.length', 0)
});
