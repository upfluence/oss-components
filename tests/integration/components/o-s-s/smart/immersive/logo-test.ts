import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';

module('Integration | Component | o-s-s/smart/immersive/logo', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders with default icon mode', async function (assert) {
    this.icon = 'fa:star';
    this.editable = false;

    await render(hbs`<OSS::Smart::Immersive::Logo
      @icon={{this.icon}}
      @editable={{this.editable}}
    />`);

    assert.dom('.logo-icon').exists();
    assert.dom('.logo-icon').hasClass('logo-icon-color_star');
    assert.dom('i.fad.fa-fa').exists();
    assert.dom('.edit-overlay').doesNotExist();
  });

  test('it renders edit overlay when editable', async function (assert) {
    this.icon = 'fa:pen';
    this.editable = true;
    this.onClick = sinon.stub();

    await render(hbs`<OSS::Smart::Immersive::Logo
      @icon={{this.icon}}
      @editable={{this.editable}}
      @onClick={{this.onClick}}
    />`);

    assert.dom('.edit-overlay').exists();
    await this.element.querySelector('.edit-overlay').click();
    assert.ok(this.onClick.calledOnce);
  });

  test('it renders image mode when url is provided', async function (assert) {
    this.url = 'https://example.com/image.png';
    this.editable = false;

    await render(hbs`<OSS::Smart::Immersive::Logo
      @url={{this.url}}
      @editable={{this.editable}}
    />`);

    assert.dom('.campaign-image').exists();
    let style = this.element.querySelector('.campaign-image').style.backgroundImage;
    assert.ok(style.includes(this.url));
    assert.dom('.logo-icon').doesNotExist();
  });
});
