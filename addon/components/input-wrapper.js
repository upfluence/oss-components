import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  error: null,
  help: null,

  tagName: 'div',
  classNames: ['form-group', 'upf-input-container'],
  classNameBindings: ['errorful', 'hasHelp'],

  errorful: computed('error', function () {
    if (this.get('error') != null) {
      return 'upf-input-container--errorful';
    }
    return '';
  }),

  hasHelp: computed('help', function () {
    if (this.get('help') != null) {
      return 'upf-input-container--has-help';
    }
    return '';
  })
});
