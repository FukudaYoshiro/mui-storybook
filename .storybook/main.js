module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.js', '../src/**/*.stories.tsx'],

  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: 'webpack5'
  }
}
