import { setModifierManager, capabilities } from '@ember/modifier';
import { Djoo } from '@upfluence/oss-components/utils/djoo';

function _generateHTMLStructure(state, args) {
  const { title, subtitle, icon } = args.named;
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
  titleSpan.innerText = title;
  titleContainer.append(titleSpan);

  state.tooltip.append(titleContainer);

  if (subtitle) {
    let subtitleSpan = document.createElement('span');
    subtitleSpan.className = 'subtitle';
    subtitleSpan.innerText = subtitle;
    state.tooltip.append(subtitleSpan);
  }

  document.body.append(state.tooltip);
  state.tooltip.style.minWidth = `${state.tooltip.offsetWidth}px`;
}

function _create(state, args) {
  const { placement } = args.named;
  const djoo = new Djoo();

  _generateHTMLStructure(state, args);

  djoo.computePosition(
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
}

function _destroy(state) {
  state.tooltip.remove();
}

export default setModifierManager(
  () => ({
    capabilities: capabilities('3.13'),

    createModifier() {
      console.log('created');
      return {
        element: null,
        tooltip: null
      };
    },

    installModifier(state, element, args) {
      console.log('install');
      state.element = element;

      element.addEventListener('mouseover', (event) => {
        console.log(event);
        console.log('create');
        _create(state, args);
      });
      element.addEventListener('mouseout', () => {
        console.log('destroyed');
        _destroy(state);
      });
    },

    updateModifier(state, args) {
      console.log('update');
      const { title } = args.named;
      //TODO
    },

    destroyModifier() {
      // We don't need to do anything here, but a function
      // still has to be here so we'll leave it blank.
    }
  }),
  class EnableTooltipModifierNewManager {}
);
