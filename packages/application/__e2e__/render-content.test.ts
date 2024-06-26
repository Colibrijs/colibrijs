import { apiClient } from '@colibrijs/api-client';
import { exampleComponentConstructorOptions } from '@colibrijs/mocks/components';
import { exampleElementConstructorOptions } from '@colibrijs/mocks/elements';
import { examplePageConstructorOptions } from '@colibrijs/mocks/pages';
import type { IComponent, IElement, IPage } from '@colibrijs/types';
import { test, expect } from '@playwright/test';

test.describe('Рендеринг Content на стороне сервера', () => {
  let page: IPage | null = null;
  let component: IComponent | null = null;
  let element: IElement | null = null;

  test.beforeAll('Создаём тестовый элемент', async () => {
    page = await apiClient.pages.post(examplePageConstructorOptions);
    component = await apiClient.components.post(exampleComponentConstructorOptions);
    element = await apiClient.elements.post({
      ...exampleElementConstructorOptions,
      component,
      pageId: page.id,
    });
  });

  test.afterAll('Удаляем тестовый элемент', async () => {
    if (element) {
      await apiClient.elements.delete(element.id);
      element = null;
    }

    if (component) {
      await apiClient.components.delete(component.id);
      component = null;
    }

    if (page) {
      await apiClient.pages.delete(page.id);
      page = null;
    }
  });

  test('компонент Content рендерится на стороне сервера', async ({ browser }) => {
    const context =
      await test.step('отключаю javascript, чтобы проверить именно серверный рендеринг', () =>
        browser.newContext({ javaScriptEnabled: false }));

    const page = await test.step('открываю новую страницу с отключенным js', () =>
      context.newPage());

    page.goto(examplePageConstructorOptions.route);

    const title = await test.step('получаю заголовок микрофронта', () =>
      page.getByTestId('example__title'));
    const text = await test.step('получаю текст микрофронта', () =>
      page.getByTestId('example__text'));

    await expect(
      title,
      'проверяю что заголовок содержит тот текст, который был передан в пропсах'
    ).toHaveText('Заголовок');

    await expect(
      text,
      'проверяю что элемент-текст содержит ту строку, которая была передана в пропсах'
    ).toHaveText('некий текст');
  });

  test('Компонент рендерится на стороне сервера сразу со стилями', async ({ browser }) => {
    const context =
      await test.step('отключаю javascript, чтобы проверить именно серверный рендеринг', () =>
        browser.newContext({ javaScriptEnabled: false }));

    const page = await test.step('открываю новую страницу с отключенным js', () =>
      context.newPage());

    page.goto(examplePageConstructorOptions.route);

    const text = await test.step('получаю текст микрофронта', () =>
      page.getByTestId('example__text'));

    await expect(text, 'проверяю текст содержит стили, заданные в его css').toHaveCSS(
      'color',
      'rgb(51, 51, 51)'
    );
  });
});
