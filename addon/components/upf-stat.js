import Component from '@ember/component';

export default class UpfStat extends Component {
  small = null;
  xsmall = null;
  name = null;
  data = null;
  dataClass = null;
  label = null;
  tooltip = null;

  icon = null;
  iconPlacement = 'top';
  iconClass = '';
  iconUrl = null;
  iconLabel = null;

  get computedClasses() {
    const classes = ['upf-stat'];
    if (this.small) {
      classes.push('upf-stat--small');
    }
    if (this.xsmall) {
      classes.push('upf-stat--x-small');
    }

    return classes.join(' ');
  }
}
