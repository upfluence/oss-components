import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, findAll, setupOnerror } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | o-s-s/skeleton', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<OSS::Skeleton/>`);
    assert.dom('.upf-skeleton-content').exists();
  });

  module('@height parameters', () => {
    test('Default height', async function (assert) {
      await render(hbs`<OSS::Skeleton/>`);

      assert.dom('.upf-skeleton-content').hasStyle({ height: '36px' });
    });

    test('The style height should correspond to parameter value', async function (assert) {
      this.height = 400;

      await render(hbs`<OSS::Skeleton @height={{this.height}}/>`);

      assert.dom('.upf-skeleton-content').hasStyle({ height: '400px' });
    });
  });

  module('@width parameters', () => {
    test('Default width', async function (assert) {
      await render(hbs`<OSS::Skeleton/>`);

      assert.dom('.upf-skeleton-content').hasStyle({ width: '36px' });
    });

    test('The style width should correspond to parameter value', async function (assert) {
      this.width = 400;

      await render(hbs`<OSS::Skeleton @width={{this.width}}/>`);

      assert.dom('.upf-skeleton-content').hasStyle({ width: '400px' });
    });
  });

  module('@gap parameters', () => {
    test('Default gap', async function (assert) {
      await render(hbs`<OSS::Skeleton/>`);

      assert.dom('.upf-skeleton-content').hasClass('fx-gap-px-9');
    });

    test('The has class corresponding to gap', async function (assert) {
      this.gap = 12;

      await render(hbs`<OSS::Skeleton @gap={{this.gap}}/>`);

      assert.dom('.upf-skeleton-content').hasClass('fx-gap-px-12');
    });
  });

  module('@multiple parameters', () => {
    test('Default has one skeleton effect', async function (assert) {
      await render(hbs`<OSS::Skeleton/>`);

      let items = findAll('.upf-skeleton-content .upf-skeleton-effect');

      assert.ok(items.length === 1);
    });

    test('The content has multiple skeleton effect', async function (assert) {
      this.multiple = 4;

      await render(hbs`<OSS::Skeleton @multiple={{this.multiple}}/>`);

      let items = findAll('.upf-skeleton-content .upf-skeleton-effect');

      assert.ok(items.length === 4);
    });
  });

  module('@randomize parameters', () => {
    hooks.beforeEach(function () {
      this.multiple = 4;
      this.width = 200;
    });

    test('Default randomize is false', async function (assert) {
      await render(hbs`<OSS::Skeleton @width={{this.width}}/>`);

      let item = find('.upf-skeleton-content .upf-skeleton-effect') as HTMLElement;

      assert.dom('.upf-skeleton-content .upf-skeleton-effect').hasClass('fx-1');
      assert.ok(this.width == item?.offsetWidth);
    });

    test('Randomize width', async function (assert) {
      await render(hbs`<OSS::Skeleton @multiple={{this.multiple}} @width={{this.width}} @randomize={{true}}/>`);

      let item = find('.upf-skeleton-content .upf-skeleton-effect') as HTMLElement;

      assert.ok(this.width * 0.8 <= item?.offsetWidth && item?.offsetWidth <= this.width);
    });

    test('Randomize width and @type is column', async function (assert) {
      await render(hbs`<OSS::Skeleton @type="column" @width={{this.width}} @randomize={{true}}/>`);

      let item = find('.upf-skeleton-content .upf-skeleton-effect') as HTMLElement;

      assert.dom('.upf-skeleton-content .upf-skeleton-effect').hasNoClass('fx-1');
      assert.ok(this.width * 0.5 <= item?.offsetWidth && item?.offsetWidth <= this.width * 1.5);
    });
  });

  test('@type default value is row', async function (assert) {
    await render(hbs`<OSS::Skeleton/>`);

    assert.dom('.upf-skeleton-content').hasClass(`fx-col`);
  });

  test('@type value is column', async function (assert) {
    await render(hbs`<OSS::Skeleton @type="column"/>`);

    assert.dom('.upf-skeleton-content').hasClass(`fx-row`);
  });

  module('Extra attributes', () => {
    test('passing an extra class is applied to the component', async function (assert) {
      await render(hbs`<OSS::Skeleton class="my-extra-class" />`);
      assert.dom('.my-extra-class').exists();
    });

    test('passing data-control-name works', async function (assert) {
      await render(hbs`<OSS::Skeleton data-control-name="layout-sidebar" />`);
      let inputWrapper: Element | null = find('.upf-skeleton-content');
      assert.equal(inputWrapper?.getAttribute('data-control-name'), 'layout-sidebar');
    });
  });

  module('Error management', () => {
    test('it throws an error if @type is provided and does not match required values', async function (assert) {
      setupOnerror((err: any) => {
        assert.equal(
          err.message,
          'Assertion Failed: [component][OSS::Skeleton] The @type argument should be a value of row,column'
        );
      });
      await render(hbs`<OSS::Skeleton @type="toto"/>`);
    });
  });
});
