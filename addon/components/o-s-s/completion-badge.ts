import { tracked } from '@glimmer/tracking';
import { assert } from '@ember/debug';
import { action } from '@ember/object';
import { htmlSafe } from '@ember/template';
import { isTesting } from '@embroider/macros';

import type { OSSBadgeArgs, SizeType, SkinType } from './badge';
import OSSBadge, { SizeDefinition, SkinDefinition } from './badge';

export const SUCCESS_COLOR = '--color-success-500';
export const PROGRESS_COLOR = '--color-primary-500';
export const BACKGROUND_COLOR = '--color-gray-200';
export const ANIMATION_DURATION = isTesting() ? 25 : 1200;

interface OSSCompletionBadgeComponentSignature extends OSSBadgeArgs {
  progress: number;
}

export default class OSSCompletionBadgeComponent extends OSSBadge<OSSCompletionBadgeComponentSignature> {
  @tracked animatedProgress: number = 0;
  animationFrameId?: number;

  constructor(owner: unknown, args: OSSCompletionBadgeComponentSignature) {
    super(owner, args, true);

    const contentArguments = [args.icon, args.image, args.text].filter((arg: string) => arg);

    assert(
      `[component][OSS::CompletionBadge] One of @icon, @image or @text arguments is mandatory. You passed ${contentArguments.length} arguments`,
      contentArguments.length === 1
    );
  }

  get progressRingStyle(): ReturnType<typeof htmlSafe> {
    const progress = this.animatedProgress;
    const angle = (progress / 100) * 360;
    if (progress >= 100) {
      return htmlSafe(
        `background: conic-gradient(var(${SUCCESS_COLOR}) 0deg 360deg, var(${SUCCESS_COLOR}) 360deg 360deg);`
      );
    }
    return htmlSafe(
      `background: conic-gradient(var(${PROGRESS_COLOR}) 0deg ${angle}deg, var(${BACKGROUND_COLOR}) ${angle}deg 360deg);`
    );
  }

  override get computedClass(): string {
    const classes = ['upf-badge', 'upf-badge--shape-round'];

    [this.sizeClass, this.skinClass].forEach((klass) => {
      classes.push(klass);
    });

    if (this.args.plain) {
      classes.push('upf-badge--plain');
    }

    return classes.join(' ');
  }

  protected override get sizeClass(): string {
    const size: SizeType = this.args.size || 'md';

    assert(
      `[component][OSS::CompletionBadge] Unknown size. Available sizes are: ${Object.keys(SizeDefinition).join(', ')}`,
      Object.keys(SizeDefinition).includes(size as SizeType)
    );

    return SizeDefinition[size as SizeType];
  }

  protected override get skinClass(): string {
    const skin: SkinType | undefined = this.args?.skin;

    if (!skin) return '';

    assert(
      `[component][OSS::CompletionBadge] Unknown skin. Available skins are: ${Object.keys(SkinDefinition).join(', ')}`,
      Object.keys(SkinDefinition).includes(skin as SkinType)
    );

    return SkinDefinition[skin as SkinType];
  }

  @action
  animateProgress(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    const initial = this.animatedProgress;
    const target = this.progressValue;
    const duration = ANIMATION_DURATION;
    const start = performance.now();
    this.animationFrameId = requestAnimationFrame((now) => this.animateStep(now, initial, target, duration, start));
  }

  private get progressValue(): number {
    const value = Number(this.args.progress);
    return isNaN(value) ? 0 : Math.round(value);
  }

  private animateStep(now: number, initial: number, target: number, duration: number, start: number): void {
    const elapsed = now - start;
    const percent = Math.min(elapsed / duration, 1);
    this.animatedProgress = initial + percent * (target - initial);
    if (percent < 1) {
      this.animationFrameId = requestAnimationFrame((nextNow) =>
        this.animateStep(nextNow, initial, target, duration, start)
      );
    } else {
      this.animatedProgress = target;
      this.animationFrameId = undefined;
    }
  }
}
