import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, setupOnerror } from '@ember/test-helpers';

module('Integration | Component | o-s-s/input-group', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<OSS::InputGroup @prefix="username" />`);
    assert.dom('.oss-input-group').exists();
  });

  test('Passing the @prefix parameter displays the input prefix', async function (assert) {
    await render(hbs`<OSS::InputGroup @prefix="username" />`);
    assert.dom('.oss-input-group-row-prefix').hasText('username');
  });

  test('Passing the @suffix parameter displays the input suffix', async function (assert) {
    await render(hbs`<OSS::InputGroup @suffix="@domain.com" />`);
    assert.dom('.oss-input-group-row-suffix').hasText('@domain.com');
  });

  test('Passing the @suffix parameter displays the input suffix', async function (assert) {
    await render(hbs`<OSS::InputGroup @prefix="email" @suffix="@domain.com" />`);
    assert.dom('.oss-input-group-row-prefix').hasText('email');
    assert.dom('.oss-input-group-row-suffix').hasText('@domain.com');
  });

  test('Not passing an @autocomplete parameter defaults to "on" state', async function (assert) {
    await render(hbs`<OSS::InputGroup @prefix="email" @suffix="@domain.com"/>`);
    assert.dom('.upf-input').hasAttribute('autocomplete', 'on');
  });

  test('Passing a @autocomplete parameter works', async function (assert) {
    await render(hbs`<OSS::InputGroup @prefix="email" @suffix="@domain.com" @autocomplete="off"/>`);
    assert.dom('.upf-input').hasAttribute('autocomplete', 'off');
  });

  test('Passing the @errorMessage parameter displays the error message', async function (assert) {
    await render(hbs`<OSS::InputGroup @suffix="@domain.com" @errorMessage="This is an error." />`);
    assert.dom('.oss-input-group-row--error').exists();
    assert.dom('.oss-input-group span').hasText('This is an error.');
  });

  test('Passing the @errorMessage sets an error border on the whole compoenent', async function (assert) {
    await render(hbs`<OSS::InputGroup @prefix="random" @suffix="@domain.com" @errorMessage="This is an error." />`);
    assert.dom('.oss-input-group-row--error').exists();
    assert.dom('.oss-input-group-row--error').hasStyle({ borderColor: 'rgb(239, 68, 68)' });
  });

  test('it fails if no prefix or suffix parameters are passed', async function (assert: Assert) {
    setupOnerror((err: Error) => {
      assert.equal(
        err.message,
        'Assertion Failed: [component][OSS::InputGroup] No @prefix or @suffix parameter were passed. If you are not going to use any, you should use an OSS::InputContainer.'
      );
    });

    await render(hbs`<OSS::InputGroup />`);
  });
});
