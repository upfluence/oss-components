import Service from '@ember/service';
import { isEmpty } from '@ember/utils';
import { run } from '@ember/runloop';
import type { IntlService } from 'ember-intl';

enum ToastType {
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'error',
  SUCCESS = 'success'
}

const ICON_CLASSES = {
  info: 'far fa-info-circle',
  warning: 'far fa-exclamation-circle',
  error: 'far fa-exclamation-triangle',
  success: 'far fa-check-circle'
};

/**
 * Toast Options
 *
 * @param {boolean} closeButton - Whether or not a button should be displayed to close the toast early.
 * @param {boolean} tapToDismiss - Whether or not a tap on the toast should close it.
 * @param {Function} onclick - A function to be called when the toast is clicked.
 */
export type ToastOptions = {
  onclick?: Function;
  timeout?: number | 'none';
  badge?: {
    icon?: string;
    image?: string;
    text?: string;
  };
};

type ToastFunction = (
  message: string | ReturnType<IntlService['t']>,
  title: string | ReturnType<IntlService['t']>,
  opts?: ToastOptions
) => void;

const DEFAULT_TOAST_TIMEOUT = 5000;

const DEFAULT_OPTIONS: ToastOptions = Object.freeze({
  onclick: undefined,
  timeout: DEFAULT_TOAST_TIMEOUT,
  badge: undefined
});

export default class Toast extends Service {
  private _toasts: Map<Element, Animation> = new Map();

  /**
   * Display a success toast
   *
   * @param {string} message - The Toast's message
   * @param {string} title - The toast's title
   * @param {Object} opts - Toast options
   * @param {boolean} [opts.closeButton=true] - Display a button to close the toast manually.
   */
  success: ToastFunction = this._delegate(ToastType.SUCCESS);

  /**
   * Display an error toast
   *
   * @param {string} message - The Toast's message
   * @param {string} title - The toast's title
   * @param {Object} opts - Toast options
   * @param {boolean} [opts.closeButton=true] - Display a button to close the toast manually.
   */
  error: ToastFunction = this._delegate(ToastType.ERROR);

  /**
   * Display a warning toast
   *
   * @param {string} message - The Toast's message
   * @param {string} title - The toast's title
   * @param {Object} opts - Toast options
   * @param {boolean} [opts.closeButton=true] - Display a button to close the toast manually.
   */
  warning: ToastFunction = this._delegate(ToastType.WARNING);

  /**
   * Display an information toast
   *
   * @param {string} message - The Toast's message
   * @param {string} title - The toast's title
   * @param {Object} opts - Toast options
   * @param {boolean} [opts.closeButton=true] - Display a button to close the toast manually.
   */
  info: ToastFunction = this._delegate(ToastType.INFO);

  private _delegate(type: ToastType): ToastFunction {
    return (
      message: string | ReturnType<IntlService['t']>,
      title?: string | ReturnType<IntlService['t']>,
      opts?: ToastOptions
    ): Element | undefined => {
      if (isEmpty(message) && isEmpty(title)) return;

      return this._buildToast(type, message, title, { ...DEFAULT_OPTIONS, ...(opts || {}) });
    };
  }

  private _createCounterAnimation(element: Element, opts: ToastOptions): Animation {
    const duration = typeof opts.timeout === 'number' ? opts.timeout : DEFAULT_TOAST_TIMEOUT;
    const counterDownKeyframes = new KeyframeEffect(element, [{ width: '100%' }, { width: '0' }], {
      duration: duration,
      fill: 'forwards'
    });

    let counterAnimation = new Animation(counterDownKeyframes, document.timeline);
    counterAnimation.id = 'counter';
    return counterAnimation;
  }

  private _createDestroyAnimation(element: Element): Animation {
    const destroyDownKeyframes = new KeyframeEffect(
      element,
      [
        { opacity: 1, transform: 'translate(0, 0)' },
        { opacity: 0, transform: 'translate(0, -30%)' }
      ],
      {
        duration: 300,
        fill: 'forwards'
      }
    );

    let destroyAnimation = new Animation(destroyDownKeyframes, document.timeline);
    destroyAnimation.id = 'destroy';
    return destroyAnimation;
  }

  private _playCounterAnimation(event: Event): void {
    this._toasts.get(<Element>event.target)?.play();
  }

  private _pauseCounterAnimation(event: Event): void {
    this._toasts.get(<Element>event.target)?.pause();
  }

  private _buildIcon(type: ToastType, parent: Element, opts: ToastOptions): void {
    if (opts?.badge) {
      let badgeContent: string = '';
      if (opts.badge?.image) {
        badgeContent = `<img src=${opts.badge.image} alt="" />`;
      } else if (opts.badge?.icon) {
        badgeContent = `<i class="${opts.badge.icon}"></i>`;
      } else if (opts.badge?.text) {
        badgeContent = `<span class="upf-badge__text">${opts.badge.text}</span>`;
      }

      const badgeContainer: Element = this._buildElement(
        'div',
        ['upf-badge', 'upf-badge--shape-round', 'upf-badge--size-md'],
        badgeContent
      );
      parent.append(badgeContainer);
    } else {
      const iconContainer: Element = this._buildElement('span', ['icon'], `<i class="${ICON_CLASSES[type]}"></i>`);
      parent.append(iconContainer);
    }
  }

  private _buildCloseButton(parent: Element) {
    const closeButton: Element = this._buildElement('button', [], '<i class="far fa-times"></i>');
    run(() => {
      closeButton.addEventListener('click', this._onToastClose.bind(this), { once: true });
    });
    parent.append(closeButton);
  }

  private _buildTitle(parent: Element, title: string | ReturnType<IntlService['t']> | undefined) {
    if (title) {
      const mainTitle: Element = this._buildElement('span', ['title'], title);
      parent.append(mainTitle);
    }
  }

  private _buildSubtitle(parent: Element, message: string | ReturnType<IntlService['t']>) {
    const subtitle: Element = this._buildElement('span', ['subtitle'], message);
    parent.append(subtitle);
  }

  private _buildTextContainer(
    parent: Element,
    message: string | ReturnType<IntlService['t']>,
    title: string | ReturnType<IntlService['t']> | undefined
  ) {
    const textContainer: Element = this._buildElement('div', ['text-container']);
    this._buildTitle(textContainer, title);
    this._buildSubtitle(textContainer, message);
    parent.append(textContainer);
  }

  private _buildToast(
    type: ToastType,
    message: string | ReturnType<IntlService['t']>,
    title: string | ReturnType<IntlService['t']> | undefined,
    opts: ToastOptions
  ): Element {
    const container: Element = this._buildContainer();
    const toast: Element = this._buildElement('div', ['toast', 'toast--hidden', `toast--${type}`]);
    const mainContainer: Element = this._buildElement('div', ['main-container']);

    const counter = this._buildElement('div', ['counter']);
    const counterDownAnimation = this._createCounterAnimation(counter, opts);

    this._buildIcon(type, mainContainer, opts);
    this._buildTextContainer(mainContainer, message, title);
    this._buildCloseButton(mainContainer);

    toast.append(counter);
    toast.append(mainContainer);
    container.append(toast);

    this._toasts.set(toast, counterDownAnimation);

    this._setupToastEvents(toast, opts);
    this._handleVisibility(toast, opts);

    return toast;
  }

  private _handleVisibility(toast: Element, opts: ToastOptions) {
    toast.classList.remove('toast--hidden');
    toast.classList.add('toast--visible');

    if (opts.timeout === 'none') return;
    this._toasts.get(toast)?.play();
  }

  private _destroyToast(toast: Element | null | undefined): void {
    if (!toast) return;

    const destroyAnimation = this._createDestroyAnimation(toast);
    destroyAnimation.play();

    destroyAnimation.finished.then(() => {
      run(() => {
        toast.removeEventListener('mouseenter', this._pauseCounterAnimation.bind(this));
        toast.removeEventListener('mouseleave', this._playCounterAnimation.bind(this));
      });
      this._toasts.delete(toast);
      toast?.remove();
    });
  }

  private _onToastClose(evt: Event): void {
    evt.stopPropagation();

    const button =
      (<Element>evt.target).tagName === 'I'
        ? (<Element>evt.target).parentElement?.parentElement
        : (<Element>evt.target).parentElement;

    this._destroyToast(button?.parentElement);
  }

  private _setupToastEvents(toast: Element, opts: ToastOptions) {
    if (opts.onclick && typeof opts.onclick === 'function') {
      run(() => {
        toast.addEventListener(
          'click',
          (event) => {
            event.stopPropagation();
            opts.onclick?.(event);
          },
          { once: true }
        );
      });
    }

    this._toasts.get(toast)?.finished.then(() => {
      this._destroyToast(toast);
    });

    if (opts.timeout === 'none') return;

    run(() => {
      toast.addEventListener('mouseenter', this._pauseCounterAnimation.bind(this));
      toast.addEventListener('mouseleave', this._playCounterAnimation.bind(this));
    });
  }

  private _buildElement(tagName: string, classes: string[], content?: string | ReturnType<IntlService['t']>): Element {
    const element: Element = document.createElement(tagName);
    element.classList.add(...classes);

    if (content) {
      element.innerHTML = content as string;
    }

    return element;
  }

  private _buildContainer(): Element {
    let container: Element | null = document.querySelector('.toasts-container');

    if (!container) {
      container = document.createElement('div');
      container.classList.add('toasts-container');
      document.body.append(container);
    }

    return container;
  }
}

declare module '@ember/service' {
  interface Registry {
    toast: Toast;
  }
}
