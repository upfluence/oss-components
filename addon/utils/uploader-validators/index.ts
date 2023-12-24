import { type UploadRequest, type FileValidator, type FileSizeRule, type FileTypeRule } from '@upfluence/oss-components/types/uploader';
import parseFilesize from '@upfluence/oss-components/utils/filesize-parser';

export interface Validator {
  validate(request: UploadRequest): { rule: FileValidator; passes: boolean };
}

export class FileSizeValidator implements Validator {
  rule: FileSizeRule;

  static key: string = 'filesize';

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

export class FileTypeValidator implements Validator {
  rule: FileTypeRule;

  static key: string = 'filetype';

  private filetypeTemplates: { [key: string]: string[] } = {
    image: ['png', 'jpg', 'jpeg']
  };

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
      passes: this.deconstructedFiletypes
        .map((f: string) => f.toLowerCase())
        .includes((filename.split('.')[filename.split('.').length - 1] || '').toLowerCase())
    };
  }

  private get deconstructedFiletypes(): string[] {
    return this.rule.value.reduce((acc: string[], filetype: string) => {
      let filetypes = [filetype];

      if (Object.keys(this.filetypeTemplates).includes(filetype)) {
        filetypes = this.filetypeTemplates[filetype]!;
      }

      acc = acc.concat(filetypes);
      return acc;
    }, []);
  }
}
