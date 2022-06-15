import Component from '@ember/component';
import { run } from '@ember/runloop';

export default Component.extend({
  displayedColumnsPanel: false,
  hasToggleableColumns: false,

  handleClick(event) {
    if (event.target.closest('.button-column-visibility-panel')) {
      this.toggleProperty('displayedColumnsPanel');
    } else if (!event.target.closest('.side-panel--appearance')) {
      this.set('displayedColumnsPanel', false);
    }
  },

  init() {
    this._super();

    this.set('clickHandler', this.handleClick.bind(this));
  },

  willInsertElement() {
    run(() => {
      document.addEventListener('click', this.clickHandler, false);
    });
  },

  willDestroyElement() {
    run(() => {
      document.removeEventListener('click', this.clickHandler, false);
    });
  }
});
