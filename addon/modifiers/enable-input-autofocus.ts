// @ts-ignore
import { setModifierManager, capabilities } from '@ember/modifier';

export default setModifierManager(
  () => ({
    capabilities: capabilities('3.22'),

    createModifier(): object {
      return {
        element: null
      };
    },

    installModifier(state: any, element: HTMLElement): void {
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

    destroyModifier(): void {} // keep even if empty
  }),
  class EnableInputAutofocusModifierManager {}
);
