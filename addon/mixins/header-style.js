import { computed } from '@ember/object';
import Mixin from '@ember/object/mixin';

export default Mixin.create({
  isSidebarStyle: computed('headerStyle', function() {
    return this.get('headerStyle') === 'sidebar';
  }),

  isTopbarStyle: computed('isSidebarStyle', function() {
    return !this.get('isSidebarStyle');
  }),
});
