import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { setupIntl } from 'ember-intl/test-support';
import { render, click } from '@ember/test-helpers';
import sinon from 'sinon';

import { setupClipboard, setupToast } from '@upfluence/oss-components/test-support';

module('Integration | Component | o-s-s/copy', function (hooks) {
  setupRenderingTest(hooks);
  setupIntl(hooks);
  setupClipboard(hooks);
  setupToast(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<OSS::Copy />`);

    assert.dom('.upf-btn--default').exists();
  });

  test('it renders when inline value is specified', async function (assert) {
    await render(hbs`<OSS::Copy @inline={{true}} />`);
    assert.dom('.oss-copy--inline').exists();
  });

  module('for @icon', () => {
    test('when value is undefined, it renders the default icon', async function (assert) {
      await render(hbs`<OSS::Copy />`);
      assert.dom('i.fa-copy').exists();
    });

    test('when value is defined, it renders the specified icon', async function (assert) {
      await render(hbs`<OSS::Copy @icon="far fa-jedi" />`);
      assert.dom('i.fa-jedi').exists();
    });
  });

  module('for @tooltip', () => {
    test('when value is undefined, it renders the default', async function (assert) {
      await render(hbs`<OSS::Copy />`);
      await assert.tooltip('.upf-btn--default').hasTitle('Copy');
    });

    test('when value is defined, it renders the specified tooltip', async function (assert) {
      this.tooltip = 'Custom tooltip';
      await render(hbs`<OSS::Copy @tooltip={{this.tooltip}} />`);
      await assert.tooltip('.upf-btn--default').hasTitle(this.tooltip);
    });
  });

  module('on non-Chrome browsers the button is always displayed', function (hooks) {
    hooks.beforeEach(function () {
      (window as any).chrome = null;
    });

    test('nothing is rendered', async function (assert) {
      await render(hbs`<OSS::Copy />`);
      assert.dom('.upf-btn--default').exists();
    });
  });

  module('the clipboard-write permission is not granted', function (hooks) {
    hooks.beforeEach(function () {
      this.permissionQueryStub.restore();
      this.permissionQueryStub = sinon
        .stub(navigator.permissions, 'query')
        .resolves({ name: 'clipboard-write', state: 'denied' } as PermissionStatus);
    });

    test('nothing is rendered', async function (assert) {
      await render(hbs`<OSS::Copy />`);

      assert.ok(this.permissionQueryStub.calledOnceWithExactly({ name: 'clipboard-write' }));
      assert.dom('.oss-copy--inline').doesNotExist();
      assert.dom('.upf-btn--default').doesNotExist();
    });
  });

  module('when clicking', function (hooks) {
    hooks.afterEach(function () {
      sinon.restore();
    });

    test('the info toast is rendered', async function (assert) {
      sinon.stub(navigator.clipboard, 'writeText').resolves();

      await render(hbs`<OSS::Copy @value="test" />`);
      await click('.upf-btn--default');

      assert.true(
        this.toastInfoStub.calledOnceWithExactly(
          this.intl.t('oss-components.copy.success.subtitle'),
          this.intl.t('oss-components.copy.success.title')
        )
      );
    });

    test('the error toast is rendered', async function (assert) {
      sinon.stub(navigator.clipboard, 'writeText').rejects();

      await render(hbs`<OSS::Copy @value="test" />`);
      await click('.upf-btn--default');

      assert.true(
        this.toastErrorStub.calledOnceWithExactly(
          this.intl.t('oss-components.copy.error.subtitle'),
          this.intl.t('oss-components.copy.error.title')
        )
      );
    });

    test('the clipboard writeText method is called', async function (assert) {
      const writeTextStub = sinon.stub(navigator.clipboard, 'writeText').resolves();

      this.textForCopy = 'test';

      await render(hbs`<OSS::Copy @value={{this.textForCopy}} />`);
      await click('.upf-btn--default');

      assert.true(writeTextStub.calledOnceWithExactly(this.textForCopy));
    });

    module('with @animated', function (hooks) {
      hooks.beforeEach(function () {
        sinon.stub(navigator.clipboard, 'writeText').resolves();
      });

      test('when animation is disabled, info toast is rendered', async function (assert) {
        await render(hbs`<OSS::Copy @value="test" @animated={{false}} />`);
        await click('.upf-btn--default');

        assert.true(
          this.toastInfoStub.calledOnceWithExactly(
            this.intl.t('oss-components.copy.success.subtitle'),
            this.intl.t('oss-components.copy.success.title')
          )
        );
      });

      test('when animation is enabled, no toast is rendered', async function (assert) {
        await render(hbs`<OSS::Copy @value="test" @animated={{true}} />`);
        await click('.upf-btn--default');

        assert.true(this.toastInfoStub.notCalled);
      });

      test('when animation is enabled, checkmark icon is displayed', async function (assert) {
        await render(hbs`<OSS::Copy @value="test" @animated={{true}} />`);

        assert.dom('i.fa-check').doesNotExist();

        await click('.upf-btn--default');

        assert.dom('i.fa-check').exists();
      });

      test('when animation is enabled, button has animation class during animation', async function (assert) {
        await render(hbs`<OSS::Copy @value="test" @animated={{true}} />`);

        assert.dom('[data-control-name="copy-content-button"].oss-copy--animation').doesNotExist();

        await click('[data-control-name="copy-content-button"]');

        assert.dom('[data-control-name="copy-content-button"].oss-copy--animation').exists();
      });

      test('when animation is enabled on inline copy, checkmark is displayed', async function (assert) {
        await render(hbs`<OSS::Copy @value="test" @inline={{true}} @animated={{true}} />`);

        assert.dom('i.fa-check').doesNotExist();

        await click('[data-control-name="copy-content-button"]');

        assert.dom('i.fa-check').exists();
      });
    });
  });
});
