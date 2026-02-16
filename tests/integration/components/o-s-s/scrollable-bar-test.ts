import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render, settled, waitUntil, type TestContext } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | o-s-s/scrollable-bar', function (hooks) {
  setupRenderingTest(hooks);
  hooks.beforeEach(function () {
    this.items = ['All', 'Replies', 'Applications', 'Emails', 'Payment', 'Drafts'];
  });

  module('With default button', function () {
    test('it renders only the left button if the scroll position is already fully at the right', async function (this: TestContext, assert) {
      await renderComponentDefaultButton();
      await waitUntil(
        function () {
          return Boolean(document.querySelector('.scroll-to-left-btn'));
        },
        { timeout: 2000 }
      );
      assert.dom('.scroll-to-left-btn').exists();
      assert.dom('.scroll-to-right-btn').doesNotExist();
    });

    test('it renders only the right button if the scroll position is already fully at the left', async function (this: TestContext, assert) {
      await renderComponentDefaultButton();
      await settled();
      await waitUntil(
        function () {
          return Boolean(document.querySelector('.scroll-to-left-btn'));
        },
        { timeout: 2000 }
      );
      await click('.scroll-to-left-btn');
      await waitUntil(
        function () {
          return !document.querySelector('.scroll-to-left-btn');
        },
        { timeout: 2000 }
      );

      assert.dom('.scroll-to-left-btn').doesNotExist();
      assert.dom('.scroll-to-right-btn').exists();
    });
  });

  module('With icon button', function () {
    test('it renders only the left button if the scroll position is already fully at the right', async function (this: TestContext, assert) {
      await renderComponentWithIcon();
      await waitUntil(
        function () {
          return Boolean(document.querySelector('.scroll-to-left-icon'));
        },
        { timeout: 2000 }
      );
      assert.dom('.scroll-to-left-icon').exists();
      assert.dom('.scroll-to-right-icon').doesNotExist();
    });

    test('it renders only the right button if the scroll position is already fully at the left', async function (this: TestContext, assert) {
      await renderComponentWithIcon();
      await settled();
      await waitUntil(
        function () {
          return Boolean(document.querySelector('.scroll-to-left-icon'));
        },
        { timeout: 2000 }
      );
      await click('.scroll-to-left-icon');
      await waitUntil(
        function () {
          return !document.querySelector('.scroll-to-left-icon');
        },
        { timeout: 2000 }
      );

      assert.dom('.scroll-to-left-icon').doesNotExist();
      assert.dom('.scroll-to-right-icon').exists();
    });
  });

  async function renderComponentDefaultButton() {
    await render(hbs`
        <OSS::ScrollableBar style="max-width:200px;">
          <:content as |callbacks|>
            {{#each this.items as |item|}}
              <div {{did-insert callbacks.setupFn}} {{will-destroy callbacks.teardownFn}}>{{item}}</div>
            {{/each}}
          </:content>
        </OSS::ScrollableBar>
    `);
  }

  async function renderComponentWithIcon() {
    await render(hbs`
        <OSS::ScrollableBar @buttonStyle="icon" style="max-width:200px;">
          <:content as |callbacks|>
            {{#each this.items as |item|}}
              <div {{did-insert callbacks.setupFn}} {{will-destroy callbacks.teardownFn}}>{{item}}</div>
            {{/each}}
          </:content>
        </OSS::ScrollableBar>
    `);
  }
});
