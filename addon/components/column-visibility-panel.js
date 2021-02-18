import Component from '@ember/component';

export default Component.extend({
  displayedColumnsPanel: false,
  hasToggleableColumns: false,

  clickHandler(event) {
    if (event.target.closest('.button-column-visibility-panel')) {
      this.toggleProperty('displayedColumnsPanel');
    }
    else if (!event.target.closest('.side-panel--appearance')) {
      this.set('displayedColumnsPanel', false);
    }
  },

  init(){
    this._super();

    this.set('bindClickHandler', this.clickHandler.bind(this));
  },

  willInsertElement() {
    document.addEventListener('click', this.bindClickHandler, false);
  },

  willDestroyElement(){
    document.removeEventListener('click', this.bindClickHandler, false);
  }
});
