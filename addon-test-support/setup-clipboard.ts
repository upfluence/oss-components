import sinon from 'sinon';

export default function setupClipboard(hooks: NestedHooks) {
  hooks.beforeEach(function () {
    this.permissionQueryStub = sinon
      .stub(navigator.permissions, 'query')
      .resolves({ name: 'clipboard-write', state: 'granted' } as PermissionStatus);
  });

  hooks.afterEach(function () {
    this.permissionQueryStub.restore();
  });
}
