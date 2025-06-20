import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Smart extends Controller {
  @tracked selectedToggle: string = 'first';
  @tracked selectedToggleTwo: string = 'second';
  @tracked toggleCurrencyInputLoadingValue: boolean = false;
  @tracked smartFeedback: boolean = false;
  @tracked smartFeedbackLoading: boolean = false;
  @tracked contentArray: string[] = [
    'This is the first content',
    'This is the second content',
    'This is the third content'
  ];
  @tracked toggles: { value: string; label: string }[] = [
    { value: 'first', label: 'First' },
    { value: 'second', label: 'Second' }
  ];

  @tracked declare value: string;
  @tracked loading: boolean = false;
  @tracked currency: string = 'USD';
  @tracked currencyValue: number = 3.14159999;
  @tracked currencyOnly: string = '';
  allowedCurrencies: { code: string; symbol: string }[] = [
    { code: 'USD', symbol: '$' },
    { code: 'EUR', symbol: '€' }
  ];
  @tracked hasError = true;
  @tracked toggleInputLoadingValue = true;
  intervalId?: number;

  constructor() {
    super(...arguments);
    this.addContentToFeedbackComponent();
  }

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
  toggleCurrencyInputLoading(): void {
    this.toggleCurrencyInputLoadingValue = !this.toggleCurrencyInputLoadingValue;
  }

  @action
  toggleInputLoading(): void {
    this.toggleInputLoadingValue = !this.toggleInputLoadingValue;
  }
  @action
  toggleSmartFeedbackLoading(): void {
    this.smartFeedbackLoading = !this.smartFeedbackLoading;
  }

  addContentToFeedbackComponent(): void {
    const wordsToAdd = ['Dynamic word 1', 'Dynamic word 2', 'Dynamic word 3', 'Dynamic word 4', 'Dynamic word 5'];

    let index = 0;

    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    this.intervalId = window.setInterval(() => {
      if (index >= wordsToAdd.length) {
        clearInterval(this.intervalId);
        return;
      }

      const wordToAdd = wordsToAdd[index];
      if (typeof wordToAdd === 'string') {
        this.contentArray = [...this.contentArray, wordToAdd];
      }
      index++;
    }, 1000);
  }
}
