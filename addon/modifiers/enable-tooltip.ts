// @ts-ignore
import { setModifierManager, capabilities } from '@ember/modifier';
import { Djoo } from '@upfluence/oss-components/utils/djoo';
import { run } from '@ember/runloop';
import { createAnimation } from '@upfluence/oss-components/utils/animation-manager';

type State = {
  element: HTMLElement;
  tooltip: HTMLElement;
  animation: Animation;
  setTimeoutId: ReturnType<typeof setTimeout> | null;
  isRendered: boolean;
};

type Args = {
  named: {
    placement: string;
    trigger: string;
    title: string;
    subtitle: string;
    icon: string;
    html: boolean;
  };
};

function _setElementContent(element: HTMLElement | null, value: string, htmlSafe: boolean): void {
  if (element === null) return;
  if (htmlSafe) {
    element.innerHTML = value;
  } else {
    element.innerText = value;
  }
}

function _generateHTMLStructure(state: State, args: Args): void {
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

function _delayedCreate(state: State, args: Args): void {
  if (state.isRendered) return;
  state.setTimeoutId = setTimeout(() => {
    _create(state, args);
  }, 300);
}

function _create(state: State, args: Args): void {
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

function _destroy(event: Event, state: State): void {
  if (state.setTimeoutId) {
    clearTimeout(state.setTimeoutId);
    state.setTimeoutId = null;
    return;
  }

  const relatedTarget = (<MouseEvent>event).relatedTarget;
  if (!state.isRendered || (relatedTarget instanceof Node && state.element.contains(relatedTarget))) return;

  state.animation.reverse();
  state.animation.finished.then(() => {
    run(() => {
      state.tooltip.remove();
      state.isRendered = false;
    });
  });
}

function _setDefaultValue(args: Args): void {
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

function _initEventListener(state: State, element: HTMLElement, args: Args): void {
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

    installModifier(state: State, element: HTMLElement, args: Args) {
      state.element = element;
      _setDefaultValue(args);
      _initEventListener(state, element, args);
    },

    updateModifier(state: State, args: Args) {
      const { title, subtitle, icon, html } = args.named;
      const titleSpan = state.tooltip.querySelector('.title-container .title');
      _setElementContent(<HTMLElement>titleSpan, title, html);

      const subtitleSpan = state.tooltip.querySelector('.subtitle');
      _setElementContent(<HTMLElement>subtitleSpan, subtitle, html);

      const iconI = state.tooltip.querySelector('.title-container i');
      if (iconI !== null) {
        iconI.className = icon;
      }
    },

    destroyModifier() {
      // We don't need to do anything here, but a function
      // still has to be here so we'll leave it blank.
    }
  }),
  class EnableTooltipModifierNewManager {}
);
