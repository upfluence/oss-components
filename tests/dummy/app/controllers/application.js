import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @service toast;

  @tracked loading = false;
  @tracked phonePrefix = '+33';
  @tracked phoneNumber = '782828282';

  @action
  onPhoneNumberChange(prefix, phoneNumber) {
    console.log('onPhoneNumberChange', prefix, phoneNumber);
    this.phonePrefix = prefix;
    this.phoneNumber = phoneNumber;
  }

  @action
  triggerToast(type) {
    this.toast[type]('message', 'title');
  }

  @action
  toggleLoading() {
    this.loading = !this.loading;
  }

  @action
  destructiveAction(model, defer) {
    console.log('Destructive action triggered');
    console.log('model');
    defer.resolve();
  }

  @action
  loadingAction(_, defer) {
    setTimeout(() => {
      defer.resolve();
    }, 1000);
  }
}
