import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { click } from '@ember/test-helpers';
import ToastService from '@upfluence/oss-components/services/toast';

module('Unit | Service | toast', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let service: ToastService = this.owner.lookup('service:toast');
    assert.ok(service);
    assert.ok(service instanceof ToastService);

    assert.ok(typeof service.info === 'function');
    assert.ok(typeof service.success === 'function');
    assert.ok(typeof service.warning === 'function');
    assert.ok(typeof service.error === 'function');
  });

  module('public methods', function () {
    test('.success', async function (assert: Assert) {
      let service: ToastService = this.owner.lookup('service:toast');
      service.success('Message', 'Title', { timeout: 100 });

      assert.dom(document.querySelector('body #toast-container.upf-toastr--container')).exists();
      assert
        .dom(document.querySelector('body #toast-container.upf-toastr--container .toast'))
        .hasClass('toast-success');
      assert
        .dom(document.querySelector('body #toast-container.upf-toastr--container .toast .toast-message'))
        .hasText('Message');
      assert
        .dom(document.querySelector('body #toast-container.upf-toastr--container .toast .toast-title'))
        .hasText('Title');
    });

    test('.info', async function (assert: Assert) {
      let service: ToastService = this.owner.lookup('service:toast');
      service.info('Message', 'Title', { timeout: 100 });

      assert.dom(document.querySelector('body #toast-container.upf-toastr--container')).exists();
      assert.dom(document.querySelector('body #toast-container.upf-toastr--container .toast')).hasClass('toast-info');
      assert
        .dom(document.querySelector('body #toast-container.upf-toastr--container .toast .toast-message'))
        .hasText('Message');
      assert
        .dom(document.querySelector('body #toast-container.upf-toastr--container .toast .toast-title'))
        .hasText('Title');
    });

    test('.warning', async function (assert: Assert) {
      let service: ToastService = this.owner.lookup('service:toast');
      service.warning('Message', 'Title', { timeout: 100 });

      assert.dom(document.querySelector('body #toast-container.upf-toastr--container')).exists();
      assert
        .dom(document.querySelector('body #toast-container.upf-toastr--container .toast'))
        .hasClass('toast-warning');
      assert
        .dom(document.querySelector('body #toast-container.upf-toastr--container .toast .toast-message'))
        .hasText('Message');
      assert
        .dom(document.querySelector('body #toast-container.upf-toastr--container .toast .toast-title'))
        .hasText('Title');
    });

    test('.error', async function (assert: Assert) {
      let service: ToastService = this.owner.lookup('service:toast');
      service.error('Message', 'Title', { timeout: 100 });

      assert.dom(document.querySelector('body #toast-container.upf-toastr--container')).exists();
      assert.dom(document.querySelector('body #toast-container.upf-toastr--container .toast')).hasClass('toast-error');
      assert
        .dom(document.querySelector('body #toast-container.upf-toastr--container .toast .toast-message'))
        .hasText('Message');
      assert
        .dom(document.querySelector('body #toast-container.upf-toastr--container .toast .toast-title'))
        .hasText('Title');
    });
  });

  module('toast options', function () {
    module('closeButton', function () {
      test('it should be displayed when enabled', async function (assert: Assert) {
        let service: ToastService = this.owner.lookup('service:toast');
        service.error('Message', 'Title', { timeout: 100 });

        assert.dom(document.querySelector('body .toast .toast-close-button')).exists();
        await click(<Element>document.querySelector('body .toast .toast-close-button'));
        assert.dom(document.querySelector('body .toast')).doesNotExist();
      });

      test('it should not be displayed when disabled', async function (assert: Assert) {
        let service: ToastService = this.owner.lookup('service:toast');
        service.error('Message', 'Title', { timeout: 100, closeButton: false });

        assert.dom(document.querySelector('body .toast .toast-close-button')).doesNotExist();
      });
    });

    module('tapToDismiss', function () {
      test('a tap on the toast should destroy it', async function (assert: Assert) {
        let service: ToastService = this.owner.lookup('service:toast');
        service.error('Message', 'Title', { timeout: 500 });

        await click(<Element>document.querySelector('body .toast'));
        assert.dom(document.querySelector('body .toast')).doesNotExist();
      });

      test('nothing happens on tap on the toast', async function (assert: Assert) {
        let service: ToastService = this.owner.lookup('service:toast');
        service.error('Message', 'Title', { timeout: 'none', tapToDismiss: false });

        await click(<Element>document.querySelector('body .toast'));
        assert.dom(document.querySelector('body .toast')).exists();
      });
    });

    module('onclick', function () {
      test('the onclick function is called when the toast is clicked', async function (assert: Assert) {
        let service: ToastService = this.owner.lookup('service:toast');
        service.error('Message', 'Title', {
          timeout: 'none',
          tapToDismiss: false,
          onclick: (e: MouseEvent) => {
            assert.equal(e.type, 'click');
          }
        });

        await click(<Element>document.querySelector('body .toast'));
        assert.expect(1);
      });
    });
  });
});
