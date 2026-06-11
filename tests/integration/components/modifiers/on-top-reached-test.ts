import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, scrollTo } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';

module('Integration | Component | modifiers/on-top-reached', function (hooks) {
  setupRenderingTest(hooks);

  test('it triggers the callback when the top of the div is reached', async function (assert) {
    this.topReached = sinon.stub();

    await render(hbs`
      <div class="scrollable" style="background: red; height: 100px; overflow: scroll"
           {{on-top-reached this.topReached}}>
        <div style="height: 250px">hello</div>
      </div>
    `);

    const scrollableElement = document.querySelector('.scrollable') as HTMLElement;
    const maxScrollTop = scrollableElement.scrollHeight - scrollableElement.clientHeight;

    await scrollTo('.scrollable', 0, maxScrollTop);
    await scrollTo('.scrollable', 0, 0);

    assert.ok(this.topReached.called, 'Entered the top reached callback');
  });

  test('it does not trigger the callback when scrolling up but the top of the div is not reached', async function (assert) {
    this.topReached = sinon.stub();

    await render(hbs`
      <div class="scrollable" style="background: red; height: 100px; overflow: scroll"
           {{on-top-reached this.topReached}}>
        <div style="height: 250px">hello</div>
      </div>
    `);

    const scrollableElement = document.querySelector('.scrollable') as HTMLElement;
    const maxScrollTop = scrollableElement.scrollHeight - scrollableElement.clientHeight;

    await scrollTo('.scrollable', 0, maxScrollTop);
    await scrollTo('.scrollable', 0, 40);

    assert.true(this.topReached.notCalled, 'Did not enter the top reached callback');
  });

  test('it triggers only when reaching the default 20px top threshold', async function (assert) {
    this.topReached = sinon.stub();

    await render(hbs`
      <div class="scrollable" style="background: red; height: 100px; overflow: scroll"
           {{on-top-reached this.topReached}}>
        <div style="height: 250px">hello</div>
      </div>
    `);

    const scrollableElement = document.querySelector('.scrollable') as HTMLElement;
    const maxScrollTop = scrollableElement.scrollHeight - scrollableElement.clientHeight;

    await scrollTo('.scrollable', 0, maxScrollTop);
    await scrollTo('.scrollable', 0, 21);
    assert.true(this.topReached.notCalled, 'Did not enter the top reached callback before threshold');
    await scrollTo('.scrollable', 0, 20);
    assert.ok(this.topReached.called, 'Entered the top reached callback at threshold');
  });

  test('it triggers when reaching a custom top threshold when specified', async function (assert) {
    this.topReached = sinon.stub();

    await render(hbs`
      <div class="scrollable" style="background: red; height: 100px; overflow: scroll"
           {{on-top-reached this.topReached offset=50}}>
        <div style="height: 250px">hello</div>
      </div>
    `);

    const scrollableElement = document.querySelector('.scrollable') as HTMLElement;
    const maxScrollTop = scrollableElement.scrollHeight - scrollableElement.clientHeight;

    await scrollTo('.scrollable', 0, maxScrollTop);
    await scrollTo('.scrollable', 0, 51);
    assert.true(this.topReached.notCalled, 'Did not enter the top reached callback before custom threshold');
    await scrollTo('.scrollable', 0, 50);
    assert.ok(this.topReached.called, 'Entered the top reached callback at custom threshold');
  });
});
