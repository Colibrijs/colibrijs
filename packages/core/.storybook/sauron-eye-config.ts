import type { SauronEyeConfig } from '@colibrijs/sauron-eye-addon';

export const sauronEyeConfig: SauronEyeConfig = {
  branchName: process.env.BRANCH_NAME || 'main',
  githubToken: process.env.GH_TOKEN!,
  pullRequestNumber: process.env.PULL_REQUEST_NUMBER!,
  repositoryOwner: process.env.REPOSITORY_OWNER!,
  repositoryName: process.env.REPOSITORY_NAME!,
  referenceStorybookUrl: process.env.REFERENCE_STORYBOOK_URL || 'http://localhost:6006/',
  testingStorybookUrl: process.env.TESTING_STORYBOOK_URL || 'http://localhost:6006/',
};
