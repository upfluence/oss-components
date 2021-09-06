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
        ['Colors', 'Typography', 'Icons', 'Variables'],
        'Base',
        ['Alerts', 'Tags'],
        'Components',
        'Helpers & Modifiers',
        'Utilities'
      ]
    }
  }
};
