import { setApplication } from '@ember/test-helpers';

import { sendCoverage } from 'ember-cli-code-coverage/test-support';
import { start as qunitStart, setupEmberOnerrorValidation } from 'ember-qunit';
import * as QUnit from 'qunit';
import { setup } from 'qunit-dom';
import 'qunit-dom';
import Application from 'test-app/app';
import config from 'test-app/config/environment';

import registerAssertions from '@upfluence/oss-components/test-support/register-assertions';

declare module '@ember/test-helpers' {
  interface TestContext {
    [key: string]: any;
  }
}

export function start() {
  registerAssertions(QUnit.assert);
  setup(QUnit.assert);
  QUnit.done(async () => {
    if (import.meta.env.COVERAGE) {
      // Also report the addon modules no test imports, as the classic build did.
      const modules = import.meta.glob(['../../oss-components/dist/**/*.js', '!../../oss-components/dist/_app_/**']);
      await Promise.allSettled(Object.values(modules).map((load) => load()));
    }
    await sendCoverage();
  });

  setApplication(Application.create(config.APP));

  setupEmberOnerrorValidation();
  qunitStart();
}
