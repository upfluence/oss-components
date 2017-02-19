import Ember from 'ember';

const { get } = Ember;

export default Ember.Component.extend({
  mainAttributeValue: Ember.computed('record', 'column.propertyName', function() {
    return get(this.get('record'), this.get('column.propertyName'));
  }),

  _groupedAttributeValues: Ember.computed('record', 'column.grouped_with', function () {
    var _this = this;
    return this.get('column.grouped_with').split(',').map(function (attribute) {
      return get(_this.get('record'), attribute);
    });
  })
});
