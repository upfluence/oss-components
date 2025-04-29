import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

import { type FeedbackMessage } from '@upfluence/oss-components/components/o-s-s/input-container';

export type FormInstanceId = string;
export type FormInstance = {
  id: FormInstanceId;
  validateForm(): boolean;
  validateField(field: string): boolean;
  getErrors(): ValidationFeedbacks;
  clearErrors(field?: string): void;
};
export type Feedback = { kind: string; message: FeedbackMessage };
export type Validator = () => Feedback | undefined;
export type Validations = Record<string, Validator>;
export type ValidationFeedbacks = Record<string, Feedback>;

export default class FormManager extends Service {
  formValidators: Record<FormInstanceId, Validations> = {};

  @tracked formFeedbacks: Record<FormInstanceId, ValidationFeedbacks> = {};

  generateId(): string {
    return crypto.randomUUID();
  }

  getInstance(id: string): FormInstance {
    return {
      id,
      validateForm: (): boolean => this.validateForm(id),
      validateField: (field: string): boolean => this.validateField(id, field),
      getErrors: (): ValidationFeedbacks => this.getFieldErrors(id),
      clearErrors: (field: string) => this.clearErrors(id, field)
    };
  }

  registerField(id: string, field: string, validator: Validator): void {
    this.formValidators[id] = this.formValidators[id] ?? {};
    this.formValidators[id]![field] = validator;
  }

  unregisterField(id: string, field: string): void {
    if (this.formValidators[id]) {
      delete this.formValidators[id]![field];
    }
  }

  private validateForm(id: string): boolean {
    const validators = this.formValidators[id];

    if (!validators) return true;

    Object.keys(validators).forEach((field) => {
      this.validateField(id, field);
    });

    return Object.values(this.formFeedbacks[id] ?? {}).every((feedback) =>
      ['success', 'warning'].includes(feedback.message.type)
    );
  }

  private validateField(id: string, field: string): boolean {
    const validator = this.formValidators[id]?.[field];

    if (!validator) return true;

    const feedback = validator();

    if (feedback) {
      this.formFeedbacks[id] = {
        ...this.formFeedbacks[id],
        [field]: feedback
      };
      this.refreshFormFeedbacks();
    }

    const isValid = feedback?.message?.type !== 'error';

    if (isValid) this.clearErrors(id, field);

    return isValid;
  }

  private getFieldErrors(id: string): ValidationFeedbacks {
    const formFeedbacks = this.formFeedbacks[id] ?? {};

    return Object.keys(formFeedbacks).reduce((acc: ValidationFeedbacks, v: string) => {
      if (formFeedbacks[v] && formFeedbacks[v]!.message?.type === 'error') {
        acc[v] = formFeedbacks[v]!;
      }

      return acc;
    }, {});
  }

  private clearErrors(id: string, field: string): void {
    if (this.formFeedbacks[id]?.[field]?.message?.type !== 'error') return;
    delete this.formFeedbacks[id]?.[field];
    this.refreshFormFeedbacks();
  }

  private refreshFormFeedbacks(): void {
    this.formFeedbacks = this.formFeedbacks;
  }
}

declare module '@ember/service' {
  interface Registry {
    'form-manager': FormManager;
  }
}

// for the register-form-field modifier

// for the form-field-feedback helper ->
// - on input-container: @feedbackMessage={{form-field-feedback @formId="foo" @field="bar"}}
// - on others w/ errorMessage: @errorMessage={{get (form-field-feedback @formId="foo" @field="bar") "value"}}
//
//
// handle backend errors (toasts, main alerts, haserror without message, blablba)
//
//  For the team:
//  - disabled CTA rules hint for validations
