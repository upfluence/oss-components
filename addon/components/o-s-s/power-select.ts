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
      let observedArrayInput = entries.find((entry) => {
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
  observeResize(element: Element) {
    this.resizeObserver.observe(element);
  }

  @action
  unobserveResize(element: Element) {
    this.resizeObserver.unobserve(element);
  }

  @action
  checkBlockPresence(hasNameBock: boolean, name: string) {
    if (!hasNameBock) {
      throw new Error(`[component][OSS::PowerSelect] You must pass ${name} name block`);
    }
  }

  @action
  removeItem(item: any) {
    this.args.onChange(item, 'deletion');
  }

  @action
  onSelect(item: any) {
    this.args.onChange(item, 'selection');
  }
}
