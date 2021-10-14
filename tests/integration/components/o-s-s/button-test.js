import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { pauseTest } from '@ember/test-helpers/setup-context';

module('Integration | Component | o-s-s/button', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders default button', async function (assert) {
    await render(hbs`<OSS::Button>Test</OSS::Button>`);

    assert.dom('.upf-btn').exists({ count: 1 });
    assert.dom('.upf-btn').hasClass('upf-btn--default');
    assert.dom('.upf-btn').hasText('Test');
  });

  module('it render with right skin', function () {
    test('when using primary skin', async function (assert) {
      await render(hbs`<OSS::Button @skin="primary">Test</OSS::Button>`);

      assert.dom('.upf-btn').hasClass('upf-btn--primary');
    });

    test('when using secondary skin', async function (assert) {
      await render(hbs`<OSS::Button @skin="secondary">Test</OSS::Button>`);

      assert.dom('.upf-btn').hasClass('upf-btn--secondary');
    });

    test('when using destructive skin', async function (assert) {
      await render(hbs`<OSS::Button @skin="destructive">Test</OSS::Button>`);

      assert.dom('.upf-btn').hasClass('upf-btn--destructive');
    });

    test('when using social-instagram skin', async function (assert) {
      await render(hbs`<OSS::Button @skin="social-instagram">Test</OSS::Button>`);

      assert.dom('.upf-btn').hasClass('upf-btn--social-instagram');
    });

    test('when using social-facebook skin', async function (assert) {
      await render(hbs`<OSS::Button @skin="social-facebook">Test</OSS::Button>`);

      assert.dom('.upf-btn').hasClass('upf-btn--social-facebook');
    });

    test('when using social-youtube skin', async function (assert) {
      await render(hbs`<OSS::Button @skin="social-youtube">Test</OSS::Button>`);

      assert.dom('.upf-btn').hasClass('upf-btn--social-youtube');
    });
  });

  module('it render with right size', function () {
    test('when using small', async function (assert) {
      await render(hbs`<OSS::Button @size="small">Test</OSS::Button>`);

      assert.dom('.upf-btn').hasClass('upf-btn--small');
    });

    test('when using x-small', async function (assert) {
      await render(hbs`<OSS::Button @size="x-small">Test</OSS::Button>`);

      assert.dom('.upf-btn').hasClass('upf-btn--x-small');
    });
  });

  module('it render with loading state', function () {
    test('when using default loading', async function (assert) {
      await render(hbs`<OSS::Button @loading="true">Test</OSS::Button>`);
      const btn = document.querySelector('.upf-btn');

      assert.equal(btn.children[0].className, 'fas fa-circle-notch fa-spin');
    });

    test('and keep same button size', async function (assert) {
      this.loading = false;

      await render(hbs`<OSS::Button @loading={{this.loading}}>Very long text</OSS::Button>`);
      const btn = document.querySelector('.upf-btn');
      assert.dom('.upf-btn').hasText('Very long text');
      assert.equal(btn.offsetWidth, 115);

      this.set('loading', true);

      assert.equal(btn.children[0].className, 'fas fa-circle-notch fa-spin');
      assert.equal(btn.offsetWidth, 115);
    });
  });
});
