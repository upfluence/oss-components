import { helper } from '@ember/component/helper';
import { assert } from '@ember/debug';

export function stopPropagation([eventHandler]: any) {
  assert(
    `Expected '${eventHandler}' to be a function, if present.`,
    !eventHandler || typeof eventHandler === 'function'
  );

  return function (event: Event) {
    assert(
      `Expected '${event}' to be an Event and have a 'stopPropagation' method.`,
      event && typeof event.stopPropagation === 'function'
    );

    event.stopPropagation();
    eventHandler(event);
  };
}

export default helper(stopPropagation);
