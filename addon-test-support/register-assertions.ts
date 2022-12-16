import tooltipAssertions from '@upfluence/oss-components/test-support/custom-assertions/tooltip';

const ASSERTIONS = [tooltipAssertions];

export default function registerAssertions(assert: Assert) {
  ASSERTIONS.forEach((assertion) => {
    // @ts-ignore
    assert[assertion.__name__] = assertion;
  });
}
