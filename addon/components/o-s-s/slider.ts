import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { guidFor } from '@ember/object/internals';
import type { Toggle } from './toggle-buttons';

interface SliderComponentArgs {
  value: number;
  label?: string;
  tooltipLabel?: string;
  toggles?: Toggle[];
  onToggleSwitch?: (value: string) => void;
  onChange?: (value: number) => void;
}

export default class SliderComponent extends Component<SliderComponentArgs> {
  sliderOptions = {
    min: 0,
    max: 100
  };

  @tracked currentRangeFilter: number;
  @tracked selectedToggle: Toggle['value'] | undefined;

  elementId = `slider-${guidFor(this)}`;

  constructor(owner: unknown, args: SliderComponentArgs) {
    super(owner, args);
    this.currentRangeFilter = this.args.value;
    if (this.args.toggles) {
      this.selectedToggle = this.args.toggles[0]?.value ?? undefined;
    }
  }

  @action
  onRangeInput(event: InputEvent) {
    let value = (event.target as HTMLInputElement).valueAsNumber;
    this.updateValue(value);
  }

  @action
  onSwitch(value: string) {
    console.log(value);
    if (this.args.onToggleSwitch) {
      this.args.onToggleSwitch(value);
    }
  }

  @action
  onTextInput(event: InputEvent) {
    let value = (event.target as HTMLInputElement).valueAsNumber;
    this.updateValue(value);
  }

  updateValue(value: number) {
    this.currentRangeFilter = value;
    this.updateBackgroundSize(value);
    this.updateTooltipPosition(value);
    if (this.args.onChange) {
      this.args.onChange(value);
    }
  }
  updateBackgroundSize(value: number) {
    let percentage = ((value - this.sliderOptions.min) / (this.sliderOptions.max - this.sliderOptions.min)) * 100;
    const customRangeElement = document.querySelector('.custom-range') as HTMLElement;
    customRangeElement.style.setProperty('--range-percentage', `${percentage}%`);
  }

  updateTooltipPosition(value: number) {
    const tooltip = document.querySelector('.upf-tooltip') as HTMLElement;
    if (tooltip) {
      const slider = document.querySelector('.custom-range')?.getBoundingClientRect();
      const sliderContainerRect = document.querySelector('.oss-slider--range-container')?.getBoundingClientRect();
      if (slider && sliderContainerRect) {
        const handlePosition =
          ((value - this.sliderOptions.min) / (this.sliderOptions.max - this.sliderOptions.min)) * slider.width;
        const tooltipLeft = sliderContainerRect.left + handlePosition - tooltip.offsetWidth / 2;
        tooltip.style.setProperty('--upf-modifier-tooltip-left', tooltipLeft + 'px');
      }
    }
  }

  @action
  initializeSlider() {
    this.updateBackgroundSize(this.currentRangeFilter);
    this.updateTooltipPosition(this.currentRangeFilter);
  }
}
