import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('upf-table/header-cell', 'Integration | Component | upf table/header cell', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{upf-table/header-cell}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#upf-table/header-cell}}
      template block text
    {{/upf-table/header-cell}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
