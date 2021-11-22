import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

type OperationType = 'selection' | 'deletion';

interface OSSPowerSelectArgs {
  items: any[];
  selectedItems: any[];
  onChange: (item: any, operation: OperationType) => void;

  loading?: boolean;
  loadingMore?: boolean;
  placeholder?: string;
  searchPlaceholder?: string;
  onSearch?: (keyword: string) => void;
  onBottomReached?: () => void;
}

export default class OSSPowerSelect extends Component<OSSPowerSelectArgs> {
  @tracked hasScrollbar = false;

  resizeObserver: ResizeObserver;

  constructor(owner: any, args: OSSPowerSelectArgs) {
    super(owner, args);

    this.resizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]) => {
      const observedArrayInput = entries.find((entry) => {
        return entry.target.classList.contains('array-input-container');
      });

      if (observedArrayInput) {
        this.hasScrollbar = observedArrayInput.target.scrollHeight > observedArrayInput.target.clientHeight;
      }
    });
  }

  get placeholder(): string {
    return this.args.placeholder ?? '';
  }

  @action
  observeResize(element: Element): void {
    this.resizeObserver.observe(element);
  }

  @action
  unobserveResize(element: Element): void {
    this.resizeObserver.unobserve(element);
  }

  @action
  ensureBlockPresence(hasSelectedItem: boolean, hasOptionItem: boolean): void | never {
    if (!hasSelectedItem) {
      throw new Error(`[component][OSS::PowerSelect] You must pass selected-item named block`);
    }
    if (!hasOptionItem) {
      throw new Error(`[component][OSS::PowerSelect] You must pass option-item named block`);
    }
  }

  @action
  removeItem(item: any): void {
    this.args.onChange(item, 'deletion');
  }

  @action
  onSelect(item: any): void {
    this.args.onChange(item, 'selection');
  }
}
