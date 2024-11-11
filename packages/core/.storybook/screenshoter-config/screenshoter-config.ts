import { type TestRunnerConfig, type TestHook, getStoryContext } from '@storybook/test-runner';
import resemble, { type ComparisonResult } from 'resemblejs';

import { saveScreenshots } from './fs-utils';
import { getParsedScreenshots } from './get-approved-screenshots';
import { resolveSettings, type Settings } from './resolve-settings';
import { APPROVE_TEXT, type Comment } from '../screenshot-panel/comments';

const REFERENCE_STORYBOOK_URL = 'https://colibrijs.github.io/colibrijs/main/storybook/';

type StoryContext = Awaited<ReturnType<typeof getStoryContext>>;
type Page = Parameters<TestHook>[0];
type Story = Parameters<TestHook>[1];

export function getScreenshoterConfig(): TestRunnerConfig {
  const settings: Settings = resolveSettings();

  async function postVisit(page: Page, story: Story) {
    const context = await getStoryContext(page, story);

    const isApprovedScreenshot = await page.evaluate(() => {
      // @ts-expect-error -- всё хорошо. В preview.ts есть код, который сохраняет в window коменты
      const comments: Comment[] = window.pullRequestComments;
      const approvedScreenshots = getParsedScreenshots(comments);
      return approvedScreenshots.some(
        (screenshot) => screenshot.name === story.name && screenshot.path === context.componentId
      );
    }, APPROVE_TEXT);

    if (!isScreenshotStory(context) || isApprovedScreenshot) {
      return;
    }

    const [referenceScreenshot, actualScreenshot] = await Promise.all([
      getReferencePageScreenshot(page, context),
      page.screenshot(),
    ]);

    const result = await compareImages(referenceScreenshot, actualScreenshot);

    if (result.rawMisMatchPercentage) {
      await saveScreenshots(
        story.id,
        {
          reference: referenceScreenshot,
          actual: actualScreenshot,
          diff: result.getBuffer!(false),
        },
        settings
      );
    }
    expect(result.rawMisMatchPercentage).toBe(0);
  }

  function isScreenshotStory(storyData: StoryContext) {
    return storyData.parameters.fileName.includes('/screenshot/');
  }

  async function getReferencePageScreenshot(
    actualStoryPage: Page,
    context: StoryContext
  ): Promise<Buffer> {
    const referencePage = await actualStoryPage.context().newPage();
    // https://colibrijs.github.io/colibrijs/main/storybook/iframe.html?id=pagetitle-tests-screenshot--screenshot
    const referencePageUrl = `${REFERENCE_STORYBOOK_URL}iframe.html?id=${context.id}`;
    await referencePage.goto(referencePageUrl, { waitUntil: 'networkidle' });
    return referencePage.screenshot();
  }

  function compareImages(reference: Buffer, actual: Buffer): Promise<ComparisonResult> {
    return new Promise((resolve) => {
      resemble(reference).compareTo(actual).onComplete(resolve);
    });
  }

  return { postVisit };
}
