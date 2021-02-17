import Component from '@ember/component';

export default Component.extend({
  displayedColumnsPanel: false,
  hasToggleableColumns: false,

  handleClick(event) {
    if (event.target.closest('.button-column-visibility-panel') != null) {
      this.toggleProperty('displayedColumnsPanel');
    }
    else if (event.target.closest('.side-panel--appearance') == null) {
      this.set('displayedColumnsPanel', false);
    }
  },

  init(){
    this._super();

    this.set('bindHandleClick', this.get('handleClick').bind(this));
  },

  willInsertElement() {
    document.addEventListener('click', this.get('bindHandleClick'), false);
  },

  willDestroyElement(){
    document.removeEventListener('click', this.get('bindHandleClick'), false);
  }
});
