import { run } from '@ember/runloop';

export type State = {
  element: Element;
  handler: (event: Event) => unknown;
};

type Callback = (...args: [Element, Event]) => unknown;
type ShouldTrigger = (...args: [Element, number]) => boolean;

const TRIGGER_OFFSET = 20;

export function installScrollReachedModifier(
  state: State,
  element: Element,
  positional: [Callback],
  named: { offset?: number },
  shouldTrigger: ShouldTrigger
): void {
  const [callback] = positional;
  const { offset = TRIGGER_OFFSET } = named;

  state.element = element;
  state.handler = (event: Event): void => {
    if (shouldTrigger(state.element, offset)) {
      callback(state.element, event);
    }
  };

  run(() => {
    state.element.addEventListener('scroll', state.handler, false);
  });
}
