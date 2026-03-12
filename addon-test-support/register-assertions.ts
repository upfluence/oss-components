import tooltipAssertions from '@upfluence/oss-components/test-support/custom-assertions/tooltip';
import infiniteSelectOptionAssertions from '@upfluence/oss-components/test-support/custom-assertions/infinite-select-option';
import dcnAssertions from '@upfluence/oss-components/test-support/custom-assertions/dcn';
import hasHtmlTextAssertions from '@upfluence/oss-components/test-support/custom-assertions/has-html-text';

const ASSERTIONS = [tooltipAssertions, infiniteSelectOptionAssertions, dcnAssertions, hasHtmlTextAssertions];

export default function registerAssertions(assert: Assert) {
  ASSERTIONS.forEach((assertion) => {
    // @ts-ignore
    assert[assertion.__name__] = assertion;
  });
}
