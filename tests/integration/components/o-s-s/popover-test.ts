import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | o-s-s-/popover', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders with basic arguments', async function (assert) {
    await render(hbs`<OSS::Popover @title='Title test' @arrowplacement='top' />`);

    assert.dom('.oss-popover').hasClass('oss-popover--sm');
    assert.dom('.oss-popover__title').hasText('Title test');
  });

  test('The @subtitle param is properly rendered', async function (assert) {
    await render(hbs`<OSS::Popover @title='Title test' @arrowplacement='top' @subtitle='This is a subtitle test' />`);

    assert.dom('.oss-popover__subtitle').hasText('This is a subtitle test');
  });

  module('size validation', () => {
    test('When the @size param is "SM", it renders a small component', async function (assert) {
      await render(hbs`<OSS::Popover @title='Title test' @arrowplacement='top' @size='sm' />`);

      assert.dom('.oss-popover').hasClass('oss-popover--sm');
    });

    test('When the @size param is "MD", it renders a medium component', async function (assert) {
      await render(hbs`<OSS::Popover @title='Title test' @arrowplacement='top' @size='md' />`);

      assert.dom('.oss-popover').hasClass('oss-popover--md');
    });
  });

  module('named-block content validation', () => {
    test('Illustration named-block content renders', async function (assert) {
      await render(hbs`<OSS::Popover @title='Title test' @arrowplacement='top'>
        <:illustration>TEST1</:illustration>
      </OSS::Popover>`);

      assert.dom('.oss-popover__illustration').hasText('TEST1');
    });

    test('Contextual actions named-block content renders', async function (assert) {
      await render(hbs`<OSS::Popover @title='Title test' @arrowplacement='top'>
        <:contextual-actions>TEST2</:contextual-actions>
      </OSS::Popover>`);

      assert.dom('.oss-popover__contextualactions').hasText('TEST2');
    });

    test('Content named-block content renders', async function (assert) {
      await render(hbs`<OSS::Popover @title='Title test' @arrowplacement='top'>
        <:content>TEST3</:content>
      </OSS::Popover>`);

      assert.dom('.oss-popover__content').hasText('TEST3');
    });
  });

  module('arrow position validation', () => {
    test('When the @arrowPlacement param is "top", it renders with arrow on top', async function (assert) {
      await render(hbs`<OSS::Popover @title='Title test' @arrowplacement='top' />`);

      assert.dom('.oss-popover__arrow').hasClass('oss-popover__arrow--top');
    });

    test('When the @arrowPlacement param is "bottom", it renders with arrow on bottom', async function (assert) {
      await render(hbs`<OSS::Popover @title='Title test' @arrowplacement='bottom' />`);

      assert.dom('.oss-popover__arrow').hasClass('oss-popover__arrow--bottom');
    });

    test('When the @arrowPlacement param is "right", it renders with arrow on right', async function (assert) {
      await render(hbs`<OSS::Popover @title='Title test' @arrowplacement='right' />`);

      assert.dom('.oss-popover__arrow').hasClass('oss-popover__arrow--right');
    });

    test('When the @arrowPlacement param is "left", it renders with arrow on left', async function (assert) {
      await render(hbs`<OSS::Popover @title='Title test' @arrowplacement='left' />`);

      assert.dom('.oss-popover__arrow').hasClass('oss-popover__arrow--left');
    });
  });
});
