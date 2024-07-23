import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { guidFor } from '@ember/object/internals';

interface SliderComponentArgs {
  value: number;
  onChange?: (value: number) => void;
  displayInputValue?: boolean;
  unit?: string;
}

export default class SliderComponent extends Component<SliderComponentArgs> {
  sliderOptions = {
    min: 0,
    max: 100
  };

  @tracked currentRangeValue: number;

  elementId = `slider-${guidFor(this)}`;

  constructor(owner: unknown, args: SliderComponentArgs) {
    super(owner, args);
    this.currentRangeValue = this.args.value;
  }

  @action
  onRangeInput(event: InputEvent) {
    let value = (event.target as HTMLInputElement).valueAsNumber;
    this.updateValue(value);
  }

  @action
  onTextInput(event: InputEvent) {
    let value = (event.target as HTMLInputElement).valueAsNumber;
    if (isNaN(value)) {
      value = this.sliderOptions.min;
    }
    this.updateValue(value);
  }

  updateValue(value: number) {
    this.currentRangeValue = value;
    this.updateBackgroundSize(value);
    if (this.args.onChange) {
      this.args.onChange(value);
    }
  }

  updateBackgroundSize(value: number) {
    let percentage = ((value - this.sliderOptions.min) / (this.sliderOptions.max - this.sliderOptions.min)) * 100;
    const customRangeElement = document.querySelector('.oss-slider--custom-range') as HTMLElement;
    customRangeElement.style.setProperty('--range-percentage', `${percentage}%`);
  }

  @action
  initializeSlider() {
    this.updateBackgroundSize(this.currentRangeValue);
  }
}
