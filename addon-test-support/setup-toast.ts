import type { TestContext } from '@ember/test-helpers';
import sinon from 'sinon';

export default function setupToast(hooks: NestedHooks) {
  hooks.beforeEach(function (this: TestContext) {
    this.toastService = this.owner.lookup('service:toast');
    this.toastSuccessStub = sinon.stub(this.toastService, 'success');
    this.toastErrorStub = sinon.stub(this.toastService, 'error');
    this.toastInfoStub = sinon.stub(this.toastService, 'info');
    this.toastWarningStub = sinon.stub(this.toastService, 'warning');
  });
}
