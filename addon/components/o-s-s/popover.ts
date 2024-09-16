import Component from '@glimmer/component';

type Placement = 'top' | 'left' | 'right' | 'bottom';
type Size = 'sm' | 'md';

interface OSSPopoverArgs {
  arrowPlacement: Placement;
  title: string;
  subtitle?: string;
  size?: Size;
}

export default class extends Component<OSSPopoverArgs> {
  get size(): Size {
    return this.args.size ?? 'sm';
  }
}
