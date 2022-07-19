import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';

const overriddenThemes = {
  dark: {
    ...themes.dark,
    appContentBg: '#333333',
    barBg: '#202020',
    brandImage:
      'https://s3.amazonaws.com/creators-upfluence-com-assets/assets/images/upf-logo-white-e708bc155baf08f397439dcdbd3a2b5b.svg',
    brandUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    brandTarget: '_blank'
  }
};

addons.setConfig({
  theme: overriddenThemes.dark
});
