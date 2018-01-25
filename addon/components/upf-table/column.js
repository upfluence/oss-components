import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  tagName: 'td',
  classNames: ['upf-datatable__column'],
  classNameBindings: [
    'editable:upf-datatable__column--uneditable'
  ],
  attributeBindings: ['valign'],

  valign: 'middle'
});
