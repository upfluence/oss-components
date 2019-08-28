import Component from '@ember/component';
import { computed, defineProperty } from '@ember/object';
import { capitalize } from '@ember/string';

const AVAILABLE_RENDERERS = [
  'text', 'numeric', 'money'
];

export default Component.extend({
  classNames: ['table-v2__cell'],
  classNameBindings: [
    'header:table-v2__cell--header',
    'item.selected:table-v2__cell--selected',
    'isNumeric:table-v2__cell--numeric',
    'isMoney:table-v2__cell--numeric'
  ],

  header: false,

  _renderingComponent: computed('column.type', function() {
    if (AVAILABLE_RENDERERS.includes(this.column.type)) {
      return `upf-table/cell/renderers/${this.column.type}`;
    }
  }),

  didReceiveAttrs() {
    if (this.column) {
      AVAILABLE_RENDERERS.forEach((rendererType) => {
        defineProperty(
          this,
          `is${capitalize(rendererType)}`,
          computed('column.type', function() {
            return this.column.type === rendererType;
          })
        );
      });
    }
  }
});
