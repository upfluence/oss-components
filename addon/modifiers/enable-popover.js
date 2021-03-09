import { modifiers } from 'ember-modifiers';
import $ from 'jquery';

export default modifier((element, [trigger]) => {
  trigger = trigger ?? 'hover'

  $(element).popover({trigger});
});
