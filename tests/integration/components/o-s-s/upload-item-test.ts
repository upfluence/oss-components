import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';

import MockUploader from '@upfluence/oss-components/test-support/services/uploader';
import { FilePrivacy } from '@upfluence/oss-components/types/uploader';

const buildFile = (name = '1px.png', type = 'image/png') => {
  return new File(
    [new Blob(['iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='])],
    name,
    { type }
  );
};

module('Integration | Component | o-s-s/upload-item', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.owner.register('service:uploader', MockUploader);

    this.uploader = this.owner.lookup('service:uploader');
    this.file = { filename: 'foo.png', url: 'https://oss-components.org/foo.png', content_type: 'image/png' };
    this.validationRules = [{ type: 'filesize', value: '1MB' }];
    this.scope = 'anonymous';
    this.privacy = FilePrivacy.PUBLIC;
    this.onEdition = sinon.stub();
    this.onFileDeletion = sinon.stub();
    this.onUploadSuccess = sinon.stub();
  });

  module('provided file is a FileArtifact', function () {
    [
      { contentType: 'image/png', expected: 'fa-image' },
      { contentType: 'image/jpeg', expected: 'fa-image' },
      { contentType: 'video/mov', expected: 'fa-file-video' },
      { contentType: 'application/pdf', expected: 'fa-file-pdf' },
      { contentType: null, expected: 'fa-file-alt' },
      { contentType: 'foo', expected: 'fa-file-alt' }
    ].forEach((spec) => {
      test(`a badge with a matching icon is used when the file content type is: ${
        spec.contentType || 'empty'
      }`, async function (assert) {
        this.file.content_type = spec.contentType;

        await render(hbs`
          <OSS::UploadItem
            @uploader={{this.uploader}} @file={{this.file}}
            @rules={{this.validationRules}} @scope={{this.scope}} @privacy={{this.privacy}}
            @onEdition={{this.onEdition}} @onDeletion={{this.onFileDeletion}}
            @onUploadSuccess={{this.onUploadSuccess}} />
        `);

        assert.dom('.upf-badge i').hasClass('far');
        assert.dom('.upf-badge i').hasClass(spec.expected);
      });
    });

    test('its name is rendered properly', async function (assert) {
      await render(hbs`
        <OSS::UploadItem
          @uploader={{this.uploader}} @file={{this.file}}
          @rules={{this.validationRules}} @scope={{this.scope}} @privacy={{this.privacy}}
          @onEdition={{this.onEdition}} @onDeletion={{this.onFileDeletion}}
          @onUploadSuccess={{this.onUploadSuccess}} />
      `);

      assert.dom('[data-control-name="upload-item-filename"]').hasText('foo.png');
    });

    test('its size is rendered properly if present', async function (assert) {
      this.file.size = 100;
      await render(hbs`
        <OSS::UploadItem
          @uploader={{this.uploader}} @file={{this.file}}
          @rules={{this.validationRules}} @scope={{this.scope}} @privacy={{this.privacy}}
          @onEdition={{this.onEdition}} @onDeletion={{this.onFileDeletion}}
          @onUploadSuccess={{this.onUploadSuccess}} />
      `);

      assert.dom('[data-control-name="upload-item-filesize"]').hasText('100 B');
    });

    test('its size is not displayed if missing', async function (assert) {
      await render(hbs`
        <OSS::UploadItem
          @uploader={{this.uploader}} @file={{this.file}}
          @rules={{this.validationRules}} @scope={{this.scope}} @privacy={{this.privacy}}
          @onEdition={{this.onEdition}} @onDeletion={{this.onFileDeletion}}
          @onUploadSuccess={{this.onUploadSuccess}} />
      `);

      assert.dom('[data-control-name="upload-item-filesize]').doesNotExist();
    });

    test('clicking the view button opens the file url', async function (assert) {
      const windowOpenStub = sinon.stub(window, 'open');
      await render(hbs`
        <OSS::UploadItem
          @uploader={{this.uploader}} @file={{this.file}}
          @rules={{this.validationRules}} @scope={{this.scope}} @privacy={{this.privacy}}
          @onEdition={{this.onEdition}} @onDeletion={{this.onFileDeletion}}
          @onUploadSuccess={{this.onUploadSuccess}} />
      `);
      await click('[data-control-name="upload-item-view-button"]');
      assert.ok(windowOpenStub.calledOnceWithExactly(this.file.url, '_blank'));
      windowOpenStub.restore();
    });
  });

  module('provided file is a native File object', function (hooks) {
    hooks.beforeEach(function () {
      this.file = buildFile();
    });

    [
      { contentType: 'image/png', expected: 'fa-image' },
      { contentType: 'image/jpeg', expected: 'fa-image' },
      { contentType: 'video/mov', expected: 'fa-file-video' },
      { contentType: 'application/pdf', expected: 'fa-file-pdf' },
      { contentType: 'foo', expected: 'fa-file-alt' }
    ].forEach((spec) => {
      test(`a badge with a matching icon is used when the file content type is: ${
        spec.contentType || 'empty'
      }`, async function (assert) {
        this.file = buildFile('my-file', spec.contentType);

        await render(hbs`
          <OSS::UploadItem
            @uploader={{this.uploader}} @file={{this.file}}
            @rules={{this.validationRules}} @scope={{this.scope}} @privacy={{this.privacy}}
            @onEdition={{this.onEdition}} @onDeletion={{this.onFileDeletion}}
            @onUploadSuccess={{this.onUploadSuccess}} />
        `);

        assert.dom('.upf-badge i').hasClass('far');
        assert.dom('.upf-badge i').hasClass(spec.expected);
      });
    });

    test('its name is rendered properly', async function (assert) {
      await render(hbs`
        <OSS::UploadItem
          @uploader={{this.uploader}} @file={{this.file}}
          @rules={{this.validationRules}} @scope={{this.scope}} @privacy={{this.privacy}}
          @onEdition={{this.onEdition}} @onDeletion={{this.onFileDeletion}}
          @onUploadSuccess={{this.onUploadSuccess}} />
      `);

      assert.dom('[data-control-name="upload-item-filename"]').hasText('1px.png');
    });

    test('its size is rendered properly if present', async function (assert) {
      await render(hbs`
        <OSS::UploadItem
          @uploader={{this.uploader}} @file={{this.file}}
          @rules={{this.validationRules}} @scope={{this.scope}} @privacy={{this.privacy}}
          @onEdition={{this.onEdition}} @onDeletion={{this.onFileDeletion}}
          @onUploadSuccess={{this.onUploadSuccess}} />
      `);

      assert.dom('[data-control-name="upload-item-filesize"]').hasText('96 B');
    });

    test('the file is immediately uploaded', async function (assert) {
      const uploadStub = sinon.stub(this.uploader, 'upload');

      await render(hbs`
        <OSS::UploadItem
          @uploader={{this.uploader}} @file={{this.file}}
          @rules={{this.validationRules}} @scope={{this.scope}} @privacy={{this.privacy}}
          @onEdition={{this.onEdition}} @onDeletion={{this.onFileDeletion}}
          @onUploadSuccess={{this.onUploadSuccess}} />
      `);

      assert.ok(
        uploadStub.calledOnceWithExactly(
          // Partial match because the onSuccess, onFailure, and onProgress are component methods, hence not being
          // accessible from the tests.
          sinon.match({
            file: this.file,
            privacy: this.privacy,
            scope: this.scope
          }),
          this.validationRules
        )
      );
    });
  });

  module('common actions', function () {
    test('clicking the edit button triggers the onEdition action', async function (assert) {
      await render(hbs`
        <OSS::UploadItem
          @uploader={{this.uploader}} @file={{this.file}}
          @rules={{this.validationRules}} @scope={{this.scope}} @privacy={{this.privacy}}
          @onEdition={{this.onEdition}} @onDeletion={{this.onFileDeletion}}
          @onUploadSuccess={{this.onUploadSuccess}} />
      `);
      await click('[data-control-name="upload-item-edit-button"]');
      assert.ok(this.onEdition.calledOnce);
    });

    test('clicking the remove button triggers the onDeletion action', async function (assert) {
      await render(hbs`
        <OSS::UploadItem
          @uploader={{this.uploader}} @file={{this.file}}
          @rules={{this.validationRules}} @scope={{this.scope}} @privacy={{this.privacy}}
          @onEdition={{this.onEdition}} @onDeletion={{this.onFileDeletion}}
          @onUploadSuccess={{this.onUploadSuccess}} />
      `);
      await click('[data-control-name="upload-item-remove-button"]');
      assert.ok(this.onFileDeletion.calledOnce);
    });
  });
});
