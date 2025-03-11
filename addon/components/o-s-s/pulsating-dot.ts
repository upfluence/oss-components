import Component from '@glimmer/component';

type Skin = 'primary' | 'success' | 'error' | 'warning' | 'gray';

interface OSSPulsatingDotComponentSignature {
  skin: Skin;
}

export default class OSSPulsatingDotComponent extends Component<OSSPulsatingDotComponentSignature> {
  get skin(): string {
    return this.args.skin ?? 'primary';
  }
}
