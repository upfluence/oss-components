import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/OSS::ScrollableBar',
  component: 'scrollable-bar',
  argTypes: {
    buttonStyle: {
      description: 'Updates the style of scroll buttons. Defaults to "button"',
      table: {
        type: { summary: 'button | icon' },
        defaultValue: { summary: 'undefined' }
      },
      control: {
        type: 'text'
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'Container which automatically handle horizontal scroll behavior with left and right buttons'
      }
    }
  }
};

const defaultArgs = {
  buttonStyle: undefined
};

const Template = (args) => ({
  template: hbs`
    <div style="width: 300px; background-color: white; " >
      <OSS::ScrollableBar @buttonStyle={{this.buttonStyle}}>
            <:content as |callbacks|>
              <div {{did-insert callbacks.setupFn}} {{will-destroy callbacks.teardownFn}}>All</div>
              <div {{did-insert callbacks.setupFn}} {{will-destroy callbacks.teardownFn}}>Replies</div>
              <div {{did-insert callbacks.setupFn}} {{will-destroy callbacks.teardownFn}}>Applications</div>
              <div {{did-insert callbacks.setupFn}} {{will-destroy callbacks.teardownFn}}>Emails</div>
              <div {{did-insert callbacks.setupFn}} {{will-destroy callbacks.teardownFn}}>Payments</div>
              <div {{did-insert callbacks.setupFn}} {{will-destroy callbacks.teardownFn}}>Applications2</div>
              <div {{did-insert callbacks.setupFn}} {{will-destroy callbacks.teardownFn}}>Emails2</div>
              <div {{did-insert callbacks.setupFn}} {{will-destroy callbacks.teardownFn}}>Payments2</div>
            </:content>
          </OSS::ScrollableBar>
    </div>
  `,

  context: args
});

export const BasicUsage = Template.bind({});
BasicUsage.args = defaultArgs;
