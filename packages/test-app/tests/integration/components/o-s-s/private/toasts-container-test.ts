import { render, settled } from '@ember/test-helpers';

import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

import OSSToastsContainer from '@upfluence/oss-components/components/o-s-s/private/toasts-container';
import type ToastService from '@upfluence/oss-components/services/toast';
import type { ToastEntry } from '@upfluence/oss-components/services/toast';

function buildToast(id: number, type: ToastEntry['type'], subtitle: string): ToastEntry {
  return { id, createdAt: Date.now(), type, title: `Title ${id}`, subtitle, timeout: 'none' };
}

module('Integration | Component | o-s-s/private/toasts-container', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.toastService = this.owner.lookup('service:toast') as ToastService;
    this.ToastsContainer = OSSToastsContainer;
  });

  test('it renders the service toasts in order', async function (assert) {
    await render(hbs`<this.ToastsContainer />`);

    assert.dom('.toasts-container').exists({ count: 1 });
    assert.dom('.toasts-container .toast').doesNotExist();

    this.toastService.toasts = [buildToast(1, 'info', 'First'), buildToast(2, 'error', 'Second')];
    await settled();

    const toasts = this.element.querySelectorAll('.toasts-container .toast');
    assert.strictEqual(toasts.length, 2);
    assert.dom(toasts[0]).hasClass('toast--info');
    assert.dom(toasts[0].querySelector('.subtitle')).hasText('First');
    assert.dom(toasts[1]).hasClass('toast--error');
    assert.dom(toasts[1].querySelector('.subtitle')).hasText('Second');
  });

  test('a dismissed toast is removed', async function (assert) {
    this.toastService.toasts = [buildToast(1, 'info', 'First'), buildToast(2, 'error', 'Second')];
    await render(hbs`<this.ToastsContainer />`);

    this.toastService.dismiss(1);
    await settled();

    assert.dom('.toasts-container .toast').exists({ count: 1 });
    assert.dom('.toasts-container .toast').hasClass('toast--error');
  });
});
