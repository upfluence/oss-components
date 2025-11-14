import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, typeIn } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';

module('Integration | Component | o-s-s/smart/immersive/input', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.value = 'Jolie mouche';
    this.placeholder = "L'eteint ressort";
    this.loading = false;
    this.onChange = sinon.stub();
  });

  test('it renders', async function (assert) {
    await renderComponent();

    assert.dom('.smart-immersive-input-container').exists();
  });

  module('value', () => {
    test('When a value is filled, it renders a specific styling', async function (assert) {
      await renderComponent();

      assert.dom('.smart-immersive-input-container').hasClass('smart-immersive-input-container--filled');
    });

    test('When a value is empty, it renders a specific styling', async function (assert) {
      this.value = '';
      await renderComponent();

      assert.dom('.smart-immersive-input-container').hasNoClass('smart-immersive-input-container--filled');
    });
  });

  module('placeholder', () => {
    test('When a placeholder is empty, it renders a specific styling', async function (assert) {
      this.value = '';
      this.placeholder = '';
      await renderComponent();

      assert.dom('.smart-immersive-input-container input').hasAttribute('placeholder', '');
    });

    test('When a placeholder is filled, it renders a specific styling', async function (assert) {
      this.value = '';
      await renderComponent();

      assert.dom('.smart-immersive-input-container input').hasAttribute('placeholder', this.placeholder);
    });
  });

  module('OnChange', () => {
    test('When input is updated, it trigger the onChange action', async function (assert) {
      await renderComponent();

      assert.ok(this.onChange.notCalled);
      await typeIn('.smart-immersive-input-container input', 'a');
      assert.ok(this.onChange.calledOnceWith('Jolie mouchea'));
    });
  });

  module('loading', (hooks) => {
    hooks.beforeEach(function () {
      this.loading = true;
    });

    test('When input is loading, it display an animated div instead of the input', async function (assert) {
      await renderComponent();

      assert.dom('.smart-immersive-input-container input').doesNotExist();
      assert.dom('.loading-placeholder').exists();
      assert.dom('.loading-placeholder').hasText(this.placeholder);
    });

    test('Once loading is finish, it display an animation once', async function (assert) {
      await renderComponent();
      this.set('loading', false);
      assert.dom('.smart-immersive-input-container').hasClass('smart-rotating-gradient');
    });
  });

  module('Dynamic width', () => {
    test('Input has a min width of 50px', async function (assert) {
      this.value = '';
      this.placeholder = '';
      await renderComponent();

      const element = document.querySelector('.smart-immersive-input-container') as HTMLElement;
      assert.equal(element.offsetWidth, 52);
    });

    test('When input has value or placeholder, the size is based on input content', async function (assert) {
      await renderComponent();

      const element = document.querySelector('.smart-immersive-input-container') as HTMLElement;
      assert.equal(element.offsetWidth, 104);
      await typeIn('.smart-immersive-input-container input', 'more text');
      assert.equal(element.offsetWidth, 158);
    });
  });

  module('Prefix name block', () => {
    test('When no prefix is passed, prefix section is not displayed', async function (assert) {
      await render(
        hbs`<OSS::Smart::Immersive::Input @value={{this.value}} 
                                        @placeholder={{this.placeholder}}
                                        @loading={{this.loading}}
                                        @onChange={{this.onChange}} />`
      );

      assert.dom('.smart-immersive-input-container .prefix').doesNotExist();
    });

    test('When a prefix is passed, prefix section is displayed properly', async function (assert) {
      await render(
        hbs`<OSS::Smart::Immersive::Input @value={{this.value}} 
                                        @placeholder={{this.placeholder}}
                                        @loading={{this.loading}}
                                        @onChange={{this.onChange}}>
            <:prefix>
              <i class="fas fa-user" />
            </:prefix>
          </OSS::Smart::Immersive::Input>`
      );

      assert.dom('.smart-immersive-input-container .prefix').exists();
      assert.dom('.smart-immersive-input-container .prefix i.fas.fa-user').exists();
    });
  });

  module('Suffix name block', () => {
    test('When no suffix is passed, suffix section is not displayed', async function (assert) {
      await render(
        hbs`<OSS::Smart::Immersive::Input @value={{this.value}} 
                                        @placeholder={{this.placeholder}}
                                        @loading={{this.loading}}
                                        @onChange={{this.onChange}} />`
      );

      assert.dom('.smart-immersive-input-container .suffix').doesNotExist();
    });

    test('When a suffix is passed, suffix section is displayed properly', async function (assert) {
      await render(
        hbs`<OSS::Smart::Immersive::Input @value={{this.value}} 
                                        @placeholder={{this.placeholder}}
                                        @loading={{this.loading}}
                                        @onChange={{this.onChange}}>
            <:suffix>
              <i class="fas fa-user" />
            </:suffix>
          </OSS::Smart::Immersive::Input>`
      );

      assert.dom('.smart-immersive-input-container .suffix').exists();
      assert.dom('.smart-immersive-input-container .suffix i.fas.fa-user').exists();
    });
  });

  async function renderComponent(): Promise<void> {
    return await render(
      hbs`<OSS::Smart::Immersive::Input @value={{this.value}} 
                                        @placeholder={{this.placeholder}}
                                        @loading={{this.loading}}
                                        @onChange={{this.onChange}} />`
    );
  }
});
