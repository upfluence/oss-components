'use strict';

const fs = require('node:fs');
const path = require('node:path');

const repository = path.resolve(__dirname, '..');
const testApp = path.join(repository, 'packages/test-app');
const report = path.join(testApp, 'coverage/lcov.info');
let addonSources = 0;

const coverage = fs.readFileSync(report, 'utf8').replace(/^SF:([^\r\n]+)$/gm, (_, source) => {
  const filename = [path.resolve(repository, source), path.resolve(testApp, source)].find((candidate) =>
    fs.existsSync(candidate)
  );
  if (!filename) throw new Error(`Coverage source does not exist: ${source}`);

  const relative = path.relative(repository, filename).split(path.sep).join('/');
  if (relative.startsWith('packages/oss-components/src/')) addonSources++;
  return `SF:${relative}`;
});

if (!addonSources) throw new Error('Coverage report contains no OSS addon source records.');
fs.writeFileSync(report, coverage);
console.log(`Verified coverage for ${addonSources} addon source files.`);
