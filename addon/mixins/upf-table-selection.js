import Ember from 'ember';

const {
  Mixin,
  computed
} = Ember;

export default Mixin.create({
  selectedItems: computed.filterBy('collection', 'selected', true),
  emptySelection: computed.equal('selectedItems.length', 0)
});
