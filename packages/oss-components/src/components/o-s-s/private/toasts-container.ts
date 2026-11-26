import { service } from '@ember/service';
import Component from '@glimmer/component';

import type ToastService from '../../../services/toast';

export default class OSSToastsContainer extends Component {
  @service declare toast: ToastService;
}
