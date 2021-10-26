import Component from '@glimmer/component';
import { action } from '@ember/object';
import jQuery from 'jquery';

const DEFAULT_OPTIONS = {
  centered: false,
  container: null,
  modalClass: null,
  header: true,
  borderlessHeader: false,
  tabindex: -1
};

export default class OssModalComponent extends Component {
  element = null;

  get options() {
    return { ...DEFAULT_OPTIONS, ...(this.args.options || {}) };
  }

  _handleEscapeKey(event) {
    if (event.key === 'Escape') {
      this.close(event);
    }
  }

  @action
  setup(element) {
    this.element = element;

    const modal = jQuery(this.element).modal({ backdrop: 'static' });

    if (this.options.container) {
      modal.appendTo(this.options.container);
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
    e?.preventDefault();

    if (this.args.onClose) {
      this.args.onClose();
    }

    jQuery(this.element).modal('hide');
  }
}
