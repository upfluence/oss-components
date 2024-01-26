import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

import ToastService from '@upfluence/oss-components/services/toast';

interface OSSCopySignature {
  Args: {
    value: string;
    inline?: boolean;
  };
  Element: HTMLElement;
}

export default class OSSCopyComponent extends Component<OSSCopySignature> {
  @service intl: any;
  @service declare toast: ToastService;
  @tracked inline: boolean = this.args.inline ?? false;

  @action
  copy(event: PointerEvent) {
    event.stopPropagation();

    navigator.clipboard
      .writeText(this.args.value)
      .then(() => {
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
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'OSS::Copy': typeof OSSCopyComponent;
    'o-s-s/copy': typeof OSSCopyComponent;
  }
}
