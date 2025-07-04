import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render, triggerEvent, waitFor } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupIntl } from 'ember-intl/test-support';
import sinon from 'sinon';

import MockUploader from '@upfluence/oss-components/test-support/services/uploader';
import { setupToast } from '@upfluence/oss-components/test-support';

const file = new File(
  [new Blob(['iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='])],
  '1px.png',
  { type: 'image/png' }
);

module('Integration | Component | o-s-s/upload-area', function (hooks) {
  setupRenderingTest(hooks);
  setupIntl(hooks);
  setupToast(hooks);

  hooks.beforeEach(function () {
    this.owner.register('service:uploader', MockUploader);

    this.mockUploader = this.owner.lookup('service:uploader');
    this.validationRules = [{ type: 'filesize', value: '1MB' }];
    this.size = null;
    this.subtitle = 'JPG, PNG, PDF (Max 800x400px - 2MB)';
    this.onUploadSuccess = sinon.stub();
    this.onFileDeletion = sinon.stub();
  });

  module('rendering', function () {
    module('browse action', function () {
      test('the browse text is contained in a link', async function (assert) {
        await render(hbs`
          <OSS::UploadArea
            @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
            @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
        `);

        assert.dom('.oss-upload-area .upf-link').exists();
        assert.dom('.oss-upload-area .upf-link').hasText('browse');
      });

      test('clicking on browse text opens the hidden file input', async function (assert) {
        await render(hbs`
          <OSS::UploadArea
            @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
            @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
        `);
        assert.dom('.oss-upload-area-container input[type="file"]').exists();

        const fileInput: HTMLInputElement = document.querySelector('.oss-upload-area-container input[type="file"]')!;
        const fileInputClickStub = sinon.stub(fileInput, 'click');

        await click('.oss-upload-area .upf-link');
        assert.ok(fileInputClickStub.calledOnce);
      });
    });

    module('size', function () {
      test('it renders in the default size when no size arg is provided', async function (assert) {
        await render(hbs`
          <OSS::UploadArea
            @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
            @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
        `);

        assert.dom('.oss-upload-area').hasClass('oss-upload-area--md');
      });

      test('it renders in the default size when no valid size is provided', async function (assert) {
        this.size = 'foo';
        await render(hbs`
          <OSS::UploadArea
            @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
            @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
        `);

        assert.dom('.oss-upload-area').hasClass('oss-upload-area--md');
      });

      test('it renders in the provided size when it is a valid one', async function (assert) {
        this.size = 'lg';
        await render(hbs`
          <OSS::UploadArea
            @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
            @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
        `);

        assert.dom('.oss-upload-area').hasClass('oss-upload-area--lg');
      });
    });

    module('subtitle', function () {
      test('it renders only the title when no subtitle is provided', async function (assert) {
        this.subtitle = null;

        await render(hbs`
          <OSS::UploadArea
            @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
            @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
        `);

        assert
          .dom('.oss-upload-area .fx-col.fx-gap-px-3 .font-color-gray-900')
          .hasText('Drop your file here, or browse');
        assert.dom('.oss-upload-area .fx-col.fx-gap-px-3 .font-color-gray-500').doesNotExist();
      });

      test('it renders the subtitle when provided', async function (assert) {
        await render(hbs`
          <OSS::UploadArea
            @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
            @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
        `);

        assert
          .dom('.oss-upload-area .fx-col.fx-gap-px-3 .font-color-gray-900')
          .hasText('Drop your file here, or browse');
        assert.dom('.oss-upload-area .fx-col.fx-gap-px-3 .font-color-gray-500').exists();
        assert.dom('.oss-upload-area .fx-col.fx-gap-px-3 .font-color-gray-500').hasText(this.subtitle);
      });
    });

    module('disabled mode', function () {
      test('the right class is applied on the component', async function (assert) {
        await render(hbs`
          <OSS::UploadArea
            @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
            @disabled={{true}} @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
        `);

        assert.dom('.oss-upload-area').hasClass('oss-upload-area--disabled');
      });

      test('the browse word is not actionable', async function (assert) {
        await render(hbs`
          <OSS::UploadArea
            @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
            @disabled={{true}} @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
        `);

        assert.dom('.oss-upload-area .upf-link').doesNotExist();
      });
    });
  });

  module('drag and drop support', function () {
    module('disabled mode', function () {
      test('dragging a file over the component does not do nothing', async function (assert) {
        await render(hbs`
          <OSS::UploadArea
            @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
            @disabled={{true}} @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
        `);

        await triggerEvent('.oss-upload-area', 'dragenter');
        assert.dom('.oss-upload-area').hasNoClass('oss-upload-area--dragging');
      });
    });

    module('active mode', function (hooks) {
      hooks.beforeEach(function () {
        this.file = file;
      });

      test('dragging a file over the component applies the right class', async function (assert) {
        await render(hbs`
          <OSS::UploadArea
            @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
            @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
        `);

        await triggerEvent('.oss-upload-area', 'dragenter');
        assert.dom('.oss-upload-area').hasClass('oss-upload-area--dragging');
      });

      test('dropped file is validated', async function (assert) {
        sinon.spy(this.mockUploader, 'validate');

        await render(hbs`
          <OSS::UploadArea
            @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
            @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
        `);
        await triggerEvent('.oss-upload-area', 'drop', {
          dataTransfer: { files: [this.file] }
        });

        assert.ok(
          this.mockUploader.validate.calledWithExactly(
            {
              file: this.file,
              privacy: 'private',
              scope: 'anonymous'
            },
            this.validationRules
          )
        );
      });

      test('error toasts are displayed if the dropped file does not pass the validation rules', async function (assert) {
        this.validationRules = [
          { type: 'filesize', value: '1B' },
          { type: 'filetype', value: ['pdf'] }
        ];

        await render(hbs`
          <OSS::UploadArea
            @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
            @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
        `);
        await triggerEvent('.oss-upload-area', 'drop', {
          dataTransfer: { files: [this.file] }
        });

        assert.ok(
          this.toastErrorStub.calledWith(
            this.intl.t(`oss-components.upload-area.errors.filetype.description`),
            this.intl.t(`oss-components.upload-area.errors.filetype.title`)
          )
        );

        assert.ok(
          this.toastErrorStub.calledWith(
            this.intl.t('oss-components.upload-area.errors.filesize.description', { max_filesize: '1B' }),
            this.intl.t('oss-components.upload-area.errors.filesize.title')
          )
        );
      });

      test('if onDryRun is passed, the uploaded file is passed to it if validated and no upload item is displayed', async function (assert) {
        this.onDryRun = sinon.stub();

        await render(hbs`
          <OSS::UploadArea
            @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
            @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} @onDryRun={{this.onDryRun}} />
        `);
        await triggerEvent('.oss-upload-area', 'drop', {
          dataTransfer: { files: [this.file] }
        });

        assert.dom('.oss-upload-item').doesNotExist();
        assert.dom('.oss-upload-area').exists();
        assert.ok(this.onDryRun.calledOnceWithExactly(sinon.match((file: unknown) => file instanceof File)));
      });

      test('the uploaded file is displayed if the dropped file passes the validation', async function (assert) {
        await render(hbs`
          <OSS::UploadArea
            @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
            @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
        `);
        await triggerEvent('.oss-upload-area', 'drop', {
          dataTransfer: { files: [this.file] }
        });

        assert.dom('.oss-upload-item').exists();
        assert.dom('.oss-upload-area').doesNotExist();
      });

      test('clicking on the remove button in the upload item moves back to the upload state', async function (assert) {
        await render(hbs`
          <OSS::UploadArea
            @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
            @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} @onFileDeletion={{this.onFileDeletion}} />
        `);
        await triggerEvent('.oss-upload-area', 'drop', {
          dataTransfer: { files: [this.file] }
        });
        await waitFor('.oss-upload-item [data-control-name="upload-item-remove-button"]');
        await click('.oss-upload-item [data-control-name="upload-item-remove-button"]');
        assert.dom('.oss-upload-item').doesNotExist();
        assert.dom('.oss-upload-area').exists();
        assert.ok(this.onFileDeletion.calledOnce);
      });

      test('clicking on the edit button in the upload item opens the hidden file input', async function (assert) {
        await render(hbs`
          <OSS::UploadArea
            @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
            @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
        `);
        await triggerEvent('.oss-upload-area', 'drop', {
          dataTransfer: { files: [this.file] }
        });

        const fileInput: HTMLInputElement = document.querySelector('.oss-upload-area-container input[type="file"]')!;
        const fileInputClickStub = sinon.stub(fileInput, 'click');

        await waitFor('.oss-upload-item [data-control-name="upload-item-edit-button"]');
        await click('.oss-upload-item [data-control-name="upload-item-edit-button"]');

        assert.ok(fileInputClickStub.calledOnce);
      });
    });
  });

  module('displaying an existing file', function (hooks) {
    hooks.beforeEach(function () {
      this.artifact = { filename: 'foo.png', url: 'https://oss-components.org/foo.png', content_type: 'image/png' };
    });

    test('the file is displayed using an upload-item', async function (assert) {
      await render(hbs`
        <OSS::UploadArea
          @uploader={{this.mockUploader}} @artifact={{this.artifact}} @rules={{this.validationRules}} @size={{this.size}}
          @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
      `);

      assert.dom('.oss-upload-area').doesNotExist();
      assert.dom('.oss-upload-item').exists();
      assert.dom('.oss-upload-item [data-control-name="upload-item-filename"]').hasText('foo.png');
    });

    test('clicking on the remove button in the upload item moves back to the upload state', async function (assert) {
      await render(hbs`
        <OSS::UploadArea
          @uploader={{this.mockUploader}} @artifact={{this.artifact}} @rules={{this.validationRules}} @size={{this.size}}
          @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} @onFileDeletion={{this.onFileDeletion}} />
      `);
      await click('.oss-upload-item [data-control-name="upload-item-remove-button"]');

      assert.dom('.oss-upload-item').doesNotExist();
      assert.dom('.oss-upload-area').exists();
      assert.ok(this.onFileDeletion.calledOnce);
    });

    test('clicking on the edit button in the upload item opens the hidden file input', async function (assert) {
      await render(hbs`
        <OSS::UploadArea
          @uploader={{this.mockUploader}} @artifact={{this.artifact}} @rules={{this.validationRules}} @size={{this.size}}
          @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
      `);

      const fileInput: HTMLInputElement = document.querySelector('.oss-upload-area-container input[type="file"]')!;
      const fileInputClickStub = sinon.stub(fileInput, 'click');

      await click('.oss-upload-item [data-control-name="upload-item-edit-button"]');

      assert.ok(fileInputClickStub.calledOnce);
    });
  });

  module('allow multiple files', function () {
    test('it allows the user to upload more than one file', async function (assert) {
      await render(hbs`
        <OSS::UploadArea
          @uploader={{this.mockUploader}} @multiple={{true}} @rules={{this.validationRules}}
          @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
      `);
      await triggerEvent('.oss-upload-area', 'drop', { dataTransfer: { files: [file] } });
      await triggerEvent('.oss-upload-area', 'drop', { dataTransfer: { files: [file] } });

      assert.dom('.oss-upload-area').exists();
      assert.dom('.oss-upload-item').exists({ count: 2 });
    });

    test('the user can remove a specific uploaded item', async function (assert) {
      await render(hbs`
        <OSS::UploadArea
          @uploader={{this.mockUploader}} @multiple={{true}} @rules={{this.validationRules}}
          @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
      `);
      await triggerEvent('.oss-upload-area', 'drop', { dataTransfer: { files: [file] } });
      await triggerEvent('.oss-upload-area', 'drop', { dataTransfer: { files: [file] } });

      assert.dom('.oss-upload-item').exists({ count: 2 });

      await waitFor('.oss-upload-item:first-child [data-control-name="upload-item-remove-button"]');
      await click('.oss-upload-item:first-child [data-control-name="upload-item-remove-button"]');

      assert.dom('.oss-upload-item').exists({ count: 1 });
    });
  });
});
