import { click, render, settled, waitFor } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupIntl } from 'ember-intl/test-support';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';
import sinon from 'sinon';

const LONG_TEXT = 'This influencer shows a very low brand safety risk profile across all analyzed platforms. '
  .repeat(20)
  .trim();

module('Integration | Component | o-s-s/smart/feedback', function (hooks) {
  setupRenderingTest(hooks);
  setupIntl(hooks);

  test('it renders the component container', async function (assert) {
    await render(hbs`<OSS::Smart::Feedback />`);
    assert.dom('.oss-smart__feedback').exists();
  });

  test('it shows loading skeletons when @loading is true', async function (assert) {
    this.loading = true;

    await render(hbs`<OSS::Smart::Feedback @loading={{this.loading}} />`);

    assert.dom('.oss-smart__feedback__loading').exists();
    assert.dom('.upf-smart-skeleton-effect').exists({ count: 2 });
  });

  test('it renders text when @loading is false and @content is provided', async function (assert) {
    this.loading = false;
    this.content = [{ text: 'Test feedback message' }];

    await render(hbs`<OSS::Smart::Feedback @loading={{this.loading}} @content={{this.content}} />`);

    assert.dom('.oss-smart__generated').exists();
    assert.dom('.oss-smart__feedback__content__text').hasText('Test feedback message');
  });

  test('it renders multiple sections when @loading is false and @content is provided', async function (assert) {
    this.loading = false;
    this.content = [{ text: 'First line' }, { text: 'Second line' }];

    await render(hbs`<OSS::Smart::Feedback @loading={{this.loading}} @content={{this.content}} />`);

    assert.dom('.oss-smart__generated').exists();
    assert.dom('[data-control-name="oss-smart-feedback-section"]').exists({ count: 2 });
    assert.dom('[data-control-name="oss-smart-feedback-section"]:first-child').hasText('First line');
    assert.dom('[data-control-name="oss-smart-feedback-section"]:last-child').hasText('Second line');
  });

  test('it renders the Jaice blob', async function (assert) {
    await render(hbs`<OSS::Smart::Feedback />`);

    assert.dom('.smart-blob').exists();
  });

  test('it renders a section title', async function (assert) {
    this.content = [{ title: 'Risk Summary' }];

    await render(hbs`<OSS::Smart::Feedback @loading={{false}} @content={{this.content}} />`);

    assert.dom('.oss-smart__feedback__content__title').hasText('Risk Summary');
  });

  test('it renders section bullets', async function (assert) {
    this.content = [{ bullets: ['Follower count', 'Engagement rate'] }];

    await render(hbs`<OSS::Smart::Feedback @loading={{false}} @content={{this.content}} />`);

    assert.dom('.oss-smart__feedback__content__bullets li').exists({ count: 2 });
    assert.dom('.oss-smart__feedback__content__bullets li:first-child').hasText('Follower count');
    assert.dom('.oss-smart__feedback__content__bullets li:last-child').hasText('Engagement rate');
  });

  module('error management', function () {
    test('loading takes priority over error and content', async function (assert) {
      this.error = { title: 'Summary could not be generated.' };
      this.content = [{ text: 'Test feedback message' }];

      await render(hbs`<OSS::Smart::Feedback @loading={{true}} @error={{this.error}} @content={{this.content}} />`);

      assert.dom('.upf-smart-skeleton-effect').exists({ count: 2 });
      assert.dom('[data-control-name="oss-smart-feedback-error-title"]').doesNotExist();
      assert.dom('.oss-smart__feedback__content__text').doesNotExist();
    });

    test('error takes priority over content', async function (assert) {
      this.error = { title: 'Summary could not be generated.' };
      this.content = [{ text: 'Test feedback message' }];

      await render(hbs`<OSS::Smart::Feedback @loading={{false}} @error={{this.error}} @content={{this.content}} />`);

      assert.dom('[data-control-name="oss-smart-feedback-error-title"]').hasText(this.error.title);
      assert.dom('.oss-smart__feedback__content__text').doesNotExist();
    });

    test('it renders the error title', async function (assert) {
      this.error = { title: 'Summary could not be generated, please, retry.' };

      await render(hbs`<OSS::Smart::Feedback @loading={{false}} @error={{this.error}} />`);

      assert.dom('[data-control-name="oss-smart-feedback-error-title"]').hasText(this.error.title);
    });

    test('it renders the error subtitle when provided', async function (assert) {
      this.error = { title: 'Summary could not be generated.', subtitle: 'Try again' };

      await render(hbs`<OSS::Smart::Feedback @loading={{false}} @error={{this.error}} />`);

      assert.dom('[data-control-name="oss-smart-feedback-error-subtitle"]').hasText('Try again');
    });

    test('it renders a retry button when @error.onRetry is set', async function (assert) {
      this.error = { title: 'Summary could not be generated.', onRetry: sinon.spy() };

      await render(hbs`<OSS::Smart::Feedback @loading={{false}} @error={{this.error}} />`);

      assert.dom('[data-control-name="oss-smart-feedback-retry-button"]').exists();
    });

    test('it does not render a retry button when @error.onRetry is not set', async function (assert) {
      this.error = { title: 'Summary could not be generated.' };

      await render(hbs`<OSS::Smart::Feedback @loading={{false}} @error={{this.error}} />`);

      assert.dom('[data-control-name="oss-smart-feedback-retry-button"]').doesNotExist();
    });

    test('clicking retry calls @error.onRetry', async function (assert) {
      const onRetry = sinon.spy();
      this.error = { title: 'Summary could not be generated.', onRetry };

      await render(hbs`<OSS::Smart::Feedback @loading={{false}} @error={{this.error}} />`);
      await click('[data-control-name="oss-smart-feedback-retry-button"]');

      assert.ok(onRetry.calledOnce);
    });
  });

  module('collapsible behavior', function () {
    test('short feedback has no chevron', async function (assert) {
      this.content = [{ text: 'Short feedback.' }];

      await render(hbs`<OSS::Smart::Feedback @loading={{false}} @content={{this.content}} />`);

      assert.dom('[data-control-name="oss-smart-feedback-chevron"]').doesNotExist();
    });

    test('short feedback is not interactive', async function (assert) {
      this.content = [{ text: 'Short feedback.' }];

      await render(hbs`<OSS::Smart::Feedback @loading={{false}} @content={{this.content}} />`);

      assert.dom('.oss-smart__feedback').doesNotHaveAttribute('role');
    });

    test('clicking short feedback does not expand it', async function (assert) {
      this.content = [{ text: 'Short feedback.' }];

      await render(hbs`<OSS::Smart::Feedback @loading={{false}} @content={{this.content}} />`);
      await click('.oss-smart__feedback');

      assert.dom('.oss-smart__feedback').hasClass('oss-smart__feedback--collapsed');
    });

    test('long feedback is collapsed by default', async function (assert) {
      this.content = [{ text: LONG_TEXT }];

      await render(hbs`<OSS::Smart::Feedback @loading={{false}} @content={{this.content}} />`);

      assert.dom('.oss-smart__feedback').hasClass('oss-smart__feedback--collapsed');
      assert.dom('.oss-smart__feedback').hasClass('oss-smart__feedback--truncated');
    });

    test('long feedback shows a down chevron', async function (assert) {
      this.content = [{ text: LONG_TEXT }];

      await render(hbs`<OSS::Smart::Feedback @loading={{false}} @content={{this.content}} />`);

      assert.dom('[data-control-name="oss-smart-feedback-chevron"]').hasClass('fa-chevron-down');
    });

    test('long feedback is interactive', async function (assert) {
      this.content = [{ text: LONG_TEXT }];

      await render(hbs`<OSS::Smart::Feedback @loading={{false}} @content={{this.content}} />`);

      assert.dom('.oss-smart__feedback').hasAttribute('role', 'button');
    });

    test('clicking a truncated feedback expands it and flips the chevron up', async function (assert) {
      this.content = [{ text: LONG_TEXT }];

      await render(hbs`<OSS::Smart::Feedback @loading={{false}} @content={{this.content}} />`);
      await click('.oss-smart__feedback');

      assert.dom('.oss-smart__feedback').doesNotHaveClass('oss-smart__feedback--collapsed');
      assert.dom('[data-control-name="oss-smart-feedback-chevron"]').hasClass('fa-chevron-up');
    });

    test('clicking twice collapses it again', async function (assert) {
      this.content = [{ text: LONG_TEXT }];

      await render(hbs`<OSS::Smart::Feedback @loading={{false}} @content={{this.content}} />`);
      await click('.oss-smart__feedback');
      await click('.oss-smart__feedback');

      assert.dom('.oss-smart__feedback').hasClass('oss-smart__feedback--collapsed');
      assert.dom('[data-control-name="oss-smart-feedback-chevron"]').hasClass('fa-chevron-down');
    });

    test('@collapsible set to false disables the collapse behavior', async function (assert) {
      this.content = [{ text: LONG_TEXT }];

      await render(hbs`<OSS::Smart::Feedback @loading={{false}} @collapsible={{false}} @content={{this.content}} />`);

      assert.dom('.oss-smart__feedback').doesNotHaveClass('oss-smart__feedback--collapsed');
      assert.dom('[data-control-name="oss-smart-feedback-chevron"]').doesNotExist();
    });

    test('it updates truncation when @collapsible changes', async function (assert) {
      this.collapsible = true;
      this.content = [{ text: LONG_TEXT }];

      await render(
        hbs`<OSS::Smart::Feedback @loading={{false}} @collapsible={{this.collapsible}} @content={{this.content}} />`
      );

      this.set('collapsible', false);
      assert.dom('[data-control-name="oss-smart-feedback-chevron"]').doesNotExist();

      this.set('collapsible', true);
      assert.dom('[data-control-name="oss-smart-feedback-chevron"]').exists();
    });

    test('an @error disables the collapse behavior even when @collapsible is true', async function (assert) {
      this.error = { title: 'Summary could not be generated.' };

      await render(hbs`<OSS::Smart::Feedback @loading={{false}} @collapsible={{true}} @error={{this.error}} />`);

      assert.dom('.oss-smart__feedback').doesNotHaveClass('oss-smart__feedback--collapsed');
      assert.dom('[data-control-name="oss-smart-feedback-chevron"]').doesNotExist();
    });

    test('it measures overflowing content after an error is cleared', async function (assert) {
      this.loading = false;
      this.error = { title: 'Summary could not be generated.' };
      this.content = [];

      await render(
        hbs`<OSS::Smart::Feedback @loading={{this.loading}} @error={{this.error}} @content={{this.content}} />`
      );

      await this.set('error', null);
      await this.set('content', [{ text: LONG_TEXT }]);
      await settled();
      assert.dom('[data-control-name="oss-smart-feedback-error-title"]').doesNotExist();
      assert.dom('[data-control-name="oss-smart-feedback-section"]').exists();
      assert.dom('.oss-smart__feedback').hasClass('oss-smart__feedback--collapsed');
      await waitFor('.oss-smart__feedback.oss-smart__feedback--truncated');

      assert.dom('[data-control-name="oss-smart-feedback-chevron"]').exists();
    });
  });
});
