import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/OSS::NavTab',
  component: 'NavTab',
  argTypes: {
    onSelection: {
      type: { required: true },
      description: 'A callback triggered when the tab has been clicked.',
      table: {
        category: 'Actions',
        type: {
          summary: 'onSelection(selectedTab: TabDefinition): void'
        }
      }
    },

    tabArray: {
      type: { required: true },
      description:
        'Array of TabDefinition which has the following parameters: <br/> -icon?: string; <br/> -label?: string; <br/> -infoCircle?: boolean; <br/> -notificationDot?: boolean; <br/> -selected: boolean; <br/> -disabled: boolean; <br/> -tag: OSS::Tag arg; <br/> @label or @icon is mandatory for each element of tabArray',
      table: {
        type: {
          summary: 'TabDefinition[]'
        },
        control: { type: 'array' }
      }
    }
  }
};

const defaultArgs = {
  tabArray: [
    { label: 'Tab', icon: 'far fa-thumbs-up' },
    { label: 'Tab2', icon: 'far fa-thumbs-up' },
    { label: 'Tab3' },
    { icon: 'far fa-thumbs-up' },
    { label: 'Tab', icon: 'far fa-thumbs-up', infoCircle: true },
    { label: 'Tab', icon: 'far fa-thumbs-up', infoCircle: true, notificationDot: true },
    { label: 'Tab', icon: 'far fa-thumbs-up', infoCircle: true, notificationDot: true, selected: true },
    { label: 'Tab', icon: 'far fa-thumbs-up', infoCircle: true, notificationDot: true, disabled: true },
    { label: 'Tab', icon: 'far fa-thumbs-up', infoCircle: true, notificationDot: true, selected: true, disabled: true },
    {
      label: 'Tab',
      icon: 'far fa-thumbs-up',
      infoCircle: true,
      notificationDot: true,
      selected: true,
      tag: { label: 'X', skin: 'danger' }
    }
  ],
  onSelection: action('onSelection')
};

const Template = (args) => ({
  template: hbs`
  <div class="background-color-white padding-px-6">
    <OSS::NavTab @onSelection={{this.onSelection}} @tabArray={{this.tabArray}} />
  </div>
  `,
  context: args
});

export const Default = Template.bind({});
Default.args = defaultArgs;
