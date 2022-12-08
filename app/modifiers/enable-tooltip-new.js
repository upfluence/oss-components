import { setModifierManager, capabilities } from '@ember/modifier';

const ELEMENT_TARGET_MARGIN = 10;

function _computedLeft(element, target, placement) {
  const targetBoundingClientRect = target.getBoundingClientRect();
  const targetLeftRelativeToDocument = targetBoundingClientRect.left + document.documentElement.scrollLeft;

  switch (placement) {
    case 'top':
      return targetLeftRelativeToDocument + target.offsetWidth / 2 - element.offsetWidth / 2;
    case 'bottom':
      return targetLeftRelativeToDocument + target.offsetWidth / 2 - element.offsetWidth / 2;
    case 'right':
      return targetLeftRelativeToDocument + target.offsetWidth + ELEMENT_TARGET_MARGIN;
    case 'left':
      return targetLeftRelativeToDocument - element.offsetWidth - ELEMENT_TARGET_MARGIN;
    default:
      return 0;
  }
}

function _computedTop(element, target, placement) {
  const targetBoundingClientRect = target.getBoundingClientRect();
  const targetTopRelativeToDocument = targetBoundingClientRect.top + document.documentElement.scrollTop;

  switch (placement) {
    case 'top':
      return targetTopRelativeToDocument - element.offsetHeight - ELEMENT_TARGET_MARGIN;
    case 'bottom':
      return targetTopRelativeToDocument + target.offsetHeight + ELEMENT_TARGET_MARGIN;
    case 'right':
      return targetTopRelativeToDocument + target.offsetHeight / 2 - element.offsetHeight / 2;
    case 'left':
      return targetTopRelativeToDocument + target.offsetHeight / 2 - element.offsetHeight / 2;
    default:
      return 0;
  }
}

function _verticalAdjustmentRelativeToViewPort(element, placement) {
  if (placement !== 'left' && placement !== 'right') return;

  const elementBoundingClientRect = element.getBoundingClientRect();
  if (elementBoundingClientRect.top < 0) {
    const currentTopValue = element.style.getPropertyValue('--upf-modifier-tooltip-top').replace('px', '');
    const correctionValue = elementBoundingClientRect.top;
    element.style.setProperty('--upf-modifier-tooltip-top', `${currentTopValue - correctionValue}px`);
  }

  if (elementBoundingClientRect.bottom > window.innerHeight) {
    const currentTopValue = element.style.getPropertyValue('--upf-modifier-tooltip-top').replace('px', '');
    const correctionValue = elementBoundingClientRect.bottom - window.innerHeight;
    element.style.setProperty('--upf-modifier-tooltip-top', `${currentTopValue - correctionValue}px`);
  }
}

function _horizontalAdjustmentRelativeToViewPort(element, placement) {
  if (placement !== 'top' && placement !== 'bottom') return;

  const elementBoundingClientRect = element.getBoundingClientRect();
  if (elementBoundingClientRect.left < 0) {
    const currentTopValue = element.style.getPropertyValue('--upf-modifier-tooltip-left').replace('px', '');
    const correctionValue = elementBoundingClientRect.left;
    element.style.setProperty('--upf-modifier-tooltip-left', `${currentTopValue - correctionValue}px`);
  }

  if (elementBoundingClientRect.left + element.offsetWidth > window.innerWidth) {
    const currentTopValue = element.style.getPropertyValue('--upf-modifier-tooltip-left').replace('px', '');
    const correctionValue = elementBoundingClientRect.left + element.offsetWidth - window.innerWidth;
    element.style.setProperty('--upf-modifier-tooltip-left', `${currentTopValue - correctionValue}px`);
  }
}

function _generateTooltip(state, args) {
  const { title, placement } = args.named;

  state.tooltip = document.createElement('div');
  state.tooltip.className = 'tooltip-container';

  let titleContainer = document.createElement('span');
  titleContainer.innerText = title;
  state.tooltip.append(titleContainer);
  document.body.append(state.tooltip);

  state.tooltip.style.minWidth = `${state.tooltip.offsetWidth}px`;

  const top = _computedTop(state.tooltip, state.element, placement);
  state.tooltip.style.setProperty('--upf-modifier-tooltip-top', `${top}px`);

  const left = _computedLeft(state.tooltip, state.element, placement);
  state.tooltip.style.setProperty('--upf-modifier-tooltip-left', `${left}px`);

  _verticalAdjustmentRelativeToViewPort(state.tooltip, placement);
  _horizontalAdjustmentRelativeToViewPort(state.tooltip, placement);
}

function _deleteTooltip(state) {
  state.tooltip.remove();
}

export default setModifierManager(
  () => ({
    capabilities: capabilities('3.13'),

    createModifier() {
      return {
        element: null,
        tooltip: null
      };
    },

    installModifier(state, element, args) {
      state.element = element;
      _generateTooltip(state, args);
      /**
      element.addEventListener('mouseover', () => {
        _generateTooltip(state, args);
      });
      element.addEventListener('mouseout', () => {
        _deleteTooltip(state);
      });**/
    },

    updateModifier(state, args) {
      //We use this function when tooltip title is updated and depends to translation with value
    },

    destroyModifier() {
      // We don't need to do anything here, but a function
      // still has to be here so we'll leave it blank.
    }
  }),
  class EnableTooltipModifierNewManager {}
);
