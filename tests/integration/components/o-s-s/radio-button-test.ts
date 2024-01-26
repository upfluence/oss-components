import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import sinon from 'sinon';
import click from '@ember/test-helpers/dom/click';

module('Integration | Component | o-s-s/radio-button', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<OSS::RadioButton />`);

    assert.dom('.oss-radio-btn').exists();
  });

  test('It shows the selected state if the @selected parameter is true', async function (assert) {
    await render(hbs`<OSS::RadioButton @selected={{true}} />`);
    assert.dom('.oss-radio-btn--selected').exists();
  });

  test('It shows the empty state if the @selected parameter is false', async function (assert) {
    await render(hbs`<OSS::RadioButton @selected={{false}} />`);
    assert.dom('.oss-radio-btn').exists();
    assert.dom('.oss-radio-btn--selected').doesNotExist();
  });

  test('It shows the selected/disabled state if the @selected parameter is true and the @disabled parameter is true', async function (assert) {
    await render(hbs`<OSS::RadioButton @selected={{true}} @disabled={{true}} />`);
    assert.dom('.oss-radio-btn--selected').exists();
    assert.dom('.oss-radio-btn--disabled').exists();
  });

  test('It shows the empty/disabled state if the @selected parameter is false and the @disabled parameter is true', async function (assert) {
    await render(hbs`<OSS::RadioButton @selected={{false}} @disabled={{true}} />`);
    assert.dom('.oss-radio-btn').exists();
    assert.dom('.oss-radio-btn--selected').doesNotExist();
    assert.dom('.oss-radio-btn--disabled').exists();
  });

  test('It triggers the onChange method on click when the @disabled parameter is false', async function (assert) {
    this.onChange = sinon.stub();
    await render(hbs`<OSS::RadioButton @selected={{false}} @onChange={{this.onChange}} />`);
    assert.dom('.oss-radio-btn').exists();
    await click('.oss-radio-btn');
    assert.true(this.onChange.calledOnceWithExactly(true));
  });

  test('It triggers the onChange method on click when the @disabled parameter is true', async function (assert) {
    this.onChange = sinon.stub();
    await render(hbs`<OSS::RadioButton @selected={{true}} @onChange={{this.onChange}} />`);
    assert.dom('.oss-radio-btn').exists();
    await click('.oss-radio-btn');
    assert.true(this.onChange.calledOnceWithExactly(false));
  });

  test("It doesn't trigger the onChange method on click when the @disabled parameter is true", async function (assert) {
    this.onChange = sinon.stub();
    await render(hbs`<OSS::RadioButton @selected={{false}} @disabled={{true}} @onChange={{this.onChange}} />`);
    await click('.oss-radio-btn');
    assert.true(this.onChange.notCalled);
  });
});
