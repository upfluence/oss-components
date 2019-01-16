import { filterBy, equal } from '@ember/object/computed';
import Mixin from '@ember/object/mixin';

export default Mixin.create({
  selectedItems: filterBy('collection', 'selected', true),
  emptySelection: equal('selectedItems.length', 0)
});
