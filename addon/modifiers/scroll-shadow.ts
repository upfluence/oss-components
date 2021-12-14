// @ts-ignore
import { setModifierManager } from '@ember/modifier';

type State = {
  element: Element;
  infiniteShadowElement: Element | null;
  resizeObserver: ResizeObserver;
  hasScrollbar: boolean;
};

export default setModifierManager(
  () => ({
    createModifier() {
      return {
        element: null
      };
    },

    installModifier(state: State, element: Element, args: any) {
      const { color } = args.named;
      state.element = element;

      state.resizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]) => {
        const observedEntry = entries.find((entry) => {
          return entry.target === element;
        });

        if (observedEntry) {
          state.hasScrollbar = observedEntry.target.scrollHeight > observedEntry.target.clientHeight;

          if (state.hasScrollbar && !state.element.classList.contains('scroll-shadow')) {
            state.element.classList.add('scroll-shadow', `scroll-shadow--${color || 'white'}`);
          } else if (!state.hasScrollbar && state.element.classList.contains('scroll-shadow')) {
            state.element.classList.remove('scroll-shadow', `scroll-shadow--${color || 'white'}`);
          }
        }
      });

      state.resizeObserver.observe(element);
    },

    destroyModifier(state: State) {
      state.resizeObserver.unobserve(state.element);
    }
  }),
  class scrollShadow {}
);
