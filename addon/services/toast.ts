import { later } from '@ember/runloop';
import Service from '@ember/service';
import { isEmpty } from '@ember/utils';

const TIMEOUT = 5000;

enum ToastType {
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'error',
  SUCCESS = 'success'
}

type ToastOptions = {
  closeButton?: true;
  tapToDismiss?: boolean;
  onclick?: Function | null;
};

const DEFAULT_OPTIONS: ToastOptions = Object.freeze({
  closeButton: true,
  onclick: null,
  tapToDismiss: true
});

function delegate(ctx: Toast, type: ToastType): Function {
  return (message: string, title: string, opts: ToastOptions = DEFAULT_OPTIONS): void => {
    if (isEmpty(message) && isEmpty(title)) return;

    console.log(opts);
    ctx.buildToast(type, message, title, { ...DEFAULT_OPTIONS, ...opts });
  };
}

export default class Toast extends Service {
  private _toasts: Element[] = [];

  success = delegate(this, ToastType.SUCCESS);
  error = delegate(this, ToastType.ERROR);
  warning = delegate(this, ToastType.WARNING);
  info = delegate(this, ToastType.INFO);

  buildToast(type: ToastType, message: string, title: string, opts: ToastOptions): void {
    const container = this._buildContainer();
    console.log(opts);

    const toast = document.createElement('div');
    toast.classList.add('toast', 'toast--hidden', `toast-${type}`);

    const titleContainer = document.createElement('div');
    titleContainer.classList.add('toast-title');
    titleContainer.textContent = title;

    const messageContainer = document.createElement('div');
    messageContainer.classList.add('toast-message');
    messageContainer.textContent = message;

    let toastChildren: Element[] = [titleContainer, messageContainer];

    if (opts.closeButton) {
      const closeButton = document.createElement('button');

      closeButton.classList.add('toast-close-button');
      closeButton.innerHTML = '<i class="fas fa-times text-size-5"></i>';
      closeButton.addEventListener('click', this._onToastClose.bind(this), false);

      toastChildren.push(closeButton);
    }

    if (opts.tapToDismiss) {
      toast.addEventListener('click', () => this._destroyToast(toast), false);
    }

    toastChildren.forEach((x) => toast.append(x));

    if (container.querySelector('.toast')) {
      container.insertBefore(toast, container.querySelector('.toast'));
    } else {
      container.append(toast);
    }

    later(
      this,
      () => {
        toast.classList.remove('toast--hidden');
        toast.classList.add('toast--visible');
      },
      500
    );

    this._toasts.push(toast);
    later(this, () => this._destroyToast(toast), TIMEOUT);
  }

  private _destroyToast(toast: Element | HTMLElement | null): void {
    if (toast) {
      toast.removeEventListener('click', () => this._destroyToast(toast), false);
      toast.remove();

      let container = document.querySelector('body #toast-container.upf-toastr--container');
      if (container?.children.length === 0) {
        container.remove();
      }
    }
  }

  private _onToastClose(evt: Event) {
    evt.stopPropagation();

    const button = (<Element>evt.target).tagName === 'I' ? (<Element>evt.target).parentElement : <Element>evt.target;

    if (button) {
      button.removeEventListener('click', this._onToastClose, false);
      this._destroyToast(button.parentElement);
    }
  }

  private _buildContainer(): Element {
    let container = document.querySelector('body #toast-container.upf-toastr--container');

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
