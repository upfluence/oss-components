import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | o-s-s/stack-container', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<OSS::StackContainer />`);

    assert.dom('.oss-stack-container').exists();
  });

  module('@direction parameter', function () {
    test('it defaults to "row"', async function (assert) {
      await render(hbs`<OSS::StackContainer />`);

      assert.dom('.oss-stack-container').hasClass('oss-stack-container--row');
    });

    test('passing "row" as parameter sets the direction to row', async function (assert) {
      await render(hbs`<OSS::StackContainer @direction="row" />`);

      assert.dom('.oss-stack-container').hasClass('oss-stack-container--row');
    });

    test('passing "column" as parameter sets the direction to column', async function (assert) {
      await render(hbs`<OSS::StackContainer @direction="column" />`);

      assert.dom('.oss-stack-container').hasClass('oss-stack-container--column');
    });
  });

  module('@style parameter', function () {
    test('when "under" is passed, sub-elements have a raising z-index', async function (assert) {
      await render(hbs`<OSS::StackContainer @style="under"><div></div><div></div><div></div></OSS::StackContainer>`);
      assert.dom('.oss-stack-container').hasClass('oss-stack-container--style-under');
      const subElements = document.querySelectorAll('.oss-stack-container > *');
      subElements.forEach((child, index) => {
        assert.strictEqual(
          (child as HTMLElement).style.zIndex,
          index.toString(),
          `Child ${index} has z-index ${index}`
        );
      });
    });

    test('when "over" is passed, sub-elements have a lowering z-index', async function (assert) {
      await render(hbs`<OSS::StackContainer @style="over"><div></div><div></div><div></div></OSS::StackContainer>`);
      assert.dom('.oss-stack-container').hasClass('oss-stack-container--style-over');
      const subElements = document.querySelectorAll('.oss-stack-container > *');
      subElements.forEach((child, index) => {
        assert.strictEqual(
          (child as HTMLElement).style.zIndex,
          (subElements.length - 1 - index).toString(),
          `Child ${index} has z-index ${subElements.length - 1 - index}`
        );
      });
    });

    test('it defaults to "under" style', async function (assert) {
      await render(hbs`<OSS::StackContainer />`);

      assert.dom('.oss-stack-container').hasClass('oss-stack-container--style-under');
    });
  });

  module('@pxMargin parameter', function () {
    test('it applies a margin to sub-elements except the last one', async function (assert) {
      await render(
        hbs`<OSS::StackContainer @pxMargin="10" @style="under"><div></div><div></div><div></div></OSS::StackContainer>`
      );

      const subElements = document.querySelectorAll('.oss-stack-container > *');
      subElements.forEach((child, index) => {
        if (index < subElements.length - 1) {
          assert.strictEqual((child as HTMLElement).style.marginRight, '-10px');
        } else {
          assert.strictEqual((child as HTMLElement).style.marginRight, '');
        }
      });
    });

    test('the margin defaults to -6px if not specified', async function (assert) {
      await render(hbs`<OSS::StackContainer @style="under"><div></div><div></div><div></div></OSS::StackContainer>`);

      const subElements = document.querySelectorAll('.oss-stack-container > *');
      subElements.forEach((child, index) => {
        if (index < subElements.length - 1) {
          assert.strictEqual((child as HTMLElement).style.marginRight, '-6px', 'Default margin is applied');
        } else {
          assert.strictEqual((child as HTMLElement).style.marginRight, '', 'No margin for the last child');
        }
      });
    });

    test('passing a positive margin converts it to a negative margin', async function (assert) {
      await render(
        hbs`<OSS::StackContainer @pxMargin="20" @style="under"><div></div><div></div><div></div></OSS::StackContainer>`
      );

      const subElements = document.querySelectorAll('.oss-stack-container > *');
      subElements.forEach((child, index) => {
        if (index < subElements.length - 1) {
          assert.strictEqual((child as HTMLElement).style.marginRight, '-20px', 'Margin is negative');
        } else {
          assert.strictEqual((child as HTMLElement).style.marginRight, '', 'No margin for the last child');
        }
      });
    });
  });

  module('@bringToFrontOnHover parameter', function () {
    test('it does not bring elements to front by default', async function (assert) {
      await render(hbs`<OSS::StackContainer @style="under"><div></div><div></div><div></div></OSS::StackContainer>`);

      const subElements = document.querySelectorAll('.oss-stack-container > *');
      subElements.forEach((child, index) => {
        assert.strictEqual(
          (child as HTMLElement).style.zIndex,
          index.toString(),
          `Child ${index} has z-index ${index}`
        );
      });
    });

    test('it brings elements to front on hover when specified', async function (assert) {
      await render(
        hbs`<OSS::StackContainer @bringToFrontOnHover={{true}} @style="under"><div></div><div></div><div></div></OSS::StackContainer>`
      );

      const subElements = document.querySelectorAll('.oss-stack-container > *');
      subElements.forEach((child, index) => {
        child.dispatchEvent(new MouseEvent('mouseenter'));
        assert.strictEqual((child as HTMLElement).style.zIndex, subElements.length.toString());
        child.dispatchEvent(new MouseEvent('mouseleave'));
        assert.strictEqual((child as HTMLElement).style.zIndex, index.toString());
      });
    });
  });

  module('@subElementClass parameter', function () {
    test('it applies the specified class to each sub-element', async function (assert) {
      await render(
        hbs`<OSS::StackContainer @subElementClass="custom-class" @style="under"><div></div><div></div><div></div></OSS::StackContainer>`
      );

      const subElements = document.querySelectorAll('.oss-stack-container > *');
      subElements.forEach((child) => {
        assert.dom(child).hasClass('custom-class');
      });
    });
  });
});
