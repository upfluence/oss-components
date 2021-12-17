// @ts-ignore
import { setModifierManager } from '@ember/modifier';

const SCROLL_SHADOW_CLASS = 'scroll-shadow';

type ColorAvailable = 'field' | undefined;
type State = {
  element: Element;
  resizeObserver: ResizeObserver;
};

export default setModifierManager(
  () => ({
    createModifier(): object {
      return {
        element: null
      };
    },

    colorCSSClass(color: ColorAvailable): string {
      return `scroll-shadow--${color || 'default'}`;
    },

    installModifier(state: State, element: Element, args: any): void {
      state.element = element;

      state.resizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]) => {
        const observedEntry = entries.find((entry) => {
          return entry.target === element;
        });

        if (observedEntry) {
          const hasScrollbar = observedEntry.target.scrollHeight > observedEntry.target.clientHeight;

          if (hasScrollbar && !state.element.classList.contains(SCROLL_SHADOW_CLASS)) {
            window.requestAnimationFrame(() => {
              state.element.classList.add(SCROLL_SHADOW_CLASS, this.colorCSSClass(args.named.color));
            });
          } else if (!hasScrollbar && state.element.classList.contains(SCROLL_SHADOW_CLASS)) {
            window.requestAnimationFrame(() => {
              state.element.classList.remove(SCROLL_SHADOW_CLASS, this.colorCSSClass(args.named.color));
            });
          }
        }
      });

      state.resizeObserver.observe(element);
    },

    destroyModifier(state: State): void {
      state.resizeObserver.unobserve(state.element);
    }
  }),
  class scrollShadow {}
);
