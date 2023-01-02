import hbs from 'htmlbars-inline-precompile';
import { action } from '@storybook/addon-actions';
import { MockUploader } from 'dummy/controllers/application';

const PrivacyTypes = ['public', 'private'];

export default {
  title: 'Components/OSS::UploadItem',
  component: 'upload-item',
  argTypes: {
    uploader: {
      type: { required: true },
      description: 'The uploader instance. The uploader can extends BaseUploader class in service/base-uploader.ts',
      table: {
        type: {
          summary: 'BaseUploader'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: null }
    },
    file: {
      type: { required: true },
      description: 'The definition of uploaded file',
      table: {
        type: {
          summary: 'File | FileArtifact'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'object' }
    },
    rules: {
      description: 'The rules to upload a file. There are two rules types: filesize and filetype',
      table: {
        type: {
          summary: 'FileValidator[]'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'array' }
    },
    privacy: {
      description:
        'The privacy value of uploaded file. If the value is public, it can be visible by everyone.Else it can be visible by logged use',
      table: {
        type: {
          summary: PrivacyTypes.join('|')
        },
        defaultValue: { summary: 'undefined' }
      },
      options: PrivacyTypes,
      control: { type: 'select' }
    },
    scope: {
      description: 'The scope value',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    onEdition: {
      description: 'Action triggers when the user click on the edition button',
      table: {
        category: 'Actions',
        type: {
          summary: 'onEdition(): void'
        }
      }
    },
    onDeletion: {
      description: 'Action triggers when the user click on the deletion button',
      table: {
        category: 'Actions',
        type: {
          summary: 'onDeletion(): void'
        }
      }
    },
    onUploadSuccess: {
      description: 'Action triggers when the a new file is uploaded',
      table: {
        category: 'Actions',
        type: {
          summary: 'onUploadSuccess(artifact: FileArtifact): void'
        }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'The upload item component'
      },
      iframeHeight: 200
    }
  }
};

const defaultFile = {
  key: 'key',
  filename: 'upfluence-blue-logo.svg',
  url: 'https://upfluence-common.s3.amazonaws.com/pictograms/upfluence-blue-logo.svg',
  content_type: 'svg',
  size: '517'
};
const defaultArgs = {
  uploader: MockUploader,
  file: defaultFile,
  rules: [
    { type: 'filesize', value: '10MB' },
    { type: 'filetype', value: ['image', 'pdf'] }
  ],
  privacy: 'private',
  scope: undefined,
  onEdition: action('onEdition'),
  onDeletion: action('onDeletion'),
  onUploadSuccess: action('onUploadSuccess')
};
const DefaultUsageTemplate = (args) => ({
  template: hbs`
    <div style="padding: 24px; background-color: white">
        <OSS::UploadItem @uploader={{this.uploader}} @file={{this.file}} @rules={{this.rules}} @privacy={{this.privacy}}
                         @scope={{this.scope}} @onEdition={{this.onEdition}} @onDeletion={{this.onDeletion}}
                         @onUploadSuccess={{this.onUploadSuccess}} />
    </div>
  `,
  context: args
});

export const Default = DefaultUsageTemplate.bind({});
Default.args = defaultArgs;
