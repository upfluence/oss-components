import Component from '@glimmer/component';

type Placement = 'top' | 'left' | 'right' | 'bottom';
type Size = 'sm' | 'md';

interface OSSPopoverArgs {
  arrowPlacement: Placement;
  title: string;
  subtitle?: string;
  size?: Size;
  enableArrow: false;
}

export default class extends Component<OSSPopoverArgs> {
  portalTarget: HTMLElement = document.body;

  get size(): Size {
    return this.args.size ?? 'sm';
  }

  get enableArrow(): boolean {
    return this.args.enableArrow ?? false;
  }
}
