import Ember from 'ember';

export default Ember.Component.extend({
  error: null,

  tagName: 'div',
  classNames: ['form-group', 'upf-input-container'],
  classNameBindings: ['errorful'],

  errorful: Ember.computed('error', function() {
    if (this.get('error') != null) {
      return 'upf-input-container--errorful';
    }
  }),
});
