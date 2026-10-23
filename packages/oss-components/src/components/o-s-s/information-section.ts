import Component from '@glimmer/component';

interface InformationSectionArgs {
  title: string;
  badgeIcon?: string;
  imageUrl?: string;
  subtitle?: string;
  plain?: boolean;
}

export default class OSSInformationSection extends Component<InformationSectionArgs> {
  get headerComputedClasses(): string {
    const plainClass = this.args.plain === false ? 'background-color-gray-50' : 'background-color-white';
    return 'fx-row fx-malign-space-between fx-xalign-center padding-px-18 ' + plainClass;
  }
}
