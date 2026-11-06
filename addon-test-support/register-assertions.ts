// Keeps the global Assert augmentations in the emitted declarations, where the imports below are elided.
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="./custom-assertions/tooltip.ts" preserve="true" />
/// <reference path="./custom-assertions/infinite-select-option.ts" preserve="true" />
/// <reference path="./custom-assertions/dcn.ts" preserve="true" />
/* eslint-enable @typescript-eslint/triple-slash-reference */
import tooltipAssertions from '@upfluence/oss-components/test-support/custom-assertions/tooltip';
import infiniteSelectOptionAssertions from '@upfluence/oss-components/test-support/custom-assertions/infinite-select-option';
import dcnAssertions from '@upfluence/oss-components/test-support/custom-assertions/dcn';

const ASSERTIONS = [tooltipAssertions, infiniteSelectOptionAssertions, dcnAssertions];

export default function registerAssertions(assert: Assert) {
  ASSERTIONS.forEach((assertion) => {
    (assert as Record<string, any>)[assertion.__name__] = assertion;
  });
}
