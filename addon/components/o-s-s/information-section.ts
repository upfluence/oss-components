import Component from '@glimmer/component';
import type { IconNames } from './iconName.enum';

interface InformationSectionArgs {
  badgeIcon?: keyof typeof IconNames;
  svgIcon?: string;
  title: string;
  subtitle?: string;
  plain?: boolean;
}

export default class OSSInformationSection extends Component<InformationSectionArgs> {}
