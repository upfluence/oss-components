import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/OSS::OnboardingState',
  component: 'onboarding-state',
  argTypes: {
    title: {
      description: 'The title of the onboarding state',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    subtitle: {
      description: 'The subtitle of the onboarding state',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    },
    imageUrl: {
      description: 'The imageUrl of the onboarding state illustration',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' }
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          'The OSS::OnboardingState component is used to display an onboarding state with customizable title, subtitle, and illustration. The buttons should to be defined in the actions block.'
      }
    }
  }
};

const defaultArgs = {
  title: 'Welcome to OSS',
  subtitle: 'Get started by following the steps below.',
  imageUrl: '/@upfluence/oss-components/assets/images/upfluence-full-blue-logo.svg'
};

const Template = (args) => ({
  template: hbs`
    <div class="fx-row" style="width:600px" >
      <OSS::OnboardingState
        @title={{this.title}}
        @subtitle={{this.subtitle}}
        @imageUrl={{this.imageUrl}}
      >
        <:actions>
          <OSS::Button @icon="fa-plus" @label="Start setup" @skin="primary" />
          <OSS::Button @label="Learn more" />
        </:actions>
      </OSS::OnboardingState>
    </div>
  `,
  context: args
});

export const Default = Template.bind({});
Default.args = defaultArgs;
