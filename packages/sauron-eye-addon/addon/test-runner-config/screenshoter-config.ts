import { type TestRunnerConfig, type TestHook, getStoryContext } from '@storybook/test-runner';
import resemble, { type ComparisonResult } from 'resemblejs';

import { saveScreenshots } from './fs-utils';
import { resolveSettings, type Settings } from './resolve-settings';
import { APPROVE_TEXT } from '../common/comments';
import { getParsedScreenshots, isApprovedScreenshot } from '../common/get-approved-screenshots';
import type { SauronEyeConfig } from '../common/types';

type StoryContext = Awaited<ReturnType<typeof getStoryContext>>;
type Page = Parameters<TestHook>[0];
type Story = Parameters<TestHook>[1];

export function getScreenshoterConfig(config: SauronEyeConfig): TestRunnerConfig {
  const settings: Settings = resolveSettings();

  async function postVisit(page: Page, story: Story) {
    const context = await getStoryContext(page, story);

    if (!isScreenshotStory(context)) return;

    const comments = await page.evaluate(() => {
      // @ts-expect-error -- всё хорошо. В preview.ts есть код, который сохраняет в window коменты
      return window.pullRequestComments;
    }, APPROVE_TEXT);

    const approvedScreenshots = getParsedScreenshots(comments);

    if (isApprovedScreenshot(approvedScreenshots, { name: story.name, path: context.componentId }))
      return;

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
    const referencePageUrl = `${config.referenceStorybookUrl}iframe.html?id=${context.id}`;
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
