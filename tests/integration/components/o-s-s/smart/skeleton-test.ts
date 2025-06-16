import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, findAll, setupOnerror } from '@ember/test-helpers';

module('Integration | Component | o-s-s/smart/skeleton', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<OSS::Smart::Skeleton/>`);
    assert.dom('.upf-smart-skeleton-effect').exists();
  });

  module('@height parameters', () => {
    test('Default height is 10px', async function (assert) {
      await render(hbs`<OSS::Smart::Skeleton/>`);

      assert.dom('.upf-smart-skeleton-effect').hasStyle({ height: '10px' });
    });

    test('The component flat height should correspond to the parameter value', async function (assert) {
      this.height = 400;

      await render(hbs`<OSS::Smart::Skeleton @height={{this.height}}/>`);

      assert.dom('.upf-smart-skeleton-effect').hasStyle({ height: '400px' });
    });

    test('The component percentage height should correspond to the parameter value', async function (assert) {
      this.height = '100%';
      await render(hbs`<div style="height:250px"><OSS::Smart::Skeleton @height={{this.height}}/></div>`);
      assert.dom('.upf-smart-skeleton-effect').hasStyle({ height: '250px' });
    });
  });

  module('@width parameters', () => {
    test('Default width is 36px', async function (assert) {
      await render(hbs`<OSS::Smart::Skeleton/>`);

      assert.dom('.upf-smart-skeleton-effect').hasStyle({ width: '36px' });
    });

    test('The component flat width should correspond to the parameter value', async function (assert) {
      this.width = 400;

      await render(hbs`<OSS::Smart::Skeleton @width={{this.width}}/>`);

      assert.dom('.upf-smart-skeleton-effect').hasStyle({ width: '400px' });
    });

    test('The component percentage width should correspond to the parameter value', async function (assert) {
      this.width = '100%';
      await render(hbs`<div style="width:250px"><OSS::Smart::Skeleton @width={{this.width}}/></div>`);
      assert.dom('.upf-smart-skeleton-effect').hasStyle({ width: '250px' });
    });
  });

  module('@gap parameters', () => {
    test('Default gap is applied correctly', async function (assert) {
      await render(hbs`<OSS::Smart::Skeleton @multiple={{2}} />`);

      assert.dom('.fx-1').hasClass('fx-gap-px-9');
    });

    test('The component gap corresponds to its parameter value', async function (assert) {
      this.gap = 12;

      await render(hbs`<OSS::Smart::Skeleton @gap={{this.gap}} @multiple={{2}} />`);

      assert.dom('.fx-1').hasClass('fx-gap-px-12');
    });
  });

  module('@multiple parameters', () => {
    test('Default has one skeleton effect', async function (assert) {
      await render(hbs`<OSS::Smart::Skeleton/>`);

      let items = findAll('.upf-smart-skeleton-effect');

      assert.ok(items.length === 1);
    });

    test('The content has multiple skeleton effect', async function (assert) {
      this.multiple = 4;

      await render(hbs`<OSS::Smart::Skeleton @multiple={{this.multiple}}/>`);

      let items = findAll('.upf-smart-skeleton-effect');

      assert.ok(items.length === 4);
    });
  });

  module('@randomize parameters', (hooks) => {
    hooks.beforeEach(function () {
      this.multiple = 4;
      this.width = 200;
    });

    test('Default randomize is falsy', async function (assert) {
      await render(hbs`<OSS::Smart::Skeleton @width={{this.width}}/>`);

      let item = find('.upf-smart-skeleton-effect') as HTMLElement;

      assert.ok(this.width == item?.offsetWidth);
    });

    test('Randomize width is within a 15% range', async function (assert) {
      await render(hbs`<OSS::Smart::Skeleton @multiple={{this.multiple}} @width={{this.width}} @randomize={{true}}/>`);

      let item = find('.upf-smart-skeleton-effect') as HTMLElement;

      assert.ok(item.offsetWidth <= 230 && item.offsetWidth >= 170);
    });
  });

  module('@direction parameters', () => {
    test('Default value is row', async function (assert) {
      await render(hbs`<OSS::Smart::Skeleton @multiple="3" />`);

      assert.dom('.fx-1').hasClass(`fx-row`);
    });

    test('Value is column if specified', async function (assert) {
      await render(hbs`<OSS::Smart::Skeleton @direction="column" @multiple="2" />`);

      assert.dom('.fx-1').hasClass(`fx-col`);
    });
  });

  module('Extra attributes', () => {
    test('Passing an extra class applies it to the component', async function (assert) {
      await render(hbs`<OSS::Smart::Skeleton class="my-extra-class" />`);
      assert.dom('.upf-smart-skeleton-effect.my-extra-class').exists();
    });

    test('Passing a data-control-name applies it to the component', async function (assert) {
      await render(hbs`<OSS::Smart::Skeleton data-control-name="layout-sidebar" />`);
      let inputWrapper: Element | null = find('.upf-smart-skeleton-effect');
      assert.equal(inputWrapper?.getAttribute('data-control-name'), 'layout-sidebar');
    });
  });

  module('Error management', () => {
    test('It throws an error if @direction is provided and does not match required values', async function (assert) {
      setupOnerror((err: any) => {
        assert.equal(
          err.message,
          'Assertion Failed: [component][OSS::Smart::Skeleton] The @direction argument should be a value of row,column,col'
        );
      });
      await render(hbs`<OSS::Smart::Skeleton @direction="toto"/>`);
    });
  });
});
