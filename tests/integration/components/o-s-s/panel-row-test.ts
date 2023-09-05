import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | o-s-s/panel-row', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<OSS::Panel::Row @icon={{"fa-cog"}} @label={{'Your Label'l}} />`);

    assert.dom('.oss-panel-content--row').exists();
    assert.dom('.far').exists();
    assert.dom('p').hasText('Your Label');
  });
});
