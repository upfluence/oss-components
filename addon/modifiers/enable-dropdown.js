import { setModifierManager } from '@ember/modifier';
import $ from 'jquery';

export default setModifierManager(
  () => ({
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
