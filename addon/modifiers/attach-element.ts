// @ts-ignore
import { setModifierManager, capabilities } from '@ember/modifier';
import { scheduleOnce } from '@ember/runloop';

import attachDropdown, { type AttachmentOptions } from '@upfluence/oss-components/utils/attach-dropdown';

type AttachElementArgs = {
  named: {
    to: string | HTMLElement;
  } & AttachmentOptions;
};
type AttachElementState = {
  cleanupDrodpownAutoplacement?: () => void;
  referenceTarget: HTMLElement | null;
  attachedElement: HTMLElement | null;
};

const setupModifier = (state: AttachElementState, element: HTMLElement, args: AttachElementArgs) => {
  state.referenceTarget = args.named.to instanceof HTMLElement ? args.named.to : document.querySelector(args.named.to);
  state.attachedElement = element;

  if (!state.referenceTarget || !state.attachedElement) return;

  const attachmentOptions = Object.keys(args.named).reduce((acc: AttachmentOptions, key: string) => {
    if (key !== 'to' && args.named[key as keyof AttachElementArgs['named']] !== undefined) {
      acc = {
        ...acc,
        ...{ [key as keyof AttachmentOptions]: args.named[key as keyof Omit<AttachElementArgs['named'], 'to'>] }
      };
    }

    return acc;
  }, {});

  scheduleOnce('afterRender', this, () => {
    state.cleanupDrodpownAutoplacement = attachDropdown(
      state.referenceTarget!,
      state.attachedElement!,
      attachmentOptions
    );
  });
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
      setupModifier(state, element, args);
    },

    updateModifier(state: AttachElementState, args: AttachElementArgs) {
      if (!state.attachedElement) return;
      setupModifier(state, state.attachedElement, args);
    },

    destroyModifier(state: AttachElementState) {
      state.cleanupDrodpownAutoplacement?.();
    }
  }),

  class AttachElementModifierNewManager {}
);
