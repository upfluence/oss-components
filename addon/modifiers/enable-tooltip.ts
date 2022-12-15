// @ts-ignore
import { setModifierManager, capabilities } from '@ember/modifier';
import Djoo, { Placement } from '@upfluence/oss-components/utils/djoo';
import { run } from '@ember/runloop';
import { createAnimation } from '@upfluence/oss-components/utils/animation-manager';
import { isTesting } from '@embroider/macros';

type EnableTooltipAttrs = {
  title?: string;
  placement?: Placement;
  trigger?: string;
  subtitle?: string;
  icon?: string;
  html?: boolean;
};

type EnableTooltipArgs = {
  named: EnableTooltipAttrs;
};

type EnableTooltipState = {
  originElement: HTMLElement;
  tooltip: HTMLElement;
  attrs: EnableTooltipAttrs;
  animation: Animation;
  setTimeoutId: ReturnType<typeof setTimeout> | null;
  isRendered: boolean;
};

const ANIMATION_DURATION = 250;
const RENDERING_DELAY = 300;
const DEFAULT_CONFIGURATION = {
  placement: 'bottom' as Placement,
  trigger: 'hover focus',
  title: '',
  html: false
};

function setElementContent(element: HTMLElement, value?: string, htmlSafe?: boolean): void {
  if (htmlSafe) {
    element.innerHTML = value || '';
  } else {
    element.innerText = value || '';
  }
}

function generateTitle(container: HTMLElement, title?: string, html?: boolean): void {
  if (!title) return;
  const titleSpan = document.createElement('span');
  titleSpan.className = 'title';
  setElementContent(titleSpan, title, html);
  container.append(titleSpan);
}

function generateIcon(container: HTMLElement, icon?: string): void {
  if (!icon) return;
  const iconI = document.createElement('i');
  iconI.className = icon;
  container.append(iconI);
}

function generateSubTitle(container: HTMLElement, subtitle?: string, html?: boolean): void {
  if (!subtitle) return;
  const subtitleSpan = document.createElement('span');
  subtitleSpan.className = 'subtitle';
  setElementContent(subtitleSpan, subtitle, html);
  container.append(subtitleSpan);
}

function generateHTMLStructure(state: EnableTooltipState): void {
  const { title, subtitle, icon, html, placement } = state.attrs;
  state.tooltip = document.createElement('div');
  state.tooltip.className = 'upf-tooltip';
  state.tooltip.dataset.placement = placement;
  const titleContainer = document.createElement('div');
  titleContainer.className = 'title-container';

  generateIcon(titleContainer, icon);
  generateTitle(titleContainer, title, html);
  state.tooltip.append(titleContainer);
  generateSubTitle(state.tooltip, subtitle, html);

  if (isTesting()) {
    document.querySelector('#ember-testing')?.append(state.tooltip);
  } else {
    document.body.append(state.tooltip);
  }
}

function delayedRender(state: EnableTooltipState): void {
  if (state.isRendered) return;
  state.setTimeoutId = setTimeout(() => {
    renderTooltip(state);
  }, RENDERING_DELAY);
}

function computePosition(state: EnableTooltipState) {
  const { placement } = state.attrs;
  new Djoo().computePosition(
    state.tooltip,
    state.originElement,
    {
      placement: placement,
      cssVariableName: 'modifier-tooltip',
      targetOffset: 9,
      viewportOffset: 16
    },
    { defaultRotation: 0, height: 4, width: 8 }
  );
}

function renderTooltip(state: EnableTooltipState): void {
  if (state.isRendered) return;

  generateHTMLStructure(state);
  computePosition(state);

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
  if (!state.isRendered || (relatedTarget instanceof Node && state.originElement.contains(relatedTarget))) return;

  state.animation.reverse();
  state.animation.finished.then(() => {
    run(() => {
      state.tooltip.remove();
      state.isRendered = false;
    });
  });
}

function setDefaultConfiguration(state: EnableTooltipState, args: EnableTooltipArgs): void {
  state.attrs = {
    ...args.named,
    ...DEFAULT_CONFIGURATION
  };
}

function initEventListener(state: EnableTooltipState, element: HTMLElement): void {
  const { trigger } = state.attrs;
  const triggerEvents = trigger?.split(' ') || [];

  if (triggerEvents.includes('hover')) {
    element.addEventListener('mouseover', () => {
      delayedRender(state);
    });

    element.addEventListener('mouseout', (event) => {
      destroy(event, state);
    });
  }

  if (triggerEvents.includes('focus')) {
    element.addEventListener('focusin', () => {
      delayedRender(state);
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
        attrs: null,
        animation: null,
        setTimeoutId: null,
        isRendered: false
      };
    },

    installModifier(state: EnableTooltipState, element: HTMLElement, args: EnableTooltipArgs) {
      state.originElement = element;
      setDefaultConfiguration(state, args);
      initEventListener(state, element);
    },

    updateModifier(state: EnableTooltipState, args: EnableTooltipArgs) {
      if (!state.tooltip) return;
      setDefaultConfiguration(state, args);
      const { title, subtitle, icon, html } = state.attrs;
      const titleSpan = state.tooltip.querySelector('.title-container .title');
      setElementContent(<HTMLElement>titleSpan, title, html);

      const subtitleSpan = state.tooltip.querySelector('.subtitle');
      setElementContent(<HTMLElement>subtitleSpan, subtitle, html);

      const iconI = state.tooltip.querySelector('.title-container i');
      if (iconI !== null && icon) {
        iconI.className = icon;
      }

      computePosition(state);
    },

    destroyModifier() {
      // We don't need to do anything here, but a function
      // still has to be here, so we'll leave it blank.
    }
  }),
  class EnableTooltipModifierNewManager {}
);
