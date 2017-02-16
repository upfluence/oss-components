import Ember from 'ember';

const { get } = Ember;

export default Ember.Component.extend({
  classNameBindings: ['status'],

  attributeValue: Ember.computed('record', 'column.propertyName', function() {
    return get(this.get('record'), this.get('column.propertyName'));
  }),

  status: Ember.computed('attributeValue', function() {
    return (this.get('attributeValue')) ? 'upf-status--approved' : 'upf-status--unapproved';
  }),
});
