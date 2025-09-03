import Controller from '@ember/controller';
import { action } from '@ember/object';
import { next } from '@ember/runloop';
import { tracked } from '@glimmer/tracking';
import type { TagType } from '@upfluence/oss-components/components/o-s-s/smart/tag';
import type { Keyword } from '@upfluence/oss-components/components/o-s-s/smart/tag-input';

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

  @tracked values = ['content'];
  @tracked items = [
    { value: 'content', label: 'Jace generated content' },
    { value: '1', label: 'Item 1' },
    { value: '2', label: 'Item 2' },
    { value: '3', label: 'Item 3' },
    { value: '4', label: 'Item 4' },
    { value: '5', label: 'Item 5' },
    { value: '6', label: 'Item 6' },
    { value: '7', label: 'Item 7' },
    { value: '8', label: 'Item 8' },
    { value: '9', label: 'Item 9' }
  ];
  @tracked tagLoading: boolean = false;
  @tracked tags: { value: string; type: TagType }[] = [
    { value: 'keyword', type: 'keyword' },
    { value: 'mention', type: 'mention' },
    { value: 'hashtag', type: 'hashtag' }
  ];
  @tracked smartTags: { value: string; type: TagType }[] = [];
  @tracked inputValue: string = '';
  @tracked textAreaValue: string = '';
  @tracked multilinePlaceholder: string = 'Small placeholder\nwith multiple\nlines';

  constructor() {
    super(...arguments);
    this.addContentToFeedbackComponent();
  }

  get fakeSelectedItems(): string[] {
    const mapped = this.items.map((item) => item.label);
    return [...mapped, ...mapped, ...mapped];
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

  @action
  onLogoClick(): void {
    console.log('logo icon clicked');
  }

  @action
  onSearch(keyword: string): void {
    console.log('Search keyword:', keyword);
  }

  @action
  onChange(item: any): void {
    console.log('Selected item:', item);

    if (this.values.includes(item.value)) {
      this.values = this.values.filter((value) => value !== item.value);
    } else {
      this.values = [...this.values, item.value];
    }

    this.value = item.value;
  }

  @action
  onTagRemove(): void {
    console.log('removing tag');
  }

  @action
  toggleTagAnimation(): void {
    this.tagLoading = !this.tagLoading;
  }

  @action
  handleTagInput({ value, type }: Keyword): string {
    this.tags = [...this.tags, { value, type }];
    return '';
  }

  @action
  handleSmartTagInput({ value, type }: Keyword): string {
    this.smartTags = [...this.smartTags, { value, type }];
    return '';
  }

  @action
  onTextAreaChange(value: string): void {
    console.log('Text area value changed:', value);
    this.textAreaValue = value;
  }

  @action
  fakeLoadData(): void {
    this.loading = true;
    setTimeout(() => {
      this.smartTags = [
        { value: 'example', type: 'keyword' },
        { value: 'test', type: 'mention' },
        { value: 'sample', type: 'hashtag' }
      ];
      next(() => {
        this.loading = false;
      });
    }, 3000);
  }
}
