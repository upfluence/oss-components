import Ember from 'ember';
import BooleanColumnComponent from 'oss-components/components/data-table/boolean-column';

const {
  computed,
  observer
} = Ember;

export default BooleanColumnComponent.extend({
  classNames: ['upf-toggle-btn'],

  attributeValueFormatted: computed('attributeValue', function() {
    if (this.get('attributeValue') || this.get('attributeValue') === 'on') {
     return 'on';
    } else {
      return 'off';
    }
  }),

  _: observer('attributeValueFormatted', function() {
    const attribute = `record.${this.get('column.propertyName')}`;
    if (this.get(attribute)) {
      this.set(attribute, false);
    } else {
      this.set(attribute, true);
    }

    this.triggerAction({
      action: 'toggledAttributeCallback',
      actionContext: [this.get('record')]
    });
  }),
});
