import Component from '@ember/component';
import { not } from '@ember/object/computed';

export default Component.extend({
  tagName: 'td',
  classNames: ['upf-datatable__column'],
  classNameBindings: ['uneditable:upf-datatable__column--uneditable'],
  attributeBindings: ['valign'],

  valign: 'middle',
  uneditable: not('editable')
});
