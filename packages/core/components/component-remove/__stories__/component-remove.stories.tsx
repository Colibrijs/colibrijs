import { exampleComponent } from '@colibrijs/mocks/components';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { message } from 'antd';
import React from 'react';

import type { WithMockedApi } from '../../../hooks/use-api/mocked';
import { ComponentRemove, type Props } from '../component-remove';

export type ComponentRemoveMeta = Meta<WithMockedApi<Props>>;
export type Story = StoryObj<WithMockedApi<Props>>;

export default {
  component: ComponentRemove,
  title: 'ComponentRemove',
  args: {
    component: exampleComponent,
    onRemove: fn(),
  },
  decorators: [
    (Story) => {
      // Если убрать, сообщения будут сохраняться между сторисами. Не очень хорошо.
      // Из-за этого одни тесты, могут повлиять на другие.
      message.destroy();
      return <Story />;
    },
  ],
} satisfies ComponentRemoveMeta;

export const Default: Story = {};
