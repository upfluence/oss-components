export function isSafeString(arg: any): boolean {
  return arg?.constructor?.name === 'SafeString';
}

export const ALLOWED_FEEDBACK_MESSAGE_TYPES = ['error', 'warning', 'success'];
