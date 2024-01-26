import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

import {
  type default as Uploader,
  type FailedUploadResponse,
  type FileArtifact,
  type FilePrivacy,
  type FileValidator,
  type UploadRequest
} from '@upfluence/oss-components/types/uploader';
import { humanizeFilesize } from '@upfluence/oss-components/utils/filesize-parser';

interface OSSUploadItemSignature {
  Args: {
    uploader: Uploader;
    file: File | FileArtifact;
    rules: FileValidator[];
    privacy: FilePrivacy;
    scope: string;
    displayPreview?: boolean;
    onEdition(): void;
    onDeletion(): void;
    onUploadSuccess(artifact: FileArtifact): void;
    onUploadFailure?(error: FailedUploadResponse): void;
  };
}

const FA_ICON_PER_TYPE: { [key: string]: string } = {
  image: 'far fa-image',
  video: 'far fa-file-video',
  pdf: 'far fa-file-pdf'
};

const DEFAULT_FA_ICON = 'far fa-file-alt';

export default class OSSUploadItemComponent extends Component<OSSUploadItemSignature> {
  @tracked fileUrl: string = '';
  @tracked uploading: boolean = false;
  @tracked uploadProgress: number = 0;
  @tracked error?: FailedUploadResponse;

  request?: UploadRequest;

  constructor(owner: unknown, args: OSSUploadItemSignature['Args']) {
    super(owner, args);

    if (args.file instanceof File) {
      this.request = {
        file: args.file,
        privacy: args.privacy,
        scope: args.scope,
        onSuccess: this.onUploadSuccess,
        onFailure: this.onUploadFailure,
        onProgress: this.onProgress
      };

      this.performUpload();
    } else {
      this.fileUrl = (<FileArtifact>this.args.file).url;
    }
  }

  get icon(): string {
    const filetypeIconCategory = this._extractFileTypeCategory();
    return filetypeIconCategory ? FA_ICON_PER_TYPE[filetypeIconCategory]! : DEFAULT_FA_ICON;
  }

  get filename(): string {
    return this.args.file instanceof File ? this.args.file.name : this.args.file.filename;
  }

  get filesize(): string | null {
    return this.args.file.size ? humanizeFilesize(this.args.file.size) : null;
  }

  get loaderStyle(): string {
    const angle = (this.uploadProgress / 100) * 360;

    return `
        background-image: conic-gradient(var(--color-primary-500) ${angle}deg, transparent ${angle + 0.5}deg 100%),
                          conic-gradient(var(--color-border-default) 360deg 100%);`;
  }

  get displayPreview(): boolean {
    return this.args.displayPreview || false;
  }

  get shouldDisplayPreview(): boolean {
    return this.displayPreview && Boolean(this.fileUrl) && this._extractFileTypeCategory() === 'image';
  }

  get dynamicBackgroundImage(): string {
    return `background-image: url(${this.fileUrl}); background-position: center; background-size: cover;`;
  }

  @action
  onUploadSuccess(artifact: FileArtifact): void {
    this.fileUrl = artifact.url;
    this.args.onUploadSuccess(artifact);
    this.uploadProgress = 0;
    this.uploading = false;
  }

  @action
  onUploadFailure(error: FailedUploadResponse): void {
    this.uploading = false;
    this.uploadProgress = 0;
    this.error = error;
    this.args.onUploadFailure?.(error);
  }

  @action
  onProgress(event: ProgressEvent): void {
    this.uploadProgress = Math.trunc((event.loaded / event.total) * 100);
  }

  @action
  performUpload(): void {
    if (this.request) {
      this.uploading = true;
      this.args.uploader.upload(this.request, this.args.rules);
    }
  }

  private _extractFileTypeCategory(): string | null {
    const mimetype = this.args.file instanceof File ? this.args.file.type : this.args.file.content_type;

    if (!mimetype) return null;
    if (mimetype.startsWith('image')) return 'image';
    if (mimetype.startsWith('video')) return 'video';
    if (mimetype === 'application/pdf') return 'pdf';

    return null;
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'OSS::UploadItem': typeof OSSUploadItemComponent;
    'o-s-s/upload-item': typeof OSSUploadItemComponent;
  }
}
