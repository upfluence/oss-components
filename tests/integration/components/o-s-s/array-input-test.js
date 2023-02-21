import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, find, findAll, fillIn, triggerKeyEvent } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import sinon from 'sinon';

module('Integration | Component | OSS::ArrayInput', function (hooks) {
  setupRenderingTest(hooks);
  const onChange = sinon.stub();
  const validator = sinon.stub();

  async function fillInputAndValidate(keyword = 'keyword') {
    await fillIn('.array-input-container input', keyword);
    let input = find('.array-input-container input');
    await triggerKeyEvent(input, 'keydown', 'Enter', { code: 'Enter' });
  }

  test('it renders', async function (assert) {
    await render(hbs`<OSS::ArrayInput />`);
    assert.dom('.array-input-container').exists();
  });

  module('@values parameter', (hooks) => {
    hooks.beforeEach(function () {
      this.loadedValues = ['value1', 'value2'];
    });

    test('Passing @values parameter displays the items', async function (assert) {
      await render(hbs`<OSS::ArrayInput @values={{this.loadedValues}} />`);
      const domTags = await findAll('.upf-chip');
      assert.dom(domTags[0]).hasText('value1');
      assert.dom(domTags[1]).hasText('value2');
    });
  });

  module('WHEN @onChange function is set', (hooks) => {
    hooks.beforeEach(function () {
      this.onChange = onChange;
    });

    test('it is triggered on keyword addition', async function (assert) {
      await render(hbs`<OSS::ArrayInput @onChange={{this.onChange}} />`);
      await fillInputAndValidate();
      assert.ok(onChange.calledWith(['keyword']));
    });

    test('it is triggered on keyword deletion', async function (assert) {
      await render(hbs`<OSS::ArrayInput @onChange={{this.onChange}} />`);
      await fillInputAndValidate();
      assert.ok(onChange.calledWith(['keyword']));
      await click('.upf-chip i');
      assert.dom('.upf-chip').doesNotExist();
      assert.ok(onChange.calledWith([]));
    });

    test('it is triggered on keyword edition', async function (assert) {
      await render(hbs`<OSS::ArrayInput @onChange={{this.onChange}} />`);
      await fillInputAndValidate();
      assert.ok(onChange.calledWith(['keyword']));
      await triggerKeyEvent('.array-input-container input', 'keydown', 'Backspace', { code: 'Backspace' });
      assert.dom('.upf-chip').doesNotExist();
      assert.ok(onChange.calledWith([]));
    });
  });

  module('WHEN @onValidator function is set', (hooks) => {
    hooks.beforeEach(function () {
      this.validator = validator;
    });

    test('it is triggered on keyword addition', async function (assert) {
      await render(hbs`<OSS::ArrayInput @validator={{this.validator}} />`);
      await fillInputAndValidate('hashtag');
      assert.ok(validator.calledWith('hashtag'));
    });

    test('WHEN the validator is truthy, the value is added as a tag', async function (assert) {
      validator.returns(true);
      await render(hbs`<OSS::ArrayInput @validator={{this.validator}} />`);
      await fillInputAndValidate('hashtag');
      assert.ok(validator.calledWith('hashtag'));
      assert.ok(validator.returned(true));
      assert.dom('.upf-chip').exists();
      assert.dom('.upf-chip').hasText('hashtag');
    });

    test('WHEN the validator is falsy, the value is not added', async function (assert) {
      validator.returns(false);
      await render(hbs`<OSS::ArrayInput @validator={{this.validator}} />`);
      await fillInputAndValidate('hashtag');
      assert.ok(validator.calledWith('hashtag'));
      assert.ok(validator.returned(false));
      assert.dom('.upf-chip').doesNotExist();
    });
  });

  module('WHEN the user presses on the Backspace key', () => {
    test('If there are no tags, nothing happens', async function (assert) {
      await render(hbs`<OSS::ArrayInput />`);
      await triggerKeyEvent('.array-input-container input', 'keydown', 'Backspace', { code: 'Backspace' });
      assert.dom('.upf-chip').doesNotExist();
      assert.dom('.array-input-container').exists();
      assert.dom('.array-input-container input').exists();
    });

    test('If there are tags, the last one is removed and is passed to edit mode', async function (assert) {
      this.loadedValues = ['value1', 'value2'];
      await render(hbs`<OSS::ArrayInput @values={{this.loadedValues}} />`);
      let domTags = findAll('.upf-chip');
      assert.equal(domTags.length, 2);
      assert.dom(domTags[1]).hasText('value2');
      await triggerKeyEvent('.array-input-container input', 'keydown', 'Backspace', { code: 'Backspace' });
      domTags = findAll('.upf-chip');
      assert.equal(domTags.length, 1);
      assert.dom('.array-input-container input').hasValue('value2');
    });
  });

  module('Keyboard validation', function () {
    test('entries are validated when one of the extra keyboard trigger is hit', async function (assert) {
      await render(hbs`<OSS::ArrayInput @keyboardTriggers={{array " "}} />`);

      await fillIn('.array-input-container input', 'foobar');
      let input = find('.array-input-container input');
      await triggerKeyEvent(input, 'keydown', ' ');

      assert.dom('.upf-chip').exists();
      assert.dom('.upf-chip').hasText('foobar');
    });
  });

  test('Clicking on the remove icon suppresses the target entry', async function (assert) {
    this.loadedValues = ['value1', 'value2'];
    await render(hbs`<OSS::ArrayInput @values={{this.loadedValues}} />`);
    let domTagsRemove = findAll('.upf-chip');
    assert.equal(domTagsRemove.length, 2);
    await click('.upf-chip i');
    domTagsRemove = findAll('.upf-chip');
    assert.equal(domTagsRemove.length, 1);
    assert.dom('.upf-chip').hasText('value2');
  });
});
