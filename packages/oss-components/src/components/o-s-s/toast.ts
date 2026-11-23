import { action } from '@ember/object';
import Component from '@glimmer/component';

import type { IntlService } from 'ember-intl';

export const TOAST_TYPES: string[] = ['info', 'warning', 'error', 'success'];
const DEFAULT_TIMEOUT: number = 5000;
const CLEAR_ANIMATION_DURATION: number = 300;
const ICON_CLASSES: Record<ToastType, string> = {
  info: 'fa-info-circle',
  warning: 'fa-exclamation-circle',
  error: 'fa-exclamation-triangle',
  success: 'fa-check-circle'
};

export type ToastType = (typeof TOAST_TYPES)[number];
export type ToastBadge = { icon?: string; image?: string; text?: string };

export interface OSSToastSignature {
  Args: {
    type: ToastType;
    title?: string | ReturnType<IntlService['t']>;
    subtitle: string | ReturnType<IntlService['t']>;
    badge?: ToastBadge;
    timeout?: number | 'none';
    onClick?(event: MouseEvent): void;
    onClear?(): void;
  };
  Element: HTMLDivElement;
}


export default class OSSToast extends Component<OSSToastSignature> {
  declare private _DOMElement: HTMLDivElement;
  private _counterAnimation?: Animation;
  private _clearAnimation?: Animation;
  private _clicked: boolean = false;
  private _clearing: boolean = false;

  get iconClass(): string {
    return ICON_CLASSES[this.args.type] ?? ICON_CLASSES.info!;
  }

  get badge(): ToastBadge | undefined {
    const { image, icon, text } = this.args.badge ?? {};

    if (image) return { image };
    if (icon) return { icon };
    if (text) return { text };
    return undefined;
  }

  @action
  registerElement(element: HTMLDivElement): void {
    this._DOMElement = element;
  }

  @action
  startCounter(element: HTMLElement): void {
    if (this.args.timeout === 'none') return;

    this._counterAnimation = element.animate([{ width: '100%' }, { width: '0' }], {
      duration: typeof this.args.timeout === 'number' ? this.args.timeout : DEFAULT_TIMEOUT,
      fill: 'forwards',
      id: 'counter'
    });
    this._counterAnimation.addEventListener('finish', () => this.close());
  }

  @action
  pauseCounter(): void {
    if (this._clearing) return;
    this._counterAnimation?.pause();
  }

  @action
  resumeCounter(): void {
    if (this._clearing) return;
    this._counterAnimation?.play();
  }

  @action
  onToastClick(event: MouseEvent): void {
    if (!this.args.onClick || this._clicked) return;

    this._clicked = true;
    event.stopPropagation();
    this.args.onClick(event);
  }

  @action
  close(event?: Event): void {
    event?.stopPropagation();
    if (this._clearing) return;

    this._clearing = true;
    if (this._counterAnimation?.playState === 'running') this._counterAnimation.pause();

    this._clearAnimation = this._DOMElement.animate(
      [
        { opacity: 1, transform: 'translate(0, 0)' },
        { opacity: 0, transform: 'translate(0, -30%)' }
      ],
      { duration: CLEAR_ANIMATION_DURATION, fill: 'forwards', id: 'destroy' }
    );
    this._clearAnimation.addEventListener('finish', () => this.args.onClear?.());
  }

  willDestroy(): void {
    this._counterAnimation?.cancel();
    this._clearAnimation?.cancel();
    super.willDestroy();
  }
}
