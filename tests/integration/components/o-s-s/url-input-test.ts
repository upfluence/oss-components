import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import fillIn from '@ember/test-helpers/dom/fill-in';
import typeIn from '@ember/test-helpers/dom/type-in';
import sinon from 'sinon';

module('Integration | Component | o-s-s/url-input', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<OSS::UrlInput @prefix="https://" />`);

    assert.dom('.oss-input-group').exists();
  });

  module('With @validationRegex parameter', () => {
    test('When the text matches the Regex, the onChange function has the newValue and the isValid parameter is set to true', async function (assert) {
      this.subdomainRegex = /^[a-zA-Z0-9]+[a-zA-Z0-9-._]*[a-zA-Z0-9]+$/;
      this.value = '';
      this.onChange = sinon.stub();

      await render(hbs`<OSS::UrlInput @prefix="https://" @suffix=".myshopify.com"
                                      @onChange={{this.onChange}} @value={{this.value}}
                                      @validationRegex={{this.subdomainRegex}} />`);
      await fillIn('input', 'fakedomai');
      await typeIn('input', 'n');
      assert.true(this.onChange.calledOnceWithExactly('fakedomain', true));
    });

    module("When the text doesn't match the Regex", () => {
      test('The onChange function has the newValue and the isValid parameter is set to false', async function (assert) {
        this.subdomainRegex = /^[a-zA-Z0-9]+[a-zA-Z0-9-._]*[a-zA-Z0-9]+$/;
        this.value = '';
        this.onChange = sinon.stub();

        await render(hbs`<OSS::UrlInput @prefix="https://" @suffix=".myshopify.com"
                                      @onChange={{this.onChange}} @value={{this.value}}
                                      @validationRegex={{this.subdomainRegex}} />`);
        await typeIn('input', 'a');
        assert.true(this.onChange.calledOnceWithExactly('a', false));
      });

      test('If no error message has been specified by the parent, a default one is displayed', async function (assert) {
        this.subdomainRegex = /^[a-zA-Z0-9]+[a-zA-Z0-9-._]*[a-zA-Z0-9]+$/;
        this.value = '';
        await render(hbs`<OSS::UrlInput @prefix="https://" @suffix=".myshopify.com"
                                      @onChange={{this.onChange}} @value={{this.value}}
                                      @validationRegex={{this.subdomainRegex}} />`);
        await typeIn('input', 'a');
        assert.dom('.text-color-error').hasText('This is not a valid URL.');
      });

      test('If an error message has been specified by the parent, it is displayed', async function (assert) {
        this.subdomainRegex = /^[a-zA-Z0-9]+[a-zA-Z0-9-._]*[a-zA-Z0-9]+$/;
        this.value = '';
        await render(hbs`<OSS::UrlInput @prefix="https://" @suffix=".myshopify.com"
                                      @onChange={{this.onChange}} @value={{this.value}}
                                      @errorMessage="This is a custom error message."
                                      @validationRegex={{this.subdomainRegex}} />`);
        await typeIn('input', 'a');
        assert.dom('.text-color-error').hasText('This is a custom error message.');
      });
    });
  });
});
