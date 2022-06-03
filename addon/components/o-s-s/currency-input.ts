import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

interface OSSCurrencyInputArgs {
  currency: string;
  value: number;
  onChange(currency: string, value: number): void;
}

export default class OSSCurrencyInput extends Component<OSSCurrencyInputArgs> {
  private _currencies = usedCurrencies;
  @tracked selectedCurrency: Currency;
  @tracked currencySelectorShown: boolean = false;
  @tracked filteredCurrencies: Currency[] = this._currencies;

  constructor(owner: unknown, args: OSSCurrencyInputArgs) {
    super(owner, args);

    if (typeof this.args.currency !== 'string') {
      throw new Error('[component][OSS::CurrencyInput] The parameter @prefix of type string is mandatory');
    }
    if (typeof this.args.value !== 'number') {
      throw new Error('[component][OSS::CurrencyInput] The parameter @number of type string is mandatory');
    }
    if (typeof this.args.onChange !== 'function') {
      throw new Error('[component][OSS::CurrencyInput] The parameter @onChange of type function is mandatory');
    }
    this.selectedCurrency = this._currencies[0];
    this._loadExistingData();
  }

  private _loadExistingData(): void {
    if (this.args.value && this.args.currency) {
      this.selectedCurrency =
        this._currencies.find((currency: Currency) => currency.code === this.args.currency) || this._currencies[0];
    }
  }

  get selectedCurrencySymbol(): string {
    return this.selectedCurrency.symbol || '—';
  }

  @action
  onlyNumeric(event: KeyboardEvent): void {
    const authorizedInputs = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 'Shift', 'Control', '.', ','];
    if (/^[0-9]$/i.test(event.key) || authorizedInputs.find((key: string) => key === event.key)) {
      this.args.onChange(this.selectedCurrency.code, this.args.value);
    } else {
      event.preventDefault();
    }
  }

  @action
  onSearch(keyword: any): void {
    this.filteredCurrencies = this._currencies.filter((currency: Currency) => {
      return (
        currency.code.toLowerCase().indexOf(keyword.toLowerCase()) !== -1 || currency.symbol.indexOf(keyword) !== -1
      );
    });
  }

  @action
  onSelect(value: any): void {
    this.selectedCurrency = value;
    this.args.onChange(this.selectedCurrency.code, this.args.value);
    this.hideCurrencySelector();
  }

  @action
  toggleCurrencySelector(e: any): void {
    e.stopPropagation();
    this.currencySelectorShown = !this.currencySelectorShown;
  }

  @action
  hideCurrencySelector(): void {
    this.currencySelectorShown = false;
    this.filteredCurrencies = this._currencies;
  }
}

type Currency = {
  code: string;
  symbol: string;
};

const usedCurrencies: Currency[] = [
  { code: 'USD', symbol: '$' },
  { code: 'EUR', symbol: '€' },
  { code: 'JPY', symbol: '¥' },
  { code: 'GBP', symbol: '£' },
  { code: 'AUD', symbol: 'A$' },
  { code: 'CAD', symbol: 'C$' },
  { code: 'CHF', symbol: 'Fr' },
  { code: 'CNY', symbol: '¥' },
  { code: 'SEK', symbol: 'kr' },
  { code: 'NZD', symbol: 'NZ$' },
  { code: 'MXN', symbol: '$' },
  { code: 'SGD', symbol: 'S$' },
  { code: 'HKD', symbol: 'HK$' },
  { code: 'NOK', symbol: 'kr' },
  { code: 'KRW', symbol: '₩' },
  { code: 'TRY', symbol: '₺' },
  { code: 'RUB', symbol: '₽' },
  { code: 'INR', symbol: '₹' },
  { code: 'BRL', symbol: 'R$' },
  { code: 'ZAR', symbol: 'R' },
  { code: 'IDR', symbol: 'Rp' },
  { code: 'PHP', symbol: '₱' },
  { code: 'THB', symbol: '฿' },
  { code: 'DKK', symbol: 'kr' },
  { code: 'PLN', symbol: 'zł' }
];
