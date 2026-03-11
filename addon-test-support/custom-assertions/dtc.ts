interface DTCOptions {
  strict?: boolean;
}

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
    dtc(controlName: string, options?: DTCOptions): ReturnType<Assert['dom']>;
  }
}
