import Modifier from 'ember-modifier';
import { registerDestructor } from '@ember/destroyable';

interface TextCarouselArgs {
  positional: [labels?: string[]];
  named: {
    intervalMs?: number;
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
    { intervalMs = 3000 }: TextCarouselArgs['named']
  ) {
    this.clearInterval();

    if (!labels?.length) {
      element.textContent = '';
      return;
    }

    let index = 0;
    element.textContent = labels[index] ?? '';

    if (labels.length === 1) return;

    this.intervalId = window.setInterval(() => {
      index++;
      element.textContent = labels[index] ?? '';

      if (index >= labels.length - 1) {
        this.clearInterval();
      }
    }, intervalMs);
  }

  private clearInterval(): void {
    if (!this.intervalId) return;

    window.clearInterval(this.intervalId);
    this.intervalId = undefined;
  }
}
