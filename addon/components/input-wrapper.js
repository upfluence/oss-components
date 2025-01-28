import Component from '@ember/component';
import { tracked } from '@glimmer/tracking';

export default class InputWrapper extends Component {
  @tracked error = null;
  @tracked help = null;

  get computedClasses() {
    const classes = ['upf-input-container', 'form-group'];
    if (this.error !== null) {
      classes.push('upf-input-container--errorful');
    }
    if (this.help !== null) {
      classes.push('upf-input-container--has-help');
    }

    return classes.join(' ');
  }
}
