// @ts-ignore
import { setModifierManager, capabilities } from '@ember/modifier';

export default setModifierManager(
  () => ({
    capabilities: capabilities('3.22'),

    createModifier() {
      return {
        element: null
      };
    },

    installModifier(state: any, element: HTMLElement) {
      state.element = element;
      const localElement =
        element.tagName.toLowerCase() === 'input'
          ? (element as HTMLInputElement)
          : (element.querySelector('input:not([disabled])') as HTMLInputElement);

      if (!localElement.disabled) {
        localElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        localElement.focus({ preventScroll: true });
      } else {
        return;
      }
    },

    destroyModifier() {
      // We don't need to do anything here, but a function
      // still has to be here so we'll leave it blank.
    }
  }),
  class EnableInputAutofocusModifierManager {}
);
