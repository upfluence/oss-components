declare module 'ember-intl/test-support' {
  function setupIntl(...args: unknown[]): unknown;
}

declare module 'ember-cli-code-coverage/test-support' {
  export function forceModulesToBeLoaded(filterFunction?: (type: string, moduleName: string) => boolean): void;
  export function sendCoverage(): Promise<void>;
}
