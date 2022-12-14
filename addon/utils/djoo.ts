//Dynamic Javascript Orientation Organizer
export type PlacementType = 'top' | 'bottom' | 'right' | 'left';

type ElementOptions = {
  placement?: PlacementType; // the position of the element in relation to the target
  cssVariableName: string; // name of the custom css variable
  elementTargetMargin: number; // the margin value between the element and the target
  viewPortPadding: number; // the padding relative to the viewport
};
type ArrowOptions = {
  defaultRotation: number; // default rotation when placement is top
  height: number; // total height of the arrow
  width: number; // total width of the arrow
};

const CSS_VARIABLE_NAME_PREFIX = '--upf-';

export class DynamicJavascriptOrientationOrganizer {
  declare elementOptions: ElementOptions;
  declare arrowOptions: ArrowOptions;

  computePosition(
    element: HTMLElement,
    target: HTMLElement,
    elementOptions: ElementOptions,
    arrowOptions: ArrowOptions
  ): void {
    this.elementOptions = elementOptions;
    this.arrowOptions = arrowOptions;

    this.overflowPlacementCorrection(element, target);
    this.computeElementPosition(element, target);
    this.verticalAdjustmentRelativeToViewPort(element);
    this.horizontalAdjustmentRelativeToViewPort(element);
    if (this.arrowOptions) {
      this.computeArrowPositionAndRotation(element, target);
    }
  }

  private computeElementPosition(element: HTMLElement, target: HTMLElement) {
    const elementTop = this.computedElementTopPosition(element, target);
    element.style.setProperty(
      `${CSS_VARIABLE_NAME_PREFIX}${this.elementOptions.cssVariableName}-top`,
      `${elementTop}px`
    );
    const elementLeft = this.computedElementLeftPosition(element, target);
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

  private overflowPlacementCorrection(element: HTMLElement, target: HTMLElement): void {
    const elementTotalHeight =
      element.offsetHeight + this.elementOptions.viewPortPadding + this.elementOptions.elementTargetMargin;
    const elementTotalWidth =
      element.offsetWidth + this.elementOptions.viewPortPadding + this.elementOptions.elementTargetMargin;

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

  private computedElementLeftPosition(element: HTMLElement, target: HTMLElement): number {
    const targetBoundingClientRect = target.getBoundingClientRect();
    const targetLeftRelativeToDocument = targetBoundingClientRect.left + document.documentElement.scrollLeft;

    switch (this.elementOptions.placement) {
      case 'top':
        return targetLeftRelativeToDocument + target.offsetWidth / 2 - element.offsetWidth / 2;
      case 'bottom':
        return targetLeftRelativeToDocument + target.offsetWidth / 2 - element.offsetWidth / 2;
      case 'right':
        return targetLeftRelativeToDocument + target.offsetWidth + this.elementOptions.elementTargetMargin;
      case 'left':
        return targetLeftRelativeToDocument - element.offsetWidth - this.elementOptions.elementTargetMargin;
      default:
        return 0;
    }
  }

  private computedElementTopPosition(element: HTMLElement, target: HTMLElement): number {
    const targetBoundingClientRect = target.getBoundingClientRect();
    const targetTopRelativeToDocument = targetBoundingClientRect.top + document.documentElement.scrollTop;

    switch (this.elementOptions.placement) {
      case 'top':
        return targetTopRelativeToDocument - element.offsetHeight - this.elementOptions.elementTargetMargin;
      case 'bottom':
        return targetTopRelativeToDocument + target.offsetHeight + this.elementOptions.elementTargetMargin;
      case 'right':
        return targetTopRelativeToDocument + target.offsetHeight / 2 - element.offsetHeight / 2;
      case 'left':
        return targetTopRelativeToDocument + target.offsetHeight / 2 - element.offsetHeight / 2;
      default:
        return 0;
    }
  }

  private verticalAdjustmentRelativeToViewPort(element: HTMLElement): void {
    if (this.elementOptions.placement !== 'left' && this.elementOptions.placement !== 'right') return;

    const elementBoundingClientRect = element.getBoundingClientRect();
    if (elementBoundingClientRect.top < this.elementOptions.viewPortPadding) {
      const currentTopValue = parseInt(element.style.getPropertyValue('--upf-modifier-tooltip-top').replace('px', ''));
      const correctionValue = elementBoundingClientRect.top - this.elementOptions.viewPortPadding;
      element.style.setProperty('--upf-modifier-tooltip-top', `${currentTopValue - correctionValue}px`);
    }

    if (elementBoundingClientRect.bottom > window.innerHeight - this.elementOptions.viewPortPadding) {
      const currentTopValue = parseInt(element.style.getPropertyValue('--upf-modifier-tooltip-top').replace('px', ''));
      const correctionValue =
        elementBoundingClientRect.bottom - window.innerHeight + this.elementOptions.viewPortPadding;
      element.style.setProperty('--upf-modifier-tooltip-top', `${currentTopValue - correctionValue}px`);
    }
  }

  private horizontalAdjustmentRelativeToViewPort(element: HTMLElement): void {
    if (this.elementOptions.placement !== 'top' && this.elementOptions.placement !== 'bottom') return;

    const elementBoundingClientRect = element.getBoundingClientRect();
    if (elementBoundingClientRect.left < this.elementOptions.viewPortPadding) {
      const currentTopValue = parseInt(element.style.getPropertyValue('--upf-modifier-tooltip-left').replace('px', ''));
      const correctionValue = Math.abs(elementBoundingClientRect.left - this.elementOptions.viewPortPadding);
      element.style.setProperty('--upf-modifier-tooltip-left', `${currentTopValue + correctionValue}px`);
    }

    if (
      elementBoundingClientRect.left + element.offsetWidth - this.elementOptions.viewPortPadding >
      window.innerWidth
    ) {
      const currentTopValue = parseInt(element.style.getPropertyValue('--upf-modifier-tooltip-left').replace('px', ''));
      const correctionValue =
        elementBoundingClientRect.left + element.offsetWidth + this.elementOptions.viewPortPadding - window.innerWidth;
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
        return element.offsetWidth + rotationAdjustment;
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
        return element.offsetHeight;
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

export { DynamicJavascriptOrientationOrganizer as Djoo };
