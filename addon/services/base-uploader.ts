import Service from '@ember/service';
import { isEmpty } from '@ember/utils';

import UploaderInterface, {
  UploadRequest,
  FileValidator,
  ValidationResponse,
  FileSizeRule,
  FileTypeRule
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

class FileTypeValidator implements Validator {
  static key: string = 'filetype';

  private filetypeTemplates: { [key: string]: string[] } = {
    image: ['png', 'jpg', 'jpeg']
  };

  rule: FileTypeRule;

  constructor(rule: FileTypeRule) {
    this.rule = rule;
  }

  validate(request: UploadRequest): { rule: FileValidator; passes: boolean } {
    const filename = request.file.name;

    return {
      rule: {
        ...this.rule,
        value: this.deconstructedFiletypes
      },
      passes: this.deconstructedFiletypes.includes(filename.split('.')[filename.split('.').length - 1])
    };
  }

  private get deconstructedFiletypes(): string[] {
    return this.rule.value.reduce((acc: string[], filetype: string) => {
      let filetypes = [filetype];

      if (Object.keys(this.filetypeTemplates).includes(filetype)) {
        filetypes = this.filetypeTemplates[filetype];
      }

      acc = acc.concat(filetypes);
      return acc;
    }, []);
  }
}

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
      })
      .filter((x) => x);
  }
}

declare module '@ember/service' {
  interface Registry {
    'base-uploader': BaseUploader;
  }
}
