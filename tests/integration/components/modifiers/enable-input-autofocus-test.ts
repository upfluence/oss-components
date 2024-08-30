import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | modifiers/enable-input-autofocus', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {});

  module('When adding the modifier to a parent element,', function () {
    test('it focuses the child input ', async function (assert) {
      await render(hbs`
      <div class="test-container" {{enable-input-autofocus }}>
           <input class="input" type="text" />
      </div>
    `);
      const inputElement = document.querySelector('.input');
      await assert.equal(document.activeElement, inputElement);
    });

    test('it focuses the first enabled input ', async function (assert) {
      await render(hbs`
      <div class="test-container" {{enable-input-autofocus }}>
           <input class="input" type="text" disabled/>
           <input class="input" type="text" disabled/>
           <input class="input" type="text" disabled/>
           <input class="input" type="text" />
      </div>
    `);
      const inputElements = document.querySelectorAll('.input');
      await assert.equal(document.activeElement, inputElements[3]);
    });
  });

  test('When adding the modifier to an input it focuses the selected input ', async function (assert) {
    await render(hbs`
      <div class="test-container">
           <input class="input" type="text" {{enable-input-autofocus }}/>
      </div>
    `);
    const inputElement = document.querySelector('.input');
    await assert.equal(document.activeElement, inputElement);
  });

  test('When adding the modifier to a disabled element, it does nothing', async function (assert) {
    await render(hbs`
      <div class="test-container" >
           <input class="input" type="text" disabled {{enable-input-autofocus }}/>
      </div>
    `);

    const selectedInput = document.querySelector('.input');
    await assert.notEqual(document.activeElement, selectedInput);
  });
});
