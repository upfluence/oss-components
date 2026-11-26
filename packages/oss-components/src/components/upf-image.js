import Component from '@ember/component';
import { service } from '@ember/service';

export default Component.extend({
  assetMap: service('asset-map'),

  src: null,

  classNames: ['upf-image'],

  didInsertElement() {
    this._super();
    const fallback = this.assetMap.resolve('@upfluence/oss-components/assets/images/no-image.svg');
    this.element.style.backgroundImage = `url("${this.src}"), url("${fallback}")`;
  }
});
