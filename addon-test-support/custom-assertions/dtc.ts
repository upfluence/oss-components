interface DTCOptions {
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
const assertion = function (
  this: Assert,
  controlName: string,
  options: DTCOptions = { strict: true }
): ReturnType<Assert['dom']> {
  return this.dom(options.strict ? `[data-control-name="${controlName}"]` : `[data-control-name*="${controlName}"]`);
};

assertion.__name__ = 'dtc';

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
    dtc(controlName: string, options?: DTCOptions): ReturnType<Assert['dom']>;
  }
}
