module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../addon/components/**/*.stories.mdx",
    "../addon/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    {
      name: "@storybook/addon-essentials",
      options: {
        backgrounds: false
      }
    }
  ],
  webpackFinal: async (config, configType) => {
    config.node = {fs: 'empty', child_process: 'empty'};
    return config;
  }
}
