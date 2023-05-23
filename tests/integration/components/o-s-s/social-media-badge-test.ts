import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render, settled, setupOnerror } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import sinon from 'sinon';

module('Integration | Component | o-s-s/social-media-badge', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.mediaType = 'pin';
    this.plain = false;
    this.selected = false;
    this.onToggle = () => {
      this.plain = !this.plain;
      this.selected = !this.selected;
    };
  });

  test('it renders', async function (assert) {
    await render(
      hbs`<OSS::SocialMediaBadge @mediaType={{this.mediaType}} @plain={{this.plain}} @selected={{this.selected}} @onToggle={{this.onToggle}}/>`
    );

    assert.dom('.oss-social-media-badge').exists();
  });

  module('@plain', () => {
    test('When @plain is not set class is not added', async function (assert) {
      await render(
        hbs`<OSS::SocialMediaBadge @mediaType={{this.mediaType}} @selected={{this.selected}} @onToggle={{this.onToggle}}/>`
      );

      assert.dom('.oss-social-media-badge').hasNoClass('oss-social-media-badge--plain');
    });

    test('When @plain is true class is added', async function (assert) {
      this.plain = true;

      await render(
        hbs`<OSS::SocialMediaBadge @mediaType={{this.mediaType}} @plain={{this.plain}} @selected={{this.selected}} @onToggle={{this.onToggle}}/>`
      );

      assert.dom('.oss-social-media-badge').hasClass('oss-social-media-badge--plain');
    });
  });

  module('@selected', () => {
    test('When @selected is not set class is not added', async function (assert) {
      await render(
        hbs`<OSS::SocialMediaBadge @mediaType={{this.mediaType}} @plain={{this.plain}} @onToggle={{this.onToggle}}/>`
      );

      assert.dom('.oss-social-media-badge').hasNoClass('oss-social-media-badge--selected');
    });

    test('When @selected is true class is added', async function (assert) {
      this.selected = true;

      await render(
        hbs`<OSS::SocialMediaBadge @mediaType={{this.mediaType}} @plain={{this.plain}} @selected={{this.selected}} @onToggle={{this.onToggle}}/>`
      );

      assert.dom('.oss-social-media-badge').hasClass('oss-social-media-badge--selected');
    });
  });

  module('When clicking on an item', () => {
    test('Then the @onToggle method is triggered', async function (assert) {
      this.mediaType = 'facebook_status';
      this.onToggle = sinon.spy();

      await render(
        hbs`<OSS::SocialMediaBadge @mediaType={{this.mediaType}} @plain={{this.plain}} @selected={{this.selected}} @onToggle={{this.onToggle}}/>`
      );

      await click('.oss-social-media-badge');
      assert.ok(this.onToggle.calledWith('facebook_status'));
    });
  });

  module('error management', () => {
    test('it throws an error if @selectedToggle is not provided', async function (assert) {
      setupOnerror((err: any) => {
        assert.equal(
          err.message,
          'Assertion Failed: [component][OSS::SocialMediaBadge] The @mediaType parameter of type SocialMediaType is mandatory'
        );
      });
      await render(
        hbs`<OSS::SocialMediaBadge @plain={{this.plain}} @selected={{this.selected}} @onToggle={{this.onToggle}}/>`
      );
      await settled();
    });

    test('it throws an error if @mediaType is not a value of MediaType', async function (assert) {
      this.mediaType = 'toto';

      setupOnerror((err: any) => {
        assert.equal(
          err.message,
          'Assertion Failed: [component][OSS::SocialMediaBadge] The @mediaType parameter should be a value of SocialMediaType'
        );
      });
      await render(
        hbs`<OSS::SocialMediaBadge @mediaType={{this.mediaType}} @plain={{this.plain}} @selected={{this.selected}} @onToggle={{this.onToggle}}/>`
      );
      await settled();
    });
  });
});
