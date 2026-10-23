import type { TestContext } from '@ember/test-helpers';

import sinon from 'sinon';
import type { SinonStub } from 'sinon';

import type ToastService from '../services/toast';

declare module '@ember/test-helpers' {
  interface TestContext {
    toastService: ToastService;
    toastSuccessStub: SinonStub;
    toastErrorStub: SinonStub;
    toastInfoStub: SinonStub;
    toastWarningStub: SinonStub;
  }
}

export default function setupToast(hooks: NestedHooks) {
  hooks.beforeEach(function (this: TestContext) {
    this.toastService = this.owner.lookup('service:toast');
    this.toastSuccessStub = sinon.stub(this.toastService, 'success');
    this.toastErrorStub = sinon.stub(this.toastService, 'error');
    this.toastInfoStub = sinon.stub(this.toastService, 'info');
    this.toastWarningStub = sinon.stub(this.toastService, 'warning');
  });
}
