import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | o-s-s/carousel', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function (val) { ... });

    await render(hbs`<OSS::Carousel />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <OSS::Carousel>
        template block text
      </OSS::Carousel>
    `);

    assert.dom().hasText('template block text');
  });
});
