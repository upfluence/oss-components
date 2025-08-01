import './styles/preview.less';
import { themes } from '@storybook/theming';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
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
  },
  docs: {
    theme: themes.dark
  }
};
