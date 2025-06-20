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
  @tracked currency: string = 'USD';
  @tracked currencyValue: number = 3.14159999;
  @tracked currencyOnly: string = '';
  allowedCurrencies: { code: string; symbol: string }[] = [
    { code: 'USD', symbol: '$' },
    { code: 'EUR', symbol: '€' }
  ];
  @tracked hasError = true;
  @tracked toggleInputLoadingValue = true;

  @action
  triggerSelection(value: string): void {
    console.log('selected toggle value : ', value);
    this.selectedToggle = value;
  }

  @action
  onCurrencyInputChange(currency: string, value: number): void {
    console.log(value);
    this.currency = currency;
    this.currencyValue = value;
    this.hasError = !this.hasError;
  }

  @action
  onValueInputChange(value: number): void {
    this.currencyValue = value;
    this.currency = 'USD';
  }

  @action
  toggleInputLoading(): void {
    this.toggleInputLoadingValue = !this.toggleInputLoadingValue;
  }
}
