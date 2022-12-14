import tooltipAssertions from '@upfluence/oss-components/test-support/qunit-ext/tooltip';

const ASSERTORS = [tooltipAssertions];

export default function registerAssertions(assert: Assert) {
  ASSERTORS.forEach((assertor) => {
    // @ts-ignore
    assert[assertor.__name__] = assertor;
  });
}
