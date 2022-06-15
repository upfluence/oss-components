// @ts-ignore
import { setModifierManager, capabilities } from '@ember/modifier';
import { run } from '@ember/runloop';

type State = {
  element: Element;
  handler: (...args: unknown[]) => unknown;
};

const TRIGGER_OFFSET = 20;

/**
 * Used to trigger an action a user reaches the bottom of the modified element.
 * This is useful especially for infinite scrolls.
 */
export default setModifierManager(
  () => ({
    capabilities: capabilities('3.13'),

    createModifier() {
      return {
        element: null,
        handler: null
      };
    },

    installModifier(state: State, element: Element, { positional }: any) {
      const [callback] = positional;
      state.element = element;

      state.handler = (_: Event) => {
        if (
          Math.ceil(state.element.scrollTop) + state.element.clientHeight >=
          state.element.scrollHeight - TRIGGER_OFFSET
        ) {
          callback(state.element, event);
        }
      };

      run(() => {
        state.element.addEventListener('scroll', state.handler, false);
      });
    },

    destroyModifier(state: any) {
      run(() => {
        state.element.removeEventListener('scroll', state.handler, false);
      });
    }
  }),
  class OnClickOutsideModifierManager {}
);
