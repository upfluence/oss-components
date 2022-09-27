import BaseUploader from '@upfluence/oss-components/services/base-uploader';
import UploaderInterface, {
  UploadRequest,
  FileValidator,
  ValidationResponse
} from '@upfluence/oss-components/types/uploader';

export default class extends BaseUploader implements UploaderInterface {
  mode: 'success' | 'failure' = 'success';

  upload(request: UploadRequest, validationRules?: FileValidator[]): void {
    const validations: ValidationResponse = this.validate(request, validationRules || []);

    if (!validations.passes) {
      request.onValidationFailure?.(validations);
      return;
    }

    [250, 500, 750, 1000].forEach((progressStep: number) => {
      const progressEvent = new ProgressEvent('progress', { total: 1000, loaded: progressStep });
      setTimeout(() => {
        request.onProgress?.(progressEvent);
      }, 100);
    });

    if (this.mode === 'success') {
      request.onSuccess?.({
        key: 'uploader/foo.png',
        filename: 'Foo.png',
        url: 'https://oss-components.upfluence.co/uploader/foo.png',
        content_type: 'png',
        size: 1000
      });
    } else {
      request.onFailure?.({
        payload: {}
      });

      this.mode = 'success';
    }
  }

  get url(): string {
    return 'https://oss-components.upfluence.co';
  }
}
