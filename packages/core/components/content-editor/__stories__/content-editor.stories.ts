import { textComponentSchema } from '@colibrijs/mocks/components';
import { exampleElements, textElement } from '@colibrijs/mocks/elements';
import { examplePage } from '@colibrijs/mocks/pages';
import { mockLoadSchemaRequest, resetLoadSchemaRequestMock } from '@colibrijs/module-utils/mocked';
import type { Meta, StoryObj } from '@storybook/react';

import { message } from 'antd';
import React, { useEffect, type ComponentProps } from 'react';

import { withMockedApi, type WithMockedApi } from '../../../hooks/use-api/mocked';
import { ContentEditor } from '../content-editor';

export type StoryMeta = Meta<WithMockedApi<ComponentProps<typeof ContentEditor>>>;
export type Story = StoryObj<WithMockedApi<ComponentProps<typeof ContentEditor>>>;

export default {
  component: ContentEditor,
  title: 'ContentEditor',
  decorators: [
    (StoryComponent) => {
      message.destroy();
      return React.createElement(StoryComponent);
    },
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
    withMockedApi((api) =>
      api.override({
        elements: {
          get: () => Promise.resolve(exampleElements),
          post: () => Promise.resolve(textElement),
        },
      })
    ),
  ],
  args: {
    route: examplePage.id,
  },
} satisfies StoryMeta;

export const Default: Story = {};
