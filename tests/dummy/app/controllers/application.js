import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service toast;

  @action
  triggerToast(type) {
    this.toast[type]('message', 'title');
  }
}
