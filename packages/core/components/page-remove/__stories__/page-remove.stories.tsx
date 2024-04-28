import { examplePage } from '@colibrijs/mocks/pages';
import type { Meta, StoryObj } from '@storybook/react';
import { message } from 'antd';
import React from 'react';

import type { WithMockedApi } from '../../../hooks/use-api/mocked';
import { PageRemove, type Props } from '../page-remove';

export type PageRemoveMeta = Meta<WithMockedApi<Props>>;
export type Story = StoryObj<WithMockedApi<Props>>;

export default {
  component: PageRemove,
  title: 'PageRemove',
  args: {
    page: examplePage,
  },
  decorators: [
    (Story) => {
      // Если убрать, сообщения будут сохраняться между сторисами. Не очень хорошо.
      // Из-за этого одни тесты, могут повлиять на другие.
      message.destroy();
      return <Story />;
    },
  ],
} satisfies PageRemoveMeta;

export const Default: Story = {};
