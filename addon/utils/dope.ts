//Dynamic Object PlacEment
export type Placement = 'top' | 'bottom' | 'right' | 'left';

type ElementOptions = {
  placement?: Placement; // the position of the element in relation to the target
  cssVariableName: string; // name of the custom css variable
  targetOffset: number; // the margin value between the element and the target
  viewportOffset: number; // the padding relative to the viewport
};
type ArrowOptions = {
  defaultRotation: number; // default rotation when placement is top
  height: number; // total height of the arrow
  width: number; // total width of the arrow
};

const CSS_VARIABLE_NAME_PREFIX = '--upf-';

export default class DynamicObjectPlacement {
  declare elementOptions: ElementOptions;
  declare arrowOptions: ArrowOptions;

  elementWidth = 0;
  elementHeight = 0;

  computePosition(
    element: HTMLElement,
    target: HTMLElement,
    elementOptions: ElementOptions,
    arrowOptions: ArrowOptions
  ): void {
    this.elementOptions = elementOptions;
    this.arrowOptions = arrowOptions;
    this.elementHeight = element.offsetHeight;
    this.elementWidth = element.offsetWidth;

    this.overflowPlacementCorrection(target);
    this.computeElementPosition(element, target);
    this.verticalAdjustmentRelativeToViewPort(element);
    this.horizontalAdjustmentRelativeToViewPort(element);
    if (this.arrowOptions) {
      this.computeArrowPositionAndRotation(element, target);
    }
  }

  private computeElementPosition(element: HTMLElement, target: HTMLElement) {
    const elementTop = this.computedElementTopPosition(target);
    const elementLeft = this.computedElementLeftPosition(target);
    element.style.setProperty(
      `${CSS_VARIABLE_NAME_PREFIX}${this.elementOptions.cssVariableName}-top`,
      `${elementTop}px`
    );
    element.style.setProperty(
      `${CSS_VARIABLE_NAME_PREFIX}${this.elementOptions.cssVariableName}-left`,
      `${elementLeft}px`
    );
  }

  private computeArrowPositionAndRotation(element: HTMLElement, target: HTMLElement) {
    const arrowLeft = this.computedArrowLeftPosition(element, target);
    element.style.setProperty(
      `${CSS_VARIABLE_NAME_PREFIX}${this.elementOptions.cssVariableName}-arrow-left`,
      `${arrowLeft}px`
    );
    const arrowTop = this.computedArrowTopPosition(element, target);
    element.style.setProperty(
      `${CSS_VARIABLE_NAME_PREFIX}${this.elementOptions.cssVariableName}-arrow-top`,
      `${arrowTop}px`
    );

    const rotation = this.computedArrowRotation();
    element.style.setProperty(
      `${CSS_VARIABLE_NAME_PREFIX}${this.elementOptions.cssVariableName}-arrow-rotation`,
      `${rotation}deg`
    );
  }

  private overflowPlacementCorrection(target: HTMLElement): void {
    const elementTotalHeight =
      this.elementHeight + this.elementOptions.viewportOffset + this.elementOptions.targetOffset;
    const elementTotalWidth = this.elementWidth + this.elementOptions.viewportOffset + this.elementOptions.targetOffset;

    if (this.elementOptions.placement === 'top' && target.getBoundingClientRect().top < elementTotalHeight) {
      this.elementOptions.placement = 'bottom';
    } else if (
      this.elementOptions.placement === 'bottom' &&
      window.innerHeight - target.getBoundingClientRect().bottom < elementTotalHeight
    ) {
      this.elementOptions.placement = 'top';
    } else if (
      this.elementOptions.placement === 'right' &&
      window.innerWidth - target.getBoundingClientRect().right < elementTotalWidth
    ) {
      this.elementOptions.placement = 'left';
    } else if (this.elementOptions.placement === 'left' && target.getBoundingClientRect().left < elementTotalWidth) {
      this.elementOptions.placement = 'right';
    }
  }

  private computedElementLeftPosition(target: HTMLElement): number {
    const targetBoundingClientRect = target.getBoundingClientRect();
    const targetLeftRelativeToDocument = targetBoundingClientRect.left + document.documentElement.scrollLeft;

    switch (this.elementOptions.placement) {
      case 'top':
        return targetLeftRelativeToDocument + target.offsetWidth / 2 - this.elementWidth / 2;
      case 'bottom':
        return targetLeftRelativeToDocument + target.offsetWidth / 2 - this.elementWidth / 2;
      case 'right':
        return targetLeftRelativeToDocument + target.offsetWidth + this.elementOptions.targetOffset;
      case 'left':
        return targetLeftRelativeToDocument - this.elementWidth - this.elementOptions.targetOffset;
      default:
        return 0;
    }
  }

  private computedElementTopPosition(target: HTMLElement): number {
    const targetBoundingClientRect = target.getBoundingClientRect();
    const targetTopRelativeToDocument = targetBoundingClientRect.top + document.documentElement.scrollTop;

    switch (this.elementOptions.placement) {
      case 'top':
        return targetTopRelativeToDocument - this.elementHeight - this.elementOptions.targetOffset;
      case 'bottom':
        return targetTopRelativeToDocument + target.offsetHeight + this.elementOptions.targetOffset;
      case 'right':
        return targetTopRelativeToDocument + target.offsetHeight / 2 - this.elementHeight / 2;
      case 'left':
        return targetTopRelativeToDocument + target.offsetHeight / 2 - this.elementHeight / 2;
      default:
        return 0;
    }
  }

  private verticalAdjustmentRelativeToViewPort(element: HTMLElement): void {
    if (this.elementOptions.placement !== 'left' && this.elementOptions.placement !== 'right') return;

    const elementBoundingClientRect = element.getBoundingClientRect();
    if (elementBoundingClientRect.top < this.elementOptions.viewportOffset) {
      const currentTopValue = parseInt(element.style.getPropertyValue('--upf-modifier-tooltip-top').replace('px', ''));
      const correctionValue = elementBoundingClientRect.top - this.elementOptions.viewportOffset;
      element.style.setProperty('--upf-modifier-tooltip-top', `${currentTopValue - correctionValue}px`);
    }

    if (elementBoundingClientRect.bottom > window.innerHeight - this.elementOptions.viewportOffset) {
      const currentTopValue = parseInt(element.style.getPropertyValue('--upf-modifier-tooltip-top').replace('px', ''));
      const correctionValue =
        elementBoundingClientRect.bottom - window.innerHeight + this.elementOptions.viewportOffset;
      element.style.setProperty('--upf-modifier-tooltip-top', `${currentTopValue - correctionValue}px`);
    }
  }

  private horizontalAdjustmentRelativeToViewPort(element: HTMLElement): void {
    if (this.elementOptions.placement !== 'top' && this.elementOptions.placement !== 'bottom') return;

    const elementBoundingClientRect = element.getBoundingClientRect();
    if (elementBoundingClientRect.left < this.elementOptions.viewportOffset) {
      const currentTopValue = parseInt(element.style.getPropertyValue('--upf-modifier-tooltip-left').replace('px', ''));
      const correctionValue = Math.abs(elementBoundingClientRect.left - this.elementOptions.viewportOffset);
      element.style.setProperty('--upf-modifier-tooltip-left', `${currentTopValue + correctionValue}px`);
    }

    if (elementBoundingClientRect.left + this.elementWidth - this.elementOptions.viewportOffset > window.innerWidth) {
      const currentTopValue = parseInt(element.style.getPropertyValue('--upf-modifier-tooltip-left').replace('px', ''));
      const correctionValue =
        elementBoundingClientRect.left + this.elementWidth + this.elementOptions.viewportOffset - window.innerWidth;
      element.style.setProperty('--upf-modifier-tooltip-left', `${currentTopValue - correctionValue}px`);
    }
  }

  private computedArrowLeftPosition(element: HTMLElement, target: HTMLElement): number {
    const elementBoundingClientRect = element.getBoundingClientRect();
    const targetBoundingClientRect = target.getBoundingClientRect();
    const leftRelative = targetBoundingClientRect.left - elementBoundingClientRect.left;
    const rotationAdjustment = (this.arrowOptions.height - this.arrowOptions.width) / 2;

    switch (this.elementOptions.placement) {
      case 'top':
        return leftRelative + target.offsetWidth / 2 - this.arrowOptions.width / 2;
      case 'bottom':
        return leftRelative + target.offsetWidth / 2 - this.arrowOptions.width / 2;
      case 'right':
        return 0 - this.arrowOptions.width - rotationAdjustment;
      case 'left':
        return this.elementWidth + rotationAdjustment;
      default:
        return 0;
    }
  }

  private computedArrowTopPosition(element: HTMLElement, target: HTMLElement): number {
    const elementBoundingClientRect = element.getBoundingClientRect();
    const targetBoundingClientRect = target.getBoundingClientRect();
    const topRelative = targetBoundingClientRect.top - elementBoundingClientRect.top;

    switch (this.elementOptions.placement) {
      case 'top':
        return this.elementHeight;
      case 'bottom':
        return 0 - this.arrowOptions.height;
      case 'right':
        return topRelative + target.offsetHeight / 2 - this.arrowOptions.height / 2;
      case 'left':
        return topRelative + target.offsetHeight / 2 - this.arrowOptions.height / 2;
      default:
        return 0;
    }
  }

  private computedArrowRotation() {
    switch (this.elementOptions.placement) {
      case 'top':
        return this.arrowOptions.defaultRotation;
      case 'bottom':
        return this.arrowOptions.defaultRotation + 90 * 2;
      case 'right':
        return this.arrowOptions.defaultRotation + 90;
      case 'left':
        return this.arrowOptions.defaultRotation + 90 * 3;
      default:
        return 0;
    }
  }
}
