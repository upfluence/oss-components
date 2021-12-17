import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, waitFor } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';

module('Integration | Component | modifiers/scroll-shadow', function (hooks) {
  setupRenderingTest(hooks);

  const itemNumbers: Array<number> = new Array(6).fill(null).map((_, i) => i);

  class ResizeObserverMock {
    observe() {}
    unobserve() {}
    disconnect() {}
  }

  module('when container has scrollbar', function (hooks) {
    hooks.beforeEach(function () {
      this.itemNumbers = itemNumbers;
    });

    test('it should have scroll shadow class', async function (assert) {
      await render(hbs`
        <div style="position: relative">
          <div class="items-container" style="max-height: 80px;overflow: auto;" {{scroll-shadow}}>
            {{#each this.itemNumbers as |itemNumber|}}
              <div>Item {{itemNumber}}</div>
            {{/each}}
          </div>
        </div>
      `);
      await waitFor('.scroll-shadow', { timeout: 2000 });

      assert.dom('.items-container').hasClass('scroll-shadow');
    });

    module('when using color', function () {
      test('with default color', async function (assert) {
        await render(hbs`
          <div style="position: relative">
            <div class="items-container" style="max-height: 80px;overflow: auto;" {{scroll-shadow}}>
              {{#each this.itemNumbers as |itemNumber|}}
                <div>Item {{itemNumber}}</div>
              {{/each}}
            </div>
          </div>
        `);
        await waitFor('.scroll-shadow--default', { timeout: 2000 });

        assert.dom('.items-container').hasClass('scroll-shadow--default');
      });

      test('with field color', async function (assert) {
        await render(hbs`
          <div style="position: relative">
            <div class="items-container" style="max-height: 80px;overflow: auto;" {{scroll-shadow color="field"}}>
              {{#each this.itemNumbers as |itemNumber|}}
                <div>Item {{itemNumber}}</div>
              {{/each}}
            </div>
          </div>
        `);
        await waitFor('.scroll-shadow--field', { timeout: 2000 });

        assert.dom('.items-container').hasClass('scroll-shadow--field');
      });
    });
  });

  module('when container has not scrollbar', function (hooks) {
    hooks.beforeEach(function () {
      this.itemNumbers = itemNumbers;
    });

    test('it should not have scroll shadow classes', async function (assert) {
      await render(hbs`
        <div style="position: relative">
          <div class="items-container" {{scroll-shadow}}>
            {{#each this.itemNumbers as |itemNumber|}}
              <div>Item {{itemNumber}}</div>
            {{/each}}
          </div>
        </div>
      `);

      assert.dom('.items-container').doesNotHaveClass('scroll-shadow');
      assert.dom('.items-container').doesNotHaveClass('scroll-shadow--white');
    });
  });

  module('when container change scrollbar dynamically', function (hooks) {
    hooks.beforeEach(function () {
      this.itemNumbers = itemNumbers;
    });

    test('it should call ResizeObserver', async function (assert) {
      const resizeObserverStub = sinon.stub(ResizeObserverMock.prototype, 'observe');
      window.ResizeObserver = ResizeObserverMock;

      await render(hbs`
        <div style="position: relative">
          <div class="items-container" {{scroll-shadow}}>
            {{#each this.itemNumbers as |itemNumber|}}
              <div>Item {{itemNumber}}</div>
            {{/each}}
          </div>
        </div>
      `);

      let container: HTMLElement | null = document.querySelector('.items-container');
      container!.style.maxHeight = '80px';
      container!.style.overflow = 'auto';

      assert.ok(resizeObserverStub.calledOnce);
    });
  });
});
