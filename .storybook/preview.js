import { themes } from '@storybook/theming';
import { hbs } from 'ember-cli-htmlbars';

import './styles/preview.less';

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

export const decorators = [
  (storyFn, { globals }) => {
    return {
      template: hbs`<Storybook @globals={{this.globals}} @story={{this.story}}/>`,
      context: {
        globals,
        story: storyFn()
      }
    };
  }
];
