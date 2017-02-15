import Ember from 'ember';

const { get } = Ember;

export default Ember.Component.extend({
  classNameBindings: ['status'],

  isTruthy: Ember.computed('record', 'column.propertyName', function() {
    return get(this.get('record'), this.get('column.propertyName'));
  }),

  status: Ember.computed('record', 'column.propertyName', function() {
    return (this.get('isTruthy')) ? 'upf-status--approved' : 'upf-status--unapproved';
  }),
});
