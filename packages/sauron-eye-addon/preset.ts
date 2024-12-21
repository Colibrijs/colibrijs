import type { StorybookConfig } from '@storybook/react-webpack5';

import fs from 'node:fs';
import path from 'node:path';

import { isDirectoryAvailable } from './addon/test-runner-config';

const screenshotDirectory = path.resolve(process.cwd(), './screenshots');

if (!isDirectoryAvailable(screenshotDirectory)) {
  fs.mkdirSync(screenshotDirectory);
}

export default {
  staticDirs: [
    {
      from: path.resolve(process.cwd(), './screenshots'),
      to: '/screenshots',
    },
  ],
  env: {
    GH_TOKEN: process.env.GH_TOKEN || '',
    STORYBOOK_URL: process.env.STORYBOOK_URL || 'http://localhost:6006/',
    PULL_REQUEST_NUMBER: process.env.PULL_REQUEST_NUMBER || '',
  },
} satisfies Partial<StorybookConfig>;
