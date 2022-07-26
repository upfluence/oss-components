import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render, setupOnerror } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import sinon from 'sinon';
// import { render } from '@ember/test-helpers';
// import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | o-s-s/nav-tab', function (hooks) {
  setupRenderingTest(hooks);
  hooks.beforeEach(function () {
    this.onSelection = () => {};
    this.tabArray = [];
  });

  module('Default behavior', () => {
    test('basic render', async function (assert) {
      this.tabArray.push({ label: 'Tab' });
      await render(hbs`<OSS::NavTab @tabArray={{this.tabArray}} @onSelection={{this.onSelection}} />`);

      assert.dom('.tab-container').exists();
      assert.dom('.tab-container .tab').exists();
      assert.dom('.tab-content span').exists();

      assert.dom('.tab-content span').hasText('Tab');
    });

    test('It throws an error if @onSelection is not passed', async function (assert) {
      setupOnerror((err: any) => {
        assert.equal(
          err.message,
          'Assertion Failed: [component][OSS::NavTab] The parameter @onSelection of type function is mandatory'
        );
      });
      await render(hbs`<OSS::NavTab @tabArray={{this.tabArray}} />`);
    });

    test('It throws an error if @tabArray is not passed', async function (assert) {
      setupOnerror((err: any) => {
        assert.equal(err.message, 'Assertion Failed: [component][OSS::NavTab] The parameter @tabArray is mandatory');
      });
      await render(hbs`<OSS::NavTab @onSelection={{this.onSelection}} />`);
    });

    test('It throws an error if @label and @icon is missing for any elment in @tabArray', async function (assert) {
      this.tabArray.push({ label: '', icon: '' });
      setupOnerror((err: any) => {
        assert.equal(
          err.message,
          'Assertion Failed: [component][OSS::NavTab] The @label or @icon parameter is mandatory for each element in @tabArray'
        );
      });
      await render(hbs`<OSS::NavTab @onSelection={{this.onSelection}} @tabArray={{this.tabArray}} />`);
    });

    test('Add icon in Tab', async function (assert) {
      this.tabArray.push({ label: 'Tab', icon: 'far fa-thumbs-up' });
      await render(hbs`<OSS::NavTab @tabArray={{this.tabArray}} @onSelection={{this.onSelection}} />`);

      assert.dom('.tab-container').exists();
      assert.dom('.tab-container .tab').exists();
      assert.dom('.tab-content span').exists();
      assert.dom('.tab-content i').exists();

      assert.dom('.tab-content i').hasClass('fa-thumbs-up');
      assert.dom('.tab-content span').hasText('Tab');
    });

    test('Add info-cirlce in Tab', async function (assert) {
      this.tabArray.push({ label: 'Tab', infoCircle: true });
      await render(hbs`<OSS::NavTab @tabArray={{this.tabArray}} @onSelection={{this.onSelection}} />`);

      assert.dom('.tab-container').exists();
      assert.dom('.tab-container .tab').exists();
      assert.dom('.tab-content span').exists();
      assert.dom('.tab-content i').exists();

      assert.dom('.tab-content i').hasClass('fa-info-circle');
      assert.dom('.tab-content span').hasText('Tab');
    });

    test('Add notification dot in Tab', async function (assert) {
      this.tabArray.push({ label: 'Tab', notificationDot: true });
      await render(hbs`<OSS::NavTab @tabArray={{this.tabArray}} @onSelection={{this.onSelection}} />`);

      assert.dom('.tab-container').exists();
      assert.dom('.tab-container .tab').exists();
      assert.dom('.tab-content .fas.fa-circle').exists();
    });

    test('Add selected state on Tab', async function (assert) {
      this.tabArray.push({ label: 'Tab', selected: true });
      await render(hbs`<OSS::NavTab @tabArray={{this.tabArray}} @onSelection={{this.onSelection}} />`);

      assert.dom('.tab-container').exists();
      assert.dom('.tab-container .tab').exists();
      assert.dom('.tab-content span').exists();

      assert.dom('.tab-container .tab').hasClass('tab--selected');
      assert.dom('.tab-container .tab .border-display').hasStyle({ borderBottom: '2px solid rgb(13, 13, 230)' });
      assert.dom('.tab-content span').hasText('Tab');
    });

    test('Add disabled state on Tab', async function (assert) {
      this.tabArray.push({ label: 'Tab', disabled: true });
      await render(hbs`<OSS::NavTab @tabArray={{this.tabArray}} @onSelection={{this.onSelection}} />`);

      assert.dom('.tab-container').exists();
      assert.dom('.tab-container .tab').exists();
      assert.dom('.tab-content span').exists();

      assert.dom('.tab-container .tab').hasClass('tab--disabled');
      assert.dom('.tab-content span').hasText('Tab');
    });
  });

  test('When clicking on the close icon, the component triggers the @onRemove method', async function (assert) {
    this.onSelection = sinon.stub();
    this.tabArray.push({ label: 'Tab' });
    await render(hbs`<OSS::NavTab @tabArray={{this.tabArray}} @onSelection={{this.onSelection}} />`);
    await click('.tab');
    assert.true(this.onSelection.calledOnce);
  });
});
