import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | o-s-s/smart/feedback', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the component container', async function (assert) {
    await render(hbs`<OSS::Smart::Feedback />`);
    assert.dom('.oss-smart__feedback').exists();
  });

  test('it shows loading skeletons when @loading is true', async function (assert) {
    this.loading = true;

    await render(hbs`<OSS::Smart::Feedback @loading={{this.loading}} />`);

    assert.dom('.upf-smart-skeleton-effect').exists({ count: 2 });
  });

  test('it renders content string when @loading is false and @contentString is provided', async function (assert) {
    this.loading = false;
    this.contentString = 'Test feedback message';

    await render(hbs`
      <OSS::Smart::Feedback 
        @loading={{this.loading}} 
        @contentString={{this.contentString}} 
      />
    `);

    assert.dom('.oss-smart__generated').exists();
    assert.dom('.oss-smart__feedback__content__text').hasText('Test feedback message');
  });

  test('it renders content array when @loading is false and @contentArray is provided', async function (assert) {
    this.loading = false;
    this.contentArray = ['First line', ' Second line'];

    await render(hbs`
      <OSS::Smart::Feedback 
        @loading={{this.loading}} 
        @contentArray={{this.contentArray}} 
      />
    `);

    assert.dom('.oss-smart__generated').exists();
    assert.dom('.oss-smart__feedback__content__text').hasText('First line Second line');
  });

  test('it yields the icon named-block content', async function (assert) {
    await render(hbs`
      <OSS::Smart::Feedback>
        <:icon>
          <div class="test-blob">Blob Content</div>
        </:icon>
      </OSS::Smart::Feedback>
    `);

    assert.dom('.test-blob').hasText('Blob Content');
  });
});
