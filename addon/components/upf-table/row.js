import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  tagName: 'tr',
  classNames: ['upf-datatable__row'],
  classNameBindings: ['isHeaderRow:upf-datatable__row--header']
});
