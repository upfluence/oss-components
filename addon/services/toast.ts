import { later } from '@ember/runloop';
import Service from '@ember/service';
import { isEmpty } from '@ember/utils';

enum ToastType {
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'error',
  SUCCESS = 'success'
}

const ICONS_DEFINITION = {
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
  tapToDismiss?: boolean;
  onclick?: Function;
  timeout?: number | 'none';
};

type ToastFunction = (message: string, title: string, opts?: ToastOptions) => void;

const DEFAULT_TOAST_TIMEOUT = 5000;

const DEFAULT_OPTIONS: ToastOptions = Object.freeze({
  tapToDismiss: true,
  onclick: undefined,
  timeout: DEFAULT_TOAST_TIMEOUT
});

export default class Toast extends Service {
  private _toasts: Element[] = [];

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
    return (message: string, title?: string, opts?: ToastOptions): void => {
      if (isEmpty(message) && isEmpty(title)) return;

      this._buildToast(type, message, title, { ...DEFAULT_OPTIONS, ...(opts || {}) });
    };
  }

  private _buildToast(type: ToastType, message: string, title: string | undefined, opts: ToastOptions): void {
    const container: HTMLElement = this._buildContainer();
    const toast: HTMLElement = this._buildElement('div', ['toast', 'toast--hidden', `toast--${type}`]);
    const mainContainer: HTMLElement = this._buildElement('div', ['main-container']);

    const counter: HTMLElement = this._buildElement('div', ['counter']);
    if (typeof opts.timeout === 'number') {
      counter.style.animation = `progress-animation ${(opts.timeout || DEFAULT_TOAST_TIMEOUT) / 1000}s forwards`;
    }

    const iconContainer: HTMLElement = this._buildElement(
      'span',
      ['icon'],
      `<i class="${ICONS_DEFINITION[type]}"></i>`
    );

    const closeButton: HTMLElement = this._buildElement('button', [], '<i class="far fa-times"></i>');
    closeButton.addEventListener('click', this._onToastClose.bind(this), { once: true });

    const textContainer: HTMLElement = this._buildElement('div', ['text-container']);
    if (title) {
      const mainTitle: HTMLElement = this._buildElement('span', ['title'], title);
      textContainer.append(mainTitle);
    }
    const subtitle: HTMLElement = this._buildElement('span', ['subtitle'], message);
    textContainer.append(subtitle);

    mainContainer.append(iconContainer);
    mainContainer.append(textContainer);
    mainContainer.append(closeButton);
    toast.append(counter);
    toast.append(mainContainer);

    // this._setupToastEvents(toast, opts);
    container.append(toast);

    this._handleVisibility(toast, opts);
  }

  private _handleVisibility(toast: Element, opts: ToastOptions) {
    toast.classList.remove('toast--hidden');
    toast.classList.add('toast--visible');

    this._toasts.push(toast);

    if (opts.timeout === 'none') {
      return;
    }

    later(this, () => this._destroyToast(toast), opts.timeout || DEFAULT_TOAST_TIMEOUT);
  }

  private _destroyToast(toast: Element | null): void {
    toast?.remove();
  }

  private _onToastClose(evt: Event): void {
    evt.stopPropagation();

    const button =
      (<Element>evt.target).tagName === 'I'
        ? (<Element>evt.target).parentElement?.parentElement
        : (<Element>evt.target).parentElement;

    if (button) {
      this._destroyToast(button.parentElement);
    }
  }

  // private _setupToastEvents(toast: Element, opts: ToastOptions) {
  //   if (opts.onclick && typeof opts.onclick === 'function') {
  //     toast.addEventListener(
  //       'click',
  //       (e) => {
  //         e.stopPropagation();
  //         opts.onclick && opts.onclick(e);
  //       },
  //       { once: true }
  //     );
  //   }
  //
  //   if (opts.tapToDismiss) {
  //     toast.addEventListener(
  //       'click',
  //       () => {
  //         this._destroyToast(toast);
  //       },
  //       { once: true }
  //     );
  //   }
  // }

  private _buildElement(tagName: string, classes: string[], content?: string): HTMLElement {
    const el: HTMLElement = document.createElement(tagName);
    el.classList.add(...classes);

    if (content) {
      el.innerHTML = content;
    }

    return el;
  }

  private _buildContainer(): HTMLElement {
    let container: HTMLElement | null = document.querySelector('.toasts-container');

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
