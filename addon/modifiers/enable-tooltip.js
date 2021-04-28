import { setModifierManager } from '@ember/modifier';
import $ from 'jquery';

export default setModifierManager(
  () => ({
    createModifier() {
      return {
        element: null
      };
    },

    installModifier(state, element, args) {
      const { placement, title, html, trigger } = args.named;
      state.element = element;

      $(element).tooltip({
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

      $(state.element).attr('data-original-title', title);
    },

    destroyModifier(state) {
      // We don't need to do anything here, but a function
      // still has to be here so we'll leave it blank.
    }
  }),
  class EnableTooltipModifierManager {}
);
