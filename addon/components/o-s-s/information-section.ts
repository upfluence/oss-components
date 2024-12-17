import Component from '@glimmer/component';
import type { IconNames } from './iconName.enum';

interface InformationSectionArgs {
  badgeIcon?: keyof typeof IconNames;
  imageUrl?: string;
  title: string;
  subtitle?: string;
  plain?: boolean;
}

export default class OSSInformationSection extends Component<InformationSectionArgs> {
  get plainClass(): string {
    return this.args.plain === false ? 'background-color-gray-50' : 'background-color-white';
  }
}
