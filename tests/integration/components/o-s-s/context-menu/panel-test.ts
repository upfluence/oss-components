import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render, settled, triggerEvent, waitUntil } from '@ember/test-helpers';
import { hbs, type TemplateFactory } from 'ember-cli-htmlbars';
import { setupIntl } from 'ember-intl/test-support';
import sinon from 'sinon';
import { setComponentTemplate } from '@ember/component';
import Component from '@glimmer/component';
import { SUBPANEL_OFFSET } from '@upfluence/oss-components/components/o-s-s/context-menu/panel';

module('Integration | Component | o-s-s/context-menu/panel', function (hooks) {
  setupRenderingTest(hooks);
  setupIntl(hooks);

  hooks.beforeEach(function () {
    this.subItems = [
      { title: 'Sub Item 1.1', action: () => console.log('Sub Item 1 clicked') },
      { title: 'Sub Item 1.2', action: () => console.log('Sub Item 2 clicked') },
      { title: 'Sub Item 1.3', action: () => console.log('Sub Item 3 clicked') }
    ];
    this.items = [
      { title: 'Item 1', action: () => console.log('Item 1 clicked'), items: this.subItems },
      {
        title: 'Item 2',
        action: () => {}
      }
    ];
  });

  test('it renders properly', async function (assert) {
    await render(hbs`<OSS::ContextMenu::Panel @items={{this.items}} />`);

    assert.dom('.context-menu-panel__dropdown').exists();
    assert.dom('.context-menu-panel__dropdown li .oss-infinite-select-option').exists({ count: 2 });
  });

  test('When referenceTarget is passed, it attaches and moves with the target', async function (assert) {
    await render(hbs`
      {{#if this.isInitialized}}
        <OSS::ContextMenu::Panel @items={{this.items}} 
                                 @referenceTarget={{this.referenceTarget}} 
                                 @placement="bottom-start" />
      {{/if}}
      <OSS::Button id="first_button" @label="first" />
      <OSS::Button id="second_button" @label="second" />
    `);

    const buttonRef = document.querySelector('#second_button') as HTMLElement;

    this.set('referenceTarget', buttonRef);
    this.set('isInitialized', true);
    await settled();
    const panelRef = document.querySelector('.context-menu-panel__scrollable-container') as HTMLElement;
    assert.equal(panelRef.style.top, '36px');
    await waitUntil(() => panelRef.style.left === '63.5px', { timeout: 300 });
    assert.equal(panelRef.style.left, '63.5px');
    buttonRef.style.marginLeft = '50px';
    await settled();
    assert.equal(panelRef.style.top, '36px');
    await waitUntil(() => panelRef.style.left === '113.5px', { timeout: 300 });
    assert.equal(panelRef.style.left, '113.5px');
  });

  module('placement', function (hooks) {
    test('When placement is set to right-start, it positions the panel accordingly', async function (assert) {
      await render(hbs`
      {{#if this.isInitialized}}
        <OSS::ContextMenu::Panel @items={{this.items}} 
                                 @referenceTarget={{this.referenceTarget}} 
                                 @placement="right-start" />
      {{/if}}
      <OSS::Button id="trigger" @label="Trigger" />
    `);

      const buttonRef = document.querySelector('#trigger') as HTMLElement;

      this.set('referenceTarget', buttonRef);
      this.set('isInitialized', true);
      const panelRef = document.querySelector('.context-menu-panel__scrollable-container') as HTMLElement;
      const qunitTestContainer = buttonRef.offsetParent as HTMLElement;
      const leftPosition = buttonRef.getBoundingClientRect().left - qunitTestContainer.getBoundingClientRect().left;
      await settled();
      const expectedLeftPosition =
        Number(((leftPosition + buttonRef.getBoundingClientRect().width) * 2).toFixed(4)) + 'px';
      const expectedTopPosition = 0 + 'px';
      assert.equal(expectedLeftPosition, panelRef.style.left);
      assert.equal(expectedTopPosition, panelRef.style.top);
    });

    test('When placement is set to bottom-start, it positions the panel accordingly', async function (assert) {
      await render(hbs`
      {{#if this.isInitialized}}
        <OSS::ContextMenu::Panel @items={{this.items}} 
                                 @referenceTarget={{this.referenceTarget}} 
                                 @placement="bottom-start" />
      {{/if}}
      <OSS::Button id="trigger" @label="Trigger" />
    `);

      const buttonRef = document.querySelector('#trigger') as HTMLElement;

      this.set('referenceTarget', buttonRef);
      this.set('isInitialized', true);
      const panelRef = document.querySelector('.context-menu-panel__scrollable-container') as HTMLElement;
      const qunitTestContainer = buttonRef.offsetParent as HTMLElement;
      const topPosition = buttonRef.getBoundingClientRect().top - qunitTestContainer.getBoundingClientRect().top;
      await settled();
      const expectedLeftPosition = 0 + 'px';
      const expectedTopPosition =
        Number(((topPosition + buttonRef.getBoundingClientRect().height) * 2).toFixed(4)) + 'px';
      assert.equal(expectedLeftPosition, panelRef.style.left);
      assert.equal(expectedTopPosition, panelRef.style.top);
    });
  });

  module('Offset', function () {
    test('When offset is 0, panel is stuck to his reference target', async function (assert) {
      this.offset = 0;
      await render(hbs`
      {{#if this.isInitialized}}
        <OSS::ContextMenu::Panel @items={{this.items}} 
                                 @referenceTarget={{this.referenceTarget}} 
                                 @placement="bottom-start"
                                 @offset={{this.offset}} />
      {{/if}}
      <OSS::Button id="trigger" @label="Trigger" />
    `);

      const buttonRef = document.querySelector('#trigger') as HTMLElement;

      this.set('referenceTarget', buttonRef);
      this.set('isInitialized', true);
      const panelRef = document.querySelector('.context-menu-panel__scrollable-container') as HTMLElement;
      await settled();
      assert.equal(panelRef.style.top, '36px');
    });

    test('When offset is defined, panel is is moved by that many pixels than defined to his reference target', async function (assert) {
      this.offset = 20;
      await render(hbs`
      {{#if this.isInitialized}}
        <OSS::ContextMenu::Panel @items={{this.items}} 
                                 @referenceTarget={{this.referenceTarget}} 
                                 @placement="bottom-start"
                                 @offset={{this.offset}} />
      {{/if}}
      <OSS::Button id="trigger" @label="Trigger" />
    `);

      const buttonRef = document.querySelector('#trigger') as HTMLElement;

      this.set('referenceTarget', buttonRef);
      this.set('isInitialized', true);
      const panelRef = document.querySelector('.context-menu-panel__scrollable-container') as HTMLElement;
      await settled();
      assert.equal(panelRef.style.top, '56px');
    });
  });

  module('When items are passed', function () {
    module('if items has subitems', function () {
      test('Clicking on item opens a submenu on the right of the trigger element', async function (assert) {
        await render(hbs`
          {{#if this.isInitialized}}
            <OSS::ContextMenu::Panel @items={{this.items}} 
                                    @referenceTarget={{this.referenceTarget}} 
                                    @placement="bottom-start"
                                    @offset={{this.offset}} />
          {{/if}}
          <OSS::Button id="trigger" @label="Trigger" />
        `);

        const buttonRef = document.querySelector('#trigger') as HTMLElement;

        this.set('referenceTarget', buttonRef);
        this.set('isInitialized', true);

        assert.dom('div.context-menu-panel__scrollable-container').exists({ count: 1 });
        await click('div.context-menu-panel__scrollable-container li:nth-of-type(1) .oss-infinite-select-option');
        assert.dom('div.context-menu-panel__scrollable-container').exists({ count: 2 });
        const panels = document.querySelectorAll('div.context-menu-panel__scrollable-container');
        const triggerPosition = (
          panels[0]?.querySelector('div.context-menu-panel__dropdown li:nth-of-type(1)') as HTMLElement
        ).getBoundingClientRect();
        assert.equal(triggerPosition.x + triggerPosition.width, panels[1]?.getBoundingClientRect().x);
        assert.equal(triggerPosition.y + SUBPANEL_OFFSET / 2, panels[1]?.getBoundingClientRect().y);
      });

      test('Submenu items are properly displayed', async function (assert) {
        await render(hbs`<OSS::ContextMenu::Panel @items={{this.items}} />`);

        assert.dom('div.context-menu-panel__dropdown').exists({ count: 1 });
        await click('div.context-menu-panel__dropdown li:nth-of-type(1) .oss-infinite-select-option');
        assert.dom('div.context-menu-panel__dropdown').exists({ count: 2 });
        const panels = document.querySelectorAll('div.context-menu-panel__dropdown');
        assert.equal(panels[1]?.querySelectorAll('li').length, 3);
        assert.equal(
          (panels[1]?.querySelector('li:nth-of-type(1)') as HTMLElement).textContent?.trim(),
          'Sub Item 1.1'
        );
        assert.equal(
          (panels[1]?.querySelector('li:nth-of-type(2)') as HTMLElement).textContent?.trim(),
          'Sub Item 1.2'
        );
        assert.equal(
          (panels[1]?.querySelector('li:nth-of-type(3)') as HTMLElement).textContent?.trim(),
          'Sub Item 1.3'
        );
      });
    });

    test('If item has custom component it render the component instead of default one', async function (assert) {
      class TestComponent extends Component {}
      setComponentTemplate(hbs`<div data-control-name="custom-row">{{@item.title}}</div>` as any, TestComponent);
      const component = this.owner.register('component:test-component', TestComponent);

      this.items = [{ title: 'custom', action: () => console.log('Item 1 clicked'), rowRenderer: TestComponent }];
      await render(hbs`<OSS::ContextMenu::Panel @items={{this.items}} />`);

      assert.dom('.context-menu-panel__dropdown li [data-control-name="custom-row"]').exists();
    });
  });

  test('When no items are passed, it displays the empty state', async function (assert) {
    await render(hbs`<OSS::ContextMenu::Panel  />`);

    assert.dom('.upf-infinite-select__items-container--empty').exists();
  });

  test('When mouse leave the panel, it triggers onMouseLeave action', async function (assert) {
    this.onMouseLeaveStub = sinon.stub();
    await render(hbs`<OSS::ContextMenu::Panel  @onMouseLeave={{this.onMouseLeaveStub}} />`);
    assert.ok(this.onMouseLeaveStub.notCalled);
    await triggerEvent('.context-menu-panel__dropdown', 'mouseleave');
    assert.ok(this.onMouseLeaveStub.calledOnce);
  });
});
