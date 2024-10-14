import { type TestRunnerConfig, type TestHook, getStoryContext } from '@storybook/test-runner';
import resemble, { type ComparisonResult } from 'resemblejs';

import { fsUtils } from './fs-utils';

const REFERENCE_STORYBOOK_URL = 'https://colibrijs.github.io/colibrijs/main/storybook/';

type StoryContext = Awaited<ReturnType<typeof getStoryContext>>;
type Page = Parameters<TestHook>[0];
type Story = Parameters<TestHook>[1];

// проблемы:
// 1. Страницу с reference-сторибуком нужно открывать заранее перед запуском тестов
// 2. Не обрабатываются ситуации с отсутствием сториса на гитхуб-пегасе
export function getScreenshoterConfig(): TestRunnerConfig {
  let isScreenshotDirsCreated = false;
  async function setup() {
    const screenshotDir = fsUtils.getPath(__dirname, './screenshots/');

    const isDirectoryExist = await fsUtils.getDirectoryAvailability(screenshotDir);
    if (isDirectoryExist) {
      await fsUtils.removeDirectory(screenshotDir);
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
      const dirs = getDirPaths();
      const isScreenshotDirExists =
        isScreenshotDirsCreated || (await fsUtils.getDirectoryAvailability(dirs.outputDir));

      if (!isScreenshotDirExists) {
        await createDirectiries(dirs);
      }

      await createScreenshots({
        dirs,
        story,
        result,
        screenshots: { referenceScreenshot, actualScreenshot },
      });
    }

    expect(result.rawMisMatchPercentage).toBe(0);
  }

  type Dirs = {
    outputDir: string;
    actualDir: string;
    referenceDir: string;
    diffDir: string;
  };
  function getDirPaths(): Dirs {
    const outputDir = fsUtils.getPath(__dirname, './screenshots/');
    const actualDir = fsUtils.getPath(outputDir, './actual/');
    const referenceDir = fsUtils.getPath(outputDir, './reference/');
    const diffDir = fsUtils.getPath(outputDir, './diff/');
    return { outputDir, actualDir, referenceDir, diffDir };
  }

  async function createDirectiries({
    outputDir,
    actualDir,
    referenceDir,
    diffDir,
  }: Dirs): Promise<void> {
    await fsUtils.createDirectory(outputDir);
    await Promise.all([
      fsUtils.createDirectory(actualDir),
      fsUtils.createDirectory(referenceDir),
      fsUtils.createDirectory(diffDir),
    ]);
    isScreenshotDirsCreated = true;
  }

  type CreateScreenshotsTypes = {
    dirs: Dirs;
    story: Story;
    screenshots: { referenceScreenshot: Buffer; actualScreenshot: Buffer };
    result: ComparisonResult;
  };
  async function createScreenshots({
    dirs,
    story,
    screenshots,
    result,
  }: CreateScreenshotsTypes): Promise<void> {
    await Promise.all([
      saveScreenshot(
        fsUtils.getPath(dirs.referenceDir, `./${story.id}.png`),
        screenshots.referenceScreenshot
      ),
      saveScreenshot(
        fsUtils.getPath(dirs.actualDir, `./${story.id}.png`),
        screenshots.actualScreenshot
      ),
      saveScreenshot(fsUtils.getPath(dirs.diffDir, `./${story.id}.png`), result.getBuffer!(false)),
    ]);
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
    await fsUtils.createBinaryFile(filename, image);
  }

  return { postVisit, setup };
}
