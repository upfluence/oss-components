import { isHTMLSafe } from '@ember/template';

import type { FeedbackMessageType } from '@upfluence/oss-components/types';

export function isSafeString(arg: any): boolean {
  if (!arg) return false;

  return (arg.constructor && arg.constructor.name === 'SafeString') || isHTMLSafe(arg);
}

export const ALLOWED_FEEDBACK_MESSAGE_TYPES: FeedbackMessageType[] = ['error', 'warning', 'success'];
