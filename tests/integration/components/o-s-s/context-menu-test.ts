import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render, triggerEvent } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';
import { setupIntl } from 'ember-intl/test-support';

module('Integration | Component | o-s-s/context-menu', function (hooks) {
  setupRenderingTest(hooks);
  setupIntl(hooks);

  hooks.beforeEach(function () {
    this.label = 'Open menu';
    this.onOpenStub = sinon.stub();
    this.onCloseStub = sinon.stub();
  });

  test('it renders', async function (assert) {
    await render(hbs`<OSS::ContextMenu @label={{this.label}} data-control-name="context-menu"/>`);

    assert.dom('[data-control-name="context-menu"]').exists();
    assert.dom('[data-control-name="context-menu"]').hasText(this.label);
  });

  test('it shows chevron-down when closed and chevron-up when open', async function (assert) {
    this.items = [{ title: 'Item', action: () => {} }];
    await render(hbs`<OSS::ContextMenu @label={{this.label}} @items={{this.items}} data-control-name="context-menu"/>`);
    assert.dom('button i.fa-chevron-down').exists();
    assert.dom('button i.fa-chevron-up').doesNotExist();
    await click('button');
    assert.dom('button i.fa-chevron-up').exists();
    assert.dom('button i.fa-chevron-down').doesNotExist();
  });

  module('It accepts same arguments as OSSButton component', function () {
    test('it accepts label argument', async function (assert) {
      this.label = 'first';
      await render(hbs`<OSS::ContextMenu @label={{this.label}} data-control-name="context-menu"/>`);
      assert.dom('button').hasText('first');
      this.set('label', 'secondary');
      assert.dom('button').hasText('secondary');
    });

    test('it accepts skin argument', async function (assert) {
      this.skin = 'primary';
      await render(hbs`<OSS::ContextMenu @label={{this.label}} @skin={{this.skin}} data-control-name="context-menu"/>`);
      assert.dom('button').hasClass('upf-btn--primary');
      this.set('skin', 'secondary');
      assert.dom('button').hasClass('upf-btn--secondary');
    });

    test('it accepts size argument', async function (assert) {
      this.size = 'sm';
      await render(hbs`<OSS::ContextMenu @label={{this.label}} @size={{this.size}} data-control-name="context-menu"/>`);
      assert.dom('button').hasClass('upf-btn--sm');
      this.set('size', 'md');
      assert.dom('button').hasClass('upf-btn--md');
    });

    test('it accepts loading argument', async function (assert) {
      this.loading = true;
      await render(
        hbs`<OSS::ContextMenu @label={{this.label}} @loading={{this.loading}} data-control-name="context-menu"/>`
      );
      assert.dom('button i').hasClass('fa-circle-notch').hasClass('fa-spin');
      this.set('loading', false);
      assert.dom('button i.fa-circle-notch').doesNotExist();
    });

    test('it accepts loadingOptions argument', async function (assert) {
      this.loadingOptions = { showLabel: true };
      await render(
        hbs`<OSS::ContextMenu @label={{this.label}}
                              @loading={{true}}
                              @loadingOptions={{this.loadingOptions}}
                              data-control-name="context-menu" />`
      );
      assert.dom('button i').hasClass('fa-circle-notch').hasClass('fa-spin');
      assert.dom('button').hasText(this.label);
      this.set('loadingOptions', { showLabel: false });
      assert.dom('button').hasNoText();
    });

    test('it accepts icon argument', async function (assert) {
      this.icon = 'fa-plane';
      await render(hbs`<OSS::ContextMenu @label={{this.label}} @icon={{this.icon}} data-control-name="context-menu"/>`);
      assert.dom('button i').hasClass('fa-plane');
      this.set('icon', 'fa-plus');
      assert.dom('button i').hasClass('fa-plus');
    });

    test('it accepts iconUrl argument', async function (assert) {
      this.iconUrl = '/@upfluence/oss-components/assets/heart.svg';
      await render(
        hbs`<OSS::ContextMenu @label={{this.label}} @iconUrl={{this.iconUrl}} data-control-name="context-menu"/>`
      );
      assert.dom('button img').hasAttribute('src', this.iconUrl);
    });

    test('it accepts theme argument', async function (assert) {
      this.theme = 'light';
      await render(
        hbs`<OSS::ContextMenu @label={{this.label}} @theme={{this.theme}} data-control-name="context-menu"/>`
      );
      assert.dom('button').hasNoClass('upf-btn--dark-bg');
      this.set('theme', 'dark');
      assert.dom('button').hasClass('upf-btn--dark-bg');
    });

    test('it accepts square argument', async function (assert) {
      this.square = true;
      await render(
        hbs`<OSS::ContextMenu @label={{this.label}} @square={{this.square}} data-control-name="context-menu"/>`
      );
      assert.dom('button').hasClass('upf-square-btn');
      this.set('square', false);
      assert.dom('button').doesNotHaveClass('upf-square-btn');
    });

    test('it accepts countDown argument', async function (assert) {
      const clock = sinon.useFakeTimers({
        shouldAdvanceTime: true
      });

      this.countDown = { callback: sinon.stub(), time: 50, step: 10 };
      await render(
        hbs`<OSS::ContextMenu @label={{this.label}} @countDown={{this.countDown}} data-control-name="context-menu"/>`
      );
      await click('button');
      assert.true(this.countDown.callback.notCalled);
      clock.tick(100);
      assert.true(this.countDown.callback.calledOnce);
      clock.restore();
    });
  });

  module('When clicking on the button', function () {
    test('it opens the panel', async function (assert) {
      await render(hbs`<OSS::ContextMenu @label={{this.label}}
                                         @onMenuOpened={{this.onOpenStub}}
                                         @onMenuClosed={{this.onCloseStub}} />`);

      assert.dom('.context-menu-panel__scrollable-container').doesNotExist();
      await click('button');
      assert.dom('.context-menu-panel__scrollable-container').exists();
    });

    test('it trigger the onMenuOpened callback', async function (assert) {
      await render(hbs`<OSS::ContextMenu @label={{this.label}}
                                         @onMenuOpened={{this.onOpenStub}}
                                         @onMenuClosed={{this.onCloseStub}} />`);

      assert.ok(this.onOpenStub.notCalled);
      await click('button');
      assert.ok(this.onOpenStub.calledOnce);
    });

    module('When clicking a second time on the button', function () {
      test('it closes the panel', async function (assert) {
        await render(hbs`<OSS::ContextMenu @label={{this.label}}
                                         @onMenuOpened={{this.onOpenStub}}
                                         @onMenuClosed={{this.onCloseStub}} />`);
        await click('button');
        assert.dom('.context-menu-panel__scrollable-container').exists();
        await click('button');
        assert.dom('.context-menu-panel__scrollable-container').doesNotExist();
      });

      test('it trigger the onMenuOpened callback', async function (assert) {
        await render(hbs`<OSS::ContextMenu @label={{this.label}}
                                         @onMenuOpened={{this.onOpenStub}}
                                         @onMenuClosed={{this.onCloseStub}} />`);
        await click('button');
        assert.ok(this.onCloseStub.notCalled);
        await click('button');
        assert.ok(this.onCloseStub.calledOnce);
      });
    });
  });

  module('When the panel is opened', function () {
    test('On click outside of the panel, it closes', async function (assert) {
      await render(hbs`<div data-control-name="outside-container">
                          <OSS::ContextMenu @label={{this.label}}
                                            @onMenuOpened={{this.onOpenStub}}
                                            @onMenuClosed={{this.onCloseStub}} />
                        </div>`);
      await click('button');
      assert.ok(this.onCloseStub.notCalled);
      await click('[data-control-name="outside-container"]');
      assert.ok(this.onCloseStub.calledOnce);
    });

    module('CloseOnMouseLeave', () => {
      test('When closeOnMouseLeave is true, on mouse leave it closes the panel', async function (assert) {
        await render(hbs`<OSS::ContextMenu @label={{this.label}}
                                         @onMenuOpened={{this.onOpenStub}}
                                         @onMenuClosed={{this.onCloseStub}}
                                         @closeOnMouseLeave={{true}} />`);
        await click('button');
        assert.dom('.context-menu-panel__scrollable-container').exists();
        await triggerEvent('.context-menu-panel__scrollable-container', 'mouseleave');
        assert.dom('.context-menu-panel__scrollable-container').doesNotExist();
        assert.ok(this.onCloseStub.calledOnce);
      });

      test('When closeOnMouseLeave is false, on mouse leave it does not close the panel', async function (assert) {
        await render(hbs`<OSS::ContextMenu @label={{this.label}}
                                         @onMenuOpened={{this.onOpenStub}}
                                         @onMenuClosed={{this.onCloseStub}}
                                         @closeOnMouseLeave={{false}} />`);
        await click('button');
        assert.dom('.context-menu-panel__scrollable-container').exists();
        await triggerEvent('.context-menu-panel__scrollable-container', 'mouseleave');
        assert.dom('.context-menu-panel__scrollable-container').exists();
        assert.ok(this.onCloseStub.notCalled);
      });
    });
  });

  test('When button is loading, clicking does nothing', async function (assert) {
    await render(hbs`<OSS::ContextMenu @label={{this.label}}
                                         @onMenuOpened={{this.onOpenStub}}
                                         @onMenuClosed={{this.onCloseStub}} 
                                         @loading={{true}} />`);

    assert.ok(this.onOpenStub.notCalled);
    await click('button');
    assert.ok(this.onOpenStub.notCalled);
  });
});
