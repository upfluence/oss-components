import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import { scheduleOnce } from '@ember/runloop';
import Component from '@glimmer/component';
import type { OSSTagArgs } from '@upfluence/oss-components/components/o-s-s/tag';

type Skin = 'primary' | 'xtd-blue' | 'xtd-cyan' | 'xtd-lime' | 'xtd-orange' | 'xtd-violet' | 'xtd-yellow';

export type ModeSwitchOption = {
  key: string;
  label: string;
  skin?: Skin;
  tag?: OSSTagArgs;
  icon?: string;
};

interface ModeSwitchComponentArgs {
  options: ModeSwitchOption[];
  selected?: string;
  onSelect(key: string): void;
  plain?: boolean;
  size?: 'xs';
}

const DEFAULT_SKIN = 'primary';

export default class ModeSwitchComponent extends Component<ModeSwitchComponentArgs> {
  containerDiv: HTMLElement = document.createElement('div');
  containerStyles: CSSStyleDeclaration = getComputedStyle(this.containerDiv);
  backgroundElement: HTMLElement = document.createElement('div');

  guid: string = guidFor(this);

  constructor(owner: unknown, args: ModeSwitchComponentArgs) {
    super(owner, args);

    scheduleOnce('afterRender', this, () => {
      this.initComponent();
    });
  }

  get selectedOptionKey(): string {
    return this.args.selected ?? this.args.options[0]!.key;
  }

  @action
  registerContainerDiv(container: HTMLElement): void {
    this.containerDiv = container;
    this.containerStyles = getComputedStyle(this.containerDiv);
  }

  @action
  registerBackgroundElement(backgroundDiv: HTMLElement): void {
    this.backgroundElement = backgroundDiv;
  }

  @action
  onKeyDown(inputId: string, event: KeyboardEvent): void {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    const inputElement = document.getElementById(`${this.guid}-${inputId}`) as HTMLInputElement;
    inputElement?.click();
  }

  get computedClass(): string {
    const classes = ['mode-switch'];

    if (this.args.plain) {
      classes.push('mode-switch--plain');
    }

    if (this.args.size === 'xs') {
      classes.push('mode-switch--xs');
    }

    return classes.join(' ');
  }

  get computedStyles(): string {
    this.moveBackgroundElement();

    const colorPath = this.getColorPath();
    if (!this.containerStyles) return '';
    return [
      `--mode-switch__selected-color:${this.containerStyles?.getPropertyValue(`--color-${colorPath}-500`)}`,
      `--mode-switch__selected-background-color:${this.containerStyles?.getPropertyValue(`--color-${colorPath}-50`)}`
    ].join(';');
  }

  private moveBackgroundElement(): void {
    const destinationLabelDivRect = document
      .querySelector(`label[for='${this.guid}-${this.selectedOptionKey}']`)
      ?.getBoundingClientRect();
    if (!this.backgroundElement || !destinationLabelDivRect) return;
    this.backgroundElement.style.width = destinationLabelDivRect.width + 'px';
    this.backgroundElement.style.left =
      destinationLabelDivRect.left - this.containerDiv.getBoundingClientRect().left + 'px';
  }

  private getColorPath(): string | undefined {
    const option = this.args.options.find((option) => option.key === this.selectedOptionKey);
    if (!option) return;
    const skin = option.skin ?? DEFAULT_SKIN;
    return skin.startsWith('xtd-') ? skin.split('-')[1] : skin;
  }

  private initComponent(): void {
    this.moveBackgroundElement();

    const colorPath = this.getColorPath();
    this.containerDiv.style.setProperty(
      '--mode-switch__selected-color',
      this.containerStyles.getPropertyValue(`--color-${colorPath}-500`)
    );
    this.containerDiv.style.setProperty(
      '--mode-switch__selected-background-color',
      this.containerStyles.getPropertyValue(`--color-${colorPath}-50`)
    );

    this.addTransitionsStyle();
  }

  private addTransitionsStyle(): void {
    this.backgroundElement.style.setProperty(
      'transition',
      'left 0.25s ease, width 0.25s ease, background-color 0.25s ease'
    );
    this.containerDiv.style.setProperty('transition', 'font-weight 0.25s ease, color 0.25s ease');
  }
}
