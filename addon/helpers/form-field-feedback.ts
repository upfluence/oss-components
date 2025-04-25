import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';

import type FormManager from '../services/form-manager';
import type { FeedbackMessage } from '@upfluence/oss-components/components/o-s-s/input-container';

type Positional = string[];

export interface FormFieldFeedbackSignature {
  Args: {
    Positional: Positional;
  };
  Return: FeedbackMessage | undefined;
}

export default class FormFieldFeedbackHelper extends Helper<FormFieldFeedbackSignature> {
  @service declare formManager: FormManager;

  public compute([form, fieldId]: Positional): FeedbackMessage | undefined {
    if (!form || !fieldId) return;

    return (this.formManager.formFeedbacks[form] ?? {})[fieldId];
  }
}
