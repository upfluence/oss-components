function createAnimation(element: HTMLElement, keyframes: Keyframe[], options: KeyframeAnimationOptions): Animation {
  const downKeyframes = new KeyframeEffect(element, keyframes, options);
  const animation = new Animation(downKeyframes, document.timeline);
  animation.id = options.id || 'default';
  return animation;
}

export { createAnimation };
