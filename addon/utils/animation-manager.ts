function createAnimation(element: HTMLElement, keyframes: Keyframe[], options: KeyframeAnimationOptions): Animation {
  const destroyDownKeyframes = new KeyframeEffect(element, keyframes, options);
  let destroyAnimation = new Animation(destroyDownKeyframes, document.timeline);
  destroyAnimation.id = options.id || 'default';
  return destroyAnimation;
}

export { createAnimation };
