import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

interface OSSNumberInputArgs {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
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

  get step(): number {
    return this.args.step || 1;
  }

  get dynamicWidth(): any {
    return `width: ${BASE_INPUT_PIXEL_WIDTH + ('' + this.localValue).length * CHAR_PIXEL_WIDTH}px`;
  }

  @action
  keyParser(event: KeyboardEvent): void {
    if (INCREASE_VALUE_KEYS.find((key: string) => key === event.key)) {
      this.increaseValue(event.shiftKey);
      return;
    } else if (DECREASE_VALUE_KEYS.find((key: string) => key === event.key)) {
      this.decreaseValue(event.shiftKey);
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
  }

  @action
  increaseValue(shiftEnabled?: boolean): void {
    if (this.args.max === undefined || Number(this.localValue) + this.step <= this.args.max) {
      this.localValue = Number(this.localValue) + (shiftEnabled ? this.step * 2 : this.step);
      this.notifyChanges();
    }
  }

  @action
  decreaseValue(shiftEnabled?: boolean): void {
    if (this.args.min === undefined || Number(this.localValue) - this.step >= this.args.min) {
      this.localValue = Number(this.localValue) - (shiftEnabled ? this.step * 2 : this.step);
      this.notifyChanges();
    }
  }

  @action
  notifyChanges(): void {
    this.args.onChange?.(Number(this.localValue));
  }
}
