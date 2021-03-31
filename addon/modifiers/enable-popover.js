import { setModifierManager } from '@ember/modifier';
import $ from 'jquery';

export default setModifierManager(
  () => ({
    createModifier() {
      return {
        element: null,
        handler: null
      };
    },

    installModifier(state, element, { positional: [trigger] }) {
      state.element = element;
      trigger ??= 'hover';

      $(element).popover({trigger});
    },

    destroyModifier(state) {
      // We don't need to do anything here, but a function
      // still has to be here so we'll leave it blank.
    }
  }),
  class EnablePopoverModifierManager {}
);
