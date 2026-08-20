import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';

module('Integration | Component | o-s-s/stats/banner', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<OSS::Stats::Banner @titleConfig={{hash text="My stat"}} />`);

    assert.dom('.oss-stats-banner').exists();
    assert.dom('.oss-stats-banner__header').exists();
    assert.dom('.oss-stats-banner__bottom_content').exists();
  });

  module('Loading state handling', function () {
    test('when @loading is true and no related args or blocks are defined, it renders title/stat skeletons', async function (assert) {
      await render(hbs`<OSS::Stats::Banner @loading={{true}} @titleConfig={{hash text="My stat"}} />`);

      assert.dom('.oss-stats-banner__skeleton--badge').doesNotExist();
      assert.dom('.oss-stats-banner__skeleton--title').exists();
      assert.dom('.oss-stats-banner__skeleton--extra-badge').doesNotExist();
      assert.dom('.oss-stats-banner__skeleton--stat-value').exists();
      assert.dom('.oss-stats-banner__skeleton--cta').doesNotExist();
    });

    test('when @loading is true, it renders title/stat skeletons and hides named block content', async function (assert) {
      this.title = 'Stats title';
      this.statValue = { label: '$5,920', suffix: 'supplementary info' };

      await render(hbs`
        <OSS::Stats::Banner
          @loading={{true}}
          @titleConfig={{hash text=this.title}}
          @statValue={{this.statValue}}
        >
          <:extra-badges>
            <div class="test-extra-badges">Extra badges</div>
          </:extra-badges>
        </OSS::Stats::Banner>
      `);

      assert.dom('.oss-stats-banner__skeleton--title').exists();
      assert.dom('.oss-stats-banner__skeleton--stat-value').exists();
      assert.dom('.oss-stats-banner__skeleton--extra-badge').doesNotExist();
      assert.dom('.oss-stats-banner__skeleton--cta').doesNotExist();
      assert.dom('.test-extra-badges').doesNotExist();
      assert.dom('.test-cta').doesNotExist();
    });

    test('when @loading is false and title/stat values are defined, it renders text instead of skeletons', async function (assert) {
      this.title = 'Stats title';
      this.statValue = { label: '$5,920', suffix: 'supplementary info' };

      await render(
        hbs`<OSS::Stats::Banner @loading={{false}} @titleConfig={{hash text=this.title}} @statValue={{this.statValue}} />`
      );

      assert.dom('.oss-stats-banner__content').hasText('Stats title');
      assert.dom('.oss-stats-banner__stat').includesText('$5,920');
      assert.dom('.oss-stats-banner__stat').includesText('supplementary info');
      assert.dom('.oss-stats-banner__skeleton--title').doesNotExist();
      assert.dom('.oss-stats-banner__skeleton--stat-value').doesNotExist();
    });

    test('when @loading is false and no field is defined, it does not render skeletons', async function (assert) {
      await render(hbs`<OSS::Stats::Banner @loading={{false}} @titleConfig={{hash text="My stat"}} />`);

      assert.dom('.oss-stats-banner__skeleton--badge').doesNotExist();
      assert.dom('.oss-stats-banner__skeleton--title').doesNotExist();
      assert.dom('.oss-stats-banner__skeleton--extra-badge').doesNotExist();
      assert.dom('.oss-stats-banner__skeleton--stat-value').doesNotExist();
      assert.dom('.oss-stats-banner__skeleton--cta').doesNotExist();
    });
  });

  module('Badge and icon handling', function () {
    test('when @badge is defined and @loading is false, it renders the badge and no skeleton', async function (assert) {
      await render(hbs`
        <OSS::Stats::Banner @loading={{false}} @titleConfig={{hash text="My stat"}} @badge={{hash text="TXT" skin="primary" size="sm"}} />
      `);

      assert.dom('.oss-stats-banner .upf-badge').exists();
      assert.dom('.oss-stats-banner .upf-badge .upf-badge__text').hasText('TXT');
      assert.dom('.oss-stats-banner .upf-badge').hasClass('upf-badge--primary');
      assert.dom('.oss-stats-banner__skeleton--badge').doesNotExist();
    });

    test('when @badge is defined and @loading is true, it still renders the badge', async function (assert) {
      await render(hbs`
        <OSS::Stats::Banner @loading={{true}} @titleConfig={{hash text="My stat"}} @badge={{hash text="TXT" skin="primary" size="sm"}} />
      `);

      assert.dom('.oss-stats-banner .upf-badge').exists();
    });

    test('when @badge.extraIcon is defined, it renders the icon next to the badge', async function (assert) {
      await render(hbs`
        <OSS::Stats::Banner @titleConfig={{hash text="My stat"}} @badge={{hash icon="fa-check" skin="success" extraIcon=(hash icon="fa-star")}} />
      `);

      assert.dom('.oss-stats-banner .fa-star').exists();
    });

    test('when @badge.extraIcon has a color, it applies the color as inline style', async function (assert) {
      await render(hbs`
        <OSS::Stats::Banner @titleConfig={{hash text="My stat"}} @badge={{hash icon="fa-check" skin="success" extraIcon=(hash icon="fa-star" color="red")}} />
      `);

      assert.dom('.oss-stats-banner .fa-star').hasAttribute('style', 'color:red');
    });
  });

  module('Title actions handling', function () {
    test('when @titleConfig.infoCircle is defined, it renders an info-circle icon next to the title', async function (assert) {
      await render(hbs`
        <OSS::Stats::Banner @titleConfig={{hash text="My stat" infoCircle="Helpful description"}} />
      `);

      assert.dom('.oss-stats-banner .fa-info-circle').exists();
    });

    test('when @titleConfig.infoCircle is not defined, it does not render an info-circle icon', async function (assert) {
      await render(hbs`<OSS::Stats::Banner @titleConfig={{hash text="My stat"}} />`);

      assert.dom('.oss-stats-banner .fa-info-circle').doesNotExist();
    });

    test('when the title-suffix block is defined, it renders its content in the title row', async function (assert) {
      await render(hbs`
        <OSS::Stats::Banner @titleConfig={{hash text="My stat"}}>
          <:title-suffix>
            <div class="test-dropdown">Dropdown</div>
          </:title-suffix>
        </OSS::Stats::Banner>
      `);

      assert.dom('.oss-stats-banner .test-dropdown').exists();
    });

    test('when no title suffix block is defined, it does not render dropdown content', async function (assert) {
      await render(hbs`<OSS::Stats::Banner @titleConfig={{hash text="My stat"}} />`);

      assert.dom('.oss-stats-banner .test-dropdown').doesNotExist();
    });
  });

  module('Named blocks handling', function () {
    test('when @loading is false, it renders extra-badges named block', async function (assert) {
      await render(hbs`
        <OSS::Stats::Banner
          @loading={{false}}
          @titleConfig={{hash text="My stat"}}
          @badge={{hash text="TXT" skin="primary" size="sm"}}
        >
          <:extra-badges>
            <div class="test-extra-badges">Extra badges</div>
          </:extra-badges>
        </OSS::Stats::Banner>
      `);

      assert.dom('.test-extra-badges').exists();
      assert.dom('.oss-stats-banner .upf-badge').exists();
      assert.dom('.oss-stats-banner__skeleton--badge').doesNotExist();
      assert.dom('.oss-stats-banner__skeleton--title').doesNotExist();
      assert.dom('.oss-stats-banner__skeleton--extra-badge').doesNotExist();
      assert.dom('.oss-stats-banner__skeleton--cta').doesNotExist();
    });

    test('when cta named block is defined, it renders multiple actions', async function (assert) {
      await render(hbs`
        <OSS::Stats::Banner @titleConfig={{hash text="My stat"}} @statValue={{hash label="$12,493"}}>
          <:cta>
            <button type="button" class="test-cta-primary">Primary</button>
            <button type="button" class="test-cta-secondary">Secondary</button>
          </:cta>
        </OSS::Stats::Banner>
      `);

      assert.dom('[data-control-name="stats-banner-cta"] .test-cta-primary').exists();
      assert.dom('[data-control-name="stats-banner-cta"] .test-cta-secondary').exists();
    });

    test('when default block content is defined and @loading is false, it does not render default content', async function (assert) {
      await render(hbs`
        <OSS::Stats::Banner @loading={{false}} @titleConfig={{hash text="My stat"}} @statValue={{hash label="$12,493"}}>
          <div class="test-default-content">Default content</div>
        </OSS::Stats::Banner>
      `);

      assert.dom('.test-default-content').doesNotExist();
    });

    test('when default block content is defined and @loading is true, it does not render default content', async function (assert) {
      await render(hbs`
        <OSS::Stats::Banner @loading={{true}} @titleConfig={{hash text="My stat"}} @statValue={{hash label="$12,493"}}>
          <div class="test-default-content">Default content</div>
        </OSS::Stats::Banner>
      `);

      assert.dom('.test-default-content').doesNotExist();
    });

    test('when @statValue.tags contains multiple tags, it renders all tags', async function (assert) {
      await render(hbs`
        <OSS::Stats::Banner
          @titleConfig={{hash text="My stat"}}
          @statValue={{hash
            label="$12,493"
            suffix="supplementary info"
            tags=(array (hash label="Hot" skin="warning") (hash label="New" skin="success" icon="fa-sparkles"))
          }}
        />
      `);

      assert.dom('.oss-stats-banner .upf-tag').exists({ count: 2 });
      assert.dom('.oss-stats-banner__stat-main-content').includesText('Hot');
      assert.dom('.oss-stats-banner__stat-main-content').includesText('New');
    });
  });
});
