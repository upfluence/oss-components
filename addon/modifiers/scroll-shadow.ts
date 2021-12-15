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

    baseCSSClass() {
      return 'scroll-shadow';
    },

    colorCSSClass(args: any) {
      const { color } = args.named;
      return `scroll-shadow--${color || 'white'}`;
    },

    installModifier(state: State, element: Element, args: any) {
      state.element = element;

      state.resizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]) => {
        const observedEntry = entries.find((entry) => {
          return entry.target === element;
        });

        if (observedEntry) {
          state.hasScrollbar = observedEntry.target.scrollHeight > observedEntry.target.clientHeight;

          if (state.hasScrollbar && !state.element.classList.contains(this.baseCSSClass())) {
            state.element.classList.add(this.baseCSSClass(), this.colorCSSClass(args));
          } else if (!state.hasScrollbar && state.element.classList.contains(this.baseCSSClass())) {
            state.element.classList.remove(this.baseCSSClass(), this.colorCSSClass(args));
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
