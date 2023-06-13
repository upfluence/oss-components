import Component from '@ember/component';

export default Component.extend({
  src: null,

  classNames: ['upf-image'],

  didInsertElement() {
    this._super();
    this.element.style.backgroundImage = `url("${this.src}"), url("assets/images/no-image.svg")`;
  }
});
