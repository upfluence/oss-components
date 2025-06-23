import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | o-s-s/smart/feedback', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function (val) { ... });

    await render(hbs`<OSS::Smart::Feedback />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <OSS::Smart::Feedback>
        template block text
      </OSS::Smart::Feedback>
    `);

    assert.dom().hasText('template block text');
  });
});
