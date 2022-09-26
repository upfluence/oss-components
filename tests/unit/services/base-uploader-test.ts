import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | base-uploader', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function () {
    this.service = this.owner.lookup('service:base-uploader');
  });

  test('it exists', function (assert) {
    assert.ok(this.service);
  });

  test('calling the `url` getter throws throws a NotImplemented error', function (assert: Assert) {
    try {
      this.service.url;
    } catch (err) {
      assert.equal(
        err.message,
        '[@upfluence/oss-components::uploader] NotImpemented: Please extend this service and inherit this method.'
      );
    }

    assert.expect(1);
  });

  test('calling the upload method throws a NotImplemented error', function (assert) {
    try {
      this.service.upload(
        {
          file: new File(
            [
              new Blob([
                'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='
              ])
            ],
            '1px.png',
            { type: 'image/png' }
          ),
          privacy: 'private',
          allowedExtensions: ['png'],
          scope: 'anonymous'
        },
        []
      );
    } catch (err) {
      assert.equal(
        err.message,
        '[@upfluence/oss-components::uploader] NotImpemented: Please extend this service and inherit this method.'
      );
    }
  });
});
