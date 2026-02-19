import type { FeedbackMessageType } from '@upfluence/oss-components/types';

export function isSafeString(arg: any): boolean {
  return arg?.constructor?.name === 'SafeString';
}

export const ALLOWED_FEEDBACK_MESSAGE_TYPES: FeedbackMessageType[] = ['error', 'warning', 'success'];
