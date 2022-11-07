import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

interface OSSCopyArgs {
  value: string;
}

const DISPLAY_DELAY = 2500;

export default class OSSCopy extends Component<OSSCopyArgs> {
  @tracked isCopied = false;
  @service intl: any;

  get tooltipTitle() {
    return this.isCopied ? this.intl.t('oss-components.copy.success') : this.intl.t('oss-components.copy.default');
  }

  endCopy() {
    this.isCopied = false;
  }

  @action
  copy(event: PointerEvent) {
    event.stopPropagation();

    navigator.clipboard.writeText(this.args.value).then(() => {
      this.isCopied = true;
      setTimeout(() => {
        this.endCopy();
      }, DISPLAY_DELAY);
    });
  }
}
