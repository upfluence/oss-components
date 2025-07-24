import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { runSmartGradientAnimation } from '@upfluence/oss-components/utils/run-smart-gradient-animation';

export type TagType = 'keyword' | 'hashtag' | 'mention';

const TypeColorMatch: any = {
  hashtag: 'cyan',
  mention: 'violet',
  keyword: 'yellow'
};

const TypeIconMatch: any = {
  hashtag: 'fa-hashtag',
  mention: 'fa-at',
  keyword: null
};

interface OSSSmartTagArgs {
  label: string;
  type?: TagType;
  size?: 'md' | 'lg';
  successAnimationOnInsertion?: boolean;
  onRemove?(): void;
}

export default class OSSSmartTag extends Component<OSSSmartTagArgs> {
  @tracked declare element: HTMLElement;

  get closable(): boolean {
    return Boolean(this.args.onRemove);
  }

  get typeColor(): TagType {
    return TypeColorMatch[this.args.type || 'keyword'];
  }

  get typeIcon(): TagType {
    return TypeIconMatch[this.args.type || 'keyword'];
  }

  get displayLabel(): string {
    if (this.args.label[0] === '@' || this.args.label[0] === '#') {
      return this.args.label.slice(1);
    }
    return this.args.label;
  }

  @action
  onRemove(event?: PointerEvent): void {
    event?.stopPropagation();
    this.args.onRemove?.();
  }

  @action
  handleElementLifecycle(element: HTMLElement): void {
    this.element = element;
    this.runAnimationOnLoadEnd();
  }

  @action
  runAnimationOnLoadEnd(): void {
    if (this.element && this.args.successAnimationOnInsertion) {
      runSmartGradientAnimation(this.element);
    }
  }
}
