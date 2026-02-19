import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render, triggerEvent, waitFor } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupIntl } from 'ember-intl/test-support';
import sinon from 'sinon';

import MockUploader from '@upfluence/oss-components/test-support/services/uploader';
import { setupToast } from '@upfluence/oss-components/test-support';
import { ALLOWED_FEEDBACK_MESSAGE_TYPES } from '@upfluence/oss-components/utils';

const file = new File(
  [new Blob(['iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='])],
  '1px.png',
  { type: 'image/png' }
);
const PDFfile = new File(
  [new Blob(['iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='])],
  '1px.pdf',
  { type: 'pdf' }
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
          this.toastErrorStub
            .getCall(0)
            .calledWithExactly(
              this.intl.t('oss-components.upload-area.errors.filesize.description', { max_filesize: '1B' }),
              this.intl.t('oss-components.upload-area.errors.filesize.title')
            )
        );
        assert.ok(
          this.toastErrorStub
            .getCall(1)
            .calledWithExactly(
              this.intl.t(`oss-components.upload-area.errors.filetype.description`),
              this.intl.t(`oss-components.upload-area.errors.filetype.title`)
            )
        );
      });

      test('for filesize rules, it renders the correct local feedback message', async function (assert) {
        this.validationRules = [{ type: 'filesize', value: '1B' }];

        await render(hbs`
          <OSS::UploadArea
            @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
            @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
        `);
        await triggerEvent('.oss-upload-area', 'drop', {
          dataTransfer: { files: [this.file] }
        });

        assert.dom('.oss-upload-area').hasClass('oss-upload-area--error');
        assert
          .dom(`.oss-upload-area-container .font-color-error-500`)
          .hasText(this.intl.t('oss-components.upload-area.errors.filesize.feedback', { max_filesize: '1B' }));
      });

      test('for filetype rules, it renders the correct local feedback message', async function (assert) {
        this.validationRules = [{ type: 'filetype', value: ['pdf'] }];

        await render(hbs`
          <OSS::UploadArea
            @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
            @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
        `);
        await triggerEvent('.oss-upload-area', 'drop', {
          dataTransfer: { files: [this.file] }
        });

        assert.dom('.oss-upload-area').hasClass('oss-upload-area--error');
        assert
          .dom(`.oss-upload-area-container .font-color-error-500`)
          .hasText(this.intl.t('oss-components.upload-area.errors.filetype.feedback'));
      });

      test('the local feedback is removed after new upload', async function (assert) {
        this.validationRules = [{ type: 'filetype', value: ['pdf'] }];

        await render(hbs`
        <OSS::UploadArea
          @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
          @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}}
          @onHandleFileUpload={{this.onHandleFileUpload}} />
      `);
        await triggerEvent('.oss-upload-area', 'drop', { dataTransfer: { files: [file] } });
        await triggerEvent('.oss-upload-area', 'drop', { dataTransfer: { files: [PDFfile] } });
        await waitFor('[data-control-name="upload-item-remove-button"]');
        await click('[data-control-name="upload-item-remove-button"]');

        assert.dom('.oss-upload-area').doesNotHaveClass('oss-upload-area--error');
        assert.dom(`.oss-upload-area-container .font-color-error-500`).doesNotExist();
      });

      test('the local feedback is removed after new upload in multiple mode', async function (assert) {
        this.validationRules = [{ type: 'filetype', value: ['pdf'] }];

        await render(hbs`
        <OSS::UploadArea
          @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
          @subtitle={{this.subtitle}} @multiple={{true}} @onUploadSuccess={{this.onUploadSuccess}}
          @onHandleFileUpload={{this.onHandleFileUpload}} />
      `);
        await triggerEvent('.oss-upload-area', 'drop', { dataTransfer: { files: [file] } });
        await triggerEvent('.oss-upload-area', 'drop', { dataTransfer: { files: [PDFfile] } });

        assert.dom('.oss-upload-area').doesNotHaveClass('oss-upload-area--error');
        assert.dom(`.oss-upload-area-container .font-color-error-500`).doesNotExist();
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

  module('for @onHandleFileUpload', function (hooks) {
    hooks.beforeEach(function () {
      this.onHandleFileUpload = sinon.stub();
    });

    test('it is called when a file is dropped', async function (assert) {
      await render(hbs`
        <OSS::UploadArea
          @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
          @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}}
          @onHandleFileUpload={{this.onHandleFileUpload}} />
      `);
      await triggerEvent('.oss-upload-area', 'drop', { dataTransfer: { files: [file] } });

      assert.true(this.onHandleFileUpload.calledOnceWithExactly());
    });

    test('it is called when a file is selected via the file input', async function (assert) {
      await render(hbs`
        <OSS::UploadArea
          @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
          @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}}
          @onHandleFileUpload={{this.onHandleFileUpload}} />
      `);

      const fileInput: HTMLInputElement = document.querySelector('.oss-upload-area-container input[type="file"]')!;
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(file);
      fileInput.files = dataTransfer.files;

      await triggerEvent(fileInput, 'change');

      assert.true(this.onHandleFileUpload.calledOnceWithExactly());
    });

    test('it is called before validation occurs', async function (assert) {
      this.validationRules = [{ type: 'filetype', value: ['pdf'] }];

      await render(hbs`
        <OSS::UploadArea
          @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
          @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}}
          @onHandleFileUpload={{this.onHandleFileUpload}} />
      `);
      await triggerEvent('.oss-upload-area', 'drop', { dataTransfer: { files: [file] } });

      assert.true(this.onHandleFileUpload.calledOnceWithExactly());
    });

    test('it is called in multiple mode for each file upload', async function (assert) {
      await render(hbs`
        <OSS::UploadArea
          @uploader={{this.mockUploader}} @multiple={{true}} @rules={{this.validationRules}}
          @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}}
          @onHandleFileUpload={{this.onHandleFileUpload}} />
      `);
      await triggerEvent('.oss-upload-area', 'drop', { dataTransfer: { files: [file] } });
      await triggerEvent('.oss-upload-area', 'drop', { dataTransfer: { files: [file] } });

      assert.true(this.onHandleFileUpload.calledTwice);
    });

    test('it is not called when component is disabled', async function (assert) {
      await render(hbs`
        <OSS::UploadArea
          @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
          @disabled={{true}} @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}}
          @onHandleFileUpload={{this.onHandleFileUpload}} />
      `);
      await triggerEvent('.oss-upload-area', 'drop', { dataTransfer: { files: [file] } });

      assert.true(this.onHandleFileUpload.notCalled);
    });
  });

  module('for @feedbackMessage', function () {
    test('it does not display feedback message when not provided', async function (assert) {
      await render(hbs`
        <OSS::UploadArea
          @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
          @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}} />
      `);

      assert.dom('.oss-upload-area-container .font-color-error-500').doesNotExist();
      assert.dom('.oss-upload-area-container .font-color-warning-500').doesNotExist();
      assert.dom('.oss-upload-area-container .font-color-success-500').doesNotExist();
    });

    test('it does not display feedback message when value is empty', async function (assert) {
      this.feedbackMessage = { type: 'error', value: '' };

      await render(hbs`
        <OSS::UploadArea
          @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
          @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}}
          @feedbackMessage={{this.feedbackMessage}} />
      `);

      assert.dom('.oss-upload-area-container .font-color-error-500').doesNotExist();
    });

    ALLOWED_FEEDBACK_MESSAGE_TYPES.forEach((type) => {
      test(`it displays ${type} feedback message with proper styling`, async function (assert) {
        this.feedbackMessage = { type, value: `This is an ${type} message` };

        await render(hbs`
        <OSS::UploadArea
          @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
          @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}}
          @feedbackMessage={{this.feedbackMessage}} />
      `);

        assert.dom('.oss-upload-area').hasClass(`oss-upload-area--${type}`);
        assert.dom(`.oss-upload-area-container .font-color-${type}-500`).hasText(`This is an ${type} message`);
      });

      test('after internal error, the correct feedback message takes precedence over this one', async function (assert) {
        this.feedbackMessage = { type, value: `This is an ${type} message` };
        this.validationRules = [{ type: 'filetype', value: ['pdf'] }];

        await render(hbs`
          <OSS::UploadArea
            @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
            @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}}
            @feedbackMessage={{this.feedbackMessage}} />
        `);
        await triggerEvent('.oss-upload-area', 'drop', {
          dataTransfer: { files: [this.file] }
        });

        assert.dom('.oss-upload-area').hasClass(`oss-upload-area--${type}`);
        assert.dom(`.oss-upload-area-container .font-color-${type}-500`).hasText(`This is an ${type} message`);
      });
    });

    test('it does not apply type class when feedback message type is invalid', async function (assert) {
      this.feedbackMessage = { type: 'invalid', value: 'Some message' };

      await render(hbs`
        <OSS::UploadArea
          @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
          @subtitle={{this.subtitle}} @onUploadSuccess={{this.onUploadSuccess}}
          @feedbackMessage={{this.feedbackMessage}} />
      `);

      assert.dom('.oss-upload-area').hasNoClass('oss-upload-area--invalid');
      assert.dom('.oss-upload-area').hasNoClass('oss-upload-area--error');
      assert.dom('.oss-upload-area').hasNoClass('oss-upload-area--warning');
      assert.dom('.oss-upload-area').hasNoClass('oss-upload-area--success');
    });
  });
});
