const ANIMATION_DURATION = 1900;

export function runSmartGradientAnimation(element: HTMLElement): void {
  if (element) {
    element.classList.add('smart-rotating-gradient');
    setTimeout(() => {
      element.classList.remove('smart-rotating-gradient');
    }, ANIMATION_DURATION);
  }
}
