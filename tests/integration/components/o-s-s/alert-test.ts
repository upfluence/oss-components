import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
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

    assert.dom('.upf-alert').exists({ count: 1 });
  });

  test('it sets info as default if no skin is specified', async function (assert) {
    await render(hbs`<OSS::Alert />`);

    assert.dom('.upf-alert').hasClass('upf-alert--info');
  });

  ALERT_SKINS.forEach((skin) => {
    test(`it renders ${skin} skin correctly`, async function (assert) {
      this.skin = skin;
      await render(
        hbs`<OSS::Alert @skin={{this.skin}} @title={{concat "Title " this.skin}} @subtitle={{concat "Subitle " this.skin}} />`
      );

      assert.dom('.upf-alert .icon i').hasClass('far');
      assert.dom('.upf-alert .icon i').hasClass(`${ICONS[skin]}`);
      assert.dom('.upf-alert .title').hasText(`Title ${skin}`);
      assert.dom('.upf-alert .subtitle').hasText(`Subitle ${skin}`);
    });
  });

  test('it renders the background-color white in alert when @plain is false', async function (assert) {
    await render(hbs`<OSS::Alert @plain={{false}} />`);

    assert.dom('.upf-alert .main-container').hasNoClass('main-container--plain');
  });

  test('it renders the background-color grey in alert when @plain is true', async function (assert) {
    await render(hbs`<OSS::Alert @plain={{true}} />`);

    assert.dom('.upf-alert .main-container').hasClass('main-container--plain');
  });

  test('it renders the background-color grey in alert when @plain is undefined', async function (assert) {
    await render(hbs`<OSS::Alert />`);

    assert.dom('.upf-alert .main-container').hasClass('main-container--plain');
  });

  test('it renders the cross which delete alert when you click on it, when @closable is true', async function (assert) {
    await render(hbs`<div><OSS::Alert @closable={{true}} /></div>`);

    assert.dom('.upf-alert').exists();
    assert.dom('.upf-alert .main-container .fx-col i').exists();
    assert.dom('.upf-alert .main-container .fx-col i').hasClass('fa-times');

    await click('.upf-alert .main-container .fx-col i');

    assert.dom('.upf-alert').doesNotExist();
  });

  test('the cross icon is not displayed when @closable is false', async function (assert) {
    await render(hbs`<OSS::Alert @closable={{false}} />`);

    assert.dom('.upf-alert').exists();
    assert.dom('.upf-alert .main-container .fx-col i').doesNotExist();
  });

  test('the cross icon is not displayed when @closable is undefined', async function (assert) {
    await render(hbs`<OSS::Alert />`);

    assert.dom('.upf-alert').exists();
    assert.dom('.upf-alert .main-container .fx-col i').doesNotExist();
  });

  test('it renders the extra-content named block', async function (assert) {
    await render(hbs`<OSS::Alert><:extra-content><div>Hello</div></:extra-content></OSS::Alert>`);

    assert.dom('.upf-alert .text-container div').hasText('Hello');
  });
});
