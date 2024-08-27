import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { guidFor } from '@ember/object/internals';

interface SliderComponentArgs {
  value: number;
  onChange?: (value: number) => void;
  displayInputValue?: boolean;
  unit?: 'percentage' | 'number';
  disabled?: boolean;
  min?: number;
  max?: number;
  step?: number;
}

const HANDLE_WIDTH = 12;
export default class SliderComponent extends Component<SliderComponentArgs> {
  sliderOptions = {
    min: this.args.min ?? 0,
    max: this.args.max ?? 100,
    step: this.args.step ?? 1
  };

  @tracked currentRangeValue: number = this.args.value;
  @tracked displayTooltip: boolean = false;

  elementId = `slider-${guidFor(this)}`;

  get unitIcon(): string | null {
    if (this.args.unit === 'percentage') {
      return 'fa-percent';
    } else if (this.args.unit === 'number') {
      return 'fa-hashtag';
    } else {
      return null;
    }
  }

  @action
  onRangeChange(event: InputEvent): void {
    let value = (event.target as HTMLInputElement).valueAsNumber;
    this.updateValue(value);
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
  onNumberInput(event: InputEvent): void {
    let value = (event.target as HTMLInputElement).valueAsNumber;
    if (isNaN(value)) {
      value = this.sliderOptions.min;
    }
    this.updateValue(value);
  }

  @action
  initializeSlider(): void {
    requestAnimationFrame(() => {
      this.updateBackgroundSize(this.currentRangeValue);
      this.updateTooltipPosition(this.currentRangeValue);
    });
  }

  private getPercentage(value: number): number {
    return (value - this.sliderOptions.min) / (this.sliderOptions.max - this.sliderOptions.min);
  }

  private updateValue(value: number): void {
    this.currentRangeValue = value;
    this.updateBackgroundSize(value);
    this.updateTooltipPosition(value);
    if (this.args.onChange) {
      this.args.onChange(value);
    }
  }

  private updateBackgroundSize(value: number): void {
    let percentage = this.getPercentage(value) * 100;
    const customRangeElement = document.querySelector('.oss-slider--range') as HTMLElement;
    if (customRangeElement) customRangeElement.style.setProperty('--range-percentage', `${percentage}%`);
  }

  private updateTooltipPosition(value: number): void {
    const tooltip = document.querySelector('.oss-slider--tooltip') as HTMLElement;
    const sliderElement = document.querySelector('.oss-slider--range') as HTMLElement;

    if (sliderElement && tooltip) {
      const sliderRect = sliderElement.getBoundingClientRect();
      const percentage = this.getPercentage(value);

      const correctedSliderWidth = sliderRect.width - HANDLE_WIDTH;

      const handleTooltipHorizontalPosition = percentage * correctedSliderWidth;

      const tooltipWidth = tooltip.offsetWidth;
      const tooltipLeftPosition = handleTooltipHorizontalPosition - tooltipWidth / 2 + HANDLE_WIDTH / 2;

      tooltip.style.left = `${tooltipLeftPosition}px`;
    } else {
      console.error('Tooltip or Slider elements not found');
    }
  }
}
