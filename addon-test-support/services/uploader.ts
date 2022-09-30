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

    let progressStep = 0;
    const interval = setInterval(() => {
      const progressEvent = new ProgressEvent('progress', { total: 1000, loaded: progressStep });
      request.onProgress?.(progressEvent);
      progressStep += 250;

      if (progressStep === 1000) {
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
        }

        clearInterval(interval);
        this.mode = 'success';
      }
    }, 1000);
  }

  get url(): string {
    return 'https://oss-components.upfluence.co';
  }
}
