import Ember from 'ember';
import BooleanColumnComponent from 'oss-components/components/data-table/boolean-column';

export default BooleanColumnComponent.extend({
  classNames: ['upf-toggle-btn'],

  attributeToggleObserver: Ember.observer('attributeValue', function() {
    const attribute = `record.${this.get('column.propertyName')}`;
    if (this.get(attribute)) {
      this.set(attribute, false);
    } else {
      this.set(attribute, true);
    }
  }),
});
