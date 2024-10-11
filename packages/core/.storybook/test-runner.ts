import { type TestRunnerConfig, type TestHook, getStoryContext } from '@storybook/test-runner';
import fs from 'node:fs/promises';
import path from 'node:path';
import resemble, { type ComparisonResult } from 'resemblejs';

const REFERENCE_STORYBOOK_URL = 'https://colibrijs.github.io/colibrijs/main/storybook/';

type StoryContext = Awaited<ReturnType<typeof getStoryContext>>;
type Page = Parameters<TestHook>[0];
type Story = Parameters<TestHook>[1];

// проблемы:
// 1. Страницу с reference-сторибуком нужно открывать заранее перед запуском тестов
// 2. Не обрабатываются ситуации с отсутствием сториса на гитхуб-пегасе
function getScreenshoterConfig(): TestRunnerConfig {
  let isScreenshotDirsCreated = false;
  async function setup() {
    const screenshotDir = path.resolve(__dirname, './screenshots/');

    const isDirectoryExist = await getDirectoryAvailability(screenshotDir);
    if (isDirectoryExist) {
      await fs.rm(screenshotDir, { recursive: true });
    }
  }

  async function getDirectoryAvailability(dir: string): Promise<boolean> {
    try {
      const data = await fs.lstat(dir);
      if (data.isDirectory()) {
        return true;
      }
      return false;
    } catch (error) {
      return false;
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
      const outputDir = path.resolve(__dirname, './screenshots/');
      const actualDir = path.resolve(outputDir, './actual/');
      const referenceDir = path.resolve(outputDir, './reference/');
      const diffDir = path.resolve(outputDir, './diff/');

      const isScreenshotDirExists =
        isScreenshotDirsCreated || (await getDirectoryAvailability(outputDir));

      if (!isScreenshotDirExists) {
        await fs.mkdir(outputDir);
        await Promise.all([fs.mkdir(actualDir), fs.mkdir(referenceDir), fs.mkdir(diffDir)]);
        isScreenshotDirsCreated = true;
      }

      await Promise.all([
        saveScreenshot(path.resolve(referenceDir, `./${story.id}.png`), referenceScreenshot),
        saveScreenshot(path.resolve(actualDir, `./${story.id}.png`), actualScreenshot),
        saveScreenshot(path.resolve(diffDir, `./${story.id}.png`), result.getBuffer!(false)),
      ]);
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

  async function saveScreenshot(filename: string, image: Buffer): Promise<void> {
    await fs.writeFile(filename, image, 'binary');
  }

  return { postVisit, setup };
}

export default getScreenshoterConfig();
