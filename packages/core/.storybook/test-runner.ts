import { type TestRunnerConfig, type TestHook, getStoryContext } from '@storybook/test-runner';
import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';
import pixelmatch from 'pixelmatch';
import { PNG } from 'pngjs';

const REFERENCE_STORYBOOK_URL = 'https://colibrijs.github.io/colibrijs/main/storybook/';

type StoryContext = Awaited<ReturnType<typeof getStoryContext>>;
type Page = Parameters<TestHook>[0];
type Story = Parameters<TestHook>[1];

// 21900ms

// проблемы:
// 1. Вставили 5сек таймаут, нужно понять как дожидаться загрузки страницы - готово
// 2. Долго сохраняются картинки. Нужно распараллелить скриншоты и сохранение картинок - готово, 0.5с экономии в кармане
// 3. Пришлось руками править исходник pixelmatch - отложено до лучших времён
// 5. Сохраняются только 3 картинки. Нужно сохранять картинки в папке actual, diff, reference.
//    В качестве имени файла указывать id сториса - готово
// 6. Папки для картинок надо создавать при запуске теста
// 7. Страницу с reference-сторибуком нужно открывать заранее перед запуском тестов
// 8. Не обрабатываются ситуации с отсутствием сториса на гитхуб-пегасе
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

    const reference = PNG.sync.read(referenceScreenshot);
    const actual = PNG.sync.read(actualScreenshot);
    const diff = new PNG({ width: reference.width, height: reference.height });

    const result = pixelmatch(
      reference.data,
      actual.data,
      diff.data,
      reference.width,
      reference.height
    );

    if (result) {
      const outputDir = path.resolve(__dirname, './screenshots/');
      const actualDir = path.resolve(outputDir, './actual/');
      const referenceDir = path.resolve(outputDir, './reference/');
      const diffDir = path.resolve(outputDir, './diff/');

      await fsp.mkdir(outputDir);
      await Promise.all([fsp.mkdir(actualDir), fsp.mkdir(referenceDir), fsp.mkdir(diffDir)]);

      await Promise.all([
        saveScreenshot(path.resolve(referenceDir, `./${story.id}.png`), reference),
        saveScreenshot(path.resolve(actualDir, `./${story.id}.png`), actual),
        saveScreenshot(path.resolve(diffDir, `./${story.id}.png`), diff),
      ]);
    }

    expect(result).toBe(0);
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

  function saveScreenshot(filename: string, image: PNG): Promise<void> {
    return new Promise((resolve, reject) => {
      const output = fs.createWriteStream(filename, 'binary');
      const png = new PNG({ height: image.height, width: image.width });

      image.data.copy(png.data);
      png.pack().pipe(output);

      output.on('finish', resolve);
      output.on('error', reject);
    });
  }

  return { postVisit };
}

export default getScreenshoterConfig();
