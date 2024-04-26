import { exampleComponentConstructorOptions } from '@colibrijs/mocks/components';
import { expect, within, userEvent } from '@storybook/test';

import ComponentsAddStoriesMeta from './components-add.stories';
import type { ComponentsAddMeta, Story } from './components-add.stories';

export default {
  ...ComponentsAddStoriesMeta,
  title: 'ComponentsAdd/tests/validation',
} satisfies ComponentsAddMeta;

export const ComponentNameRequired: Story = {
  name: 'Поле "Название компонента" является обязательным',
  args: {
    defaultValues: { ...exampleComponentConstructorOptions, componentName: '' },
  },
  play: async ({ canvasElement, step }) => {
    step('Предусловие: изначально все поля, кроме componentName заполнены', () => {});

    const story = within(canvasElement);
    const componentName = within(story.getByTestId('components-add__component-name'));

    await step('Убеждаюсь, что изначально элемента с ошибкой не видно', () => {
      const error = componentName.queryByRole('alert');
      expect(error).toBeNull();
    });

    await step('Кликаю на кнопку "Добавить"', () =>
      userEvent.click(story.getByTestId('components-add__submit'))
    );

    await step('Убеждаюсь, что теперь элемент с ошибкой виден', async () => {
      const error = await componentName.findByRole('alert');

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
    const libraryName = within(story.getByTestId('components-add__library-name'));

    await step('Убеждаюсь, что изначально элемента с ошибкой не видно', () => {
      const error = libraryName.queryByRole('alert');
      expect(error).toBeNull();
    });

    await step('Кликаю на кнопку "Добавить"', () =>
      userEvent.click(story.getByTestId('components-add__submit'))
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
    const src = within(story.getByTestId('components-add__src'));

    await step('Убеждаюсь, что изначально элемента с ошибкой не видно', () => {
      const error = src.queryByRole('alert');
      expect(error).toBeNull();
    });

    await step('Кликаю на кнопку "Добавить"', () =>
      userEvent.click(story.getByTestId('components-add__submit'))
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
    const src = within(story.getByTestId('components-add__src'));

    await step('Убеждаюсь, что изначально элемента с ошибкой не видно', () => {
      const error = src.queryByRole('alert');
      expect(error).toBeNull();
    });

    await step('Заполняю поле "Ссылка на сборку"', async () => {
      const src = story.getByTestId('components-add__src-input');
      await userEvent.type(src, 'просто текст');
    });

    await step('Кликаю на кнопку "Добавить"', () =>
      userEvent.click(story.getByTestId('components-add__submit'))
    );

    await step('Убеждаюсь, что теперь элемент с ошибкой виден', async () => {
      const error = await src.findByRole('alert');

      await expect(error).toBeVisible();
      await expect(error).toHaveTextContent('Параметр "Ссылка на сборку" должен быть ссылкой');
    });
  },
};
