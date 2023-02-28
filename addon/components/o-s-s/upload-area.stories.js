import hbs from 'htmlbars-inline-precompile';
import { action } from '@storybook/addon-actions';
import { MockUploader } from 'dummy/controllers/application';

const PrivacyTypes = ['public', 'private'];
const SizeTypes = ['md', 'lg'];

export default {
  title: 'Components/OSS::UploadArea',
  component: 'upload-area',
  argTypes: {
    uploader: {
      type: { required: true },
      description: 'The uploader instance. The uploader can extend BaseUploader class in service/base-uploader.ts',
      table: {
        type: {
          summary: 'BaseUploader'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: null }
    },
    subtitle: {
      description: 'The subtitle value',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    disabled: {
      description: 'If disabled, it will be impossible to upload file',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: false }
      },
      control: { type: 'boolean' }
    },
    privacy: {
      description:
        'The privacy value of uploaded file. If the value is public, it will be visible by everyone, otherwise it will only be visible by logged-in users',
      table: {
        type: {
          summary: PrivacyTypes.join('|')
        },
        defaultValue: { summary: 'private' }
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
    artifact: {
      description: 'The definition of uploaded artifact',
      table: {
        type: {
          summary: 'FileArtifact'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'object' }
    },
    size: {
      description: 'The size of the component',
      table: {
        type: {
          summary: SizeTypes.join('|')
        },
        defaultValue: { summary: 'md' }
      },
      options: SizeTypes,
      control: { type: 'select' }
    },
    multiple: {
      description: 'If true, can support multiple uploads',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: false }
      },
      control: { type: 'boolean' }
    },
    displayPreview: {
      description: 'Wether or not the image should be displayed in the badge after a successful upload.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: false }
      }
    },
    onUploadSuccess: {
      description:
        'Action called when the file is upload with success. This action has two definitions:<br>' +
        '- onUploadSuccess(artifact: FileArtifact): void (single mode)<br>' +
        '- onUploadSuccess(index: number, artifact: FileArtifact): void (multiple mode)',
      table: {
        category: 'Actions',
        type: {
          summary: null
        }
      }
    },
    onFileDeletion: {
      description:
        'Action called when the artifact is deleted. This action has two definitions:<br>' +
        '- onFileDeletion(): void (single mode)<br>' +
        '- onFileDeletion(index: number): void (multiple mode)',
      table: {
        category: 'Actions',
        type: {
          summary: null
        }
      }
    },
    onUploadFailure: {
      description:
        'Action called when the file is upload with error. This action has two definitions:<br>' +
        '- onUploadFailure(error: FailedUploadResponse): void (single mode)<br>' +
        '- onUploadFailure(index: number, error: FailedUploadResponse): void (multiple mode)',
      table: {
        category: 'Actions',
        type: {
          summary: 'onUploadFailure(error: FailedUploadResponse): void'
        }
      }
    },
    onVerificationFailure: {
      description: 'Action triggers when the upload verification fail',
      table: {
        category: 'Actions',
        type: {
          summary: 'onVerificationFailure(): void'
        }
      }
    },
    onHandleFileUpload: {
      description: 'Action triggers when the file is selected',
      table: {
        category: 'Actions',
        type: {
          summary: 'onHandleFileUpload(): void'
        }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'The drag and drop component to upload file.'
      },
      iframeHeight: 200
    }
  }
};

const defaultArgs = {
  uploader: MockUploader,
  subtitle: 'JPG, PNG, PDF (Max 800x400px - 2MB)',
  disabled: false,
  privacy: 'private',
  scope: undefined,
  rules: [
    { type: 'filesize', value: '10MB' },
    { type: 'filetype', value: ['image', 'pdf'] }
  ],
  artifact: undefined,
  size: 'md',
  multiple: false,
  onUploadSuccess: action('onUploadSuccess'),
  onFileDeletion: action('onFileDeletion')
};
const defaultArtifact = {
  key: 'key',
  filename: 'upfluence-blue-logo.svg',
  url: 'https://upfluence-common.s3.amazonaws.com/pictograms/upfluence-blue-logo.svg',
  content_type: 'svg',
  size: '517'
};
const DefaultUsageTemplate = (args) => ({
  template: hbs`
    <div style="padding: 24px; background-color: white">
        <OSS::UploadArea @uploader={{this.uploader}} @subtitle={{this.subtitle}} @disabled={{this.disabled}}
                         @privacy={{this.privacy}} @scope={{this.scope}} @rules={{this.rules}} @artifact={{this.artifact}}
                         @size={{this.size}} @multiple={{this.multiple}} @onUploadSuccess={{this.onUploadSuccess}}
                         @onFileDeletion={{this.onFileDeletion}} />
    </div>
  `,
  context: args
});

export const Default = DefaultUsageTemplate.bind({});
Default.args = defaultArgs;

export const SingleWithArtifact = DefaultUsageTemplate.bind({});
SingleWithArtifact.args = {
  ...defaultArgs,
  ...{
    artifact: defaultArtifact
  }
};

export const MultipleWithArtifact = DefaultUsageTemplate.bind({});
MultipleWithArtifact.args = {
  ...defaultArgs,
  ...{
    multiple: true,
    size: 'lg',
    artifact: defaultArtifact
  }
};
