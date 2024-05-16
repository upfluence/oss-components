import { setModifierManager, capabilities } from '@ember/modifier';

export default setModifierManager(
  () => ({
    capabilities: capabilities('3.22'),

    createModifier() {
      return {
        element: null,
        handleMouseEnter: null,
        handleMouseLeave: null
      };
    },

    installModifier(state, element, { positional: [trigger = 'hover'] }) {
      state.element = element;

      const handleMouseEnter = () => {
        const popover = document.createElement('div');
        popover.classList.add('oss--popover', 'fade-in');
        popover.setAttribute('role', 'tooltip');
        const placement = element.getAttribute('data-placement') || 'top';
        popover.classList.add(placement);

        if (element.getAttribute('data-title')) {
          const titleNode = document.createTextNode(element.getAttribute('data-title'));
          const titleDiv = document.createElement('div');
          titleDiv.classList.add('font-weight-semibold', 'font-size-md', 'font-color-gray-900');
          titleDiv.appendChild(titleNode);
          popover.appendChild(titleDiv);
        }
        if (element.getAttribute('data-content')) {
          const contentNode = document.createTextNode(element.getAttribute('data-content'));
          const contentDiv = document.createElement('div');
          contentDiv.classList.add('font-color-gray-500');
          contentDiv.appendChild(contentNode);
          popover.appendChild(contentDiv);
        }

        element.appendChild(popover);

        const parentRect = element.getBoundingClientRect();
        const popoverRect = popover.getBoundingClientRect();

        const { left, top } = this.calculatePosition(parentRect, popoverRect, placement);

        popover.style.left = left + 'px';
        popover.style.top = top + 'px';

        state.handleMouseLeave = () => {
          popover.remove();
          element.removeEventListener('mouseleave', state.handleMouseLeave);
        };

        element.addEventListener('mouseleave', state.handleMouseLeave);
      };

      state.handleMouseEnter = handleMouseEnter;
      element.addEventListener(trigger === 'hover' ? 'mouseenter' : trigger, handleMouseEnter);
    },

    updateModifier(state, { positional: [trigger = 'hover'] }) {
      if (state.handleMouseEnter) {
        state.element.removeEventListener(trigger === 'hover' ? 'mouseenter' : trigger, state.handleMouseEnter);
        state.handleMouseEnter = () => {
          state.element.addEventListener(trigger === 'hover' ? 'mouseenter' : trigger, state.handleMouseEnter);
        };
        state.handleMouseEnter();
      }
    },

    destroyModifier(state) {
      if (state.handleMouseEnter) {
        state.element.removeEventListener('mouseleave', state.handleMouseLeave);
        state.element.removeEventListener(
          state.trigger === 'hover' ? 'mouseenter' : state.trigger,
          state.handleMouseEnter
        );
      }
    },

    calculatePosition(parentRect, popoverRect, placement) {
      let left, top;

      switch (placement) {
        case 'top':
          top = parentRect.top - popoverRect.height - 12;
          left = parentRect.left + parentRect.width / 2 - popoverRect.width / 2;
          break;
        case 'bottom':
          top = parentRect.bottom + 12;
          left = parentRect.left + parentRect.width / 2 - popoverRect.width / 2;
          break;
        case 'left':
          top = parentRect.top + parentRect.height / 2 - popoverRect.height / 2;
          left = parentRect.left - popoverRect.width - 12;
          break;
        case 'right':
          top = parentRect.top + parentRect.height / 2 - popoverRect.height / 2;
          left = parentRect.right + 12;
          break;
        default:
          top = parentRect.top - popoverRect.height;
          left = parentRect.left + parentRect.width / 2 - popoverRect.width / 2;
          break;
      }

      return { left, top };
    }
  }),
  class EnablePopoverModifierManager {}
);
