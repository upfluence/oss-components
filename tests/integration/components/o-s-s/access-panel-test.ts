import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { setupIntl } from 'ember-intl/test-support';
import { fillIn, render, typeIn } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';
import { set } from '@ember/object';

module('Integration | Component | o-s-s/access-panel', function (hooks) {
  setupRenderingTest(hooks);
  setupIntl(hooks);

  hooks.beforeEach(function () {
    this.records = [{ label: 'foo' }, { label: 'bar' }];
    this.loading = false;
    this.initialLoad = false;
    this.loadMore = sinon.stub();
    this.onSearch = sinon.stub();
    this.onClose = sinon.stub();
  });

  async function renderComponent() {
    await render(
      hbs`<OSS::AccessPanel
          @records={{this.records}} @loading={{this.loading}} @initialLoad={{this.initialLoad}}
          @onBottomReached={{this.loadMore}} @onSearch={{this.onSearch}} @onClose={{this.onClose}}>
            <:header>Header</:header>
            <:columns>Columns</:columns>
            <:row as |record|>row display: {{record.label}}</:row>
            <:empty-state><div class="empty-state">empty state</div></:empty-state>
            <:no-results><div class="no-results">no search results</div></:no-results>
          </OSS::AccessPanel>
      `
    );
  }

  test('it renders the right empty state when no records are found and there is no ongoing search', async function (assert) {
    this.records = [];
    await renderComponent();

    assert.dom('.empty-state').exists();
    assert.dom('.empty-state').hasText('empty state');
  });

  test('the initial loading state is correctly displayed', async function (assert) {
    this.loading = true;
    this.initialLoad = true;
    await renderComponent();
    assert.dom('.oss-access-panel-container__row').exists({ count: 12 });
    assert.dom('.oss-access-panel-container__row .upf-skeleton-effect').exists({ count: 24 });
  });

  test('the initial loading state is correctly displayed', async function (assert) {
    this.loading = true;
    this.initialLoad = false;
    await renderComponent();

    assert.dom('.oss-access-panel-container__row').exists({ count: 5 });
    assert.dom('.oss-access-panel-container__row .upf-skeleton-effect').exists({ count: 6 });
  });

  test('The header named block is correctly filled', async function (assert) {
    await renderComponent();
    assert.dom('.oss-access-panel-container__header').exists();
    assert.dom('.oss-access-panel-container__header').hasText('Header');
  });

  test('The columns named block is correctly filled', async function (assert) {
    await renderComponent();
    assert.dom('.oss-access-panel-container__rows-header').exists();
    assert.dom('.oss-access-panel-container__rows-header').hasText('Columns');
  });

  test('The records are correctly displayed using the row named block', async function (assert) {
    await renderComponent();
    assert.dom('.oss-access-panel-container__row').exists({ count: 2 });
    assert.dom('.oss-access-panel-container__row:first-child').hasText('row display: foo');
    assert.dom('.oss-access-panel-container__row:last-child').hasText('row display: bar');
  });

  module('Search', function () {
    test('it calls the onSearch arg when a keyword is typed', async function (assert) {
      await renderComponent();
      await fillIn('.oss-input-container input', 'fo');
      await typeIn('.oss-input-container input', 'o', { delay: 0 });
      assert.ok(this.onSearch.calledOnceWithExactly('foo'));
    });

    test('it renders the right empty state when no records are found and there is an ongoing search', async function (assert) {
      this.onSearch = sinon.stub().callsFake(() => {
        set(this, 'records', []);
      });

      await renderComponent();
      await fillIn('.oss-input-container input', 'fo');
      await typeIn('.oss-input-container input', 'o', { delay: 0 });

      assert.dom('.no-results').exists();
      assert.dom('.no-results').hasText('no search results');
    });
  });
});
