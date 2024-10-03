import {
  autoUpdate,
  arrow,
  computePosition,
  flip,
  offset,
  size,
  hide,
  type MiddlewareState,
  type Placement,
  type Side
} from '@floating-ui/dom';

export type AttachmentOptions = {
  offset?: number;
  width?: number;
  maxHeight?: number;
  placement?: Placement;
  enableArrow?: boolean;
};

export const DEFAULT_ATTACHMENT_OPTIONS: AttachmentOptions = {
  offset: 12,
  width: undefined,
  maxHeight: undefined,
  placement: 'bottom',
  enableArrow: false
};

const RELATIVE_ARROW_PLACEMENT: Record<Side, Side> = {
  top: 'bottom',
  right: 'left',
  bottom: 'top',
  left: 'right'
};

export default function attachDropdown(
  referenceTarget: HTMLElement,
  floatingTarget: HTMLElement,
  options: AttachmentOptions = DEFAULT_ATTACHMENT_OPTIONS
) {
  const mergedOptions = { ...DEFAULT_ATTACHMENT_OPTIONS, ...(options || {}) };
  const middlewares = [
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
  ];

  let arrowEl = floatingTarget.querySelector('[data-floating-arrow]');

  if (mergedOptions.enableArrow) {
    if (!arrowEl) {
      throw new Error('Arrow support is enabled but no [data-floating-arrow] element was found.');
    }

    middlewares.push(arrow({ element: arrowEl }));
  }

  const updatePosition = () => {
    computePosition(referenceTarget, floatingTarget, {
      placement: mergedOptions.placement ?? 'bottom',
      middleware: middlewares
    }).then(({ x, y, placement, middlewareData }) => {
      Object.assign(floatingTarget.style, {
        left: `${x}px`,
        top: `${y}px`
      });

      if (middlewareData.hide) {
        Object.assign(floatingTarget.style, {
          visibility: middlewareData.hide.referenceHidden ? 'hidden' : 'visible'
        });
      }

      if (middlewareData.arrow) {
        const { x: arrowX, y: arrowY } = middlewareData.arrow;
        const staticSide = RELATIVE_ARROW_PLACEMENT[placement.split('-')![0]! as Side];

        Object.assign((arrowEl as HTMLElement).style, {
          left: arrowX != null ? `${arrowX}px` : '',
          top: arrowY != null ? `${arrowY}px` : '',
          right: '',
          bottom: '',
          [staticSide]: '-4px'
        });
      }
    });
  };

  return autoUpdate(referenceTarget, floatingTarget, updatePosition);
}