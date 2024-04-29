import { examplePageConstructorOptions } from '@colibrijs/mocks/pages';
import { expect, fn, waitFor } from '@storybook/test';

import PageAddModalStoriesMeta from './page-add-modal.stories';
import type { PageAddModalMeta, Story } from './page-add-modal.stories';
import { PageAddTO } from '../../page-add/test-object';
import { PageAddModalTO } from '../test-object';

export default {
  ...PageAddModalStoriesMeta,
  title: 'PageAddModal/tests/integration-page-add',
} satisfies PageAddModalMeta;

export const IntegrationPageAdd: Story = {
  name: 'При добавлении страницы, модальное окно автоматически закрывается',
  args: { open: true, onClose: fn() },
  play: async ({ args, step }) => {
    const pageAddModal = new PageAddModalTO({ step });
    const modalContent = await pageAddModal.waitForContent();
    const pageAdd = new PageAddTO({ rootElement: modalContent, step });

    await pageAdd.fillAndSubmit(examplePageConstructorOptions);

    await step('Проверяю, что колбэк onClose вызван', () =>
      waitFor(() => expect(args.onClose).toHaveBeenCalled())
    );
  },
};
