import { textComponent, textComponentSchema } from '@colibrijs/mocks/components';
import { examplePage } from '@colibrijs/mocks/pages';
import { mockLoadSchemaRequest, resetLoadSchemaRequestMock } from '@colibrijs/module-utils/mocked';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import React, { useEffect } from 'react';

import { withMockedApi, type WithMockedApi } from '../../../hooks/use-api/mocked';
import { ElementAdd, type Props } from '../element-add';

export type ElementAddMeta = Meta<WithMockedApi<Props>>;
export type ElementAddStory = StoryObj<WithMockedApi<Props>>;

export default {
  component: ElementAdd,
  title: 'ElementAdd',
  args: {
    open: true,
    pageId: examplePage.id,
    onClose: fn(),
    onReady: fn(),
  },
  decorators: [
    withMockedApi((apiClient) => {
      apiClient.override({
        components: {
          get: () => Promise.resolve([textComponent]),
        },
      });
    }),
    (Story) => {
      useEffect(() => {
        // После этого, во всех сторисах будет работать только textComponent, даже если выбрать
        // какой-то другой компонент. Зато тесты будут стабильными и не будут зависеть от гитхаба
        // с которого загружается схема компонента
        mockLoadSchemaRequest(textComponentSchema);

        return () => resetLoadSchemaRequestMock();
      });

      return React.createElement(Story);
    },
  ],
} satisfies ElementAddMeta;

export const Default: ElementAddStory = {};
