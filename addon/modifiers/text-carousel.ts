import Modifier from 'ember-modifier';
import { registerDestructor } from '@ember/destroyable';

interface TextCarouselArgs {
  positional: [labels?: string[]];
  named: {
    interval?: number;
    loop?: boolean;
  };
}

export default class TextCarouselModifier extends Modifier<TextCarouselArgs> {
  intervalId?: number;

  constructor(owner: unknown, args: TextCarouselArgs) {
    super(owner, args);
    registerDestructor(this, () => this.clearInterval());
  }

  modify(
    element: HTMLElement,
    [labels]: TextCarouselArgs['positional'],
    { interval = 3000, loop = false }: TextCarouselArgs['named']
  ): void {
    this.clearInterval();

    if (!labels?.length) {
      throw new Error('[modifier][text-carousel] Requires a non-empty labels array');
    }

    let index = 0;
    element.textContent = labels[index] ?? '';

    if (labels.length === 1) return;

    this.intervalId = window.setInterval(() => {
      index = loop ? (index + 1) % labels.length : index + 1;
      element.textContent = labels[index] ?? '';

      if (!loop && index >= labels.length - 1) {
        this.clearInterval();
      }
    }, interval);
  }

  private clearInterval(): void {
    if (this.intervalId === undefined) return;

    window.clearInterval(this.intervalId);
    this.intervalId = undefined;
  }
}
