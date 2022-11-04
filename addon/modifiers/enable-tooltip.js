import { setModifierManager, capabilities } from '@ember/modifier';
import jQuery from 'jquery';

export default setModifierManager(
  () => ({
    capabilities: capabilities('3.13'),

    createModifier() {
      return {
        element: null
      };
    },

    installModifier(state, element, args) {
      const { placement, title, html, trigger } = args.named;
      state.element = element;

      jQuery(element).tooltip({
        delay: { show: 300 },
        placement: placement || 'bottom',
        title: title || '',
        html: html || false,
        trigger: trigger || 'hover focus'
      });
    },

    updateModifier(state, args) {
      //We use this function when tooltip title is updated and depends to translation with value
      const { title } = args.named;

      jQuery(state.element).attr('data-original-title', title).tooltip('show');
    },

    destroyModifier() {
      // We don't need to do anything here, but a function
      // still has to be here so we'll leave it blank.
    }
  }),
  class EnableTooltipModifierManager {}
);
