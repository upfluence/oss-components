import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

interface OSSArrayInputArgs {
  values?: string[];
  keyboardTriggers?: string[];
  validator?: (value: string) => boolean;
  onChange?: (values: string[]) => void;
  placeholder?: string;
}

const DEFAULT_KEYBOARD_TRIGGERS = ['Enter'];

export default class OSSArrayInput extends Component<OSSArrayInputArgs> {
  @tracked currentValue = '';
  @tracked items: string[] = [];

  constructor(owner: unknown, args: OSSArrayInputArgs) {
    super(owner, args);
    if (this.args.values) {
      this.items = this.args.values;
    }
  }

  get keyboardTriggers(): string[] {
    return DEFAULT_KEYBOARD_TRIGGERS.concat(this.args.keyboardTriggers || []);
  }

  private _triggerComponentRedraw(): void {
    // Since this.items is not properly tracked upon updating the values,
    // re-assigning this way triggers the component redraw.
    this.items = this.items;
  }

  private _addEntry() {
    this.items.push(this.currentValue);
    this._triggerComponentRedraw();
    this.currentValue = '';
    this._onChange();
  }

  private _validateEntry(): void {
    if (!this.args.validator || this.args.validator(this.currentValue)) {
      this._addEntry();
    }
  }

  private _editPreviousEntry(): void {
    this.currentValue = <string>this.items.pop();
    this._triggerComponentRedraw();
    this._onChange();
  }

  private _onChange(): void {
    if (this.args.onChange) {
      this.args.onChange(this.items);
    }
  }

  @action
  validateTagOnClickOutside(): void {
    if (this.currentValue.length > 0) this._validateEntry();
    else this._onChange();
  }

  @action
  keyListener(keyboardEvent: KeyboardEvent): void {
    if (this.keyboardTriggers.includes(keyboardEvent.key) && this.currentValue.length > 0) {
      keyboardEvent.preventDefault();
      this._validateEntry();
    } else if (this.currentValue.length === 0 && this.items.length > 0 && keyboardEvent.code === 'Backspace') {
      this._editPreviousEntry();
    }
  }

  @action
  removeItem(index: number): void {
    this.items.splice(index, 1);
    this._triggerComponentRedraw();
    this._onChange();
  }
}
