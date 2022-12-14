// @ts-ignore
import { setModifierManager, capabilities } from '@ember/modifier';
import { Djoo, PlacementType } from '@upfluence/oss-components/utils/djoo';
import { run } from '@ember/runloop';
import { createAnimation } from '@upfluence/oss-components/utils/animation-manager';
import { isTesting } from '@embroider/macros';

type EnableTooltipState = {
  element: HTMLElement;
  tooltip: HTMLElement;
  animation: Animation;
  setTimeoutId: ReturnType<typeof setTimeout> | null;
  isRendered: boolean;
};

type EnableTooltipArgs = {
  named: {
    placement: PlacementType;
    trigger: string;
    title: string;
    subtitle: string;
    icon: string;
    html: boolean;
  };
};

const ANIMATION_DURATION = 250;
const RENDERING_DELAY = 300;

function setElementContent(element: HTMLElement, value: string, htmlSafe: boolean): void {
  if (htmlSafe) {
    element.innerHTML = value;
  } else {
    element.innerText = value;
  }
}

function generateTitle(container: HTMLElement, title: string, html: boolean): void {
  const titleSpan = document.createElement('span');
  titleSpan.className = 'title';
  setElementContent(titleSpan, title, html);
  container.append(titleSpan);
}

function generateIcon(container: HTMLElement, icon: string): void {
  const iconI = document.createElement('i');
  iconI.className = icon;
  container.append(iconI);
}

function generateSubTitle(container: HTMLElement, subtitle: string, html: boolean): void {
  const subtitleSpan = document.createElement('span');
  subtitleSpan.className = 'subtitle';
  setElementContent(subtitleSpan, subtitle, html);
  container.append(subtitleSpan);
}

function generateHTMLStructure(state: EnableTooltipState, args: EnableTooltipArgs): void {
  const { title, subtitle, icon, html } = args.named;
  state.tooltip = document.createElement('div');
  state.tooltip.className = 'upf-tooltip';
  const titleContainer = document.createElement('div');
  titleContainer.className = 'title-container';

  if (icon) {
    generateIcon(titleContainer, icon);
  }
  generateTitle(titleContainer, title, html);
  state.tooltip.append(titleContainer);

  if (subtitle) {
    generateSubTitle(state.tooltip, subtitle, html);
  }

  if (isTesting()) {
    document.querySelector('#ember-testing')?.append(state.tooltip);
  } else {
    document.body.append(state.tooltip);
  }
}

function delayedRender(state: EnableTooltipState, args: EnableTooltipArgs): void {
  if (state.isRendered) return;
  state.setTimeoutId = setTimeout(() => {
    renderTooltip(state, args);
  }, RENDERING_DELAY);
}

function computePosition(state: EnableTooltipState, args: EnableTooltipArgs) {
  const { placement } = args.named;
  new Djoo().computePosition(
    state.tooltip,
    state.element,
    {
      placement: placement,
      cssVariableName: 'modifier-tooltip',
      elementTargetMargin: 9,
      viewPortPadding: 16
    },
    { defaultRotation: 0, height: 4, width: 8 }
  );
}

function renderTooltip(state: EnableTooltipState, args: EnableTooltipArgs): void {
  if (state.isRendered) return;

  generateHTMLStructure(state, args);
  computePosition(state, args);

  state.animation = createAnimation(state.tooltip, [{ opacity: 0 }, { opacity: 1 }], {
    duration: ANIMATION_DURATION,
    fill: 'forwards'
  });
  state.animation.play();
  state.isRendered = true;
  state.setTimeoutId = null;
}

function destroy(event: Event, state: EnableTooltipState): void {
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

function setDefaultConfiguration(args: EnableTooltipArgs): void {
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

function initEventListener(state: EnableTooltipState, element: HTMLElement, args: EnableTooltipArgs): void {
  const { trigger } = args.named;
  const splitTrigger = trigger.split(' ');

  if (splitTrigger.includes('hover')) {
    element.addEventListener('mouseover', () => {
      delayedRender(state, args);
    });

    element.addEventListener('mouseout', (event) => {
      destroy(event, state);
    });
  }

  if (splitTrigger.includes('focus')) {
    element.addEventListener('focusin', () => {
      delayedRender(state, args);
    });

    element.addEventListener('focusout', (event) => {
      destroy(event, state);
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

    installModifier(state: EnableTooltipState, element: HTMLElement, args: EnableTooltipArgs) {
      state.element = element;
      setDefaultConfiguration(args);
      initEventListener(state, element, args);
    },

    updateModifier(state: EnableTooltipState, args: EnableTooltipArgs) {
      if (!state.tooltip) return;
      const { title, subtitle, icon, html } = args.named;
      const titleSpan = state.tooltip.querySelector('.title-container .title');
      setElementContent(<HTMLElement>titleSpan, title, html);

      const subtitleSpan = state.tooltip.querySelector('.subtitle');
      setElementContent(<HTMLElement>subtitleSpan, subtitle, html);

      const iconI = state.tooltip.querySelector('.title-container i');
      if (iconI !== null) {
        iconI.className = icon;
      }

      computePosition(state, args);
    },

    destroyModifier() {
      // We don't need to do anything here, but a function
      // still has to be here so we'll leave it blank.
    }
  }),
  class EnableTooltipModifierNewManager {}
);
