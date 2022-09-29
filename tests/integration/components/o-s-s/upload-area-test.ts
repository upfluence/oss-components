import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render, triggerEvent } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';

import MockUploader from '@upfluence/oss-components/test-support/services/uploader';

module('Integration | Component | o-s-s/upload-area', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.owner.register('service:uploader', MockUploader);

    this.mockUploader = this.owner.lookup('service:uploader');
    this.validationRules = [{ type: 'filesize', value: '1MB' }];
    this.size = null;
    this.subtitle = 'JPG, PNG, PDF (Max 800x400px - 2MB)';
  });

  module('rendering', function () {
    module('browse action', function () {
      test('the browse text is contained in a link', async function (assert) {
        await render(hbs`
          <OSS::UploadArea
            @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
            @subtitle={{this.subtitle}} />
        `);

        assert.dom('.oss-upload-area .fx-col.fx-gap-px-3 .fx-row.fx-xalign-center.fx-gap-px-3 .upf-link').exists();
        assert
          .dom('.oss-upload-area .fx-col.fx-gap-px-3 .fx-row.fx-xalign-center.fx-gap-px-3 .upf-link')
          .hasText('browse');
      });

      test('clicking on browse text opens the hidden file input', async function (assert) {
        await render(hbs`
          <OSS::UploadArea
            @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
            @subtitle={{this.subtitle}} />
        `);
        assert.dom('.oss-upload-area input[type="file"]').exists();

        const fileInput: HTMLInputElement = document.querySelector('.oss-upload-area input[type="file"]')!;
        const fileInputClickStub = sinon.stub(fileInput, 'click');

        await click('.oss-upload-area .fx-col.fx-gap-px-3 .fx-row.fx-xalign-center.fx-gap-px-3 .upf-link');
        assert.ok(fileInputClickStub.calledOnce);
      });
    });

    module('size', function () {
      test('it renders in the default size when no size arg is provided', async function (assert) {
        await render(hbs`
          <OSS::UploadArea
            @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
            @subtitle={{this.subtitle}} />
        `);

        assert.dom('.oss-upload-area').hasClass('oss-upload-area--md');
      });

      test('it renders in the default size when no valid size is provided', async function (assert) {
        this.size = 'foo';
        await render(hbs`
          <OSS::UploadArea
            @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
            @subtitle={{this.subtitle}} />
        `);

        assert.dom('.oss-upload-area').hasClass('oss-upload-area--md');
      });

      test('it renders in the provided size when it is a valid one', async function (assert) {
        this.size = 'lg';
        await render(hbs`
          <OSS::UploadArea
            @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
            @subtitle={{this.subtitle}} />
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
            @subtitle={{this.subtitle}} />
        `);

        assert
          .dom('.oss-upload-area .fx-col.fx-gap-px-3 .fx-row.fx-xalign-center.fx-gap-px-3')
          .hasText('Drop your file here, or browse');
        assert.dom('.oss-upload-area .fx-col.fx-gap-px-3 .font-color-gray-500').doesNotExist();
      });

      test('it renders the subtitle when provided', async function (assert) {
        await render(hbs`
          <OSS::UploadArea
            @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
            @subtitle={{this.subtitle}} />
        `);

        assert
          .dom('.oss-upload-area .fx-col.fx-gap-px-3 .fx-row.fx-xalign-center.fx-gap-px-3')
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
            @disabled={{true}} @subtitle={{this.subtitle}} />
        `);

        assert.dom('.oss-upload-area').hasClass('oss-upload-area--disabled');
      });

      test('the browse word is not actionable', async function (assert) {
        await render(hbs`
          <OSS::UploadArea
            @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
            @disabled={{true}} @subtitle={{this.subtitle}} />
        `);

        assert
          .dom('.oss-upload-area .fx-col.fx-gap-px-3 .fx-row.fx-xalign-center.fx-gap-px-3 .upf-link')
          .doesNotExist();
      });
    });
  });

  module('drag and drop support', function () {
    module('disabled mode', function () {
      test('dragging a file over the component does not do nothing', async function (assert) {
        await render(hbs`
          <OSS::UploadArea
            @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
            @disabled={{true}} @subtitle={{this.subtitle}} />
        `);

        await triggerEvent('.oss-upload-area', 'dragenter');
        assert.dom('.oss-upload-area').hasNoClass('oss-upload-area--dragging');
      });
    });

    module('active mode', function (hooks) {
      hooks.beforeEach(function () {
        this.file = new File(
          [
            new Blob([
              'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='
            ])
          ],
          '1px.png',
          { type: 'image/png' }
        );
      });

      test('dragging a file over the component applies the right class', async function (assert) {
        await render(hbs`
          <OSS::UploadArea
            @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
            @subtitle={{this.subtitle}} />
        `);

        await triggerEvent('.oss-upload-area', 'dragenter');
        assert.dom('.oss-upload-area').hasClass('oss-upload-area--dragging');
      });

      test('dropped file is validated', async function (assert) {
        sinon.spy(this.mockUploader, 'validate');

        await render(hbs`
          <OSS::UploadArea
            @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
            @subtitle={{this.subtitle}} />
        `);
        await triggerEvent('.oss-upload-area', 'drop', {
          dataTransfer: { files: [this.file] }
        });

        assert.ok(
          this.mockUploader.validate.calledOnceWithExactly(
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

        const toastStub = sinon.stub(this.owner.lookup('service:toast'), 'error');
        const intlService = this.owner.lookup('service:intl');

        await render(hbs`
          <OSS::UploadArea
            @uploader={{this.mockUploader}} @rules={{this.validationRules}} @size={{this.size}}
            @subtitle={{this.subtitle}} />
        `);
        await triggerEvent('.oss-upload-area', 'drop', {
          dataTransfer: { files: [this.file] }
        });

        assert.ok(
          toastStub.calledWith(
            intlService.t(`oss-components.upload-area.errors.filetype.description`),
            intlService.t(`oss-components.upload-area.errors.filetype.title`)
          )
        );

        assert.ok(
          toastStub.calledWith(
            intlService.t(`oss-components.upload-area.errors.filesize.description`, { max_filesize: '1B' }),
            intlService.t(`oss-components.upload-area.errors.filesize.title`)
          )
        );
      });

      //test('the file display state is entered if the dropped file passes the validation', async function (assert) {});
    });
  });
});
