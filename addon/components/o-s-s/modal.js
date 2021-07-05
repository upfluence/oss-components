import Component from '@glimmer/component';
import { action } from '@ember/object';
import jQuery from 'jquery';

export default class OssModalComponent extends Component {
  element = null;

  _handleEscapeKey(event) {
    if (event.keyCode === 27) {
      this.close(event);
    }
  }

  @action
  setup(element) {
    this.element = element;

    const modal = jQuery(this.element).modal({ backdrop: 'static' });

    if (this.args.options?.container) {
      modal.appendTo(this.args.options.container);
    }

    this.element.addEventListener('keydown', this._handleEscapeKey.bind(this));
  }

  @action
  teardown() {
    jQuery(this.element).modal('hide');
    this.element.removeEventListener('keydown', this._handleEscapeKey.bind(this));
  }

  @action
  close(e) {
    e.preventDefault();

    if (this.args.onClose) {
      this.args.onClose();
    }

    jQuery(this.element).modal('hide');
  }
}
