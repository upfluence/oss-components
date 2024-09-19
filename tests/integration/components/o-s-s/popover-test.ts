import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | o-s-s-/popover', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders with basic arguments', async function (assert) {
    await render(hbs`<OSS::Popover @title='Title test' @arrowplacement='top' />`);

    assert.dom(document.querySelector('.oss-popover')).hasClass('oss-popover--sm');
    assert.dom(document.querySelector('.oss-popover__title')).hasText('Title test');
  });

  test('The @subtitle param is properly rendered', async function (assert) {
    await render(hbs`<OSS::Popover @title='Title test' @arrowplacement='top' @subtitle='This is a subtitle test' />`);

    assert.dom(document.querySelector('.oss-popover__subtitle')).hasText('This is a subtitle test');
  });

  module('size validation', () => {
    test('When the @size param is "SM", it renders a small component', async function (assert) {
      await render(hbs`<OSS::Popover @title='Title test' @arrowplacement='top' @size='sm' />`);

      assert.dom(document.querySelector('.oss-popover')).hasClass('oss-popover--sm');
    });

    test('When the @size param is "MD", it renders a medium component', async function (assert) {
      await render(hbs`<OSS::Popover @title='Title test' @arrowplacement='top' @size='md' />`);

      assert.dom(document.querySelector('.oss-popover')).hasClass('oss-popover--md');
    });
  });

  module('named-block content validation', () => {
    test('Illustration named-block content renders', async function (assert) {
      await render(hbs`<OSS::Popover @title='Title test' @arrowplacement='top'>
        <:illustration>TEST1</:illustration>
      </OSS::Popover>`);

      assert.dom(document.querySelector('.oss-popover__illustration')).hasText('TEST1');
    });

    test('Contextual actions named-block content renders', async function (assert) {
      await render(hbs`<OSS::Popover @title='Title test' @arrowplacement='top'>
        <:contextual-actions>TEST2</:contextual-actions>
      </OSS::Popover>`);

      assert.dom(document.querySelector('.oss-popover__contextualactions')).hasText('TEST2');
    });

    test('Content named-block content renders', async function (assert) {
      await render(hbs`<OSS::Popover @title='Title test' @arrowplacement='top'>
        <:content>TEST3</:content>
      </OSS::Popover>`);

      assert.dom(document.querySelector('.oss-popover__content')).hasText('TEST3');
    });
  });
});
