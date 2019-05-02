import Component from '@ember/component';

export default Component.extend({
  src: null,

  classNames: ['upf-image'],

  didInsertElement() {
    this.$().css({
      'background-image': `url("${this.src}"), url("https://d25re8488fs7lz.cloudfront.net/image-server-assets/influencer-server/influencer/2233405.png")`
    });
  }
});
