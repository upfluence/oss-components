import {
  autoUpdate,
  computePosition,
  flip,
  offset,
  size,
  type MiddlewareState,
  type Placement,
  hide
} from '@floating-ui/dom';

export type AttachmentOptions = {
  offset?: number;
  width?: number;
  maxHeight?: number;
  placement?: Placement;
};

export const DEFAULT_ATTACHMENT_OPTIONS: AttachmentOptions = {
  offset: 12,
  width: undefined,
  maxHeight: undefined,
  placement: 'bottom'
};

export default function attachDropdown(
  referenceTarget: HTMLElement,
  floatingTarget: HTMLElement,
  options: AttachmentOptions = DEFAULT_ATTACHMENT_OPTIONS
) {
  const mergedOptions = { ...DEFAULT_ATTACHMENT_OPTIONS, ...(options || {}) };

  const updatePosition = () => {
    computePosition(referenceTarget, floatingTarget, {
      placement: mergedOptions.placement ?? 'bottom',
      middleware: [
        offset(mergedOptions.offset ?? 0),
        flip({
          fallbackPlacements: ['top', 'bottom']
        }),
        size({
          apply({ rects, elements }: MiddlewareState) {
            const desiredWidth = mergedOptions.width ?? rects.reference.width;
            const floatingStyle: Record<string, string> = {
              maxWidth: `${desiredWidth}px`,
              minWidth: `${desiredWidth}px`,
              width: `${desiredWidth}px`
            };

            if (mergedOptions.maxHeight) {
              floatingStyle.maxHeight = `${floatingStyle.maxHeight}px`;
              elements.floating.style.setProperty('--floating-max-height', `${mergedOptions.maxHeight}px`);
            }

            Object.assign(elements.floating.style, floatingStyle);
          }
        }),
        hide()
      ]
    }).then(({ x, y, middlewareData }) => {
      Object.assign(floatingTarget.style, {
        left: `${x}px`,
        top: `${y}px`
      });

      if (middlewareData.hide) {
        Object.assign(floatingTarget.style, {
          visibility: middlewareData.hide.referenceHidden ? 'hidden' : 'visible'
        });
      }
    });
  };

  return autoUpdate(referenceTarget, floatingTarget, updatePosition);
}
