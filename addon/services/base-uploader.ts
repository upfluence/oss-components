import Service from '@ember/service';
import UploaderInterface, {
  UploadRequest,
  FileValidator,
  ValidationResponse,
  FileSizeRule
} from '@upfluence/oss-components/types/uploader';
import parseFilesize from '@upfluence/oss-components/utils/filesize-parser';

interface Validator {
  validate(request: UploadRequest): { rule: FileValidator; passes: boolean };
}

class FileSizeValidator implements Validator {
  static key: string = 'filesize';

  rule: FileSizeRule;

  constructor(rule: FileSizeRule) {
    this.rule = rule;
  }

  validate(request: UploadRequest): { rule: FileValidator; passes: boolean } {
    return {
      rule: this.rule,
      passes: parseFilesize(this.rule.value) >= request.file.size
    };
  }
}

const AVAILABLE_VALIDATORS = [FileSizeValidator];

export default class BaseUploader extends Service implements UploaderInterface {
  validate(request: UploadRequest, rules: FileValidator[]): ValidationResponse {
    return {
      passes: true,
      validations: this.buildValidators(rules).map((validator: Validator) => validator.validate(request))
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

  buildHeaders(_: UploadRequest) {
    return [];
  }

  private buildValidators(rules: FileValidator[]): Validator[] {
    return rules
      .filter((rule: FileValidator) => {
        return AVAILABLE_VALIDATORS.find((validator) => validator.key === rule.type);
      })
      .map((rule: FileValidator) => {
        const validator = AVAILABLE_VALIDATORS.find((validator) => validator.key === rule.type)!;

        // @ts-ignore
        return new validator(rule);
      })
      .filter((x) => x);
  }
}

declare module '@ember/service' {
  interface Registry {
    'base-uploader': BaseUploader;
  }
}
