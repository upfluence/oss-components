import './styles/preview.less';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'centered',
  options: {
    storySort: {
      order: [
        'Getting Started',
        'Core',
          ['Colors', 'Typography', 'Icons', 'Variables'],
        'Base',
        'Components'
      ]
    }
  }
}
