import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx|js|jsx|mdx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
  previewHead: (head) => `${head}<script src="./preview-head.html"></script>`,
  framework: {
    name: '@storybook/angular',
    options: {},
  },
};
export default config;
