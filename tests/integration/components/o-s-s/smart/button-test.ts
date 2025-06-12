import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, setupOnerror, waitUntil } from '@ember/test-helpers';

import sinon from 'sinon';

module('Integration | Component | o-s-s/smart/button', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the label when present', async function (assert) {
    await render(hbs`<OSS::Smart::Button @icon="fab fa-facebook" @label="Label" />`);

    assert.dom('.upf-smart-btn span').hasText('Label');
  });

  test('it renders the icon when present', async function (assert) {
    await render(hbs`<OSS::Smart::Button @icon="fab fa-facebook" />`);

    assert.dom('.upf-smart-btn i').hasClass('fa-facebook');
  });

  test('it renders the iconUrl when present', async function (assert) {
    await render(hbs`<OSS::Smart::Button @iconUrl="/@upfluence/oss-components/assets/star-icon.svg" />`);
    assert.dom('.upf-smart-btn img').hasAttribute('src', '/@upfluence/oss-components/assets/star-icon.svg');
  });

  test('it renders the icon and label when present', async function (assert) {
    await render(hbs`<OSS::Smart::Button @icon="fab fa-facebook" @label="Label" />`);

    assert.dom('.upf-smart-btn i').hasClass('fa-facebook');
    assert.dom('.upf-smart-btn span').hasText('Label');
  });

  test('it renders the iconUrl and label when present', async function (assert) {
    await render(hbs`<OSS::Smart::Button @iconUrl="/@upfluence/oss-components/assets/star-icon.svg" @label="Label" />`);

    assert.dom('.upf-smart-btn img').hasAttribute('src', '/@upfluence/oss-components/assets/star-icon.svg');
    assert.dom('.upf-smart-btn span').hasText('Label');
  });

  test('when icon and iconUrl are present, it only renders the icon', async function (assert) {
    await render(
      hbs`<OSS::Smart::Button @icon="fab fa-facebook" @iconUrl="/@upfluence/oss-components/assets/heart.svg" />`
    );

    assert.dom('.upf-smart-btn i').hasClass('fa-facebook');
    assert.dom('.upf-smart-btn img').doesNotExist();
  });

  module('it render with the correct skin', function () {
    test('it renders the primary skin as default', async function (assert) {
      await render(hbs`<OSS::Smart::Button @label="Test" />`);

      assert.dom('.upf-smart-btn').exists({ count: 1 });
      assert.dom('.upf-smart-btn').hasClass('upf-smart-btn--primary');
      assert.dom('.upf-smart-btn').hasText('Test');
    });

    test('when using an unknown skin, it is set to primary', async function (assert) {
      await render(hbs`<OSS::Smart::Button @skin="unknown" @label="Test" />`);

      assert.dom('.upf-smart-btn').hasClass('upf-smart-btn--primary');
    });

    test('when using primary skin', async function (assert) {
      await render(hbs`<OSS::Smart::Button @skin="primary" @label="Test" />`);

      assert.dom('.upf-smart-btn').hasClass('upf-smart-btn--primary');
    });

    test('when using secondary skin', async function (assert) {
      await render(hbs`<OSS::Smart::Button @skin="secondary" @label="Test" />`);

      assert.dom('.upf-smart-btn').hasClass('upf-smart-btn--secondary');
    });
  });

  module('it render with the right size', function () {
    test('when using xs', async function (assert) {
      await render(hbs`<OSS::Smart::Button @size="xs" @label="Test" />`);

      assert.dom('.upf-smart-btn').hasClass('upf-smart-btn--xs');
    });

    test('when using sm', async function (assert) {
      await render(hbs`<OSS::Smart::Button @size="sm" @label="Test" />`);

      assert.dom('.upf-smart-btn').hasClass('upf-smart-btn--sm');
    });

    test('when using md', async function (assert) {
      await render(hbs`<OSS::Smart::Button @size="md" @label="Test" />`);

      assert.dom('.upf-smart-btn').hasClass('upf-smart-btn--md');
    });

    test('when using lg', async function (assert) {
      await render(hbs`<OSS::Smart::Button @size="lg" @label="Test" />`);

      assert.dom('.upf-smart-btn').hasClass('upf-smart-btn--lg');
    });
  });

  module('it renders with loading state', function () {
    test('when using default loading', async function (assert) {
      await render(hbs`<OSS::Smart::Button @size="sm" @loading={{true}} @label="Test" />`);
      assert.dom('.upf-smart-btn i.fas').exists();
      assert.dom('.upf-smart-btn i.fas').hasClass('fa-spinner-third');
      assert.dom('.upf-smart-btn i.fas').hasClass('fa-spin');
      assert.dom('.upf-smart-btn span.margin-left-px-6').doesNotExist();
    });

    test('when loading and the showLabel loading option is truthy, the label is displayed', async function (assert) {
      await render(
        hbs`<OSS::Smart::Button @size="sm" @loading={{true}} @label="Test" @loadingOptions={{hash showLabel=true}} />`
      );
      assert.dom('.upf-smart-btn i.fas').exists();
      assert.dom('.upf-smart-btn i.fas').hasClass('fa-spinner-third');
      assert.dom('.upf-smart-btn i.fas').hasClass('fa-spin');
      assert.dom('.upf-smart-btn span.margin-left-px-6').exists();
      assert.dom('.upf-smart-btn span.margin-left-px-6').hasText('Test');
    });
  });

  module('when @circle is truthy', function () {
    test('it renders a circular button', async function (assert) {
      await render(hbs`<OSS::Smart::Button @circle="true" @label="Test" />`);

      assert.dom('.upf-smart-square-btn').exists();
    });

    test('if the icon and label are present it renders only the icon', async function (assert) {
      await render(hbs`<OSS::Smart::Button @icon="fab fa-facebook" @label="Label" />`);

      assert.dom('.upf-smart-btn i').hasClass('fa-facebook');
      assert.dom('.upf-smart-btn span').hasText('Label');
    });

    test('if the iconUrl and label are present it renders only the iconUrl', async function (assert) {
      await render(
        hbs`<OSS::Smart::Button @iconUrl="/@upfluence/oss-components/assets/star-icon.svg" @label="Label" />`
      );

      assert.dom('.upf-smart-btn img').hasAttribute('src', '/@upfluence/oss-components/assets/star-icon.svg');
      assert.dom('.upf-smart-btn span').hasText('Label');
    });
  });

  module('it renders countDown', function (hooks) {
    hooks.beforeEach(function () {
      this.intlService = this.owner.lookup('service:intl');
    });

    test('when clicking, it triggers the countdown', async function (assert) {
      this.callback = () => {};
      await render(hbs`<OSS::Smart::Button @label="Test" @countDown={{hash callback=this.callback}} />`);
      await click('.upf-smart-btn--primary');

      assert
        .dom('.upf-smart-btn--primary')
        .hasText(this.intlService.t('oss-components.button.cancel_message', { time: 5 }));
    });

    test('when clicking, it executes the callback at the end of the countdown', async function (assert) {
      this.callback = sinon.stub().callsFake(() => {});
      await render(
        hbs`<OSS::Smart::Button @label="Test" @countDown={{hash callback=this.callback time=50 step=10}} />`
      );
      await click('.upf-smart-btn--primary');

      await waitUntil(
        function () {
          return document.querySelector('.upf-smart-btn--primary')?.textContent?.includes('Test');
        },
        { timeout: 1000 }
      );

      assert.true(this.callback.calledOnce);
    });

    test('when clicking again, it cancels the countdown', async function (assert) {
      this.callback = () => {};
      await render(hbs`<OSS::Smart::Button @label="Test" @countDown={{hash callback=this.callback}} />`);
      await click('.upf-smart-btn--primary');
      await click('.upf-smart-btn--primary');

      assert.dom('.upf-smart-btn--primary').hasText('Test');
    });
  });

  module('Error management', function () {
    test('it fails if @label, @icon and @iconUrl are missing', async function (assert) {
      setupOnerror((err: { message: string }) => {
        assert.equal(
          err.message,
          'Assertion Failed: [component][OSS::Smart::Button] You must pass either a @label, an @icon or an @iconUrl argument.'
        );
      });

      await render(hbs`<OSS::Smart::Button />`);
    });

    test('it fails if callback missing for @countDown argument', async function (assert) {
      setupOnerror((err: { message: string }) => {
        assert.equal(
          err.message,
          "Assertion Failed: [component][OSS::Smart::Button] You must pass either a hash with 'callback' value to @countDown argument."
        );
      });

      await render(hbs`<OSS::Smart::Button @label="Test" @countDown={{hash time=1000}} />`);
    });
  });
});
