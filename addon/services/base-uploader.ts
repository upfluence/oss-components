import Service from '@ember/service';
import { isEmpty } from '@ember/utils';

import UploaderInterface, {
  UploadRequest,
  FileValidator,
  ValidationResponse
} from '@upfluence/oss-components/types/uploader';
import { FileSizeValidator, FileTypeValidator, Validator } from '@upfluence/oss-components/utils/uploader-validators';

const AVAILABLE_VALIDATORS = [FileSizeValidator, FileTypeValidator];

export default class BaseUploader extends Service implements UploaderInterface {
  validate(request: UploadRequest, rules: FileValidator[]): ValidationResponse {
    const validations = this.buildValidators(rules).map((validator: Validator) => validator.validate(request));

    return {
      passes: validations.every((validation) => validation.passes),
      validations
    };
  }

  upload(_request: UploadRequest, _validationRules?: FileValidator[]): void {
    throw new Error(
      '[@upfluence/oss-components::uploader] NotImpemented: Please extend this service and inherit this method.'
    );
  }

  get url(): string {
    throw new Error(
      '[@upfluence/oss-components::uploader] NotImpemented: Please extend this service and inherit this method.'
    );
  }

  buildHeaders(_: UploadRequest): { name: string; value: string }[] {
    return [];
  }

  private buildValidators(rules: FileValidator[]): Validator[] {
    return rules
      .filter((rule: FileValidator) => {
        return AVAILABLE_VALIDATORS.find((validator) => validator.key === rule.type) && !isEmpty(rule.value);
      })
      .map((rule: FileValidator) => {
        const validator = AVAILABLE_VALIDATORS.find((validator) => validator.key === rule.type)!;

        // @ts-ignore
        return new validator(rule);
      });
  }
}

declare module '@ember/service' {
  interface Registry {
    'base-uploader': BaseUploader;
  }
}
