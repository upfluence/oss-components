import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Smart extends Controller {
  @tracked selectedToggle: string = 'first';
  @tracked selectedToggleTwo: string = 'second';
  @tracked toggles: { value: string; label: string }[] = [
    {
      value: 'first',
      label: 'First'
    },
    {
      value: 'second',
      label: 'Second'
    }
  ];

  @action
  countDownAction(): void {
    console.log('countDownAction');
  }

  @action
  triggerSelection(value: string): void {
    console.log('selected toggle value : ', value);
    this.selectedToggle = value;
  }
}
