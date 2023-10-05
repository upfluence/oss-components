import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { assert } from '@ember/debug';
import { action } from '@ember/object';
import { isEmpty } from '@ember/utils';

interface OSSCurrencyInputArgs {
  currency: string;
  value: number;
  onChange(currency: string, value: number): void;
  allowCurrencyUpdate?: boolean;
  onlyCurrency?: boolean;
  placeholder?: string;
  errorMessage?: string;
}

const NUMERIC_ONLY = /^[0-9]$/i;
const NOT_NUMERIC_FLOAT = /[^0-9,.]/g;

export default class OSSCurrencyInput extends Component<OSSCurrencyInputArgs> {
  private _currencies = usedCurrencies;
  @tracked currencySelectorShown: boolean = false;
  @tracked filteredCurrencies: Currency[] = this._currencies;
  @tracked localValue: number = this.args.value;

  constructor(owner: unknown, args: OSSCurrencyInputArgs) {
    super(owner, args);

    if (!this.args.value && !this.args.placeholder) {
      this.localValue = 0;
    }

    assert(
      '[component][OSS::CurrencyInput] The parameter @onChange of type function is mandatory',
      typeof this.args.onChange === 'function'
    );
  }

  get allowCurrencyUpdate(): boolean {
    return this.args.allowCurrencyUpdate ?? true;
  }

  get selectedCurrencySymbol(): string {
    return this.selectedCurrency.symbol || '—';
  }

  get selectedCurrencyCode(): string {
    return this.selectedCurrency.code || '—';
  }

  get selectedCurrency(): Currency {
    if (isEmpty(this.args.currency)) {
      return this._currencies[0];
    }
    return this._currencies.find((currency: Currency) => currency.code === this.args.currency) || this._currencies[0];
  }

  get placeholder(): string {
    return this.args.placeholder || '0';
  }

  @action
  onlyNumeric(event: KeyboardEvent): void {
    const authorizedInputs = [
      'Backspace',
      'Delete',
      'ArrowLeft',
      'ArrowRight',
      'Tab',
      'Shift',
      'Control',
      '.',
      ',',
      'ArrowUp',
      'ArrowDown'
    ];

    if (['c', 'v'].includes(event.key) && (event.metaKey || event.ctrlKey)) {
      return;
    }

    if (!NUMERIC_ONLY.test(event.key) && !authorizedInputs.find((key: string) => key === event.key)) {
      event.preventDefault();
    }
  }

  @action
  handlePaste(event: ClipboardEvent): void {
    this._handlePaste(event);
  }

  @action
  notifyChanges(): void {
    this.args.onChange(this.selectedCurrency.code, this.localValue);
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
  onSelect(value: Currency): void {
    this.args.onChange(value.code, this.localValue);
    this.hideCurrencySelector();
  }

  @action
  toggleCurrencySelector(e: any): void {
    e.stopPropagation();

    if (!this.allowCurrencyUpdate) return;
    this.currencySelectorShown = !this.currencySelectorShown;
  }

  @action
  hideCurrencySelector(): void {
    this.currencySelectorShown = false;
    this.filteredCurrencies = this._currencies;
  }

  private _handlePaste(event: ClipboardEvent): void {
    event.preventDefault();

    let paste = event.clipboardData?.getData('text') || '';
    paste = paste.replace(NOT_NUMERIC_FLOAT, '');

    const target = event.target as HTMLInputElement;
    const initialSelectionStart = target.selectionStart || 0;
    const finalSelectionPosition = initialSelectionStart + paste.length;

    target.setRangeText(paste, initialSelectionStart, target.selectionEnd || initialSelectionStart);
    target.setSelectionRange(finalSelectionPosition, finalSelectionPosition);

    this.localValue = target.value as unknown as number;
    this.notifyChanges();
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
