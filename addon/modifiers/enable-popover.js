import { setModifierManager, capabilities } from '@ember/modifier';
import jQuery from 'jquery';

export default setModifierManager(
  () => ({
    capabilities: capabilities('3.22'),

    createModifier() {
      return {
        element: null,
        handler: null
      };
    },

    installModifier(state, element, { positional: [trigger] }) {
      state.element = element;
      trigger ??= 'hover';

      jQuery(element).popover({ trigger });
    },

    destroyModifier() {
      // We don't need to do anything here, but a function
      // still has to be here so we'll leave it blank.
    }
  }),
  class EnablePopoverModifierManager {}
);
