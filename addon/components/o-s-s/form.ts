import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { registerDestructor } from '@ember/destroyable';
import { service } from '@ember/service';

import type { default as FormManager, FormInstance } from '@upfluence/oss-components/services/form-manager';
import type Owner from '@ember/owner';

interface OSSFormComponentSignature {
  onSetup(instance: FormInstance): void;
  onSubmit(isValid: boolean): void;
}

export default class OSSFormComponent extends Component<OSSFormComponentSignature> {
  @service declare formManager: FormManager;

  @tracked declare id: string;
  @tracked declare formInstance: FormInstance;

  constructor(owner: Owner, args: OSSFormComponentSignature) {
    super(owner, args);

    this.id = this.formManager.generateId();
    this.formInstance = this.formManager.getInstance(this.id);
    this.args.onSetup(this.formInstance);

    registerDestructor(this, () => this.formManager.unregisterForm(this.id));
  }

  @action
  onSubmit(event: SubmitEvent): void {
    event.preventDefault();
    this.args.onSubmit(this.formInstance.validateForm());
  }
}
