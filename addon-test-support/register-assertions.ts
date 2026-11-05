import tooltipAssertions from '@upfluence/oss-components/test-support/custom-assertions/tooltip';
import infiniteSelectOptionAssertions from '@upfluence/oss-components/test-support/custom-assertions/infinite-select-option';
import dcnAssertions from '@upfluence/oss-components/test-support/custom-assertions/dcn';
import formFieldAssertions from '@upfluence/oss-components/test-support/custom-assertions/form-field';

const ASSERTIONS = [tooltipAssertions, infiniteSelectOptionAssertions, dcnAssertions, formFieldAssertions];

export default function registerAssertions(assert: Assert) {
  ASSERTIONS.forEach((assertion) => {
    (assert as Record<string, any>)[assertion.__name__] = assertion;
  });
}
