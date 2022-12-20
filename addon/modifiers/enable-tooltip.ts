// @ts-ignore
import { setModifierManager, capabilities } from '@ember/modifier';
import Dope, { Placement } from '@upfluence/oss-components/utils/dope';
import { run } from '@ember/runloop';
import { createAnimation } from '@upfluence/oss-components/utils/animation-manager';
import { isTesting } from '@embroider/macros';
import { isEmpty } from '@ember/utils';

type TooltipConfig = {
  title?: string;
  placement?: Placement;
  trigger?: string;
  subtitle?: string;
  icon?: string;
  html?: boolean;
};

type EnableTooltipArgs = {
  named: TooltipConfig;
};

type EnableTooltipState = {
  originElement: HTMLElement;
  tooltipElement: HTMLElement | null;
  tooltipConfig: TooltipConfig;
  animation: Animation;
  setTimeoutId: ReturnType<typeof setTimeout> | null;
  isRendered: boolean;
};

const ANIMATION_DURATION = 250;
const RENDERING_DELAY = 300;
const DEFAULT_CONFIGURATION = {
  placement: 'bottom' as Placement,
  trigger: 'hover focus',
  html: false
};

function setElementContent(element: HTMLElement, value?: string, htmlSafe?: boolean): void {
  if (htmlSafe) {
    element.innerHTML = value || '';
    element.dataset.htmlSafe = 'true';
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
  const { title, subtitle, icon, html, placement } = state.tooltipConfig;
  state.tooltipElement = document.createElement('div');
  state.tooltipElement.className = 'upf-tooltip';
  state.tooltipElement.dataset.placement = placement;
  const titleContainer = document.createElement('div');
  titleContainer.className = 'title-container';

  generateIcon(titleContainer, icon);
  generateTitle(titleContainer, title, html);
  state.tooltipElement.append(titleContainer);
  generateSubTitle(state.tooltipElement, subtitle, html);

  if (isTesting()) {
    document.querySelector('#ember-testing')?.append(state.tooltipElement);
  } else {
    document.body.append(state.tooltipElement);
  }
}

function delayedRender(state: EnableTooltipState): void {
  if (isEmpty(state.tooltipConfig.title) || state.isRendered || state.setTimeoutId) return;
  state.setTimeoutId = setTimeout(() => {
    renderTooltip(state);
  }, RENDERING_DELAY);
}

function computePosition(state: EnableTooltipState) {
  const { placement } = state.tooltipConfig;
  new Dope().computePosition(
    state.tooltipElement!,
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
  generateHTMLStructure(state);
  computePosition(state);

  state.animation = createAnimation(state.tooltipElement!, [{ opacity: 0 }, { opacity: 1 }], {
    duration: ANIMATION_DURATION,
    fill: 'forwards'
  });
  state.animation.play();
  state.isRendered = true;
  state.setTimeoutId = null;
}

function destroyWithEvent(state: EnableTooltipState, event?: Event) {
  const relatedTarget = (<MouseEvent>event)?.relatedTarget;
  if (relatedTarget instanceof Node && state.originElement.contains(relatedTarget)) return;

  destroy(state);
}

function destroy(state: EnableTooltipState): void {
  if (state.setTimeoutId) {
    clearTimeout(state.setTimeoutId);
    state.setTimeoutId = null;
  }

  if (!state.isRendered) return;

  state.animation.reverse();
  state.animation.finished.then(() => {
    run(() => {
      state.tooltipElement?.remove();
      state.isRendered = false;
      state.tooltipElement = null;
    });
  });
}

function setDefaultConfiguration(state: EnableTooltipState, args: EnableTooltipArgs): void {
  state.tooltipConfig = {
    ...args.named,
    ...{
      placement: args.named.placement || DEFAULT_CONFIGURATION.placement,
      trigger: args.named.trigger || DEFAULT_CONFIGURATION.trigger,
      html: args.named.html || DEFAULT_CONFIGURATION.html
    }
  };
}

function initEventListener(state: EnableTooltipState, element: HTMLElement): void {
  const { trigger } = state.tooltipConfig;
  const triggerEvents = trigger?.split(' ') || [];

  if (triggerEvents.includes('hover')) {
    element.addEventListener('mouseover', () => {
      delayedRender(state);
    });

    element.addEventListener('mouseout', (event) => {
      destroyWithEvent(state, event);
    });
  }

  if (triggerEvents.includes('focus')) {
    element.addEventListener('focusin', () => {
      delayedRender(state);
    });

    element.addEventListener('focusout', (event) => {
      destroyWithEvent(state, event);
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
      setDefaultConfiguration(state, args);

      if (!state.tooltipElement) return;
      const { title, subtitle, icon, html } = state.tooltipConfig;

      const titleSpan = state.tooltipElement.querySelector('.title-container .title');
      if (titleSpan) {
        setElementContent(<HTMLElement>titleSpan, title, html);
      }
      const subtitleSpan = state.tooltipElement.querySelector('.subtitle');
      if (subtitleSpan) {
        setElementContent(<HTMLElement>subtitleSpan, subtitle, html);
      }
      const iconI = state.tooltipElement.querySelector('.title-container i');
      if (iconI && icon) {
        iconI.className = icon;
      }

      computePosition(state);
    },

    destroyModifier(state: EnableTooltipState) {
      destroy(state);
    }
  }),
  class EnableTooltipModifierNewManager {}
);
