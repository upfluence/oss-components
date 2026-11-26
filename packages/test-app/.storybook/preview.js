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

// ember-storybook 0.5.1 generates enum controls as `control: { type: 'select', options }`, but Storybook reads the
// options from `argType.options`: lift them so union-typed args get their select. Remove once fixed upstream.
export const argTypesEnhancers = [
  ({ argTypes }) =>
    Object.fromEntries(
      Object.entries(argTypes).map(([name, argType]) => [
        name,
        argType.options || !Array.isArray(argType.control?.options)
          ? argType
          : { ...argType, options: argType.control.options }
      ])
    )
];
