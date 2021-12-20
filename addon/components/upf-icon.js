import { inject as service } from '@ember/service';
import Component from '@ember/component';
import { computed } from '@ember/object';
import $ from 'jquery';

const UpfIconComponent = Component.extend({
  assetMap: service('asset-map'),

  assetsRoot: 'assets',

  icon: computed('params.[]', function () {
    return this.get('params')[0];
  }),

  color: computed('params.[]', function () {
    return this.get('params')[1];
  }),

  thickness: computed('params.[]', function () {
    return this.get('params')[2];
  }),

  willInsertElement() {
    $.get(this.get('assetMap').resolve(`${this.assetsRoot}/upf-icons/${this.get('icon')}.svg`), (data) => {
      let element = this.$()[0];

      if (this.get('color')) {
        data.children[0].classList += ` upf-icon--${this.get('color')}`;
      }

      if (this.get('thickness')) {
        data.children[0].classList += ` upf-icon--stroke-${this.get('thickness')}`;
      }

      element.innerHTML = new XMLSerializer().serializeToString(data);
    });
  }
});

UpfIconComponent.reopenClass({
  positionalParams: 'params'
});

export default UpfIconComponent;
