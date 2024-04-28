import { examplePageConstructorOptions } from '@colibrijs/mocks/pages';
import { expect } from '@storybook/test';

import PageAddStoriesMeta from './page-add.stories';
import type { PageAddMeta, Story } from './page-add.stories';
import { PageAddTO } from '../test-object';

export default {
  ...PageAddStoriesMeta,
  title: 'PageAdd/tests/validation',
} satisfies PageAddMeta;

export const RouteRequired: Story = {
  name: 'Поле "Адрес" является обязательным',
  args: {
    defaultValues: { ...examplePageConstructorOptions, route: '' },
  },
  play: async ({ canvasElement, step }) => {
    step('Предусловие: изначально все поля, кроме route заполнены', () => {});
    const pageAdd = new PageAddTO({ canvasElement, step });

    await step('Убеждаюсь, что изначально элемента с ошибкой не видно', async () => {
      const error = await pageAdd.getRouteError({ strict: false });
      expect(error).toBeNull();
    });

    await pageAdd.submit();

    await step('Убеждаюсь, что теперь элемент с ошибкой виден', async () => {
      const error = await pageAdd.getRouteError({ strict: true });
      await expect(error).toBeVisible();
      await expect(error).toHaveTextContent('Параметр "Адрес" обязательный');
    });
  },
};
