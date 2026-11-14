import Component from '@glimmer/component';

interface OSSTipArgs {
  label: string;
  active: boolean;
  icon?: string;
  important?: boolean;
  size?: 'sm' | 'md';
}

export default class Tip extends Component<OSSTipArgs> {
  get labelSize(): 'sm' | 'md' {
    return this.args.size ?? 'sm';
  }
}
