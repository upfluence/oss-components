import hbs from 'htmlbars-inline-precompile';
import { storiesOf } from '@storybook/ember';

const defineStory = (name) => {
  storiesOf(name).add('default', () => {
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
  'Base/Checkboxes',
  'Base/Datatable',
  'Base/Expanding Search (Check Usage)',
  'Base/Icons',
  'Base/Images',
  'Base/Inputs',
  'Base/Links',
  'Base/Loading',
  'Base/Navigation',
  'Base/Notificiations (Check Usage)',
  'Base/Progress',
  'Base/Stats',
  'Base/Tables',
  'Base/Toastr',
  'Base/Transitions'
].forEach((story) => defineStory(story));

['Utilities/Grid', 'Utilities/Statuses (Check Usage)'].forEach((story) => defineStory(story));

[
  'Components/Buttons',
  'Components/Loading Button',
  'Components/Destructive Button',
  'Components/Loading State',
  'Components/Expanding Search (Check Usage)',
  'Components/Radio Button',
  'Components/Progress Bar',
  'Components/Image',
  'Components/Cards',
  'Components/Checkbox',
  'Components/Input Wrapper',
  'Components/Table'
].forEach((story) => defineStory(story));
