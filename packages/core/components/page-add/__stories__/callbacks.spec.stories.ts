import { examplePageConstructorOptions } from '@colibrijs/mocks/pages';
import { expect, fn } from '@storybook/test';

import PageAddStoriesMeta from './page-add.stories';
import type { PageAddMeta, Story } from './page-add.stories';
import { PageAddTO } from '../test-object';

export default {
  ...PageAddStoriesMeta,
  title: 'PageAdd/tests/callbacks',
} satisfies PageAddMeta;

export const RouteRequired: Story = {
  name: 'После успешного добавления страницы, вызывает функцию onReady',
  args: {
    defaultValues: examplePageConstructorOptions,
    onReady: fn(),
  },
  play: async ({ args, canvasElement, step }) => {
    step('Предусловие: изначально все поля заполнены', () => {});

    const pageAdd = new PageAddTO({ canvasElement, step });
    await pageAdd.submit();

    await step('Убеждаюсь, что callback onReady вызвался', () => {
      expect(args.onReady).toHaveBeenCalled();
    });
  },
};
