import Ember from 'ember';

export default Ember.Component.extend({
  error: null,
  help: null,

  tagName: 'div',
  classNames: ['form-group', 'upf-input-container'],
  classNameBindings: ['errorful', 'hasHelp'],

  errorful: Ember.computed('error', function() {
    if (this.get('error') != null) {
      return 'upf-input-container--errorful';
    }
  }),

  hasHelp: Ember.computed('help', function() {
    if (this.get('help') != null) {
      return 'upf-input-container--has-help';
    }
  }),
});
