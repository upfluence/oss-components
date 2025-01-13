import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { htmlSafe } from '@ember/template';
import type { SafeString } from '@ember/template/-private/handlebars';

export default class Overlay extends Controller {
  @tracked showPopover: boolean = false;
  @tracked showDialog: boolean = false;
  @tracked showModalDialog: boolean = false;
  @tracked showSplitModal: boolean = false;
  @tracked showSidePanel: boolean = false;

  @tracked overlayMainAction: Object = { action: this.onDialogMainAction, label: 'Discard changes' };
  @tracked overlaySecondaryAction: Object = { action: this.onDialogSecondaryAction, label: 'Keep editing' };

  get translatedHTMLTitle(): SafeString {
    return htmlSafe('This title can take a <em>string</em> or a <em>safeString</em>');
  }

  @action
  openPopover(event: PointerEvent): void {
    event.stopPropagation();
    this.showPopover = true;
  }

  @action
  openDialog(event: PointerEvent): void {
    event.stopPropagation();
    this.showDialog = true;
  }

  @action
  onDialogMainAction(): void {
    console.log('Discard changes');
    this.showDialog = false;
  }

  @action
  onDialogSecondaryAction(): void {
    console.log('Keep editing');
    this.showDialog = false;
  }

  @action
  openModalDialog(event: PointerEvent): void {
    event.stopPropagation();
    this.showModalDialog = true;
  }

  @action
  closeModalDialog(): void {
    this.showModalDialog = false;
  }

  @action
  saveModalDialog(): void {
    console.log('Changes have been saved');
    this.showModalDialog = false;
  }

  @action
  openSplitModal(event: PointerEvent): void {
    event.stopPropagation();
    this.showSplitModal = true;
  }

  @action
  closeSplitModal(): void {
    this.showSplitModal = false;
  }

  @action
  openSidePanel(event: PointerEvent): void {
    event.stopPropagation();
    this.showSidePanel = true;
  }

  @action
  closeSidePanel(): void {
    this.showSidePanel = false;
  }

  @action
  onReturn(): void {
    console.log('Function onReturn was called');
  }
}
