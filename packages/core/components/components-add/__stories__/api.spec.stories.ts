import { exampleComponentConstructorOptions, exampleComponent } from '@colibrijs/mocks/components';
import { expect, fn, within, userEvent } from '@storybook/test';

import ComponentsAddStoriesMeta from './components-add.stories';
import type { ComponentsAddMeta, Story } from './components-add.stories';
import { withMockedApi } from '../../../hooks/use-api/mocked';

export default {
  ...ComponentsAddStoriesMeta,
  title: 'ComponentsAdd/tests/api',
} satisfies ComponentsAddMeta;

export const RequestParameters: Story = {
  name: 'При клике на кнопку "Добавить", вызывается api components.post с данными, которые ввёл пользователь',
  decorators: [
    withMockedApi((apiClient) => {
      apiClient.override({
        components: {
          post: fn().mockResolvedValue(exampleComponent),
        },
      });
    }),
  ],
  play: async ({ args, canvasElement, step }) => {
    const story = within(canvasElement);

    await step('Заполняю поле "Название компонента"', async () => {
      const name = story.getByTestId('components-add__name-input');
      await userEvent.type(name, exampleComponentConstructorOptions.name);
    });

    await step('Заполняю поле "Название библиотеки"', async () => {
      const libraryName = story.getByTestId('components-add__library-name-input');
      await userEvent.type(libraryName, exampleComponentConstructorOptions.libraryName);
    });

    await step('Заполняю поле "Ссылка на сборку"', async () => {
      const src = story.getByTestId('components-add__src-input');
      await userEvent.type(src, exampleComponentConstructorOptions.src);
    });

    await step('Кликаю на кнопку "Добавить"', () =>
      userEvent.click(story.getByTestId('components-add__submit'))
    );

    await step('Проверяю, что api.components.post вызвался с теми данными, которые я ввёл', () => {
      expect(args.apiClient.components.post).toHaveBeenCalledWith({
        name: exampleComponentConstructorOptions.name,
        libraryName: exampleComponentConstructorOptions.libraryName,
        src: exampleComponentConstructorOptions.src,
      });
    });
  },
};

export const RequestError: Story = {
  name: 'Если при отправке данных возникла ошибка, текст ошибки отображается в уведомлении',
  args: { defaultValues: exampleComponentConstructorOptions },
  decorators: [
    withMockedApi((apiClient) => {
      apiClient.override({
        components: {
          post: () => Promise.reject(new Error('Случилось неладное!')),
        },
      });
    }),
  ],
  play: async ({ canvasElement, step }) => {
    await step('Предусловие: поля формы заполнены моковыми значениями', () => {});
    const { findByTestId, getByTestId, queryByTestId } = within(canvasElement);

    await step('Проверяю, что изначально ошибки нет', async () => {
      await expect(queryByTestId('components-add__error')).toBeNull();
    });

    await step('Кликаю на кнопку "Добавить"', () =>
      userEvent.click(getByTestId('components-add__submit'))
    );

    await step('Проверяю, что появилась ошибка "Случилось неладное!"', async () => {
      const error = await findByTestId('components-add__error');
      await expect(error).toBeVisible();
      await expect(error).toHaveTextContent('Случилось неладное!');
    });
  },
};
