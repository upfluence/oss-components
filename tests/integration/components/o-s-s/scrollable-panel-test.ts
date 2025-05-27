import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, scrollTo, settled, waitFor } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';

module('Integration | Component | o-s-s/scrollable-panel', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.onBottomReached = sinon.stub();
  });

  function scrollIntoView(elementId: string) {
    document.querySelector(`#${elementId}`)?.scrollIntoView({ block: 'center' });
  }

  const renderScrollableContent = hbs`
  <div class="background-color-gray-50" style="height:300px; width: 500px">
    <OSS::ScrollablePanel @disableShadows={{this.disableShadows}} @onBottomReached={{this.onBottomReached}}>
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
  });

  test('When @disableShadows is enabled, the top & bottom shadows are not displayed', async function (assert) {
    this.disableShadows = true;
    await render(renderScrollableContent);

    scrollIntoView('center-element');

    assert.dom('.oss-scrollable-panel-content').exists();
    assert.dom('.oss-scrollable-panel--shadow__top').doesNotExist();
    assert.dom('.oss-scrollable-panel--shadow__bottom').doesNotExist();
  });

  module('with onBottomReached', function () {
    test('when scrolling to the bottom, it should trigger onBottomReach function', async function (assert) {
      await render(renderScrollableContent);

      assert.ok(this.onBottomReached.notCalled);

      await scrollTo('.oss-scrollable-panel-content', 0, 1500);

      assert.ok(this.onBottomReached.calledOnce);
    });
  });
});
