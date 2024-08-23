// @ts-ignore
import { setModifierManager, capabilities } from '@ember/modifier';
import { scheduleOnce } from '@ember/runloop';
import { type Placement } from '@floating-ui/dom';

import attachDropdown from '@upfluence/oss-components/utils/attach-dropdown';

type AttachElementArgs = {
  named: {
    to: string | HTMLElement;
    placement: Placement;
  };
};
type AttachElementState = {
  cleanupDrodpownAutoplacement?: () => void;
  referenceTarget: HTMLElement | null;
  attachedElement: HTMLElement | null;
};

export default setModifierManager(
  () => ({
    capabilities: capabilities('3.22'),

    createModifier() {
      return {
        cleanupDrodpownAutoplacement: undefined,
        referenceTarget: null,
        attachedElement: null
      };
    },

    installModifier(state: AttachElementState, element: HTMLElement, args: AttachElementArgs) {
      state.referenceTarget =
        args.named.to instanceof HTMLElement ? args.named.to : document.querySelector(args.named.to);
      state.attachedElement = element;

      if (state.referenceTarget) {
        state.cleanupDrodpownAutoplacement = attachDropdown(state.referenceTarget, element, {
          placement: args.named.placement ?? 'top',
          offset: 12,
          width: 300
        });
      }
    },

    updateModifier(state: AttachElementState, args: AttachElementArgs) {
      console.log(state, args);
    },

    destroyModifier(state: AttachElementState) {
      console.log(state);
    }
  }),
  class AttachElementModifierNewManager {}
);
