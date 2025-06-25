import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { setupIntl } from 'ember-intl/test-support';
import { render, settled, setupOnerror } from '@ember/test-helpers';

import { SkinDefinition } from '@upfluence/oss-components/components/o-s-s/badge';

module('Integration | Component | o-s-s/expandable-badge', function (hooks) {
  setupRenderingTest(hooks);
  setupIntl(hooks);

  module('sizes', function () {
    test('it sets the right class when usng a supported size', async function (assert: Assert) {
      await render(hbs`<OSS::ExpandableBadge @size="lg" @text="2x" @expandedLabel="content" />`);

      assert.dom('.upf-badge').exists();
      assert.dom('.upf-badge').hasClass('upf-badge--size-lg');
    });

    test('it defaults to md size if none is passed', async function (assert: Assert) {
      await render(hbs`<OSS::ExpandableBadge @text="2x" @expandedLabel="content" />`);

      assert.dom('.upf-badge').exists();
      assert.dom('.upf-badge').hasClass('upf-badge--size-md');
    });
  });

  module('Expansion behavior', function () {
    test('On touch event, it expands the badge', async function (assert: Assert) {
      await render(hbs`<OSS::ExpandableBadge @icon="fa-robot" @expandedLabel="content" />`);
      assert.dom('.upf-expandable-badge').doesNotHaveClass('upf-expandable-badge--expanded');

      const touch = new Touch({
        identifier: Date.now(),
        target: this.element.querySelector('.upf-expandable-badge') as EventTarget
      });

      await this.element.querySelector('.upf-expandable-badge')?.dispatchEvent(
        new TouchEvent('touchend', {
          touches: [touch],
          bubbles: true,
          cancelable: true
        })
      );
      await settled();
      assert.dom('.upf-expandable-badge').hasClass('upf-expandable-badge--expanded');
    });

    test('On mouse enter, it expands the badge', async function (assert: Assert) {
      await render(hbs`<OSS::ExpandableBadge @icon="fa-robot" @expandedLabel="content" />`);
      assert.dom('.upf-expandable-badge').doesNotHaveClass('upf-expandable-badge--expanded');

      await this.element.querySelector('.upf-expandable-badge')?.dispatchEvent(
        new MouseEvent('mouseenter', {
          bubbles: true,
          cancelable: true
        })
      );
      await settled();
      assert.dom('.upf-expandable-badge').hasClass('upf-expandable-badge--expanded');
    });

    test('On mouse leave, it collapses the badge', async function (assert: Assert) {
      await render(hbs`<OSS::ExpandableBadge @icon="fa-robot" @expandedLabel="content" />`);
      assert.dom('.upf-expandable-badge').doesNotHaveClass('upf-expandable-badge--expanded');

      await this.element.querySelector('.upf-expandable-badge')?.dispatchEvent(
        new MouseEvent('mouseenter', {
          bubbles: true,
          cancelable: true
        })
      );
      await settled();
      assert.dom('.upf-expandable-badge').hasClass('upf-expandable-badge--expanded');

      await this.element.querySelector('.upf-expandable-badge')?.dispatchEvent(
        new MouseEvent('mouseleave', {
          bubbles: true,
          cancelable: true
        })
      );
      await settled();
      assert.dom('.upf-expandable-badge').doesNotHaveClass('upf-expandable-badge--expanded');
    });
  });

  module('skins', function () {
    Object.keys(SkinDefinition).forEach((skin) => {
      test(`it sets the right class when using a supported skin: ${skin}`, async function (assert: Assert) {
        this.skin = skin;
        await render(hbs`<OSS::ExpandableBadge @skin={{this.skin}} @text="2x" @expandedLabel="content" />`);

        assert.dom('.upf-badge').exists();
        assert
          .dom('.upf-badge')
          .hasClass(`upf-badge--${skin.startsWith('xtd') ? skin.replace('xtd', 'extended') : skin}`);
      });
    });

    test('it adds the plain class when passed', async function (assert: Assert) {
      await render(hbs`<OSS::ExpandableBadge @skin="primary" @plain={{true}} @text="2x" @expandedLabel="content" />`);

      assert.dom('.upf-badge').hasClass('upf-badge--plain');
    });
  });

  module('content args', function () {
    test('it displays the right icon when using the @icon arg', async function (assert: Assert) {
      await render(hbs`<OSS::ExpandableBadge @icon="fas fa-users" @expandedLabel="content" />`);

      assert.dom('.upf-badge').exists();
      assert.dom('.upf-badge i').hasAttribute('class', 'fas fa-users');
    });

    test('it displays the right text when using the @text arg', async function (assert: Assert) {
      await render(hbs`<OSS::ExpandableBadge @text="2x" @expandedLabel="content" />`);

      assert.dom('.upf-badge').exists();
      assert.dom('.upf-badge .upf-badge__text').exists();
      assert.dom('.upf-badge .upf-badge__text').hasText('2x');
    });

    test('it displays the right image when using the @image arg', async function (assert: Assert) {
      await render(hbs`<OSS::ExpandableBadge @image="http://foo.co/bar.png" @expandedLabel="content" />`);

      assert.dom('.upf-badge').exists();
      assert.dom('.upf-badge img').exists();
      assert.dom('.upf-badge img').hasAttribute('src', 'http://foo.co/bar.png');
    });

    test('it displays the right flag when using the @flag arg', async function (assert: Assert) {
      await render(hbs`<OSS::ExpandableBadge @flag="fr" @expandedLabel="France" />`);

      assert.dom('.upf-badge .fflag.fflag-FR').exists();
    });
  });

  module('ColorClass parameters', function () {
    test('@iconColorClass applies to the icon when passed', async function (assert: Assert) {
      await render(
        hbs`<OSS::ExpandableBadge @icon="fas fa-users" @iconColorClass="text-primary" @expandedLabel="content" />`
      );

      assert.dom('.upf-expandable-badge i').hasClass('text-primary');
      assert.dom('.upf-expandable-badge__label').doesNotHaveClass('text-primary');
    });

    test('@labelColorClass applies to the span when passed', async function (assert: Assert) {
      await render(
        hbs`<OSS::ExpandableBadge @icon="fas fa-users" @labelColorClass="text-primary" @expandedLabel="content" />`
      );

      assert.dom('.upf-expandable-badge__label').hasClass('text-primary');
      assert.dom('.upf-expandable-badge i').doesNotHaveClass('text-primary');
    });
  });

  module('Error management', function () {
    test('it throws an error when an unsupported skin is passed', async function (assert: Assert) {
      setupOnerror((err: Error) => {
        assert.equal(
          err.message,
          'Assertion Failed: [component][OSS::ExpandableBadge] Unknown skin. Available skins are: primary, success, alert, error, xtd-cyan, xtd-orange, xtd-yellow, xtd-lime, xtd-blue, xtd-violet, xtd-smart'
        );
      });

      await render(hbs`<OSS::ExpandableBadge @skin="foo" @text="2x" @expandedLabel="content" />`);
    });

    test('it throws an error when an unsupported size is passed', async function (assert: Assert) {
      setupOnerror((err: Error) => {
        assert.equal(
          err.message,
          'Assertion Failed: [component][OSS::ExpandableBadge] Unknown size. Available sizes are: sm, md, lg'
        );
      });

      await render(hbs`<OSS::ExpandableBadge @size="foo" @text="2x" @expandedLabel="content" />`);
    });

    test('it throws an error if no @expandableLabel argument is passed', async function (assert: Assert) {
      setupOnerror((err: Error) => {
        assert.equal(
          err.message,
          'Assertion Failed: [component][OSS::ExpandableBadge] The @expandedLabel argument is mandatory.'
        );
      });

      await render(hbs`<OSS::ExpandableBadge @icon="fas fa-users" />`);
    });

    test('it throws an error if no argument is passed', async function (assert: Assert) {
      setupOnerror((err: Error) => {
        assert.equal(
          err.message,
          'Assertion Failed: [component][OSS::ExpandableBadge] One of @icon, @image, @flag or @text arguments is mandatory. You passed 0 arguments'
        );
      });

      await render(hbs`<OSS::ExpandableBadge />`);
    });

    test('it throws an error if more than one content argument is passed', async function (assert: Assert) {
      setupOnerror((err: Error) => {
        assert.equal(
          err.message,
          'Assertion Failed: [component][OSS::ExpandableBadge] One of @icon, @image, @flag or @text arguments is mandatory. You passed 2 arguments'
        );
      });

      await render(hbs`<OSS::ExpandableBadge @icon="fas fa-users" @text="2x" />`);
    });
  });
});
