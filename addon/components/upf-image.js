import Component from '@ember/component';

export default Component.extend({
  src: null,

  classNames: ['upf-image'],

  // eslint-disable-next-line ember/require-super-in-lifecycle-hooks
  didInsertElement() {
    this.$().css({
      'background-image': `url("${this.src}"), url("assets/images/no-image.svg")`
    });
  }
});
