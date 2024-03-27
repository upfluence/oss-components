import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | o-s-s/layout/navbar/navitem', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <OSS::Layout::Navbar::NavItem
        @icon="fa-users"
        @label="Label"
      />
    `);
    assert.dom('.oss-navbar-item').exists();
  });

  test('it renders the icon', async function (assert) {
    await render(hbs`
      <OSS::Layout::Navbar::NavItem
        @icon="fa-users"
        @label="Label"
      />
    `);
    assert.dom('i').exists().hasClass('fa-users');
  });

  test('it renders the label', async function (assert) {
    await render(hbs`
      <OSS::Layout::Navbar::NavItem
        @icon="fa-users"
        @label="Label"
      />
    `);
    assert.dom('span').exists().hasText('Label');
  });

  test('it renders the extra content block content', async function (assert) {
    await render(hbs`
      <OSS::Layout::Navbar::NavItem
        @icon="fa-users"
        @label="Label"
      >
        <:extra>
          <div id="extra-content">
            Extra content
          </div>
        </:extra>
      </OSS::Layout::Navbar::NavItem>
    `);
    assert.dom('#extra-content').exists().hasText('Extra content');
  });

  test('it has the extra right classes when @active is provided', async function (assert) {
    await render(hbs`
      <OSS::Layout::Navbar::NavItem
        @icon="fa-users"
        @label="Label"
        @active={{true}}
      />
    `);
    assert.dom('.oss-navbar-item--active').exists();
  });
});
