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

  module('#validate method', function () {
    module('FileType validator', function () {});

    module('FileSize validator', function (hooks) {
      hooks.beforeEach(function () {
        this.request = {
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
        };
      });

      test('it does not pass if the file is heavier than the maximum allowed', function (assert) {
        this.validationRules = [{ type: 'filesize', value: '1B' }];
        assert.deepEqual(this.service.validate(this.request, this.validationRules), {
          passes: true,
          validations: [
            {
              passes: false,
              rule: {
                type: 'filesize',
                value: '1B'
              }
            }
          ]
        });
      });

      test('it passes if the file is heavier than the maximum allowed', function (assert) {
        this.validationRules = [{ type: 'filesize', value: '10MB' }];
        assert.deepEqual(this.service.validate(this.request, this.validationRules), {
          passes: true,
          validations: [
            {
              passes: true,
              rule: {
                type: 'filesize',
                value: '10MB'
              }
            }
          ]
        });
      });
    });
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
