import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';

module('Integration | Component | o-s-s/stats/banner', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<OSS::Stats::Banner />`);

    assert.dom('.oss-stats-banner').exists();
    assert.dom('.oss-stats-banner__header').exists();
    assert.dom('.oss-stats-banner__bottom_content').exists();
  });

  test('when @loading is true and no related args or blocks are defined, it does not render skeletons', async function (assert) {
    await render(hbs`<OSS::Stats::Banner @loading={{true}} />`);

    assert.dom('.oss-stats-banner__skeleton--badge').doesNotExist();
    assert.dom('.oss-stats-banner__skeleton--title').doesNotExist();
    assert.dom('.oss-stats-banner__skeleton--extra-badge').doesNotExist();
    assert.dom('.oss-stats-banner__skeleton--stat-value').doesNotExist();
    assert.dom('.oss-stats-banner__skeleton--stat-extra').doesNotExist();
    assert.dom('.oss-stats-banner__skeleton--cta').doesNotExist();
  });

  test('when @loading is true, it renders skeletons only for defined args and named blocks', async function (assert) {
    this.title = 'Stats title';
    this.statValue = '$5,920';
    this.statExtraInfo = 'supplementary info';

    await render(hbs`
      <OSS::Stats::Banner
        @loading={{true}}
        @title={{this.title}}
        @statValue={{this.statValue}}
        @statExtraInfo={{this.statExtraInfo}}
      >
        <:badges>
          <OSS::Badge @text="TXT" @skin="primary" @size="sm" />
        </:badges>

        <:extra-badges>
          <div class="test-extra-badges">Extra badges</div>
        </:extra-badges>

        <:cta>
          <button type="button" class="test-cta">CTA</button>
        </:cta>
      </OSS::Stats::Banner>
    `);

    assert.dom('.oss-stats-banner__skeleton--badge').exists();
    assert.dom('.oss-stats-banner__skeleton--title').exists();
    assert.dom('.oss-stats-banner__skeleton--extra-badge').exists({ count: 2 });
    assert.dom('.oss-stats-banner__skeleton--stat-value').exists();
    assert.dom('.oss-stats-banner__skeleton--stat-extra').exists();
    assert.dom('.oss-stats-banner__skeleton--cta').exists();
    assert.dom('.oss-stats-banner .upf-badge').doesNotExist();
    assert.dom('.test-extra-badges').doesNotExist();
    assert.dom('.test-cta').doesNotExist();
  });

  test('when @loading is false and badges block is defined, it renders block content instead of badge skeleton', async function (assert) {
    await render(hbs`
      <OSS::Stats::Banner @loading={{false}}>
        <:badges>
          <OSS::Badge @text="TXT" @skin="primary" @size="sm" />
        </:badges>
      </OSS::Stats::Banner>
    `);

    assert.dom('.oss-stats-banner .upf-badge').exists();
    assert.dom('.oss-stats-banner .upf-badge .upf-badge__text').hasText('TXT');
    assert.dom('.oss-stats-banner .upf-badge').hasClass('upf-badge--primary');
    assert.dom('.oss-stats-banner .upf-badge').hasClass('upf-badge--size-sm');
    assert.dom('.oss-stats-banner__skeleton--badge').doesNotExist();
  });

  test('when @loading is false and title/stat values are defined, it renders text instead of skeletons', async function (assert) {
    this.title = 'Stats title';
    this.statValue = '$5,920';
    this.statExtraInfo = 'supplementary info';

    await render(
      hbs`<OSS::Stats::Banner @loading={{false}} @title={{this.title}} @statValue={{this.statValue}} @statExtraInfo={{this.statExtraInfo}} />`
    );

    assert.dom('.oss-stats-banner__content').hasText('Stats title');
    assert.dom('.oss-stats-banner__stat').includesText('$5,920');
    assert.dom('.oss-stats-banner__stat').includesText('supplementary info');
    assert.dom('.oss-stats-banner__skeleton--title').doesNotExist();
    assert.dom('.oss-stats-banner__skeleton--stat-value').doesNotExist();
    assert.dom('.oss-stats-banner__skeleton--stat-extra').doesNotExist();
  });

  test('when @loading is false and no field is defined, it does not render skeletons', async function (assert) {
    await render(hbs`<OSS::Stats::Banner @loading={{false}} />`);

    assert.dom('.oss-stats-banner__skeleton--badge').doesNotExist();
    assert.dom('.oss-stats-banner__skeleton--title').doesNotExist();
    assert.dom('.oss-stats-banner__skeleton--extra-badge').doesNotExist();
    assert.dom('.oss-stats-banner__skeleton--stat-value').doesNotExist();
    assert.dom('.oss-stats-banner__skeleton--stat-extra').doesNotExist();
    assert.dom('.oss-stats-banner__skeleton--cta').doesNotExist();
  });

  test('when @loading is true and only a content block is defined, it does not render a title skeleton', async function (assert) {
    await render(hbs`
      <OSS::Stats::Banner @loading={{true}}>
        <:content>
          <div class="test-content">Content</div>
        </:content>
      </OSS::Stats::Banner>
    `);

    assert.dom('.test-content').exists();
    assert.dom('.oss-stats-banner__skeleton--title').doesNotExist();
  });

  test('it renders content, cta and extra-badges named blocks and hides related skeletons when @loading is false', async function (assert) {
    await render(hbs`
      <OSS::Stats::Banner @loading={{false}}>
        <:badges>
          <OSS::Badge @text="TXT" @skin="primary" @size="sm" />
        </:badges>

        <:content>
          <div class="test-content">Content</div>
        </:content>

        <:extra-badges>
          <div class="test-extra-badges">Extra badges</div>
        </:extra-badges>

        <:cta>
          <button type="button" class="test-cta">CTA</button>
        </:cta>
      </OSS::Stats::Banner>
    `);

    assert.dom('.test-content').exists();
    assert.dom('.test-extra-badges').exists();
    assert.dom('.test-cta').exists();
    assert.dom('.oss-stats-banner .upf-badge').exists();
    assert.dom('.oss-stats-banner__skeleton--title').doesNotExist();
    assert.dom('.oss-stats-banner__skeleton--badge').doesNotExist();
    assert.dom('.oss-stats-banner__skeleton--extra-badge').doesNotExist();
    assert.dom('.oss-stats-banner__skeleton--cta').doesNotExist();
  });
});
