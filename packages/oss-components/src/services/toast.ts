import { action } from '@ember/object';
import { getOwner } from '@ember/owner';
import { renderComponent } from '@ember/renderer';
import { schedule } from '@ember/runloop';
import Service from '@ember/service';
import { isEmpty } from '@ember/utils';
import { tracked } from '@glimmer/tracking';

import type { IntlService } from 'ember-intl';

import OSSToastsContainer from '../components/o-s-s/private/toasts-container';
import type { ToastLink, ToastType as OSSToastType } from '../components/o-s-s/toast';

enum ToastType {
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'error',
  SUCCESS = 'success'
}

/**
 * Toast Options
 *
 * @param {Function} onclick - A function to be called the first time the toast is clicked.
 * @param {number|'none'} timeout - Duration in milliseconds before the toast clears itself, or 'none' to keep it.
 * @param {Object} badge - A badge displayed instead of the type icon: one of image, icon or text.
 * @param {Object} link - A link displayed under the message, with OSS::Link's label, icon, link and transitionTo.
 */
export type ToastOptions = {
  onclick?: (event: Event) => void;
  timeout?: number | 'none';
  badge?: {
    icon?: string;
    image?: string;
    text?: string;
  };
  link?: ToastLink;
};

export type ToastEntry = {
  id: number;
  createdAt: number;
  type: OSSToastType;
  title?: string | ReturnType<IntlService['t']>;
  subtitle: string | ReturnType<IntlService['t']>;
  badge?: ToastOptions['badge'];
  link?: ToastOptions['link'];
  timeout?: ToastOptions['timeout'];
  onclick?: ToastOptions['onclick'];
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
  badge: undefined,
  link: undefined
});

export default class Toast extends Service {
  @tracked toasts: ToastEntry[] = [];

  private _nextId: number = 0;
  private _host?: HTMLElement;
  private _renderResult?: ReturnType<typeof renderComponent>;

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

  @action
  dismiss(id: number): void {
    this.toasts = this.toasts.filter((toast) => toast.id !== id);
  }

  willDestroy(): void {
    this._renderResult?.destroy();
    this._host?.remove();
    super.willDestroy();
  }

  private _delegate(type: ToastType): ToastFunction {
    return (
      message: string | ReturnType<IntlService['t']>,
      title?: string | ReturnType<IntlService['t']>,
      opts?: ToastOptions
    ): void => {
      if (isEmpty(message) && isEmpty(title)) return;

      const { badge, link, timeout, onclick } = { ...DEFAULT_OPTIONS, ...(opts || {}) };
      const toast: ToastEntry = {
        id: ++this._nextId,
        createdAt: Date.now(),
        type,
        title,
        subtitle: message,
        badge,
        link,
        timeout,
        onclick
      };

      schedule('actions', this, this._push, toast);
    };
  }

  private _push(toast: ToastEntry): void {
    if (this.isDestroying || this.isDestroyed) return;

    this.toasts = [...this.toasts, toast];
    this._mount();
  }

  private _mount(): void {
    if (this._host) return;

    this._host = document.createElement('div');
    document.body.append(this._host);
    this._renderResult = renderComponent(OSSToastsContainer, { into: this._host, owner: getOwner(this)! });
  }
}

declare module '@ember/service' {
  interface Registry {
    toast: Toast;
  }
}
