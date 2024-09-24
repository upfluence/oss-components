import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { guidFor } from '@ember/object/internals';
import { htmlSafe } from '@ember/template';
import type { SafeString } from '@ember/template/-private/handlebars';

interface SliderComponentArgs {
  value: number;
  onChange?: (value: number | null) => void;
  displayInputValue?: boolean;
  unit?: 'percentage' | 'number';
  disabled?: boolean;
  min?: number;
  max?: number;
  step?: number;
}

const HANDLE_WIDTH = 12;

export default class SliderComponent extends Component<SliderComponentArgs> {
  elementId = `slider-${guidFor(this)}`;
  sliderOptions = {
    min: this.args.min ?? 0,
    max: this.args.max ?? 100,
    step: this.args.step ?? 1
  };

  @tracked displayTooltip: boolean = false;

  get currentRangeValue(): number {
    this.updateBackgroundSize();
    this.updateTooltipPosition();

    return isNaN(this.args.value) ? 0 : this.args.value;
  }

  get unitIcon(): SafeString | string {
    if (this.args.unit === 'percentage') {
      return htmlSafe('<i class="far fa-percent"></i>');
    } else if (this.args.unit === 'number') {
      return htmlSafe('<i class="far fa-hashtag"></i>');
    }
    return '';
  }

  @action
  onRangeChange(event: InputEvent): void {
    const value = (event.target as HTMLInputElement).valueAsNumber;
    this.updateValue(value);
  }

  @action
  onNumberInput(event: InputEvent): void {
    const value = (event.target as HTMLInputElement).valueAsNumber;
    this.updateValue(value);
  }

  @action
  showTooltip(): void {
    this.updateTooltipPosition();
    this.displayTooltip = true;
  }

  @action
  removeTooltip(): void {
    this.displayTooltip = false;
  }

  @action
  initializeSlider(): void {
    requestAnimationFrame(() => {
      this.updateBackgroundSize();
    });
  }

  private getPercentage(value: number): number {
    return Math.min((value - this.sliderOptions.min) / (this.sliderOptions.max - this.sliderOptions.min), 1);
  }

  private updateValue(value: number | null): void {
    this.args.onChange?.(value);
  }

  private updateBackgroundSize(): void {
    const percentage = this.getPercentage(isNaN(this.args.value) ? 0 : this.args.value) * 100;
    const customRangeElement = document.querySelector(`#${this.elementId} .oss-slider__range`) as HTMLElement;
    customRangeElement?.style.setProperty('--range-percentage', `${percentage}%`);
  }

  private updateTooltipPosition(): void {
    const tooltip = document.querySelector(`#${this.elementId} .oss-slider__tooltip`) as HTMLElement;
    const sliderElement = document.querySelector(`#${this.elementId} .oss-slider__range`) as HTMLElement;

    if (!sliderElement || !tooltip) return;

    const sliderRect = sliderElement.getBoundingClientRect();
    const percentage = this.getPercentage(isNaN(this.args.value) ? 0 : this.args.value);
    const correctedSliderWidth = sliderRect.width - HANDLE_WIDTH;

    const handleTooltipHorizontalPosition = percentage * correctedSliderWidth;
    const tooltipWidth = tooltip.offsetWidth;
    const tooltipLeftPosition = handleTooltipHorizontalPosition - tooltipWidth / 2 + HANDLE_WIDTH / 2;

    tooltip.style.left = `${tooltipLeftPosition}px`;
  }
}
