// @ts-ignore
import { setModifierManager } from '@ember/modifier';

type State = {
  element: Element;
  handler: (...args: unknown[]) => unknown;
};

/**
 * Used to trigger an action a user reaches the bottom of the modified element.
 * This is useful especially for infinite scrolls.
 */
export default setModifierManager(
  () => ({
    createModifier() {
      return {
        element: null,
        handler: null
      };
    },

    installModifier(state: State, element: Element, { positional }: any) {
      const [callback] = positional;
      state.element = element;

      state.handler = (event: Event) => {
        if (state.element.scrollTop + state.element.clientHeight >= state.element.scrollHeight) {
          callback(state.element, event);
        }
      };

      state.element.addEventListener('scroll', state.handler, false);
    },

    destroyModifier(state: any) {
      state.element.removeEventListener('scroll', state.handler, false);
    }
  }),
  class OnClickOutsideModifierManager {}
);
