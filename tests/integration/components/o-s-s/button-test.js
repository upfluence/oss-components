import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, pauseTest } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | o-s-s/button', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <OSS::Button>
        Test
      </OSS::Button>
    `);

    await pauseTest();

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
