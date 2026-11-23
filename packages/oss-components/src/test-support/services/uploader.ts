import { later } from '@ember/runloop';

import BaseUploader from '../../services/base-uploader';
import {
  type default as UploaderInterface,
  type UploadRequest,
  type FileValidator,
  type ValidationResponse
} from '../../types/uploader';

export default class extends BaseUploader implements UploaderInterface {
  mode: 'success' | 'failure' = 'success';
  // Delay between the 4 simulated progress events, in ms. Tests that only check the end state can set it to 0.
  progressInterval: number = 100;

  async upload(request: UploadRequest, validationRules?: FileValidator[]): Promise<void> {
    const validations: ValidationResponse = await this.validate(request, validationRules || []);

    if (!validations.passes) {
      request.onValidationFailure?.(validations);
      return;
    }

    let progressStep = 0;

    const tick = () => {
      const progressEvent = new ProgressEvent('progress', { total: 1000, loaded: progressStep });
      request.onProgress?.(progressEvent);
      progressStep += 250;

      if (progressStep < 1000) {
        later(tick, this.progressInterval);
        return;
      }

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

      this.mode = 'success';
    };

    later(tick, this.progressInterval);
  }

  get url(): string {
    return 'https://oss-components.upfluence.co';
  }
}
