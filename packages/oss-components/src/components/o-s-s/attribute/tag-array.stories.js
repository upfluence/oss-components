import { hbs } from 'ember-cli-htmlbars';

const Template = (args) => ({
  template: hbs`
    <div style="padding: 12px; background: white">
      <OSS::Attribute::TagArray @label={{this.label}} @tags={{this.tags}} />
    </div>
  `,
  context: args
});

const defaultArgs = {
  label: 'Fruits',
  tags: ['watermelon', 'vodkamelon', 'whiskeymelon', 'tequilamelon']
};

export default {
  title: 'Components/OSS::Attribute::TagArray',
  component: 'tag-array',
  render: Template,
  args: defaultArgs,
  argTypes: {
    label: {
      description: 'The label of the component.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' },
      type: { required: true }
    },
    tags: {
      description: 'An array of tags which will be displayed next to the label.',
      table: {
        type: {
          summary: 'string[]'
        },
        defaultValue: { summary: '[]' }
      },
      control: { type: 'array' }
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          'Member of the Attribute displays. The OSS::Attribute::TagArray displays all the tags that are provided in the @tags parameter.'
      }
    }
  }
};

export const Default = {};
