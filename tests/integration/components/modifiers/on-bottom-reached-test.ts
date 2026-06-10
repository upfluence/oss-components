import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, scrollTo } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';

module('Integration | Component | modifiers/on-bottom-reached', function (hooks) {
  setupRenderingTest(hooks);

  test('it triggers the callback when the bottom of the div is reached', async function (assert) {
    this.bottomReached = sinon.stub();

    await render(hbs`
      <div class="scrollable" style="background: red; height: 100px; overflow: scroll"
           {{on-bottom-reached this.bottomReached}}>
        <div style="height: 250px">hello</div>
      </div>
    `);

    await scrollTo(
      '.scrollable',
      0,
      document.querySelector('.scrollable')!.scrollHeight - document.querySelector('.scrollable')!.clientHeight
    );

    assert.ok(this.bottomReached.called, 'Entered the bottom reached callback');
  });

  test('it does not trigger the callback when scrolling down but the bottom of the div is not reached', async function (assert) {
    this.bottomReached = sinon.stub();

    await render(hbs`
      <div class="scrollable" style="background: red; height: 100px; overflow: scroll"
           {{on-bottom-reached this.bottomReached}}>
        <div style="height: 250px">hello</div>
      </div>
    `);

    await scrollTo('.scrollable', 0, 20);

    assert.true(this.bottomReached.notCalled, 'Did not enter the bottom reached callback');
  });

  test('it triggers only when reaching the default 20px bottom threshold', async function (assert) {
    this.bottomReached = sinon.stub();

    await render(hbs`
      <div class="scrollable" style="background: red; height: 100px; overflow: scroll"
           {{on-bottom-reached this.bottomReached}}>
        <div style="height: 250px">hello</div>
      </div>
    `);

    const scrollableElement = document.querySelector('.scrollable') as HTMLElement;
    const maxScrollTop = scrollableElement.scrollHeight - scrollableElement.clientHeight;

    await scrollTo('.scrollable', 0, maxScrollTop - 21);
    assert.true(this.bottomReached.notCalled, 'Did not enter the bottom reached callback before threshold');
    await scrollTo('.scrollable', 0, maxScrollTop - 20);
    assert.ok(this.bottomReached.called, 'Entered the bottom reached callback at threshold');
  });

  test('it triggers when reaching a custom bottom threshold', async function (assert) {
    this.bottomReached = sinon.stub();

    await render(hbs`
      <div class="scrollable" style="background: red; height: 100px; overflow: scroll"
           {{on-bottom-reached this.bottomReached offset=50}}>
        <div style="height: 250px">hello</div>
      </div>
    `);

    const scrollableElement = document.querySelector('.scrollable') as HTMLElement;
    const maxScrollTop = scrollableElement.scrollHeight - scrollableElement.clientHeight;

    await scrollTo('.scrollable', 0, maxScrollTop - 51);
    assert.true(this.bottomReached.notCalled, 'Did not enter the bottom reached callback before custom threshold');
    await scrollTo('.scrollable', 0, maxScrollTop - 50);
    assert.ok(this.bottomReached.called, 'Entered the bottom reached callback at custom threshold');
  });
});
