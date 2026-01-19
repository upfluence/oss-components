import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';

module('Integration | Component | o-s-s/banner', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<OSS::Banner />`);

    assert.dom('.upf-banner').exists();
  });

  test('passing a font-awesome icon in the @icon parameter displays the icon in a rounded badge', async function (assert) {
    await render(hbs`<OSS::Banner @icon="fas fa-check" />`);

    assert.dom('.upf-banner .fa-check').exists();
  });

  test('passing an image url in the @image parameter displays the image in a rounded badge', async function (assert) {
    this.url =
      'https://thepressfree.com/wp-content/uploads/2021/11/Voici-pourquoi-Bruce-Banner-netait-plus-Smart-Hulk-dans-la-800x445.jpg';
    await render(hbs`<OSS::Banner @image={{this.url}} />`);

    assert.dom('.upf-banner img').exists();
    assert.dom('img').hasAttribute('src', this.url);
  });

  test('passing a title in the @title parameter displays the title in the component', async function (assert) {
    await render(hbs`<OSS::Banner @title="Test Title" />`);

    assert.dom('.upf-banner .font-weight-semibold').hasText('Test Title');
  });

  test('passing a title-suffix named block uses it in a addition to the @title arg ', async function (assert) {
    await render(
      hbs`<OSS::Banner @title="Test Title"><:title-suffix><div class="title-named-block">foo</div></:title-suffix></OSS::Banner>`
    );

    assert.dom('.upf-banner .font-weight-semibold').hasText('Test Title');
    assert.dom('.upf-banner .title-named-block').exists();
    assert.dom('.upf-banner .title-named-block').hasText('foo');
  });

  test('passing a title-suffix named block without a @title arg does not display it at all', async function (assert) {
    await render(
      hbs`<OSS::Banner><:title-suffix><div class="title-named-block">foo</div></:title-suffix></OSS::Banner>`
    );

    assert.dom('.upf-banner .font-weight-semibold').doesNotExist();
    assert.dom('.upf-banner .title-named-block').doesNotExist();
  });

  test('passing a subtitle in the @subtitle parameter displays the title in the component', async function (assert) {
    await render(hbs`<OSS::Banner @subtitle="Test subtitle" />`);

    assert.dom('.upf-banner .font-color-gray-500.text-size-4').hasText('Test subtitle');
  });

  module('@plain parameter', function () {
    test('when the value is truthy, it sets gray-50 background', async function (assert) {
      await render(hbs`<OSS::Banner @plain={{true}} />`);
      assert.dom('.upf-banner.background-color-gray-50').exists();
    });

    test('when the value is falsy, it sets white background', async function (assert) {
      await render(hbs`<OSS::Banner @plain={{false}} />`);
      assert.dom('.upf-banner.background-color-white').exists();
    });

    test('when the value is undefined, it sets white background', async function (assert) {
      await render(hbs`<OSS::Banner />`);
      assert.dom('.upf-banner.background-color-white').exists();
    });
  });

  module('@selected parameter', function () {
    test('when the value is truthy, it adds upf-banner--selected class', async function (assert) {
      await render(hbs`<OSS::Banner @selected={{true}} />`);
      assert.dom('.upf-banner.upf-banner--selected').exists();
    });

    test("when the value is falsy, it doesn't add upf-banner--selected class", async function (assert) {
      await render(hbs`<OSS::Banner @selected={{false}} />`);
      assert.dom('.upf-banner.upf-banner--selected').doesNotExist();
    });

    test("when the value is undefined, it doesn't add upf-banner--selected class", async function (assert) {
      await render(hbs`<OSS::Banner />`);
      assert.dom('.upf-banner.upf-banner--selected').doesNotExist();
    });
  });

  module('@disabled parameter', function () {
    test('when the value is truthy, it adds upf-banner--disabled class', async function (assert) {
      await render(hbs`<OSS::Banner @disabled={{true}} />`);
      assert.dom('.upf-banner.upf-banner--disabled').exists();
    });

    test("when the value is falsy, it doesn't add upf-banner--disabled class", async function (assert) {
      await render(hbs`<OSS::Banner @disabled={{false}} />`);
      assert.dom('.upf-banner.upf-banner--disabled').doesNotExist();
    });

    test("when the value is undefined, it doesn't add upf-banner--disabled class", async function (assert) {
      await render(hbs`<OSS::Banner />`);
      assert.dom('.upf-banner.upf-banner--disabled').doesNotExist();
    });
  });

  test('passing a custom-icon named block renders inside the component', async function (assert) {
    await render(hbs`
      <OSS::Banner @subtitle="Test subtitle">
        <:custom-icon>
          <OSS::Badge @text="2x" />
        </:custom-icon>
      </OSS::Banner>
    `);

    assert.dom('.upf-badge').exists();
  });

  test('passing an actions named block renders inside the component', async function (assert) {
    await render(hbs`
      <OSS::Banner @subtitle="Test subtitle">
        <:actions>
          <OSS::Button @skin="primary" @label="browse" @icon="fas fa-box-open" @size="md" />
        </:actions>
      </OSS::Banner>
    `);

    assert.dom('.upf-btn').exists();
  });

  module('@size parameter', function () {
    test("when the value is 'sm', it adds the upf-banner--size-sm class", async function (assert) {
      await render(hbs`<OSS::Banner @size="sm" />`);
      assert.dom('.upf-banner.upf-banner--size-sm').exists();
    });

    test("when the value is 'lg', it adds the upf-banner--size-lg class", async function (assert) {
      await render(hbs`<OSS::Banner @size="lg" />`);
      assert.dom('.upf-banner.upf-banner--size-lg').exists();
    });

    test("when the value is anything but 'sm', it doesn't add size class", async function (assert) {
      await render(hbs`<OSS::Banner @size="md" />`);
      assert.dom('.upf-banner.upf-banner--size-sm').doesNotExist();
      assert.dom('.upf-banner.upf-banner--size-lg').doesNotExist();
    });

    test("when the value is undefined, it doesn't add the size class", async function (assert) {
      await render(hbs`<OSS::Banner />`);
      assert.dom('.upf-banner.upf-banner--size-sm').doesNotExist();
      assert.dom('.upf-banner.upf-banner--size-lg').doesNotExist();
    });
  });

  module('@feedbackMessage parameter', function () {
    hooks.beforeEach(function () {
      this.feedbackMessage = {
        type: 'error',
        value: 'This is a feedback message'
      };
    });

    test('When parameter is passed, it adds upf-banner--errored class', async function (assert) {
      await render(hbs`<OSS::Banner @feedbackMessage={{this.feedbackMessage}} />`);

      assert.dom('.upf-banner.upf-banner--errored').exists();
    });

    test('When parameter is passed, the feedback message is swhown', async function (assert) {
      await render(hbs`<OSS::Banner />`);

      assert.dom('.font-color-error-500').hasText('This is a feedback message');
    });

    test('When parameter is not passed, it does not add upf-banner--errored class', async function (assert) {
      await render(hbs`<OSS::Banner @feedbackMessage={{this.feedbackMessage}} />`);

      assert.dom('.upf-banner.upf-banner--errored').doesNotExist();
    });
  });
});
