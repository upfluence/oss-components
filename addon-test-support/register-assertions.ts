import dcnAssertions from '@upfluence/oss-components/test-support/custom-assertions/dcn';
import infiniteSelectOptionAssertions from '@upfluence/oss-components/test-support/custom-assertions/infinite-select-option';
import tooltipAssertions from '@upfluence/oss-components/test-support/custom-assertions/tooltip';

const ASSERTIONS = [tooltipAssertions, infiniteSelectOptionAssertions, dcnAssertions];

export default function registerAssertions(assert: Assert) {
  ASSERTIONS.forEach((assertion) => {
    (assert as Record<string, any>)[assertion.__name__] = assertion;
  });
}
