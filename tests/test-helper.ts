import Application from 'dummy/app';
import config from 'dummy/config/environment';
import { setApplication } from '@ember/test-helpers';
import * as QUnit from 'qunit';
import { setup } from 'qunit-dom';
import { loadTests } from 'ember-qunit/test-loader';
import { start, setupEmberOnerrorValidation } from 'ember-qunit';
import 'qunit-dom';

import registerAssertions from '@upfluence/oss-components/test-support/register-assertions';
import { forceModulesToBeLoaded, sendCoverage } from 'ember-cli-code-coverage/test-support';

registerAssertions(QUnit.assert);
setup(QUnit.assert);
QUnit.done(async () => {
  forceModulesToBeLoaded((_, moduleName) => !moduleName.endsWith('.stories'));
  await sendCoverage();
});

setApplication(Application.create(config.APP));

setupEmberOnerrorValidation();
loadTests();
start();

declare module '@ember/test-helpers' {
  interface TestContext {
    [key: string]: any;
  }
}
