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
  placement?: Placement;
};

const DEFAULT_ATTACHMENT_OPTIONS: AttachmentOptions = {
  offset: 12,
  width: undefined,
  placement: 'bottom'
};

export default function attachDropdown(
  referenceTarget: HTMLElement,
  floatingTarget: HTMLElement,
  options: AttachmentOptions = DEFAULT_ATTACHMENT_OPTIONS
) {
  const updatePosition = () => {
    computePosition(referenceTarget, floatingTarget, {
      placement: options.placement ?? 'bottom',
      middleware: [
        offset(options.offset ?? 0),
        flip({
          fallbackPlacements: ['top', 'bottom']
        }),
        size({
          apply({ rects, elements }: MiddlewareState) {
            const desiredWidth = options.width ?? rects.reference.width;
            Object.assign(elements.floating.style, {
              maxWidth: `${desiredWidth}px`,
              minWidth: `${desiredWidth}px`,
              width: `${desiredWidth}px`
            });
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
