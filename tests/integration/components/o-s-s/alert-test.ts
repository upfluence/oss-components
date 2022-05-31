import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, setupOnerror } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

const ALERT_SKINS = ['success', 'error', 'info', 'warning'];
const ICONS: { [index: string]: string } = {
  success: 'fa-check-circle',
  error: 'fa-exclamation-triangle',
  info: 'fa-info-circle',
  warning: 'fa-exclamation-circle'
};

module('Integration | Component | o-s-s/alert', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<OSS::Alert @skin="success" />`);

    assert.dom('.upf-alert-v2').exists({ count: 1 });
  });

  test('it throws an error if no skin argument is passed', async function (assert) {
    setupOnerror((err: any) => {
      assert.equal(err.message, '[component][OSS::Alert] The @skin argument is mandatory');
    });

    await render(hbs`<OSS::Alert />`);
  });

  ALERT_SKINS.forEach((skin) => {
    test(`it renders ${skin} skin correctly`, async function (assert) {
      this.skin = skin;
      await render(
        hbs`<OSS::Alert @skin={{this.skin}} @title={{concat "Title " this.skin}} @subtitle={{concat "Subitle " this.skin}} />`
      );

      assert.dom('.upf-alert-v2 .icon i').hasClass('far');
      assert.dom('.upf-alert-v2 .icon i').hasClass(`${ICONS[skin]}`);
      assert.dom('.upf-alert-v2 .title').hasText(`Title ${skin}`);
      assert.dom('.upf-alert-v2 .subtitle').hasText(`Subitle ${skin}`);
    });
  });
});