export const NUMERIC_ONLY: RegExp = /^\d$/i;
const AUTHORIZED_INPUTS: string[] = [
  'Backspace',
  'Delete',
  'ArrowLeft',
  'ArrowRight',
  'Tab',
  'Shift',
  'Control',
  'ArrowUp',
  'ArrowDown'
];

export function onlyNumeric(this: HTMLInputElement, event: KeyboardEvent): void {
  _ensureValueFormat(event, NUMERIC_ONLY, false);
}

export function onlyDecimal(this: HTMLInputElement, event: KeyboardEvent): void {
  _ensureValueFormat(event, NUMERIC_ONLY, true);
}

function _ensureValueFormat(event: KeyboardEvent, regexp: RegExp, allowDecimal: boolean): void {
  if (['c', 'v', 'a'].includes(event.key) && (event.metaKey || event.ctrlKey)) {
    return;
  }

  const checks = [];

  if (event.key === '.') {
    checks.push(allowDecimal && (<HTMLInputElement>event.target).value.indexOf('.') < 0);
  } else {
    checks.push(regexp.test(event.key));
  }

  if (!checks.every((c) => c) && !AUTHORIZED_INPUTS.find((key: string) => key === event.key)) {
    event.preventDefault();
  }
}
