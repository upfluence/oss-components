import Component from '@ember/component';

export default Component.extend({
  src: null,

  classNames: ['upf-image'],

  didInsertElement() {
    this.$().css({
      'background-image': `url("${this.src}"), url("assets/images/no-image.svg")`
    });
  }
});
