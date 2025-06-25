import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Smart extends Controller {
  @tracked selectedToggle: string = 'first';
  @tracked selectedToggleTwo: string = 'second';
  @tracked toggleInputLoadingValue: boolean = false;
  @tracked smartFeedback: boolean = false;
  @tracked smartFeedbackLoading: boolean = false;
  @tracked contentArray: string[] = [
    'This is the first content',
    'This is the second content',
    'This is the third content'
  ];
  @tracked logoLoading: boolean = false;
  @tracked toggles: { value: string; label: string }[] = [
    { value: 'first', label: 'First' },
    { value: 'second', label: 'Second' }
  ];
  @tracked declare value: string;
  @tracked loading: boolean = false;
  @tracked currency: string = 'USD';
  @tracked declare currencyValue: number;
  @tracked declare currencyValueTwo: number;
  @tracked currencyOnly: string = '';
  allowedCurrencies: { code: string; symbol: string }[] = [
    { code: 'USD', symbol: '$' },
    { code: 'EUR', symbol: '€' }
  ];
  @tracked hasError: boolean = true;
  @tracked currencyInputLoading: boolean = true;
  @tracked pillLoading: boolean = true;
  @tracked selectedPill: boolean = false;
  @tracked selectedPillTwo: boolean = false;
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

  @action
  onCurrencyInputChange(currency: string, value: number): void {
    console.log(currency, value);
    this.currency = currency;
    this.currencyValue = value;
    this.hasError = !this.hasError;
  }

  @action
  toggleInputLoading(): void {
    this.toggleInputLoadingValue = !this.toggleInputLoadingValue;
  }

  @action
  toggleCurrencyInputLoading(): void {
    this.currencyInputLoading = !this.currencyInputLoading;

    if (this.currencyInputLoading === false) {
      this.currencyValue = 77777777777;
    }
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

  @action
  onPillChange(): void {
    this.selectedPill = !this.selectedPill;
  }

  @action
  togglePillLoading(): void {
    this.pillLoading = !this.pillLoading;
    this.selectedPillTwo = !this.pillLoading;
  }
}
