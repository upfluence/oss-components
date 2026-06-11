// @ts-ignore
import { setModifierManager, capabilities } from '@ember/modifier';
import { run } from '@ember/runloop';
import { installScrollReachedModifier, type State } from './install-scroll-reached-modifier';

/**
 * Used to trigger an action a user reaches the top of the modified element.
 * This is useful especially for infinite scrolls.
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

    installModifier(state: State, element: Element, { positional, named }: any) {
      installScrollReachedModifier(state, element, positional, named, (targetElement, offset) => {
        return Math.ceil(targetElement.scrollTop) <= offset;
      });
    },

    destroyModifier(state: any) {
      run(() => {
        state.element.removeEventListener('scroll', state.handler, false);
      });
    }
  }),
  class OnTopReachedModifierManager {}
);
