import hbs from 'htmlbars-inline-precompile';
import { storiesOf } from '@storybook/ember';

const defineStory = (name) => {
  // eslint-disable-next-line no-undef
  storiesOf(name, module).add('default', () => {
    return {
      template: hbs`
          To be written.
        `
    };
  });
};

[
  'Base/Borders',
  'Base/Buttons',
  'Base/Cards',
  'Base/Datatable',
  'Base/Expanding Search (Check Usage)',
  'Base/Icons',
  'Base/Images',
  'Base/Inputs',
  'Base/Links',
  'Base/Loading',
  'Base/Navigation',
  'Base/Progress',
  'Base/Stats',
  'Base/Tables',
  'Base/Transitions'
].forEach((story) => defineStory(story));

['Utilities/Grid', 'Utilities/Statuses (Check Usage)'].forEach((story) => defineStory(story));

[
  'Components/Expanding Search (Check Usage)',
  'Components/Radio Button',
  'Components/Progress Bar',
  'Components/Image',
  'Components/Cards',
  'Components/Table'
].forEach((story) => defineStory(story));
