import App from 'test-app/app';
import StorybookComponent from 'test-app/components/storybook';

import './styles/preview.less';

export const parameters = {
  ember: { app: App },
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: { disabled: true },
  layout: 'centered',
  controls: { expanded: true },
  options: {
    storySort: {
      order: [
        'Getting Started',
        ['Introduction', 'Developer Guidelines'],
        'Core',
        ['Typography', 'Variables', 'Colors', 'Flexbox'],
        'Helpers & Modifiers',
        'Components',
        'Wizard',
        'Deprecated',
        ['Typography', 'Icons', 'Variables']
      ]
    }
  }
};

// The stories return the legacy `{ template, context }` shape; the Storybook component renders it.
export const decorators = [
  (Story, { globals }) => ({ component: StorybookComponent, args: { story: Story(), globals } })
];
