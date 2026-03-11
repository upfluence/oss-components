import tooltipAssertions from '@upfluence/oss-components/test-support/custom-assertions/tooltip';
import infiniteSelectOptionAssertions from '@upfluence/oss-components/test-support/custom-assertions/infinite-select-option';
import dtcAssertions from '@upfluence/oss-components/test-support/custom-assertions/dtc';

const ASSERTIONS = [tooltipAssertions, infiniteSelectOptionAssertions, dtcAssertions];

export default function registerAssertions(assert: Assert) {
  ASSERTIONS.forEach((assertion) => {
    // @ts-ignore
    assert[assertion.__name__] = assertion;
  });
}
