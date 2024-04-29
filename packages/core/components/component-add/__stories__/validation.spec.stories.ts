import { exampleComponentConstructorOptions } from '@colibrijs/mocks/components';
import { expect, within, userEvent } from '@storybook/test';

import ComponentAddStoriesMeta from './component-add.stories';
import type { ComponentAddMeta, Story } from './component-add.stories';

export default {
  ...ComponentAddStoriesMeta,
  title: 'ComponentAdd/tests/validation',
} satisfies ComponentAddMeta;

export const NameRequired: Story = {
  name: 'Поле "Название компонента" является обязательным',
  args: {
    defaultValues: { ...exampleComponentConstructorOptions, name: '' },
  },
  play: async ({ canvasElement, step }) => {
    step('Предусловие: изначально все поля, кроме name заполнены', () => {});

    const story = within(canvasElement);
    const name = within(story.getByTestId('component-add__name'));

    await step('Убеждаюсь, что изначально элемента с ошибкой не видно', () => {
      const error = name.queryByRole('alert');
      expect(error).toBeNull();
    });

    await step('Кликаю на кнопку "Добавить"', () =>
      userEvent.click(story.getByTestId('component-add__submit'))
    );

    await step('Убеждаюсь, что теперь элемент с ошибкой виден', async () => {
      const error = await name.findByRole('alert');

      await expect(error).toBeVisible();
      await expect(error).toHaveTextContent('Параметр "Название компонента" обязательный');
    });
  },
};

export const LibraryNameRequired: Story = {
  name: 'Поле "Название библиотеки" является обязательным',
  args: {
    defaultValues: { ...exampleComponentConstructorOptions, libraryName: '' },
  },
  play: async ({ canvasElement, step }) => {
    step('Предусловие: изначально все поля, кроме libraryName заполнены', () => {});

    const story = within(canvasElement);
    const libraryName = within(story.getByTestId('component-add__library-name'));

    await step('Убеждаюсь, что изначально элемента с ошибкой не видно', () => {
      const error = libraryName.queryByRole('alert');
      expect(error).toBeNull();
    });

    await step('Кликаю на кнопку "Добавить"', () =>
      userEvent.click(story.getByTestId('component-add__submit'))
    );

    await step('Убеждаюсь, что теперь элемент с ошибкой виден', async () => {
      const error = await libraryName.findByRole('alert');

      await expect(error).toBeVisible();
      await expect(error).toHaveTextContent('Параметр "Название библиотеки" обязательный');
    });
  },
};

export const SrcRequired: Story = {
  name: 'Поле "Ссылка на сборку" является обязательным',
  args: {
    defaultValues: { ...exampleComponentConstructorOptions, src: '' },
  },
  play: async ({ canvasElement, step }) => {
    step('Предусловие: изначально все поля, кроме src заполнены', () => {});

    const story = within(canvasElement);
    const src = within(story.getByTestId('component-add__src'));

    await step('Убеждаюсь, что изначально элемента с ошибкой не видно', () => {
      const error = src.queryByRole('alert');
      expect(error).toBeNull();
    });

    await step('Кликаю на кнопку "Добавить"', () =>
      userEvent.click(story.getByTestId('component-add__submit'))
    );

    await step('Убеждаюсь, что теперь элемент с ошибкой виден', async () => {
      const error = await src.findByRole('alert');

      await expect(error).toBeVisible();
      await expect(error).toHaveTextContent('Параметр "Ссылка на сборку" обязательный');
    });
  },
};

export const SrcTypeUrl: Story = {
  name: 'Поле "Ссылка на сборку" должно быть только ссылкой',
  args: {
    defaultValues: { ...exampleComponentConstructorOptions, src: '' },
  },
  play: async ({ canvasElement, step }) => {
    step('Предусловие: изначально все поля, кроме src заполнены', () => {});

    const story = within(canvasElement);
    const src = within(story.getByTestId('component-add__src'));

    await step('Убеждаюсь, что изначально элемента с ошибкой не видно', () => {
      const error = src.queryByRole('alert');
      expect(error).toBeNull();
    });

    await step('Заполняю поле "Ссылка на сборку"', async () => {
      const src = story.getByTestId('component-add__src-input');
      await userEvent.type(src, 'просто текст');
    });

    await step('Кликаю на кнопку "Добавить"', () =>
      userEvent.click(story.getByTestId('component-add__submit'))
    );

    await step('Убеждаюсь, что теперь элемент с ошибкой виден', async () => {
      const error = await src.findByRole('alert');

      await expect(error).toBeVisible();
      await expect(error).toHaveTextContent('Параметр "Ссылка на сборку" должен быть ссылкой');
    });
  },
};
