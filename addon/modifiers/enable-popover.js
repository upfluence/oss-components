import { modifier } from 'ember-modifier';
import $ from 'jquery';

export default modifier((element, [trigger]) => {
  trigger ??= 'hover';

  $(element).popover({trigger});
});
