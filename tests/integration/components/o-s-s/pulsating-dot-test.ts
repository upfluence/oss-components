import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | o-s-s/pulsating-dot', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<OSS::PulsatingDot />`);

    assert.dom('.oss-pulsating-dot').exists();
  });

  ['primary', 'success', 'error', 'warning', 'gray'].forEach((skin) => {
    test(`it renders with skin ${skin}`, async function (assert) {
      this.set('skin', skin);

      await render(hbs`<OSS::PulsatingDot @skin={{this.skin}} />`);

      assert.dom('.oss-pulsating-dot').hasClass(`oss-pulsating-dot--${skin}`);
    });
  });
});
