import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';
import { assert } from '@ember/debug';
import { isDestroying, registerDestructor, unregisterDestructor } from '@ember/destroyable';
import { hash } from '@ember/helper';
import { getOwner } from '@ember/owner';
import type Owner from '@ember/owner';
import { renderComponent } from '@ember/renderer';
import type RouterService from '@ember/routing/router-service';
import { precompileTemplate } from '@ember/template-compilation';
import { isTesting } from '@embroider/macros';
import { tracked } from '@glimmer/tracking';

import type { IntlService } from 'ember-intl';

import OSSDialog, { type Skin as DialogSkin } from '../components/o-s-s/dialog';

type Content = ReturnType<IntlService['t']>;
type Texts = {
  title?: Content;
  subtitle?: Content;
  confirmLabel?: Content;
  cancelLabel?: Content;
};
type Text<T, A extends unknown[]> = Content | ((self: T, ...args: A) => Content);
type ConfirmOptions = Texts & {
  baseTranslationKey?: string;
  skin?: DialogSkin;
  icon?: string;
  onConfirm?: () => unknown;
};

export type ConfirmableOptions<T, A extends unknown[]> = {
  baseTranslationKey?: string;
  title?: Text<T, A>;
  subtitle?: Text<T, A>;
  confirmLabel?: Text<T, A>;
  cancelLabel?: Text<T, A>;
  skin?: DialogSkin;
  icon?: string;
  when?: (self: T, ...args: A) => boolean;
};

class ConfirmationState {
  @tracked loading: boolean = false;

  constructor(
    readonly texts: Texts,
    readonly skin: DialogSkin | undefined,
    readonly icon: string | undefined
  ) {}
}

const ConfirmationDialog = setComponentTemplate(
  precompileTemplate(
    `<div class="confirmable-dialog">
      <OSSDialog
        @title={{@state.texts.title}}
        @subtitle={{@state.texts.subtitle}}
        @skin={{@state.skin}}
        @icon={{@state.icon}}
        @mainAction={{hash label=@state.texts.confirmLabel action=@onConfirm loading=@state.loading}}
        @secondaryAction={{hash label=@state.texts.cancelLabel action=@onCancel}}
        data-control-name="confirmable-dialog"
      />
    </div>`,
    { strictMode: true, scope: () => ({ OSSDialog, hash }) }
  ),
  templateOnly()
);

const HOST_ID = 'confirmable-dialog-host';

let activeDialog: { state: ConfirmationState; dismiss: () => void } | undefined;

function hostElement(): HTMLElement {
  let host = document.getElementById(HOST_ID);

  if (!host) {
    host = document.createElement('div');
    host.id = HOST_ID;
    ((isTesting() && document.getElementById('ember-testing')) || document.body).append(host);
  }

  return host;
}

function translate(owner: Owner, baseTranslationKey: string | undefined, suffix: string): Content | undefined {
  if (!baseTranslationKey) return undefined;

  const intl = owner.lookup('service:intl') as IntlService;
  const key = `${baseTranslationKey}.${suffix}`;

  assert(`[pattern][confirmation] Missing translation "${key}"`, intl.exists(key));

  return intl.t(key);
}

function isThenable(value: unknown): value is PromiseLike<unknown> {
  return typeof (value as PromiseLike<unknown> | undefined)?.then === 'function';
}

export function confirm(context: object, options: ConfirmOptions): Promise<boolean> {
  const owner = getOwner(context);

  assert('[pattern][confirmation] The context must have an owner (component, controller, route or service)', owner);

  const texts: Texts = {
    title: options.title ?? translate(owner, options.baseTranslationKey, 'title'),
    subtitle: options.subtitle ?? translate(owner, options.baseTranslationKey, 'subtitle'),
    confirmLabel: options.confirmLabel ?? translate(owner, options.baseTranslationKey, 'confirm'),
    cancelLabel: options.cancelLabel ?? translate(owner, options.baseTranslationKey, 'cancel')
  };
  assert(
    '[pattern][confirmation] A title, a confirmLabel and a cancelLabel are mandatory, either directly or through a baseTranslationKey',
    texts.title && texts.confirmLabel && texts.cancelLabel
  );

  if (activeDialog?.state.loading) return Promise.resolve(false);
  activeDialog?.dismiss();

  const router = owner.lookup('service:router') as RouterService;
  const state = new ConfirmationState(texts, options.skin, options.icon);

  return new Promise<boolean>((resolve, reject) => {
    let closed = false;

    const close = (): void => {
      closed = true;
      router.off('routeWillChange', dismiss);
      if (!isDestroying(context)) unregisterDestructor(context, dismiss);
      if (activeDialog?.dismiss === dismiss) activeDialog = undefined;
      rendered.destroy();
    };

    const dismiss = (): void => {
      if (closed) return;
      close();
      resolve(false);
    };

    const onCancel = (event?: Event): void => {
      event?.stopPropagation();
      if (!state.loading) dismiss();
    };

    const onConfirm = (event?: Event): void => {
      event?.stopPropagation();
      if (closed || state.loading) return;

      let outcome: unknown;
      try {
        outcome = options.onConfirm?.();
      } catch (error) {
        close();
        reject(error);
        return;
      }

      if (!isThenable(outcome)) {
        close();
        resolve(true);
        return;
      }

      state.loading = true;
      outcome.then(
        () => {
          if (closed) return;
          close();
          resolve(true);
        },
        (error: unknown) => {
          if (closed) return;
          close();
          reject(error);
        }
      );
    };

    const rendered = renderComponent(ConfirmationDialog, {
      into: hostElement(),
      owner,
      args: { state, onConfirm, onCancel }
    });

    router.on('routeWillChange', dismiss);
    registerDestructor(context, dismiss);
    activeDialog = { state, dismiss };
  });
}

function resolveText<T, A extends unknown[]>(text: Text<T, A> | undefined, self: T, args: A): Content | undefined {
  return typeof text === 'function' ? text(self, ...args) : text;
}

export function confirmable<T extends object, A extends unknown[] = unknown[]>(options: ConfirmableOptions<T, A>) {
  return function <M extends (this: T, ...args: A) => unknown>(
    _target: T,
    key: string,
    descriptor: TypedPropertyDescriptor<M>
  ): TypedPropertyDescriptor<M> {
    const original = descriptor.value;

    assert(
      `[pattern][confirmation] \`${key}\` must be a method. If it is also an \`@action\`, put \`@action\` above \`@confirmable\`.`,
      typeof original === 'function'
    );

    const openDialogs = new WeakMap<T, Promise<boolean>>();

    descriptor.value = function (this: T, ...args: A): unknown {
      if (options.when && !options.when(this, ...args)) {
        return original.apply(this, args);
      }

      let dialog = openDialogs.get(this);

      if (!dialog) {
        dialog = confirm(this, {
          baseTranslationKey: options.baseTranslationKey,
          title: resolveText(options.title, this, args),
          subtitle: resolveText(options.subtitle, this, args),
          confirmLabel: resolveText(options.confirmLabel, this, args),
          cancelLabel: resolveText(options.cancelLabel, this, args),
          skin: options.skin,
          icon: options.icon,
          onConfirm: () => original.apply(this, args)
        }).finally(() => openDialogs.delete(this));

        openDialogs.set(this, dialog);
      }

      return dialog.then(() => undefined);
    } as M;

    return descriptor;
  };
}
