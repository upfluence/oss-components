import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({
  tagName: 'td',
  classNames: ['upf-datatable__column'],
  classNameBindings: [
    'uneditable:upf-datatable__column--uneditable'
  ],
  attributeBindings: ['valign'],

  valign: 'middle',
  uneditable: computed.not('editable')
});
