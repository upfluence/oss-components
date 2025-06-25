import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Smart extends Controller {
  @tracked selectedToggle: string = 'first';
  @tracked selectedToggleTwo: string = 'second';
  @tracked logoLoading: boolean = false;
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
  toggleLogoLoading(): void {
    this.logoLoading = !this.logoLoading;
  }

  @action
  toggleLoading(): void {
    this.loading = !this.loading;

    if (this.loading === false) {
      this.value = 'Data loaded from a very smart backend';
    }
  }
}
