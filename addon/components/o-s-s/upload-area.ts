import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

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

  onUploadSuccess(artifact: FileArtifact): void;
}

export default class OSSUploadArea extends Component<OSSUploadAreaArgs> {
  fileInput?: HTMLInputElement;
  selectedFile?: File;

  @tracked dragging: boolean = false;

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

  get size(): string {
    return this.args.size && ['lg', 'md'].includes(this.args.size) ? this.args.size : 'md';
  }

  get filePrivacy(): FilePrivacy {
    return this.args.privacy || FilePrivacy.PRIVATE;
  }

  get scope(): string {
    return this.args.scope || 'anonymous';
  }

  @action
  assignFileInput(element: HTMLInputElement): void {
    this.fileInput = element;
  }

  @action
  triggerFileBrowser(event: MouseEvent): void {
    event.stopPropagation();
    this.fileInput?.click();
  }

  @action
  onFileSelected(event: Event): void {
    this._handleFileUpload(((<HTMLInputElement>event.target).files || [])[0]);
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
  _onDragLeave(): void {
    if (this.args.disabled) return;
    this.dragging = false;
  }

  @action
  _onDrop(event: DragEvent): void {
    event.stopPropagation();
    event.preventDefault();
    const file = event.dataTransfer?.files[0];

    if (file) {
      this._handleFileUpload(file);
    }

    this.dragging = false;
  }

  private _handleFileUpload(file: File): void {
    if (this._validateFile(file)) {
      this.selectedFile = file;
      return;
    }
  }

  private _validateFile(file: File): boolean {
    const request: UploadRequest = {
      file,
      privacy: this.filePrivacy,
      scope: this.scope
    };

    const validations = this.args.uploader.validate(request, this.args.rules || []);

    if (validations.passes) {
      return true;
    }

    // run toasts

    return false;
  }
}
