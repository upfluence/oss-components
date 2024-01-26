import Helper from '@ember/component/helper';
import { assert } from '@ember/debug';

type RedirectToHelperArgs = {
  url: string;
  target?: string;
};

enum Target {
  '_blank',
  '_self',
  '_parent',
  '_top',
  'framename'
}

interface RedirectToHelperSignature {
  Args: {
    Named: RedirectToHelperArgs;
  };
  Return: () => void;
}

export default class RedirectToHelper extends Helper<RedirectToHelperSignature> {
  compute(_: any[], named: RedirectToHelperArgs) {
    const { url, target } = named;

    assert('[helper][OSS::redirect-to] url argument is mandatory.', typeof url === 'string');
    assert(
      '[helper][OSS::redirect-to] the target argument must be a valid one: https://www.w3schools.com/tags/att_a_target.asp.',
      target ? Object.keys(Target).includes(target) : true
    );

    return () => {
      window.open(url, target ?? '_self');
    };
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'redirect-to': typeof RedirectToHelper;
  }
}
