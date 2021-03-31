import { setModifierManager } from '@ember/modifier';

export default setModifierManager(
  () => ({
    createModifier() {
      return {
        element: null,
        handler: null
      };
    },

    installModifier(state, element, { positional: [callback] }) {
      state.element = element;

      state.handler = (event) => {
        if (!element.contains(event.target)) {
          callback(state.element, event);
        }
      }

      console.log('hello')
      document.addEventListener('click', state.handler, false);
    },

    destroyModifier(state) {
      document.removeEventListener('click', state.handler, false);
    }
  }),
  class OnClickOutsideModifierManager {}
);
