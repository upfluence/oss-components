import hbs from 'htmlbars-inline-precompile';
import { storiesOf } from '@storybook/ember';

storiesOf('OSS/Components/Stats', module)
  .add('Default', () => {
    return {
      template: hbs`
        {{upf-stat name=insight.name data=insight.data}}
      `,
      context: {
        insight: {
          name: 'Stat',
          data: '80',
        }
      }
    }
  }, {
    notes: {
      markdown: `
        # Markdown!
        > Notes can be done via markdown,
      `
    }
  });
