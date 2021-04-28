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
      state.element = element;
      args = args.named;

      $(element).tooltip({
        delay: {show: 300},
        placement: args.placement || 'bottom',
        title: args.title || '',
        html: args.html || false,
        trigger: args.trigger || 'hover focus'
      });
    },

    updateModifier(state, args) {
      //We use this function when tooltip title is updated and depends to translation with value
      args = args.named;

      $(state.element).attr('data-original-title', args.title);
    },

    destroyModifier(state) {
      // We don't need to do anything here, but a function
      // still has to be here so we'll leave it blank.
    }
  }),
  class EnableTooltipModifierManager {}
);
