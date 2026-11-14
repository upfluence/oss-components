interface DCNOptions {
  /**
   * Controls how `controlName` is matched against `data-control-name`.
   *
   * - `true` (default): exact match, e.g. `[data-control-name="list-item-1"]`
   * - `false`: substring match, e.g. `[data-control-name*="list-item"]`
   */
  strict?: boolean;
}

/**
 * Shortcut for `assert.dom(...)` targeting a `data-control-name` attribute.
 */
const assertion = function (this: Assert, controlName: string, options?: DCNOptions): ReturnType<Assert['dom']> {
  const strict = options?.strict ?? true;
  return this.dom(strict ? `[data-control-name="${controlName}"]` : `[data-control-name*="${controlName}"]`);
};

assertion.__name__ = 'dcn';

export default assertion;

declare global {
  interface Assert {
    /**
     * Shortcut for `assert.dom(...)` using a `data-control-name` selector.
     *
     * @param controlName Value to match in the `data-control-name` attribute.
     * @param options Matching options.
     * @param options.strict When `true` (default), use exact match; when `false`, use substring match.
     */
    dcn(controlName: string, options?: DCNOptions): ReturnType<Assert['dom']>;
  }
}
