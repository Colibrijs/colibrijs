import { type TestRunnerConfig, getStoryContext } from '@storybook/test-runner';
import { toMatchImageSnapshot } from 'jest-image-snapshot';
import fs from 'node:fs/promises';
import path from 'node:path';
import pixelmatch from 'pixelmatch';
import { PNG } from 'pngjs';

const REFERENCE_STORYBOOK_URL = 'https://colibrijs.github.io/colibrijs/main/storybook/';

// проблемы:
// 1. Вставили 5сек таймаут, нужно понять как дожидаться загрузки страницы - готово
// 2. Долго сохраняются картинки. Нужно распараллелить скриншоты и сохранение картинок - готово, 0.5с экономии в кармане
// 3. Пришлось руками править исходник pixelmatch - отложено до лучших времён
// 5. Сохраняются только 3 картинки. Нужно сохранять картинки в папке actual, diff, reference.
//    В качестве имени файла указывать id сториса - готово
// 6. Папки для картинок надо создавать при запуске теста
// 7. Страницу с reference-сторибуком нужно открывать заранее перед запуском тестов
// 8. Не обрабатываются ситуации с отсутствием сториса на гитхуб-пегасе
export default {
  logLevel: 'verbose',
  setup() {
    expect.extend({ toMatchImageSnapshot });
  },

  async postVisit(page, story) {
    const context = await getStoryContext(page, story);
    const { fileName } = context.parameters;
    const isScreenshotStory = fileName.includes('/screenshot/');
    if (!isScreenshotStory) return;

    const referencePage = await page.context().newPage();
    // https://colibrijs.github.io/colibrijs/main/storybook/iframe.html?id=pagetitle-tests-screenshot--screenshot
    const referencePageUrl = `${REFERENCE_STORYBOOK_URL}iframe.html?id=${story.id}`;
    await referencePage.goto(referencePageUrl, { waitUntil: 'networkidle' });

    const [referenceScreenshot, actualScreenshot] = await Promise.all([
      referencePage.screenshot(),
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

      await fs.mkdir(outputDir);
      await Promise.all([fs.mkdir(actualDir), fs.mkdir(referenceDir), fs.mkdir(diffDir)]);
      await Promise.all([
        fs.writeFile(
          path.resolve(referenceDir, `./${story.id}.png`),
          PNG.sync.write(reference),
          'binary'
        ),
        fs.writeFile(
          path.resolve(actualDir, `./${story.id}.png`),
          PNG.sync.write(actual),
          'binary'
        ),
        fs.writeFile(path.resolve(diffDir, `./${story.id}.png`), PNG.sync.write(diff), 'binary'),
      ]);
    }
    expect(result).toBe(0);
  },
} satisfies TestRunnerConfig;
