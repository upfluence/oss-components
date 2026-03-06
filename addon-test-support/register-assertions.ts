import tooltipAssertions from '@upfluence/oss-components/test-support/custom-assertions/tooltip';
import infiniteSelectOptionAssertions from '@upfluence/oss-components/test-support/custom-assertions/infinite-select-option';

const ASSERTIONS = [tooltipAssertions, infiniteSelectOptionAssertions];

export default function registerAssertions(assert: Assert) {
  ASSERTIONS.forEach((assertion) => {
    // @ts-ignore
    assert[assertion.__name__] = assertion;
  });
}
