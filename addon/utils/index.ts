export function isSafeString(arg: any): boolean {
  return arg?.constructor?.name === 'SafeString';
}
