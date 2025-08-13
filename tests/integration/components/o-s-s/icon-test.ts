import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, setupOnerror } from '@ember/test-helpers';

const STYLE_CLASSES = {
  solid: 'fas',
  regular: 'far',
  light: 'fal',
  duotone: 'fad',
  brand: 'fab',
  'duotone-regular': 'fadr'
};

module('Integration | Component | o-s-s/icon', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<OSS::Icon @icon="fa-laptop-code" />`);
    assert.dom('i').exists();
  });

  test('it renders the correct icon class', async function (assert) {
    await render(hbs`<OSS::Icon @icon="fa-code-merge" />`);
    assert.dom('i').hasClass('fa-code-merge');
  });

  test(`it renders the correct default style class`, async function (assert) {
    await render(hbs`<OSS::Icon @icon="fa-code-merge" />`);
    assert.dom('i').hasClass('far');
  });

  for (const [key, value] of Object.entries(STYLE_CLASSES)) {
    test(`it renders the correct style ${key} class`, async function (assert) {
      this.style = key;
      await render(hbs`<OSS::Icon @icon="fa-code-merge" @style={{this.style}} />`);
      assert.dom('i').hasClass(value);
    });
  }

  test('it throws an error if icon argument is missing', async function (assert) {
    setupOnerror((error: Error) => {
      assert.equal(error.message, 'Assertion Failed: [component][OSS::Icon] The @icon parameter is mandatory');
    });

    await render(hbs`<OSS::Icon />`);
  });
});
