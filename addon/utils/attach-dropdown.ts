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

const DEFAULT_ATTACHMENT_OPTIONS: AttachmentOptions = {
  offset: 12,
  width: undefined,
  maxHeight: undefined,
  placement: 'bottom'
};

export default function attachDropdown(
  referenceTarget: HTMLElement,
  floatingTarget: HTMLElement,
  _options: AttachmentOptions = DEFAULT_ATTACHMENT_OPTIONS
) {
  const options = { DEFAULT_ATTACHMENT_OPTIONS, ...(_options ?? {}) };
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
            let obj: Record<string, string> = {
              maxWidth: `${desiredWidth}px`,
              minWidth: `${desiredWidth}px`,
              width: `${desiredWidth}px`
            };
            if (options.maxHeight) {
              obj.maxHeight = `${options.maxHeight}px`;
              elements.floating.style.setProperty('--floating-max-height', `${options.maxHeight}px`);
            }
            Object.assign(elements.floating.style, obj);
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
