export enum FilePrivacy {
  PUBLIC,
  PRIVATE
}

export type UploadRequest = {
  file: File;
  privacy: FilePrivacy;

  allowedExtensions: string[];
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
    rule: UploadRule;
    passes: boolean;
  }[];
};

export type FileSizeRule = string;
export type FileTypeRule = string[];
export type UploadRule = FileSizeRule | FileTypeRule;

export default interface Uploader {
  readonly url: string;

  validate(request: UploadRequest, rules: UploadRule[]): ValidationResponse;
  upload(request: UploadRequest, rules?: UploadRule[]): void;
  buildHeaders(request: UploadRequest): { name: string; value: string }[];
}
