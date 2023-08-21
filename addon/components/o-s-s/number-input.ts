import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

interface OSSNumberInputArgs {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  minReachedTooltip?: string;
  maxReachedTooltip?: string;
  onChange?(value: number): void;
}

const NUMERIC_ONLY = /^[0-9]$/i;
const DEFAULT_VALUE = 0;
const AUTHORIZED_KEYS = ['Backspace', 'Delete', 'Tab', 'Shift', 'Control', '-'];
const INCREASE_VALUE_KEYS = ['ArrowUp', 'ArrowRight'];
const DECREASE_VALUE_KEYS = ['ArrowDown', 'ArrowLeft'];
const BASE_INPUT_PIXEL_WIDTH = 35;
const CHAR_PIXEL_WIDTH = 7;

export default class OSSNumberInput extends Component<OSSNumberInputArgs> {
  @tracked localValue: number = this.args.value || DEFAULT_VALUE;
  @tracked reachedTooltip: string | null = null;
  @tracked isMinDisabled: boolean = false;
  @tracked isMaxDisabled: boolean = false;

  constructor(owner: unknown, args: OSSNumberInputArgs) {
    super(owner, args);
    this.reachedTooltipHandler();
    this.checkDisabledButton();
  }

  get step(): number {
    return this.args.step || 1;
  }

  get dynamicWidth(): any {
    return `width: ${BASE_INPUT_PIXEL_WIDTH + ('' + this.localValue).length * CHAR_PIXEL_WIDTH}px`;
  }

  @action
  keyParser(event: KeyboardEvent): void {
    if (INCREASE_VALUE_KEYS.find((key: string) => key === event.key)) {
      this.increaseValue(event);
      return;
    } else if (DECREASE_VALUE_KEYS.find((key: string) => key === event.key)) {
      this.decreaseValue(event);
      return;
    }
    if (!NUMERIC_ONLY.test(event.key) && !AUTHORIZED_KEYS.find((key: string) => key === event.key)) {
      event.preventDefault();
    } else {
      this.notifyChanges();
    }
  }

  @action
  checkUserInput(): void {
    if (this.args.min !== undefined && Number(this.localValue) < this.args.min) {
      this.localValue = this.args.min;
    }
    if (this.args.max !== undefined && Number(this.localValue) > this.args.max) {
      this.localValue = this.args.max;
    }
    this.notifyChanges();
    this.reachedTooltipHandler();
    this.checkDisabledButton();
  }

  @action
  increaseValue(event: PointerEvent | KeyboardEvent): void {
    if (this.args.max === undefined || Number(this.localValue) + this.step <= this.args.max) {
      this.localValue = Number(this.localValue) + (event.shiftKey ? this.step * 2 : this.step);
      this.checkUserInput();
    }
  }

  @action
  decreaseValue(event: PointerEvent | KeyboardEvent): void {
    if (this.args.min === undefined || Number(this.localValue) - this.step >= this.args.min) {
      this.localValue = Number(this.localValue) - (event.shiftKey ? this.step * 2 : this.step);
      this.checkUserInput();
    }
  }

  @action
  notifyChanges(): void {
    this.args.onChange?.(Number(this.localValue));
  }

  private reachedTooltipHandler(): void {
    if (Number(this.localValue) === this.args.min) {
      if (!this.args.minReachedTooltip) return;
      this.reachedTooltip = this.args.minReachedTooltip;
      return;
    }
    if (Number(this.localValue) === this.args.max) {
      if (!this.args.maxReachedTooltip) return;
      this.reachedTooltip = this.args.maxReachedTooltip;
      return;
    }
    this.reachedTooltip = null;
    document.querySelector('.upf-tooltip')?.remove();
  }

  private checkDisabledButton(): void {
    this.isMinDisabled = Number(this.localValue) === this.args.min;
    this.isMaxDisabled = Number(this.localValue) === this.args.max;
  }
}
