import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { htmlSafe } from '@ember/template';
import { isBlank } from '@ember/utils';

interface SliderComponentArgs {
  value: string;
  autocomplete?: 'on' | 'off';
  defaultValue?: string;
  displayInputValue?: boolean;
  unit?: 'percentage' | 'number';
  disabled?: boolean;
  min?: number;
  max?: number;
  step?: number;
  tooltipLabel?: string;
  inputOptions?: { max?: number; min?: number };
  onChange(value: number | null): void;
}

const HANDLE_WIDTH: number = 12;
const DEFAULT_VALUE: string = '50';

export default class SliderComponent extends Component<SliderComponentArgs> {
  sliderOptions = {
    min: this.args.min ?? 0,
    max: this.args.max ?? 100,
    step: this.args.step ?? 1,
    autocomplete: this.args.autocomplete ?? 'on'
  };

  @tracked displayTooltip: boolean = false;
  @tracked inputRangeElement: HTMLElement | null = null;
  @tracked tooltipElement: HTMLElement | null = null;

  get defaultValue(): string {
    return this.args.defaultValue ?? DEFAULT_VALUE;
  }

  get currentRangeValue(): string {
    if (this.args.value === undefined || this.args.value === null) {
      return this.defaultValue;
    }
    return isBlank(this.args.value) ? '0' : this.args.value;
  }

  get unitIcon(): ReturnType<typeof htmlSafe> | string {
    if (this.args.unit === 'percentage') {
      return htmlSafe('<i class="far fa-percent"></i>');
    } else if (this.args.unit === 'number') {
      return htmlSafe('<i class="far fa-hashtag"></i>');
    }
    return '';
  }

  get tooltipPositionStyle(): ReturnType<typeof htmlSafe> | null {
    if (!this.tooltipElement && !this.inputRangeElement) return null;

    const sliderRect = this.inputRangeElement!.getBoundingClientRect();
    const percentage = this.getPercentage(this.currentRangeValue);
    const correctedSliderWidth = sliderRect.width - HANDLE_WIDTH;

    const handleTooltipHorizontalPosition = percentage * correctedSliderWidth;
    const tooltipWidth = this.tooltipElement!.offsetWidth;
    const tooltipLeftPosition = handleTooltipHorizontalPosition - tooltipWidth / 2 + HANDLE_WIDTH / 2;

    return htmlSafe(`left:${tooltipLeftPosition}px`);
  }

  get activeBackgroundWidth(): ReturnType<typeof htmlSafe> {
    const percentage = Math.round(this.getPercentage(this.args.value ?? '0') * 100);
    return htmlSafe(`--range-percentage: ${percentage}%`);
  }

  @action
  onRangeChange(event: InputEvent): void {
    const value = parseFloat((event.target as HTMLInputElement).value);
    const max = this.args.inputOptions?.max ?? this.sliderOptions.max;
    const min = this.args.inputOptions?.min ?? this.sliderOptions.min;

    if (value > max) {
      (event.target as HTMLInputElement).value = String(max);
      this.args.onChange(max);
    } else if (value < min) {
      (event.target as HTMLInputElement).value = String(min);
      this.args.onChange(min);
    } else {
      this.args.onChange(value);
    }
  }

  @action
  onNumberInput(event: InputEvent): void {
    const value = (event.target as HTMLInputElement).value;
    this.checkUserInput(value);
  }

  @action
  showTooltip(): void {
    this.displayTooltip = true;
  }

  @action
  removeTooltip(): void {
    this.displayTooltip = false;
  }

  @action
  initializeSliderInput(element: HTMLElement): void {
    this.inputRangeElement = element;
  }

  @action
  initializeTooltip(element: HTMLElement): void {
    this.tooltipElement = element;
  }

  private getPercentage(value: string): number {
    let correction = 0;
    const convertedValue = parseFloat(isBlank(value) ? '0' : value);

    if (this.args.step) {
      correction =
        convertedValue % this.args.step >= this.args.step / 2
          ? this.args.step - (convertedValue % this.args.step)
          : -value % this.args.step;
    }

    return Math.min(
      Math.max(convertedValue + correction - this.sliderOptions.min, 0) /
        (this.sliderOptions.max - this.sliderOptions.min),
      1
    );
  }

  private checkUserInput(value: string | null): void {
    if (this.args.inputOptions?.min !== undefined && Number(value) < this.args.inputOptions.min) {
      this.args.onChange(this.args.inputOptions.min);
    } else if (this.args.inputOptions?.max !== undefined && Number(value) > this.args.inputOptions.max) {
      this.args.onChange(this.args.inputOptions.max);
    } else {
      this.args.onChange(value ? parseFloat(value) : null);
    }
  }
}
