import { setModifierManager, capabilities } from '@ember/modifier';
import $ from 'jquery';

export default setModifierManager(
  () => ({
    capabilities: capabilities('3.13'),

    createModifier() {
      return {
        element: null
      };
    },

    installModifier(state, element) {
      $(element).dropdown();
    },

    destroyModifier() {
      // We don't need to do anything here, but a function
      // still has to be here so we'll leave it blank.
    }
  }),
  class EnableDropdownModifierManager {}
);
