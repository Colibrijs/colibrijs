import type { StorybookConfig } from '@storybook/react-webpack5';

import path from 'node:path';

import { isDirectoryAvailable } from './screenshoter-config/fs-utils';

const staticDirs = isDirectoryAvailable(path.resolve(__dirname, './screenshots'))
  ? [{ from: './screenshots', to: '/screenshots' }]
  : [];

export default {
  // stories: ['../components/**/*.stories.@(ts|tsx)'],
  stories: ['../components/page-title/__stories__/screenshot/*.stories.@(ts|tsx)'],
  staticDirs,
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
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
