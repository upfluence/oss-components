import dcnAssertions from './custom-assertions/dcn';
import './custom-assertions/dcn';
import infiniteSelectOptionAssertions from './custom-assertions/infinite-select-option';
import './custom-assertions/infinite-select-option';
import tooltipAssertions from './custom-assertions/tooltip';
import './custom-assertions/tooltip';

const ASSERTIONS = [tooltipAssertions, infiniteSelectOptionAssertions, dcnAssertions];

export default function registerAssertions(assert: Assert) {
  ASSERTIONS.forEach((assertion) => {
    (assert as Record<string, any>)[assertion.__name__] = assertion;
  });
}
