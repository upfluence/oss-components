import Helper from '@ember/component/helper';
import { assert } from '@ember/debug';

type RedirectToHelperArgs = {
  url: string;
  target?: string;
};

const REDIRECTION_TARGETS: string[] = ['_blank', '_self', '_parent', '_top', 'framename'];

export default class extends Helper {
  compute(_: any[], named: RedirectToHelperArgs) {
    const { url, target } = named;

    assert('[helper][OSS::redirect-to] url argument is mandatory.', typeof url === 'string');
    assert(
      '[helper][OSS::redirect-to] the target argument must be a valid one: https://www.w3schools.com/tags/att_a_target.asp.',
      target ? REDIRECTION_TARGETS.includes(target) : true
    );

    return () => {
      window.open(url, target ?? '_self');
    };
  }
}
