import { computed } from '@ember/object';
import Mixin from '@ember/object/mixin';

export default Mixin.create({
  isSidebarStyle: computed.equal('headerStyle', 'sidebar'),

  isTopbarStyle: computed.not('isSidebarStyle')
});
