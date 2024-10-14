import { type TestRunnerConfig, type TestHook, getStoryContext } from '@storybook/test-runner';
import fs from 'node:fs/promises';
import resemble, { type ComparisonResult } from 'resemblejs';

import { isDirectoryAvailable, saveScreenshots } from './fs-utils';
import { resolveSettings, type Settings } from './resolve-settings';

const REFERENCE_STORYBOOK_URL = 'https://colibrijs.github.io/colibrijs/main/storybook/';

type StoryContext = Awaited<ReturnType<typeof getStoryContext>>;
type Page = Parameters<TestHook>[0];
type Story = Parameters<TestHook>[1];

// проблемы:
// 1. Страницу с reference-сторибуком нужно открывать заранее перед запуском тестов
// 2. Не обрабатываются ситуации с отсутствием сториса на гитхуб-пегасе
export function getScreenshoterConfig(): TestRunnerConfig {
  const settings: Settings = resolveSettings();

  async function setup() {
    if (await isDirectoryAvailable(settings.output.directory)) {
      await fs.rm(settings.output.directory, { recursive: true });
    }
  }

  async function postVisit(page: Page, story: Story) {
    const context = await getStoryContext(page, story);

    if (!isScreenshotStory(context)) {
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

  return { postVisit, setup };
}
