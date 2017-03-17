import Ember from 'ember';

const {
  Component,
  computed,
  inject,
  $
} = Ember;

const UpfIconComponent = Component.extend({
  assetMap: inject.service('asset-map'),

  icon: computed('params.[]', function() {
    return this.get('params')[0];
  }),

  color: computed('params.[]', function() {
    return this.get('params')[1];
  }),

  thickness: computed('params.[]', function() {
    return this.get('params')[2];
  }),

  didInsertElement() {
    $.get(
      this.get('assetMap').resolve(`assets/upf-icons/${this.get('icon')}.svg`),
      (data) => {
        let element = this.$()[0];

        if (this.get('color')) {
          data.children[0].classList += ` upf-icon--${this.get('color')}`;
        }

        if (this.get('thickness')) {
          data.children[0].classList +=
            ` upf-icon--stroke-${this.get('thickness')}`;
        }

        element.innerHTML = new XMLSerializer().serializeToString(data);
      }
    );
  }
});

UpfIconComponent.reopenClass({
  positionalParams: 'params'
});

export default UpfIconComponent;
