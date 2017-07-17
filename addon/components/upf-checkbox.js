import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  classNames: ['upf-checkbox'],
  classNameBindings: ['hasLabel:upf-checkbox--has-label']
});
