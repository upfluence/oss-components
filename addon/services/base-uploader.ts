import Service from '@ember/service';
import UploaderInterface, {
  UploadRequest,
  UploadRule,
  ValidationResponse
} from '@upfluence/oss-components/types/uploader';

export default class BaseUploader extends Service implements UploaderInterface {
  validate(_: UploadRequest, _1: UploadRule[]): ValidationResponse {
    return {
      passes: true,
      validations: []
    };
  }

  upload(_request: UploadRequest, _validationRules?: UploadRule[]): void {
    throw new Error(
      '[@upfluence/oss-components::uploader] Not impemented error. Please extend this service and inherit this method.'
    );
  }

  get url(): string {
    throw new Error(
      '[@upfluence/oss-components::uploader] Not impemented error. Please extend this service and inherit this method.'
    );
  }

  buildHeaders(_: UploadRequest) {
    return [];
  }
}

declare module '@ember/service' {
  interface Registry {
    'base-uploader': BaseUploader;
  }
}
