import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, setupOnerror, waitUntil } from '@ember/test-helpers';

import sinon from 'sinon';

module('Integration | Component | o-s-s/button', function (hooks) {
  setupRenderingTest(hooks);

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

  test('it renders the default button', async function (assert) {
    await render(hbs`<OSS::Button @label="Test" />`);

    assert.dom('.upf-btn').exists({ count: 1 });
    assert.dom('.upf-btn').hasClass('upf-btn--default');
    assert.dom('.upf-btn').hasText('Test');
  });

  module('it render with the correct skin', function () {
    test('when using an unknown skin, it is set to default', async function (assert) {
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

    test('when using alert skin', async function (assert) {
      await render(hbs`<OSS::Button @skin="alert" @label="Test" />`);

      assert.dom('.upf-btn').hasClass('upf-btn--alert');
    });

    test('when using success skin', async function (assert) {
      await render(hbs`<OSS::Button @skin="success" @label="Test" />`);

      assert.dom('.upf-btn').hasClass('upf-btn--success');
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

  module('it render with the right size', function () {
    test('when using xs', async function (assert) {
      await render(hbs`<OSS::Button @size="xs" @label="Test" />`);

      assert.dom('.upf-btn').hasClass('upf-btn--xs');
    });

    test('when using sm', async function (assert) {
      await render(hbs`<OSS::Button @size="sm" @label="Test" />`);

      assert.dom('.upf-btn').hasClass('upf-btn--sm');
    });

    test('when using md', async function (assert) {
      await render(hbs`<OSS::Button @size="md" @label="Test" />`);

      assert.dom('.upf-btn').hasClass('upf-btn--md');
    });

    test('when using lg', async function (assert) {
      await render(hbs`<OSS::Button @size="lg" @label="Test" />`);

      assert.dom('.upf-btn').hasClass('upf-btn--lg');
    });
  });

  module('it renders with loading state', function () {
    test('when using default loading', async function (assert) {
      await render(hbs`<OSS::Button @size="sm" @loading="true" @label="Test" />`);
      const btn = document.querySelector('.upf-btn');

      assert.equal(btn?.children[0].className, 'fas fa-circle-notch fa-spin');
    });
  });

  module('it renders a square button', function () {
    test('when setting the square parameter to true', async function (assert) {
      await render(hbs`<OSS::Button @square="true" @label="Test" />`);

      assert.dom('.upf-square-btn').exists();
    });
  });

  module('it renders with the right theme', function () {
    test('it adds the right class for usage on dark theme', async function (assert) {
      await render(hbs`<OSS::Button @label="Test" @theme="dark" />`);

      assert.dom('.upf-btn').hasClass('upf-btn--dark-bg');
    });
  });

  module('it renders countDown', function (hooks) {
    hooks.beforeEach(function () {
      this.intlService = this.owner.lookup('service:intl');
    });

    test('when clicking, it trigger the countdown', async function (assert) {
      this.callback = () => {};
      await render(hbs`<OSS::Button @label="Test" @countDown={{hash callback=this.callback}} />`);
      await click('.upf-btn--default');

      assert.dom('.upf-btn--default').hasText(this.intlService.t('oss-components.button.cancel_message', { time: 5 }));
    });

    test('when clicking, it executes callback at the end of the countdown', async function (assert) {
      this.callback = sinon.stub().callsFake(() => {});
      await render(hbs`<OSS::Button @label="Test" @countDown={{hash callback=this.callback time=50 step=10}} />`);
      await click('.upf-btn--default');

      assert
        .dom('.upf-btn--default')
        .hasText(this.intlService.t('oss-components.button.cancel_message', { time: 0.05 }));
      await waitUntil(
        function () {
          return document.querySelector('.upf-btn--default')?.textContent?.includes('Test');
        },
        { timeout: 1000 }
      );

      assert.true(this.callback.calledOnce);
    });

    test('when clicking again, it cancels the countdown', async function (assert) {
      this.callback = () => {};
      await render(hbs`<OSS::Button @label="Test" @countDown={{hash callback=this.callback}} />`);
      await click('.upf-btn--default');
      await click('.upf-btn--default');

      assert.dom('.upf-btn--default').hasText('Test');
    });
  });

  module('Error management', function () {
    test('it fails if @label and @icon are missing', async function (assert) {
      setupOnerror((err: { message: string }) => {
        assert.equal(
          err.message,
          'Assertion Failed: [component][OSS::Button] You must pass either a @label or an @icon argument.'
        );
      });

      await render(hbs`<OSS::Button />`);
    });

    test('it fails if callback missing for @countDown argument', async function (assert) {
      setupOnerror((err: { message: string }) => {
        assert.equal(
          err.message,
          "Assertion Failed: [component][OSS::Button] You must pass either a hash with 'callback' value to @countDown argument."
        );
      });

      await render(hbs`<OSS::Button @label="Test" @countDown={{hash time=1000}} />`);
    });
  });
});
