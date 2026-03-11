import { isHTMLSafe } from '@ember/template';

export function isSafeString(arg: any): boolean {
  if (!arg) return false;

  return (arg.constructor && arg.constructor.name === 'SafeString') || isHTMLSafe(arg);
}
