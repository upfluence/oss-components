import Ember from 'ember';
import BooleanColumnComponent from 'oss-components/components/data-table/boolean-column';

const {
  computed,
  observer
} = Ember;

export default BooleanColumnComponent.extend({
  classNames: ['upf-toggle-btn'],

  attributeValueFormatted: computed('attributeValue', function() {
    console.log(this.get('attributeValue'));
    if (this.get('attributeValue') || this.get('attributeValue') === 'on') {
     return 'on';
    } else {
      debugger
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

    this.get('targetObject').send(
      'toggledAttributeCallback',
      this.get('record')
    );
  }),
});
