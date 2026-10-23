import { assert } from '@ember/debug';
import { registerDestructor } from '@ember/destroyable';
import { inject as service } from '@ember/service';

import Modifier, { type ArgsFor, type PositionalArgs, type NamedArgs } from 'ember-modifier';

import type { default as FormManager, FormInstance, Validator } from '../services/form-manager';

interface RegisterFormFieldSignature {
  Element: HTMLElement;
  Args: {
    Named: {
      form: string;
      fieldId: string;
      validator: Validator;
      validateOnBlur?: boolean;
    };
  };
}

function cleanup(instance: RegisterFormField): void {
  instance.targetElement.removeAttribute('data-plan-field-id');

  instance.formManager.unregisterField(instance.form, instance.field);
  instance.formInstance.validateField(instance.field);

  if (instance.innerInputs.length > 0) {
    instance.innerInputs.forEach((input) => {
      input.removeEventListener('input', instance.clearErrorsOnInput);
      input.removeEventListener('blur', instance.validateField);
    });
  }
}

export default class RegisterFormField extends Modifier<RegisterFormFieldSignature> {
  @service declare formManager: FormManager;

  declare targetElement: HTMLElement;
  declare form: string;
  declare field: string;
  declare validator: Validator;
  declare validateOnBlur: boolean;
  declare formInstance: FormInstance;

  innerInputs: HTMLElement[] = [];

  constructor(owner: unknown, args: ArgsFor<RegisterFormFieldSignature>) {
    super(owner, args);
    registerDestructor(this, cleanup);
  }

  modify(
    element: HTMLElement,
    _: PositionalArgs<RegisterFormFieldSignature>,
    { form, fieldId, validator, validateOnBlur }: NamedArgs<RegisterFormFieldSignature>
  ): void {
    assert(`'form' arg must be a string but was ${typeof form}`, typeof form === 'string');
    assert(`'fieldId' arg must be a string but was ${typeof fieldId}`, typeof fieldId === 'string');
    assert(`'validator' arg must be a string but was ${typeof validator}`, typeof validator === 'function');

    this.targetElement = element;
    this.form = form;
    this.field = fieldId;
    this.validateOnBlur = typeof validateOnBlur === 'boolean' ? validateOnBlur : true;
    this.formInstance = this.formManager.getInstance(form);

    element.setAttribute('data-form-field-id', fieldId);
    this.formManager.registerField(form, fieldId, validator);

    const inputs = element.tagName === 'INPUT' ? [element] : Array.from(element.querySelectorAll('input'));

    this.innerInputs = inputs;

    inputs.forEach((input) => {
      input.addEventListener('input', this.clearErrorsOnInput);
    });

    if (this.validateOnBlur) {
      inputs.forEach((input) => {
        input.addEventListener('blur', this.validateField);
      });
    }
  }

  validateField = (): void => {
    this.formInstance.validateField(this.field);
  };

  clearErrorsOnInput = (): void => {
    this.formInstance.clearErrors(this.field);
  };
}
