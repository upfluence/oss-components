'use strict';

const variants = JSON.parse(process.env.EMBER_TEST_VARIANTS || '[{"name":"default","command":"pnpm test:ember"}]');

module.exports = async function () {
  return {
    packageManager: 'pnpm',
    command: 'pnpm test:ember',
    scenarios: [
      ...JSON.parse(process.env.EMBER_TRY_SCENARIOS || '[]').flatMap((scenario) =>
        variants.map((variant) => ({
          ...scenario,
          name: `${scenario.name}-${variant.name}`,
          command: variant.command
        }))
      )
    ]
  };
};
