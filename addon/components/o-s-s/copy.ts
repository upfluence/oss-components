import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { isTesting } from '@embroider/macros';

import ToastService from '@upfluence/oss-components/services/toast';
import type { IntlService } from 'ember-intl';

interface OSSCopyArgs {
  value: string;
  inline?: boolean;
  icon?: string;
  tooltip?: string;
  animated?: boolean;
}

export default class OSSCopy extends Component<OSSCopyArgs> {
  @service declare intl: IntlService;
  @service declare toast: ToastService;

  @tracked accessibleClipboard: boolean = false;
  @tracked inline: boolean;
  @tracked animated: boolean;
  @tracked showCheckmark: boolean = false;

  constructor(owner: unknown, args: OSSCopyArgs) {
    super(owner, args);

    this.inline = this.args.inline ?? false;
    this.animated = this.args.animated ?? false;

    if (!(window as any).chrome && !isTesting()) {
      this.accessibleClipboard = true;
      return;
    }

    navigator.permissions
      .query({ name: 'clipboard-write' as PermissionName })
      .then(({ state }) => {
        this.accessibleClipboard = state === 'granted';
      })
      .catch(() => {});
  }

  get icon(): string {
    return this.args.icon ?? 'far fa-copy';
  }

  get tooltip(): string {
    return this.args.tooltip ?? this.intl.t('oss-components.copy.tooltip');
  }

  @action
  copy(event: PointerEvent): void {
    event.stopPropagation();

    navigator.clipboard
      .writeText(this.args.value)
      .then(() => {
        if (this.animated) {
          this.showCheckmark = true;
          return;
        }

        this.toast.info(
          this.intl.t('oss-components.copy.success.subtitle'),
          this.intl.t('oss-components.copy.success.title')
        );
      })
      .catch(() => {
        this.toast.error(
          this.intl.t('oss-components.copy.error.subtitle'),
          this.intl.t('oss-components.copy.error.title')
        );
      });
  }

  @action
  resetCheckmarkOnAnimationEnd(): void {
    this.showCheckmark = false;
  }
}
