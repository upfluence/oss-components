import { isHTMLSafe } from '@ember/template';

export function isSafeString(arg: any): boolean {
  if (!arg) return false;

  return (arg.constructor && arg.constructor.name === 'SafeString') || isHTMLSafe(arg);
}

export const ALLOWED_FEEDBACK_MESSAGE_TYPES = ['error', 'warning', 'success'];
