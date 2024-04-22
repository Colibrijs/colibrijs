import { test, expect } from '@playwright/test';

test.describe('Рендеринг Microfrontend на стороне сервера', () => {
  test('компонент Microfrontend рендерится на стороне сервера', async ({ browser }) => {
    const context =
      await test.step('отключаю javascript, чтобы проверить именно серверный рендеринг', () =>
        browser.newContext({ javaScriptEnabled: false }));

    const page = await test.step('открываю новую страницу с отключенным js', () =>
      context.newPage());

    page.goto('/');

    const title = await test.step('получаю заголовок микрофронта', () =>
      page.getByTestId('example__title'));
    const text = await test.step('получаю текст микрофронта', () =>
      page.getByTestId('example__text'));

    await expect(
      title,
      'проверяю что заголовок содержит тот текст, который был передан в пропсах'
    ).toHaveText('Удалённый компонент');

    await expect(
      text,
      'проверяю что элемент-текст содержит ту строку, которая была передана в пропсах'
    ).toHaveText('Но тем не менее, рендерюсь здесь');
  });

  test('Компонент рендерится на стороне сервера сразу со стилями', async ({ browser }) => {
    const context =
      await test.step('отключаю javascript, чтобы проверить именно серверный рендеринг', () =>
        browser.newContext({ javaScriptEnabled: false }));

    const page = await test.step('открываю новую страницу с отключенным js', () =>
      context.newPage());

    page.goto('/');

    const text = await test.step('получаю текст микрофронта', () =>
      page.getByTestId('example__text'));

    await expect(text, 'проверяю текст содержит стили, заданные в его css').toHaveCSS(
      'color',
      'rgb(51, 51, 51)'
    );
  });
});
