import { setModifierManager, capabilities } from '@ember/modifier';
import { run } from '@ember/runloop';

/**
 * Used to detect clicks occuring _outside_ of the modified element.
 * This is useful especially for dropdowns to toggle content visibility
 * when the user clicks away.
 */
export default setModifierManager(
  () => ({
    capabilities: capabilities('3.22'),

    createModifier() {
      return {
        element: null,
        handler: null
      };
    },

    installModifier(state, element, { positional: [callback], named: { useCapture } }) {
      state.element = element;
      state.useCapture = useCapture ?? false;

      state.handler = (event) => {
        if (!element.contains(event.target)) {
          callback(state.element, event);
        }
      };

      run(() => {
        document.addEventListener('click', state.handler, state.useCapture);
      });
    },

    destroyModifier(state) {
      run(() => {
        document.removeEventListener('click', state.handler, state.useCapture);
      });
    }
  }),
  class OnClickOutsideModifierManager {}
);
