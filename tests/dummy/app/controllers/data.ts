import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

import ToastService from '@upfluence/oss-components/services/toast';

export default class Data extends Controller {
  @service declare toast: ToastService;

  @tracked shopUrl = '';
  @tracked shopifyDomain: string = '';
  @tracked revealed = false;
  @tracked starRatingValue = 3;

  loop = Array(15);

  subdomainRegex = /^[a-zA-Z0-9]+[a-zA-Z0-9-._]*[a-zA-Z0-9]+$/;

  @action
  onUrlInputChange(newValue: string, isValid: boolean) {
    console.log('newValue : ' + newValue);
    console.log('Value test against regext valid ? ' + isValid);
    if (isValid) {
      this.shopUrl = newValue.replace('https://', '').replace('http://', '');
    }
  }

  @action
  onAttributePanelSave() {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 300);
    });
  }

  @action
  onAttributePanelCancel() {
    console.log('Attributes panel cancel');
  }

  @action
  onAttributePanelEdit() {
    console.log('Attributes panel edition');
  }

  @action
  onRemove() {
    console.log('on remove');
    return new Promise((res) => {
      setTimeout(() => {
        this.revealed = true;
        return res('success');
      }, 1000);
    });
  }

  @action
  onRevealEmailError() {
    console.log('on reveal email error');
    return new Promise((res, rej) => {
      setTimeout(() => {
        this.toast.error('There was an error retrieving the email address. Try again later.', 'Error');
        return rej('failed');
      }, 1000);
    });
  }

  @action
  onRevealEmailSuccess() {
    console.log('on reveal email success');
    return new Promise((res) => {
      setTimeout(() => {
        this.revealed = true;
        return res('success');
      }, 1000);
    });
  }
}
