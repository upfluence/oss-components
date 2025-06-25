import { tracked } from '@glimmer/tracking';
import OSSBadge, { SizeDefinition, SkinDefinition, type OSSBadgeArgs, type SizeType, type SkinType } from './badge';
import { action } from '@ember/object';
import { assert } from '@ember/debug';
import { next } from '@ember/runloop';

interface OSSExpandableBadgeComponentSignature extends OSSBadgeArgs {
  expandedLabel: string;
  flag?: string;
  fontColorClass?: string;
}

export default class OSSExpandableBadgeComponent extends OSSBadge<OSSExpandableBadgeComponentSignature> {
  @tracked expanded: boolean = false;

  constructor(owner: unknown, args: OSSExpandableBadgeComponentSignature) {
    super(owner, args, true);

    const contentArguments = [args.icon, args.image, args.flag, args.text].filter((arg: string) => arg);

    assert(
      `[component][OSS::ExpandableBadge] One of @icon, @image, @flag or @text arguments is mandatory. You passed ${contentArguments.length} arguments`,
      contentArguments.length === 1
    );
    assert(
      `[component][OSS::ExpandableBadge] The @expandableLabel argument is mandatory.`,
      args.expandedLabel !== undefined
    );
  }

  get flagCountry(): string {
    return this.args.flag!.toUpperCase();
  }

  override get sizeClass(): string {
    const size: SizeType = this.args.size || 'md';

    assert(
      `[component][OSS::ExpandableBadge] Unknown size. Available sizes are: ${Object.keys(SizeDefinition).join(', ')}`,
      Object.keys(SizeDefinition).includes(size as SizeType)
    );

    return SizeDefinition[size as SizeType];
  }

  override get skinClass(): string {
    const skin: SkinType | undefined = this.args?.skin;

    if (!skin) return '';

    assert(
      `[component][OSS::ExpandableBadge] Unknown skin. Available skins are: ${Object.keys(SkinDefinition).join(', ')}`,
      Object.keys(SkinDefinition).includes(skin as SkinType)
    );

    return SkinDefinition[skin as SkinType];
  }

  override get computedClass(): string {
    const classes = ['upf-badge', 'upf-expandable-badge'];

    [this.sizeClass, this.skinClass].forEach((klass) => {
      classes.push(klass);
    });

    if (this.args.plain) {
      classes.push('upf-badge--plain');
    }

    if (this.expanded) {
      classes.push('upf-expandable-badge--expanded');
    }

    return classes.join(' ');
  }

  @action
  handleExpansion(): void {
    this.expanded = !this.expanded;
  }

  @action
  expand(): void {
    this.expanded = true;
  }

  @action
  collapse(): void {
    next(() => {
      this.expanded = false;
    });
  }
}
