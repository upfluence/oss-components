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
}

export default class SliderComponent extends Component<SliderComponentArgs> {
  sliderOptions = {
    min: 0,
    max: 100
  };

  @tracked currentRangeValue: number;
  @tracked displayTooltip: boolean = false;

  elementId = `slider-${guidFor(this)}`;

  constructor(owner: unknown, args: SliderComponentArgs) {
    super(owner, args);
    this.currentRangeValue = this.args.value;
  }

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
  onRangeChange(event: InputEvent) {
    let value = (event.target as HTMLInputElement).valueAsNumber;
    this.updateValue(value);
  }

  @action
  showTooltip() {
    this.displayTooltip = true;
  }

  @action
  removeTooltip() {
    this.displayTooltip = false;
  }

  @action
  onNumberInput(event: InputEvent) {
    let value = (event.target as HTMLInputElement).valueAsNumber;
    if (isNaN(value)) {
      value = this.sliderOptions.min;
    }
    this.updateValue(value);
  }

  updateValue(value: number) {
    this.currentRangeValue = value;
    this.updateBackgroundSize(value);
    this.updateTooltipPosition(value);
    if (this.args.onChange) {
      this.args.onChange(value);
    }
  }

  updateBackgroundSize(value: number) {
    let percentage = this.getPercentage(value) * 100;
    const customRangeElement = document.querySelector('.oss-slider--range') as HTMLElement;
    if (customRangeElement) customRangeElement.style.setProperty('--range-percentage', `${percentage}%`);
  }

  updateTooltipPosition(value: number) {
    const tooltip = document.querySelector('.oss-slider--tooltip') as HTMLElement;
    const sliderElement = document.querySelector('.oss-slider--range') as HTMLElement;

    if (sliderElement && tooltip) {
      const sliderRect = sliderElement.getBoundingClientRect();
      const percentage = this.getPercentage(value);

      const handleWidth = 12;
      const correctedSliderWidth = sliderRect.width - handleWidth;

      const handleTooltipHorizontalPosition = percentage * correctedSliderWidth;

      const tooltipWidth = tooltip.offsetWidth;
      const tooltipLeftPosition = handleTooltipHorizontalPosition - tooltipWidth / 2 + handleWidth / 2;

      tooltip.style.left = `${tooltipLeftPosition}px`;
    } else {
      console.error('Tooltip or Slider elements not found');
    }
  }

  @action
  initializeSlider() {
    requestAnimationFrame(() => {
      this.updateBackgroundSize(this.currentRangeValue);
      this.updateTooltipPosition(this.currentRangeValue);
    });
  }

  private getPercentage(value: number): number {
    return (value - this.sliderOptions.min) / (this.sliderOptions.max - this.sliderOptions.min);
  }
}
