import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class Actionable extends Controller {
  @tracked toggleValue: boolean = false;
  @tracked disabled: boolean = true;
}

declare module '@ember/controller' {
  interface Registry {
    actionable: Actionable;
  }
}
