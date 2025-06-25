import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Smart extends Controller {
  @tracked selectedToggle: string = 'first';
  @tracked selectedToggleTwo: string = 'second';
  @tracked toggleInputLoadingValue: boolean = false;
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

  @tracked declare value: string;
  @tracked loading: boolean = false;

  @action
  triggerSelection(value: string): void {
    console.log('selected toggle value : ', value);
    this.selectedToggle = value;
  }

  @action
  toggleLoading(): void {
    this.loading = !this.loading;

    if (this.loading === false) {
      this.value = 'Data loaded from a very smart backend';
    }
  }

  @action
  toggleInputLoading(): void {
    this.toggleInputLoadingValue = !this.toggleInputLoadingValue;
  }
}
