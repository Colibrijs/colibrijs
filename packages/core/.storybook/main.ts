import type { StorybookConfig } from '@storybook/react-webpack5';

export default {
  stories: ['../components/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    // '../../sauron-eye-addon/dist',
    {
      name: '@storybook/addon-styling',
      options: {
        cssModules: {
          localIdentName: '[path][name]__[local]',
        },
      },
    },
  ],
  env: {
    EXAMPLE_URL: process.env.EXAMPLE_URL || 'https://colibrijs.github.io/colibrijs/main/example/',
    BRANCH_NAME: process.env.BRANCH_NAME || 'main',
    GH_TOKEN: process.env.GH_TOKEN || '',
    PULL_REQUEST_NUMBER: process.env.PULL_REQUEST_NUMBER || '',
    REPOSITORY_OWNER: process.env.REPOSITORY_OWNER || '',
    REPOSITORY_NAME: process.env.REPOSITORY_NAME || '',
    REFERENCE_STORYBOOK_URL: process.env.REFERENCE_STORYBOOK_URL || 'http://localhost:6006/',
    TESTING_STORYBOOK_URL: process.env.TESTING_STORYBOOK_URL || 'http://localhost:6006/',
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  previewHead: (head) => {
    if (!process.env.COMMIT_SHA) return head;

    const commitShaMeta = `<meta name="commit-sha" content="${process.env.COMMIT_SHA}">`;
    return `${head}${commitShaMeta}`;
  },
} satisfies StorybookConfig;
