import { setModifierManager, capabilities } from '@ember/modifier';
import { Djoo } from '@upfluence/oss-components/utils/djoo';
import { run } from '@ember/runloop';
import { createAnimation } from '@upfluence/oss-components/utils/animation-manager';

function _setElementContent(element, value, htmlSafe) {
  if (htmlSafe) {
    element.innerHTML = value;
  } else {
    element.innerText = value;
  }
}

function _generateHTMLStructure(state, args) {
  const { title, subtitle, icon, html } = args.named;
  state.tooltip = document.createElement('div');
  state.tooltip.className = 'upf-tooltip upf-tooltip--visible';
  let titleContainer = document.createElement('div');
  titleContainer.className = 'title-container';

  if (icon) {
    let iconI = document.createElement('i');
    iconI.className = icon;
    titleContainer.append(iconI);
  }
  let titleSpan = document.createElement('span');
  titleSpan.className = 'title';
  _setElementContent(titleSpan, title, html);

  titleContainer.append(titleSpan);

  state.tooltip.append(titleContainer);

  if (subtitle) {
    let subtitleSpan = document.createElement('span');
    subtitleSpan.className = 'subtitle';
    _setElementContent(subtitleSpan, subtitle, html);
    state.tooltip.append(subtitleSpan);
  }

  document.body.append(state.tooltip);
  state.tooltip.style.minWidth = `${state.tooltip.offsetWidth}px`;
}

function _delayedCreate(state, args) {
  if (state.isRendered) return;
  state.setTimeoutId = setTimeout(() => {
    _create(state, args);
  }, 300);
}

function _create(state, args) {
  if (state.isRendered) return;

  const { placement } = args.named;
  _generateHTMLStructure(state, args);

  new Djoo().computePosition(
    state.tooltip,
    state.element,
    {
      placement: placement,
      cssVariableName: 'modifier-tooltip',
      elementTargetMargin: 9,
      viewPortPadding: 3
    },
    { defaultRotation: -45, height: 4, width: 8.5 }
  );
  state.animation = createAnimation(state.tooltip, [{ opacity: 0 }, { opacity: 1 }], {
    duration: 250,
    fill: 'forwards'
  });
  state.animation.play();
  state.isRendered = true;
  state.setTimeoutId = null;
}

function _destroy(event, state) {
  if (state.setTimeoutId) {
    clearTimeout(state.setTimeoutId);
    state.setTimeoutId = null;
    return;
  }
  if (!state.isRendered || state.element.contains(event.relatedTarget)) return;

  state.animation.reverse();
  state.animation.finished.then(() => {
    run(() => {
      state.tooltip.remove();
      state.isRendered = false;
    });
  });
}

function _setDefaultValue(args) {
  args.named = {
    ...args.named,
    ...{
      placement: args.named.placement || 'bottom',
      trigger: args.named.trigger || 'hover focus',
      title: args.named.title || '',
      html: args.named.html || false
    }
  };
}

function _initEventListener(state, element, args) {
  const { trigger } = args.named;
  const splitTrigger = trigger.split(' ');

  if (splitTrigger.includes('hover')) {
    element.addEventListener('mouseover', () => {
      _delayedCreate(state, args);
    });

    element.addEventListener('mouseout', (event) => {
      _destroy(event, state);
    });
  }

  if (splitTrigger.includes('focus')) {
    element.addEventListener('focusin', () => {
      _delayedCreate(state, args);
    });

    element.addEventListener('focusout', (event) => {
      _destroy(event, state);
    });
  }
}

export default setModifierManager(
  () => ({
    capabilities: capabilities('3.13'),

    createModifier() {
      return {
        element: null,
        tooltip: null,
        animation: null,
        setTimeoutId: null,
        isRendered: false
      };
    },

    installModifier(state, element, args) {
      state.element = element;
      _setDefaultValue(args);
      _initEventListener(state, element, args);
    },

    updateModifier(state, args) {
      const { title, subtitle, icon, html } = args.named;
      const titleSpan = state.tooltip.querySelector('.title-container .title');
      _setElementContent(titleSpan, title, html);
      const subtitleSpan = state.tooltip.querySelector('.subtitle');
      _setElementContent(subtitleSpan, subtitle, html);
      const iconI = state.tooltip.querySelector('.title-container i');
      iconI.className = icon;
    },

    destroyModifier() {
      // We don't need to do anything here, but a function
      // still has to be here so we'll leave it blank.
    }
  }),
  class EnableTooltipModifierNewManager {}
);
