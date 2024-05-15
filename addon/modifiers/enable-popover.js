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
        popover.textContent = 'azeazeazeaze new';
        popover.classList.add('oss--popover');
        popover.setAttribute('role', 'tooltip');

        if (element.getAttribute('data-title')) {
          const titleNode = document.createTextNode(element.getAttribute('data-title'));
          const titleDiv = document.createElement('div');
          titleDiv.appendChild(titleNode);
          popover.appendChild(titleDiv);
        }
        if (element.getAttribute('data-content')) {
          const contentNode = document.createTextNode(element.getAttribute('data-content'));
          const contentDiv = document.createElement('div');
          contentDiv.appendChild(contentNode);
          popover.appendChild(contentDiv);
        }

        element.appendChild(popover);

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
    }
  }),
  class EnablePopoverModifierManager {}
);
