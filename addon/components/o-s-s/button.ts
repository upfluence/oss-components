import Component from '@glimmer/component';

enum SkinDefinition {
  DEFAULT = 'default',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  DESTRUCTIVE = 'destructive',
  SOCIAL_INSTAGRAM = 'social-instagram',
  SOCIAL_FACEBOOK = 'social-facebook',
  SOCIAL_YOUTUBE = 'social-youtube'
}

enum SizeDefinition {
  X_SMALL = 'x-small',
  SMALL = 'small'
}

interface ButtonArgs {
  skin: string;
  size: string;
  loading: boolean;
}
//TODO:save size for loading
export default class OSSButton extends Component<ButtonArgs> {
  constructor(owner: unknown, args: ButtonArgs) {
    super(owner, args);

    let t: string = this.args.skin;
    console.log(t);
  }

  get skin(): string {
    if (!this.args.skin) {
      return SkinDefinition.DEFAULT;
    }
    return SkinDefinition[this.args.skin.toUpperCase().replace(/-/g, '_') as keyof typeof SkinDefinition];
  }

  get size(): string | null {
    if (!this.args.size) {
      return null;
    }
    return SizeDefinition[this.args.size.toUpperCase().replace(/-/g, '_') as keyof typeof SizeDefinition];
  }
}
