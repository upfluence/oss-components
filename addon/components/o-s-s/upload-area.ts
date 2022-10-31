import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { assert } from '@ember/debug';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

import ToastService from '@upfluence/oss-components/services/toast';
import Uploader, {
  FileArtifact,
  FileValidator,
  FilePrivacy,
  UploadRequest
} from '@upfluence/oss-components/types/uploader';

interface OSSUploadAreaArgs {
  uploader: Uploader;
  subtitle?: string;
  disabled?: boolean;
  privacy?: FilePrivacy;
  scope?: string;
  rules?: FileValidator[];
  artifact?: FileArtifact;
  size?: 'lg' | 'md';
  multiple?: boolean;

  onUploadSuccess(artifact: FileArtifact): void;
  onFileDeletion?(): void;

  // In multiple mode
  onUploadSuccess(index: number, artifact: FileArtifact): void;
  onFileDeletion?(index: number): void;
}

export default class OSSUploadArea extends Component<OSSUploadAreaArgs> {
  @service declare intl: any;
  @service declare toast: ToastService;

  private declare _DOMElement: HTMLElement;
  fileInput?: HTMLInputElement;
  editingFileIndex?: number;

  @tracked selectedFiles: (File | FileArtifact)[] = [];
  @tracked dragging: boolean = false;
  @tracked hover: boolean = false;
  @tracked alreadyTriggerAnimation: boolean = false;

  constructor(owner: unknown, args: OSSUploadAreaArgs) {
    super(owner, args);

    assert('[OSS::UploadArea] The uploader argument is mandatory', args.uploader);

    if (args.artifact) {
      this.selectedFiles = [args.artifact];
    }
  }

  get computedClass(): string {
    const classes = ['oss-upload-area', 'fx-1'];

    classes.push(`oss-upload-area--${this.size}`);

    if (this.args.disabled) {
      classes.push('oss-upload-area--disabled');
    }

    if (this.dragging) {
      classes.push('oss-upload-area--dragging');
    }

    return classes.join(' ');
  }

  get computedClassIllustration(): string {
    const classes = ['oss-upload-area__illustration'];

    if (this.dragging || this.hover) {
      classes.push(`oss-upload-area__illustration--dragging-start`);
      this.alreadyTriggerAnimation = true;
    } else if (this.alreadyTriggerAnimation) {
      classes.push(`oss-upload-area__illustration--dragging-end`);
    }

    return classes.join(' ');
  }

  get size(): string {
    return this.args.size && ['lg', 'md'].includes(this.args.size) ? this.args.size : 'md';
  }

  get filePrivacy(): FilePrivacy {
    return this.args.privacy || FilePrivacy.PRIVATE;
  }

  get scope(): string {
    return this.args.scope || 'anonymous';
  }

  get multiple(): boolean {
    return this.args.multiple || false;
  }

  get displayUploadArea(): boolean {
    return this.multiple || this.selectedFiles.length === 0;
  }

  @action
  init(element: HTMLElement): void {
    this._DOMElement = element;
  }

  @action
  assignFileInput(element: HTMLInputElement): void {
    this.fileInput = element;
  }

  @action
  triggerFileBrowser(event?: MouseEvent): void {
    event?.stopPropagation();
    if (this.args.disabled) return;
    this.fileInput?.click();
  }

  @action
  onFileSelected(event: Event): void {
    this._handleFileUpload(((<HTMLInputElement>event.target).files || [])[0]);
    (<HTMLInputElement>event.target).value = '';
  }

  @action
  onFileEdition(index: number, event?: MouseEvent): void {
    event?.stopPropagation();

    this.editingFileIndex = index;
    this.triggerFileBrowser();
  }

  @action
  _allowDropEvent(event: Event): void {
    if (this.args.disabled) return;
    event.preventDefault();
  }

  @action
  _onDragEnter(): void {
    if (this.args.disabled) return;
    this.dragging = true;
  }

  @action
  _onDragLeave(event: DragEvent): void {
    if (this.args.disabled) return;
    if (
      (<HTMLElement>event.target).classList.contains('oss-upload-area--dragging') &&
      !this._DOMElement.contains(<Node>event.relatedTarget)
    ) {
      this.dragging = false;
    }
  }

  @action
  _onDrop(event: DragEvent): void {
    event.preventDefault();
    const file = event.dataTransfer?.files[0];

    if (file) {
      this._handleFileUpload(file);
    }

    this.dragging = false;
  }

  @action
  _mouseEnter(): void {
    if (this.args.disabled) return;
    this.hover = true;
  }

  @action
  _mouseLeave(): void {
    if (this.args.disabled) return;
    this.hover = false;
  }

  @action
  onFileDeletion(index: number, event?: MouseEvent): void {
    event?.stopPropagation();

    if (this.multiple) {
      this.selectedFiles.splice(index, 1);
      this.selectedFiles = this.selectedFiles;
      this.args.onFileDeletion?.(index);
    } else {
      this.selectedFiles = [];
      this.args.onFileDeletion?.();
    }
  }

  @action
  onUploadSuccess(index: number, artifact: FileArtifact): void {
    if (this.multiple) {
      this.args.onUploadSuccess(index, artifact);
    } else {
      this.args.onUploadSuccess(artifact);
    }
  }

  private _handleFileUpload(file: File): void {
    if (this._validateFile(file)) {
      if (this.editingFileIndex !== undefined) {
        this.selectedFiles[this.editingFileIndex] = file;
        this.selectedFiles = this.selectedFiles;
        this.editingFileIndex = undefined;
      } else {
        this.selectedFiles = [...this.selectedFiles, ...[file]];
      }
    }
  }

  private _validateFile(file: File): boolean {
    const request: UploadRequest = {
      file,
      privacy: this.filePrivacy,
      scope: this.scope
    };

    const validationResponse = this.args.uploader.validate(request, this.args.rules || []);

    if (validationResponse.passes) {
      return true;
    }

    validationResponse.validations.forEach((v) => {
      const intlArgs: { [key: string]: string } = {};

      if (v.rule.type === 'filesize') {
        intlArgs.max_filesize = v.rule.value;
      }

      this.toast.error(
        this.intl.t(`oss-components.upload-area.errors.${v.rule.type}.description`, intlArgs),
        this.intl.t(`oss-components.upload-area.errors.${v.rule.type}.title`)
      );
    });

    return false;
  }
}
