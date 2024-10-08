import { type TestRunnerConfig, type TestHook, getStoryContext } from '@storybook/test-runner';
import fs from 'node:fs/promises';
import path from 'node:path';
import resemble, { type ComparisonResult } from 'resemblejs';

const REFERENCE_STORYBOOK_URL = 'https://colibrijs.github.io/colibrijs/main/storybook/';

type StoryContext = Awaited<ReturnType<typeof getStoryContext>>;
type Page = Parameters<TestHook>[0];
type Story = Parameters<TestHook>[1];

// проблемы:
// 1. Очищать папку со скриншотами перед прогоном тестов
// 2. Папки для картинок надо создавать при первом сломанном тесте. Сейчас если два теста сломаются,
//    получим ошибку, так как скриншотер попытается создать уже существующую папку
// 3. Страницу с reference-сторибуком нужно открывать заранее перед запуском тестов
// 4. Не обрабатываются ситуации с отсутствием сториса на гитхуб-пегасе
// 5. Скриншоты не игнорятся гитом
function getScreenshoterConfig(): TestRunnerConfig {
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

      await fs.mkdir(outputDir);
      await Promise.all([fs.mkdir(actualDir), fs.mkdir(referenceDir), fs.mkdir(diffDir)]);

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

  return { postVisit };
}

export default getScreenshoterConfig();
