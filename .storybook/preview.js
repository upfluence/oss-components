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
        ['Colors', 'Typography', 'Icons', 'Variables'],
        'CoreV2',
        ['Colors', 'Variables'],
        'Components',
        'Helpers & Modifiers',
        'Utilities'
      ]
    }
  },
  docs: {
    theme: themes.dark
  }
};
