import { type TestRunnerConfig, getStoryContext } from '@storybook/test-runner';
import { toMatchImageSnapshot } from 'jest-image-snapshot';
import path from 'node:path';

export default {
  setup() {
    expect.extend({ toMatchImageSnapshot });
  },

  async postVisit(page, story) {
    const context = await getStoryContext(page, story);
    const { fileName } = context.parameters;
    const isScreenshotStory = fileName.includes('/screenshot/');
    if (!isScreenshotStory) return;
    const image = await page.screenshot();

    expect(image).toMatchImageSnapshot({
      customSnapshotsDir: path.resolve(__dirname, '../screenshots/'),
      customSnapshotIdentifier: context.id,
    });
  },
} satisfies TestRunnerConfig;
