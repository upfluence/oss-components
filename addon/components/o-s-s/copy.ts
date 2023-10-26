import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

import ToastService from '@upfluence/oss-components/services/toast';

interface OSSCopyArgs {
  value: string;
  inline?: boolean;
}

export default class OSSCopy extends Component<OSSCopyArgs> {
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
