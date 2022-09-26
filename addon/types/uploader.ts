export enum FilePrivacy {
  PUBLIC,
  PRIVATE
}

export type UploadRequest = {
  file: File;
  privacy: FilePrivacy;
  scope: string;

  onValidationFailure?(response: ValidationResponse): void;
  onProgress?(event: ProgressEvent<EventTarget>): void;
  onFailure?(error: FailedUploadResponse): void;
  onSuccess?(artifact: FileArtifact): void;
};

export type FileArtifact = {
  key: string;
  filename: string;
  url: string;
  content_type: string;
  size: number;
};

export type FailedUploadResponse = { payload: { [key: string]: any } };

export type ValidationResponse = {
  passes: boolean;
  validations: {
    rule: FileValidator;
    passes: boolean;
  }[];
};

export type FileSizeRule = { type: 'filesize'; value: string };
export type FileTypeRule = { type: 'filetype'; value: string[] };
export type FileValidator = FileSizeRule | FileTypeRule;

export default interface Uploader {
  readonly url: string;

  validate(request: UploadRequest, rules: FileValidator[]): ValidationResponse;
  upload(request: UploadRequest, rules?: FileValidator[]): void;
  buildHeaders(request: UploadRequest): { name: string; value: string }[];
}
