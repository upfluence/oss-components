import type { TestContext } from '@ember/test-helpers';

import sinon from 'sinon';
import type { SinonStub } from 'sinon';

declare module '@ember/test-helpers' {
  interface TestContext {
    permissionQueryStub: SinonStub;
  }
}

export default function setupClipboard(hooks: NestedHooks) {
  hooks.beforeEach(function (this: TestContext) {
    this.permissionQueryStub = sinon
      .stub(navigator.permissions, 'query')
      .resolves({ name: 'clipboard-write', state: 'granted' } as PermissionStatus);
  });

  hooks.afterEach(function (this: TestContext) {
    this.permissionQueryStub.restore();
  });
}
