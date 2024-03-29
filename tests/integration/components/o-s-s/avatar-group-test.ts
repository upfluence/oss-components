import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | o-s-s/avatar-group', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.avatars = [
      {
        image: 'http://foo.co/bar.png',
        initials: 'TS'
      },
      {
        image: 'http://foo.co/baz.png',
        initials: 'OM'
      }
    ];
  });

  test('it displays the right number of avatars', async function (assert) {
    await render(hbs`<OSS::AvatarGroup @avatars={{this.avatars}} />`);
    assert.dom('.upf-avatar').exists({ count: 2 });
    assert.dom('.upf-avatar:first-child img').hasAttribute('src', 'http://foo.co/bar.png');
    assert.dom('.upf-avatar:last-child img').hasAttribute('src', 'http://foo.co/baz.png');
  });

  test('if no @size arg is provided, it should default to "md"', async function (assert) {
    await render(hbs`<OSS::AvatarGroup @avatars={{this.avatars}} />`);
    assert.dom('.upf-avatar:first-child').hasClass('upf-avatar--md');
    assert.dom('.upf-avatar:last-child').hasClass('upf-avatar--md');
  });

  test('if a @size arg is provided, it should be used for all displayed avatars', async function (assert) {
    await render(hbs`<OSS::AvatarGroup @avatars={{this.avatars}} @size="sm" />`);
    assert.dom('.upf-avatar:first-child').hasClass('upf-avatar--sm');
    assert.dom('.upf-avatar:last-child').hasClass('upf-avatar--sm');
  });

  test('if a @max arg is provided, we should display maximum that number of avatars and display remaining ones using a placeholder', async function (assert) {
    await render(hbs`<OSS::AvatarGroup @avatars={{this.avatars}} @max={{1}} />`);
    assert.dom('.upf-avatar').exists({ count: 2 });
    assert.dom('.upf-avatar:first-child img').hasAttribute('src', 'http://foo.co/bar.png');
    assert.dom('.upf-avatar:last-child img').doesNotExist();
    assert.dom('.upf-avatar:last-child').hasText('+1');
  });

  test('if a @loading arg is provided w/ no @loadingCount arg, we should display 3 avatars in loading state', async function (assert) {
    await render(hbs`<OSS::AvatarGroup @avatars={{this.avatars}} @loading={{true}} />`);
    assert.dom('.upf-avatar').exists({ count: 3 });
    assert.dom('.upf-avatar:first-child').hasClass('upf-avatar--loading');
    assert.dom('.upf-avatar:nth-child(2)').hasClass('upf-avatar--loading');
    assert.dom('.upf-avatar:nth-child(3)').hasClass('upf-avatar--loading');
  });

  test('if a @loading arg is provided w/ @loadingCount arg, we should display {{@loadingCount}} avatars in loading state', async function (assert) {
    await render(hbs`<OSS::AvatarGroup @avatars={{this.avatars}} @loading={{true}} @loadingCount={{1}} />`);
    assert.dom('.upf-avatar').exists({ count: 1 });
    assert.dom('.upf-avatar:first-child').hasClass('upf-avatar--loading');
  });
});
