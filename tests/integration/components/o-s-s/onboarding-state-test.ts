import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, setupOnerror } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const TITLE = 'Welcome to OSS';
const SUBTITLE = 'Get started by following the steps below.';
const IMAGE_URL = '/@upfluence/oss-components/assets/images/upfluence-full-blue-logo.svg';

module('Integration | Component | o-s-s/onboarding-state', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.title = TITLE;
    this.subtitle = SUBTITLE;
    this.imageUrl = IMAGE_URL;
  });

  test('it renders', async function (assert) {
    await render(
      hbs`<OSS::OnboardingState @title={{this.title}} @subtitle={{this.subtitle}} @imageUrl={{this.imageUrl}} />`
    );
    assert.dom('.oss-onboarding-state').exists();
  });

  test('it renders the extra attributes', async function (assert) {
    await render(
      hbs`<OSS::OnboardingState @title={{this.title}} @subtitle={{this.subtitle}} @imageUrl={{this.imageUrl}} data-control-name="onboarding-state-test" />`
    );
    assert.dom('[data-control-name="onboarding-state-test"]').exists();
  });

  module('for title', () => {
    test('it renders', async function (assert) {
      await render(
        hbs`<OSS::OnboardingState @title={{this.title}} @subtitle={{this.subtitle}} @imageUrl={{this.imageUrl}} />`
      );
      assert.dom('.oss-onboarding-state__title').hasText(TITLE);
    });

    test('it updates when title changes', async function (assert) {
      await render(
        hbs`<OSS::OnboardingState @title={{this.title}} @subtitle={{this.subtitle}} @imageUrl={{this.imageUrl}} />`
      );

      this.set('title', 'Updated title');
      assert.dom('.oss-onboarding-state__title').hasText('Updated title');
    });
  });

  module('for subtitle', () => {
    test('it renders the correct subtitle', async function (assert) {
      await render(
        hbs`<OSS::OnboardingState @title={{this.title}} @subtitle={{this.subtitle}} @imageUrl={{this.imageUrl}} />`
      );
      assert.dom('.oss-onboarding-state__subtitle').hasText(SUBTITLE);
    });

    test('it updates when subtitle changes', async function (assert) {
      await render(
        hbs`<OSS::OnboardingState @title={{this.title}} @subtitle={{this.subtitle}} @imageUrl={{this.imageUrl}} />`
      );

      this.set('subtitle', 'Updated subtitle');
      assert.dom('.oss-onboarding-state__subtitle').hasText('Updated subtitle');
    });
  });

  test('it renders the correct illustration', async function (assert) {
    await render(
      hbs`<OSS::OnboardingState @title={{this.title}} @subtitle={{this.subtitle}} @imageUrl={{this.imageUrl}} />`
    );
    assert.dom('.oss-onboarding-state__illustration img').hasAttribute('src', IMAGE_URL);
    assert.dom('.oss-onboarding-state__illustration img').hasAttribute('role', 'presentation');
  });

  module('for actions block', () => {
    test('it renders actions named block', async function (assert) {
      await render(
        hbs`
        <OSS::OnboardingState @title={{this.title}} @subtitle={{this.subtitle}} @imageUrl={{this.imageUrl}}>
          <:actions>
            <div class="custom-action-button">Get Started</div>
          </:actions>
        </OSS::OnboardingState>
       `
      );
      assert.dom('.oss-onboarding-state__actions .custom-action-button').exists();
    });

    test('it does not render actions section when no actions block is provided', async function (assert) {
      await render(
        hbs`<OSS::OnboardingState @title={{this.title}} @subtitle={{this.subtitle}} @imageUrl={{this.imageUrl}} />`
      );
      assert.dom('.oss-onboarding-state__actions').doesNotExist();
    });
  });

  module('Error management', () => {
    test('for title parameter, the component throws an error if the parameter is not passed', async function (assert) {
      setupOnerror((err: any) => {
        assert.equal(err.message, 'Assertion Failed: [OSS::OnboardingState] The @title parameter is mandatory');
      });

      await render(hbs`<OSS::OnboardingState />`);
    });

    test('for subtitle, the component throws an error if the parameter is not passed', async function (assert) {
      setupOnerror((err: any) => {
        assert.equal(err.message, 'Assertion Failed: [OSS::OnboardingState] The @subtitle parameter is mandatory');
      });

      await render(hbs`<OSS::OnboardingState @title={{this.title}} />`);
    });

    test('for imageUrl, the component throws an error if the parameter is not passed', async function (assert) {
      setupOnerror((err: any) => {
        assert.equal(err.message, 'Assertion Failed: [OSS::OnboardingState] The @imageUrl parameter is mandatory');
      });

      await render(hbs`<OSS::OnboardingState @title={{this.title}} @subtitle={{this.subtitle}}  />`);
    });
  });
});
