

export type IconStyle = 'solid' | 'regular' | 'light' | 'duotone' | 'brand';

const FA_ICON_PREFIX = 'fa-';
const STYLE_MATCHER: { [key: string]: IconStyle } = {
  fas: 'solid',
  far: 'regular',
  fal: 'light',
  fad: 'duotone',
  fab: 'brand'
};

export function getIconStyle(fontAwesomeIcon: string): IconStyle {
  let iconStyle: IconStyle = STYLE_MATCHER.far;

  Object.keys(STYLE_MATCHER).forEach((style: string) => {
    if (fontAwesomeIcon.includes(style)) {
      iconStyle = STYLE_MATCHER[style];
    }
  });
  return iconStyle;
}

export function getIconValue(fontAwesomeIcon: string): string {
  let iconValues: string[] = [];
  fontAwesomeIcon.split(' ').forEach((part: string) => {
    if (part.includes(FA_ICON_PREFIX)) iconValues.push(part);
  });
  return iconValues.join(' ');
}
