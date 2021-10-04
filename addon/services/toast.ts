import { later } from '@ember/runloop';
import Service from '@ember/service';
import { isEmpty } from '@ember/utils';

enum ToastType {
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'error',
  SUCCESS = 'success'
}

/**
 * Toast Options
 *
 * @param {boolean} closeButton - Whether or not a button should be displayed to close the toast early.
 * @param {boolean} tapToDismiss - Whether or not a tap on the toast should close it.
 * @param {Function} onclick - A function to be called when the toast is clicked.
 */
export type ToastOptions = {
  closeButton?: boolean;
  tapToDismiss?: boolean;
  onclick?: Function;
  timeout?: number | 'none';
};

type ToastFunction = (message: string, title: string, opts?: ToastOptions) => void;


const DEFAULT_TOAST_TIMEOUT = 5000;

const DEFAULT_OPTIONS: ToastOptions = Object.freeze({
  closeButton: true,
  tapToDismiss: true,
  onclick: undefined,
  timeout: undefined
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
    return (message: string, title: string, opts: ToastOptions = DEFAULT_OPTIONS): void => {
      if (isEmpty(message) && isEmpty(title)) return;

      this._buildToast(type, message, title, { ...DEFAULT_OPTIONS, ...opts });
    };
  }

  private _buildToast(type: ToastType, message: string, title: string, opts: ToastOptions): void {
    const container: Element = this._buildContainer();

    const toast: Element = document.createElement('div');
    toast.classList.add('toast', 'toast--hidden', `toast-${type}`);

    const titleContainer: Element = this._buildToastPart('div', ['toast-title'], title);
    const messageContainer: Element = this._buildToastPart('div', ['toast-message'], message);

    let toastChildren: Element[] = [titleContainer, messageContainer];

    if (opts.closeButton) {
      const closeButton: Element = document.createElement('button');

      closeButton.classList.add('toast-close-button');
      closeButton.innerHTML = '<i class="fas fa-times text-size-5"></i>';
      closeButton.addEventListener('click', this._onToastClose.bind(this), { once: true });

      toastChildren.push(closeButton);
    }

    if (opts.onclick && typeof opts.onclick === 'function') {
      toast.addEventListener('click', (e) => {
        e.stopPropagation();
        opts.onclick && opts.onclick(e);
      }, { once: true });
    }

    if (opts.tapToDismiss) {
      toast.addEventListener('click', () => { this._destroyToast(toast) }, { once: true });
    }

    toastChildren.forEach((x) => toast.append(x));

    if (container.querySelector('.toast')) {
      container.insertBefore(toast, container.querySelector('.toast'));
    } else {
      container.append(toast);
    }

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

    const button = (<Element>evt.target).tagName === 'I' ? (<Element>evt.target).parentElement : <Element>evt.target;

    if (button) {
      this._destroyToast(button.parentElement);
    }
  }

  private _buildToastPart(tagName: string, classes: string[], textContent: string): Element {
    const el: Element = document.createElement(tagName);

    el.classList.add(...classes);
    el.textContent = textContent;

    return el;
  }

  private _buildContainer(): Element {
    let container: Element | null = document.querySelector('body #toast-container.upf-toastr--container');

    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.classList.add('upf-toastr--container');

      document.body.append(container);
    }

    return container;
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  interface Registry {
    toast: Toast;
  }
}
