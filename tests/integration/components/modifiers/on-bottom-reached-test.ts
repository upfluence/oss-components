import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, scrollTo } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | modifiers/on-bottom-reached', function (hooks) {
  setupRenderingTest(hooks);

  test('it triggers the callback when the bottom of the div is reached', async function (assert) {
    this.bottomReached = () => {
      assert.ok(true, 'Entered the bottom reached callback');
    };

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
  });
});
