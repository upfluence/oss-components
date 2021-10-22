import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, setupOnerror } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | o-s-s/button', function (hooks) {
  setupRenderingTest(hooks);

  test('it fails if label and icon are missing', async function (assert) {
    setupOnerror((err) => {
      assert.equal(err.message, '[component][OSS::Button] You must pass either a @label or an @icon argument.');
    });

    await render(hbs`<OSS::Button />`);
  });

  test('it renders the icon when present', async function (assert) {
    await render(hbs`<OSS::Button @icon="fab fa-facebook" />`);

    assert.dom('.upf-btn i').hasClass('fa-facebook');
  });

  test('it renders the icon and label when present', async function (assert) {
    await render(hbs`<OSS::Button @icon="fab fa-facebook" @label="Label" />`);

    assert.dom('.upf-btn i').hasClass('fa-facebook');
    assert.dom('.upf-btn span').hasClass('margin-left-xxx-sm');
    assert.dom('.upf-btn span').hasText('Label');
  });

  test('it renders default button', async function (assert) {
    await render(hbs`<OSS::Button @label="Test" />`);

    assert.dom('.upf-btn').exists({ count: 1 });
    assert.dom('.upf-btn').hasClass('upf-btn--default');
    assert.dom('.upf-btn').hasText('Test');
  });

  module('it render with right skin', function () {
    test('when using unknown skin', async function (assert) {
      await render(hbs`<OSS::Button @skin="unknown" @label="Test" />`);

      assert.dom('.upf-btn').hasClass('upf-btn--default');
    });

    test('when using primary skin', async function (assert) {
      await render(hbs`<OSS::Button @skin="primary" @label="Test" />`);

      assert.dom('.upf-btn').hasClass('upf-btn--primary');
    });

    test('when using secondary skin', async function (assert) {
      await render(hbs`<OSS::Button @skin="secondary" @label="Test" />`);

      assert.dom('.upf-btn').hasClass('upf-btn--secondary');
    });

    test('when using destructive skin', async function (assert) {
      await render(hbs`<OSS::Button @skin="destructive" @label="Test" />`);

      assert.dom('.upf-btn').hasClass('upf-btn--destructive');
    });

    test('when using social-instagram skin', async function (assert) {
      await render(hbs`<OSS::Button @skin="instagram" @label="Test" />`);

      assert.dom('.upf-btn').hasClass('upf-btn--social-instagram');
    });

    test('when using social-facebook skin', async function (assert) {
      await render(hbs`<OSS::Button @skin="facebook" @label="Test" />`);

      assert.dom('.upf-btn').hasClass('upf-btn--social-facebook');
    });

    test('when using social-youtube skin', async function (assert) {
      await render(hbs`<OSS::Button @skin="youtube" @label="Test" />`);

      assert.dom('.upf-btn').hasClass('upf-btn--social-youtube');
    });
  });

  module('it render with right size', function () {
    test('when using small', async function (assert) {
      await render(hbs`<OSS::Button @size="s" @label="Test" />`);

      assert.dom('.upf-btn').hasClass('upf-btn--small');
    });

    test('when using x-small', async function (assert) {
      await render(hbs`<OSS::Button @size="xs" @label="Test" />`);

      assert.dom('.upf-btn').hasClass('upf-btn--x-small');
    });
  });

  module('it render with loading state', function () {
    test('when using default loading', async function (assert) {
      await render(hbs`<OSS::Button @loading="true" @label="Test" />`);
      const btn = document.querySelector('.upf-btn');

      assert.equal(btn.children[0].className, 'fas fa-circle-notch fa-spin');
    });
  });
});
