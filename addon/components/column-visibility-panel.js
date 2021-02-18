import Component from '@ember/component';

export default Component.extend({
  displayedColumnsPanel: false,
  hasToggleableColumns: false,

  clickHandler(event) {
    if (event.target.closest('.button-column-visibility-panel') != null) {
      this.toggleProperty('displayedColumnsPanel');
    }
    else if (event.target.closest('.side-panel--appearance') == null) {
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
