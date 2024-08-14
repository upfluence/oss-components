import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import sinon from 'sinon';

module('Integration | Component | o-s-s/side-panel', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.onClose = sinon.stub();
  });

  test('it renders', async function (assert) {
    await render(
      hbs`<OSS::SidePanel @title="Sidepanel" @visible={{true}} @backdrop={{true}} @size="sm" @onClose={{this.onClose}} />`
    );
    assert.dom('.oss-side-panel__container').exists();
  });

  module('Named-blocks', function () {
    test('The header named-block is properly displayed', async function (assert) {
      await render(
        hbs`
      <OSS::SidePanel @title="Sidepanel" @visible={{true}} @backdrop={{true}} @size="sm" @onClose={{this.onClose}}>
        <:header>
          <p>This is the header</p>
        </:header>
      </OSS::SidePanel>`
      );

      assert.dom('.oss-side-panel__header').hasText('This is the header');
    });

    test('The content named-block is properly displayed', async function (assert) {
      await render(
        hbs`
      <OSS::SidePanel @title="Sidepanel" @visible={{true}} @backdrop={{true}} @size="sm" @onClose={{this.onClose}}>
        <:content>
          <p>This is the content</p>
        </:content>
      </OSS::SidePanel>`
      );

      assert.dom('.oss-side-panel__content').hasText('This is the content');
    });

    test('The footer named-block is properly displayed', async function (assert) {
      await render(
        hbs`
      <OSS::SidePanel @title="Sidepanel" @visible={{true}} @backdrop={{true}} @size="sm" @onClose={{this.onClose}}>
        <:footer>
          <p>This is the footer</p>
        </:footer>
      </OSS::SidePanel>`
      );

      assert.dom('.oss-side-panel__footer').hasText('This is the footer');
    });
  });

  module('The visibility of the side panel varies', function () {
    test('When @visible is truthy, the side panel is visible', async function (assert) {
      await render(
        hbs`<OSS::SidePanel @title="Sidepanel" @visible={{true}} @backdrop={{true}} @onClose={{this.onClose}} />`
      );
      assert.dom('.oss-side-panel__container.oss-side-panel__container--visible').hasStyle({
        opacity: '1',
        visibility: 'visible'
      });
    });

    test('When @visible is falsy, the side panel is not visible', async function (assert) {
      await render(
        hbs`<OSS::SidePanel @title="Sidepanel" @visible={{false}} @backdrop={{true}} @onClose={{this.onClose}} />`
      );
      assert.dom('.oss-side-panel__container').hasStyle({
        opacity: '0',
        visibility: 'hidden'
      });
    });
  });

  module('The width of the side panel varies', function () {
    test('When @size is sm, the width is small', async function (assert) {
      await render(
        hbs`<OSS::SidePanel @title="Sidepanel" @visible={{true}} @backdrop={{true}} @size="sm" @onClose={{this.onClose}} />`
      );
      assert.dom('.oss-side-panel').hasStyle({
        width: '480px'
      });
    });

    test('When @size is md, the width is medium', async function (assert) {
      await render(
        hbs`<OSS::SidePanel @title="Sidepanel" @visible={{true}} @backdrop={{true}} @size="md" @onClose={{this.onClose}} />`
      );
      assert.dom('.oss-side-panel').hasStyle({
        width: '540px'
      });
    });

    test('When @size is not defined, the default width is small', async function (assert) {
      await render(
        hbs`<OSS::SidePanel @title="Sidepanel" @visible={{true}} @backdrop={{true}} @onClose={{this.onClose}} />`
      );
      assert.dom('.oss-side-panel').hasStyle({
        width: '480px'
      });
    });
  });

  module('Clicking outside the side panel closes it', function () {
    test('When the backdrop is visible', async function (assert) {
      await render(
        hbs`<OSS::SidePanel @title="Sidepanel" @visible={{true}} @backdrop={{true}} @size="sm" @onClose={{this.onClose}} />`
      );
      assert.dom('.oss-side-panel__backdrop').hasStyle({
        backgroundColor: 'rgba(27, 30, 33, 0.376)'
      });
      await click('.oss-side-panel__backdrop');
      assert.ok(this.onClose.calledOnce, 'Clicked on the visible backdrop so the side panel closes.');
    });

    test('When the backdrop is transparent', async function (assert) {
      await render(
        hbs`<OSS::SidePanel @title="Sidepanel" @visible={{true}} @backdrop={{false}} @size="sm" @onClose={{this.onClose}} />`
      );
      assert.dom('.oss-side-panel__backdrop.oss-side-panel__backdrop--transparent').hasStyle({
        backgroundColor: 'rgba(0, 0, 0, 0)'
      });
      await click('.oss-side-panel__backdrop');
      assert.ok(this.onClose.calledOnce, 'Clicked on the transparent backdrop so the side panel closes.');
    });
  });
});
