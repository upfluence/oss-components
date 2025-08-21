import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, scrollTo, settled, waitFor } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';

module('Integration | Component | o-s-s/scrollable-panel', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.onBottomReached = sinon.stub();
    this.hideScrollbar = false;
    this.offset = 0;
  });

  function scrollIntoView(elementId: string) {
    document.querySelector(`#${elementId}`)?.scrollIntoView({ block: 'center' });
  }

  const renderScrollableContent = hbs`
  <div class="background-color-gray-50" style="height:300px; width: 500px">
    <OSS::ScrollablePanel @disableShadows={{this.disableShadows}}
                          @onBottomReached={{this.onBottomReached}}
                          @hideScrollbar={{this.hideScrollbar}}
                          @offset={{this.offset}} >
      <div class="fx-col fx-gap-px-12 padding-px-12">
        <div class="background-color-gray-200" style="height: 50px; width: 100%;" id="start-element"/>
        <div class="background-color-gray-200" style="height: 50px; width: 100%;" />
        <div class="background-color-gray-200" style="height: 50px; width: 100%;" id="center-element"/>
        <div class="background-color-gray-200" style="height: 50px; width: 100%;" />
        <div class="background-color-gray-200" style="height: 50px; width: 100%;" id="end-element"/>
      </div>
    </OSS::ScrollablePanel>
  </div>
`;

  const renderHorizontalScrollableContent = hbs`
  <div class="background-color-gray-50" style="width: 200px; height: 50px;">
    <OSS::ScrollablePanel @disableShadows={{this.disableShadows}}
                          @onBottomReached={{this.onBottomReached}}
                          @horizontal={{true}} >
      <div class="fx-row fx-gap-px-6" style="width: fit-content;">
        <div class="background-color-gray-200" style="width: 100px; height: 50px;" id="start-element"/>
        <div class="background-color-gray-200" style="width: 100px; height: 50px;" />
        <div class="background-color-gray-200" style="width: 100px; height: 50px;" id="center-element"/>
        <div class="background-color-gray-200" style="width: 100px; height: 50px;" />
        <div class="background-color-gray-200" style="width: 100px; height: 50px;" id="end-element"/>
      </div>
    </OSS::ScrollablePanel>
  </div>
`;

  test('When the container is not scrollable, it does not display shadows', async function (assert) {
    await render(hbs`
      <div class="background-color-gray-50" style="height:500px; width: 500px">
        <OSS::ScrollablePanel>
          <div class="fx-col fx-gap-px-12 padding-px-12">
            <div class="background-color-gray-200" style="height: 50px; width: 100%;" id="start-element"/>
            <div class="background-color-gray-200" style="height: 50px; width: 100%;" />
            <div class="background-color-gray-200" style="height: 50px; width: 100%;" id="center-element"/>
            <div class="background-color-gray-200" style="height: 50px; width: 100%;" />
            <div class="background-color-gray-200" style="height: 50px; width: 100%;" id="end-element"/>
          </div>
        </OSS::ScrollablePanel>
      </div>
    `);

    assert.dom('.oss-scrollable-panel-content').exists();
    assert.dom('.oss-scrollable-panel--shadow__top').doesNotExist();
    assert.dom('.oss-scrollable-panel--shadow__bottom').doesNotExist();
  });

  module('When the container is scrollable', () => {
    test('It has a shadow bottom per default', async function (assert) {
      await render(renderScrollableContent);

      assert.dom('.oss-scrollable-panel-content').exists();
      assert.dom('.oss-scrollable-panel--shadow__top').doesNotExist();
      assert.dom('.oss-scrollable-panel--shadow__bottom').exists();
    });

    test('When scrolling into last element, It only has a shadow top', async function (assert) {
      await render(renderScrollableContent);

      scrollIntoView('end-element');

      assert.dom('.oss-scrollable-panel-content').exists();
      await waitFor('.oss-scrollable-panel--shadow__top', { timeout: 500 });
      assert.dom('.oss-scrollable-panel--shadow__top').exists();
      assert.dom('.oss-scrollable-panel--shadow__bottom').doesNotExist();
    });

    test('When scrolling into center element, It has top and bottom shadows', async function (assert) {
      await render(renderScrollableContent);

      scrollIntoView('center-element');

      assert.dom('.oss-scrollable-panel-content').exists();
      await waitFor('.oss-scrollable-panel--shadow__top', { timeout: 500 });
      assert.dom('.oss-scrollable-panel--shadow__top').exists();
      assert.dom('.oss-scrollable-panel--shadow__bottom').exists();
    });

    test('When scrolling into first element, It only has a shadow bottom', async function (assert) {
      await render(renderScrollableContent);

      scrollIntoView('start-element');

      assert.dom('.oss-scrollable-panel-content').exists();
      await waitFor('.oss-scrollable-panel--shadow__bottom', { timeout: 500 });
      assert.dom('.oss-scrollable-panel--shadow__top').doesNotExist();
      assert.dom('.oss-scrollable-panel--shadow__bottom').exists();
    });

    module('When the container is horizontally scrollable', () => {
      test('It has a shadow right per default', async function (assert) {
        await render(renderHorizontalScrollableContent);

        assert.dom('.oss-scrollable-panel-content').exists();
        assert.dom('.oss-scrollable-panel--shadow__left').doesNotExist();
        assert.dom('.oss-scrollable-panel--shadow__right').exists();
      });

      test('When scrolling into last element, It only has a shadow left', async function (assert) {
        await render(renderHorizontalScrollableContent);

        scrollIntoView('end-element');

        assert.dom('.oss-scrollable-panel-content').exists();
        await waitFor('.oss-scrollable-panel--shadow__left', { timeout: 500 });
        assert.dom('.oss-scrollable-panel--shadow__left').exists();
        assert.dom('.oss-scrollable-panel--shadow__right').doesNotExist();
      });

      test('When scrolling into center element, It has left and right shadows', async function (assert) {
        await render(renderHorizontalScrollableContent);

        scrollIntoView('center-element');

        assert.dom('.oss-scrollable-panel-content').exists();
        await waitFor('.oss-scrollable-panel--shadow__left', { timeout: 500 });
        assert.dom('.oss-scrollable-panel--shadow__left').exists();
        assert.dom('.oss-scrollable-panel--shadow__right').exists();
      });

      test('When scrolling into first element, It only has a shadow right', async function (assert) {
        await render(renderHorizontalScrollableContent);

        scrollIntoView('start-element');

        assert.dom('.oss-scrollable-panel-content').exists();
        await waitFor('.oss-scrollable-panel--shadow__right', { timeout: 500 });
        assert.dom('.oss-scrollable-panel--shadow__left').doesNotExist();
        assert.dom('.oss-scrollable-panel--shadow__right').exists();
      });
    });
  });

  module('When @disableShadows is enabled', (hooks) => {
    hooks.beforeEach(function () {
      this.disableShadows = true;
    });

    test('When scrollsection is vertical, the top & bottom shadows are not displayed', async function (assert) {
      await render(renderHorizontalScrollableContent);

      scrollIntoView('center-element');

      assert.dom('.oss-scrollable-panel-content').exists();
      assert.dom('.oss-scrollable-panel--shadow__top').doesNotExist();
      assert.dom('.oss-scrollable-panel--shadow__bottom').doesNotExist();
    });

    test('When scrollsection is horizontal, the left & right shadows are not displayed', async function (assert) {
      await render(renderScrollableContent);

      scrollIntoView('center-element');

      assert.dom('.oss-scrollable-panel-content').exists();
      assert.dom('.oss-scrollable-panel--shadow__left').doesNotExist();
      assert.dom('.oss-scrollable-panel--shadow__right').doesNotExist();
    });
  });

  module('with onBottomReached', function () {
    test('when scrolling to the bottom, it should trigger onBottomReach function', async function (assert) {
      await render(renderScrollableContent);
      assert.ok(this.onBottomReached.notCalled);
      await scrollTo('.oss-scrollable-panel-content', 0, 1500);
      assert.ok(this.onBottomReached.called);
    });
  });

  test('When @hideScrollbar is truthy, the scrollbar is hidden', async function (assert) {
    await render(renderScrollableContent);

    assert
      .dom('.oss-scrollable-panel-container .oss-scrollable-panel-content')
      .hasNoClass('oss-scrollable-panel-content--hidden');
    this.set('hideScrollbar', true);
    assert
      .dom('.oss-scrollable-panel-container .oss-scrollable-panel-content')
      .hasClass('oss-scrollable-panel-content--hidden');
  });

  module('with @offset', function (hooks) {
    hooks.beforeEach(function () {
      this.set('offset', 10);
    });

    test('When scrolling under the offset, it does not display top shadow', async function (assert) {
      await render(renderScrollableContent);

      assert.dom('.oss-scrollable-panel--shadow__top').doesNotExist();
      await scrollTo('.oss-scrollable-panel-content', 0, 5);
      assert.dom('.oss-scrollable-panel--shadow__top').doesNotExist();
    });

    test('When scrolling above the offset, it displays the top shadow', async function (assert) {
      await render(renderScrollableContent);

      assert.dom('.oss-scrollable-panel--shadow__top').doesNotExist();
      await scrollTo('.oss-scrollable-panel-content', 0, 15);
      assert.dom('.oss-scrollable-panel--shadow__top').exists();
    });
  });
});
