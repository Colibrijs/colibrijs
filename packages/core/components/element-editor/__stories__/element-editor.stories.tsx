import { textComponentSchema } from '@colibrijs/mocks/components';
import { exampleElement as mockedElement } from '@colibrijs/mocks/elements';
import { mockLoadSchemaRequest, resetLoadSchemaRequestMock } from '@colibrijs/module-utils/mocked';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { message } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';

import { withMockedApi, type WithMockedApi } from '../../../hooks/use-api/mocked';
import { ElementEditor, type Props } from '../element-editor';

export type ElementEditorMeta = Meta<WithMockedApi<Props>>;
export type ElementEditorStory = StoryObj<WithMockedApi<Props>>;

function Wrapper({ element, onEdit, onRemove, onClose }: Props) {
  const [elementExample, setElementExample] = useState(element);
  const [open, setOpen] = useState(true);

  const closeHandler = useCallback(() => {
    setOpen(false);
    onClose();
  }, [onClose]);

  const editHandler = useCallback(
    (props: object) => {
      onEdit(props);
      setElementExample({ ...elementExample, props });
    },
    [elementExample, onEdit]
  );

  const onOpen = useCallback(() => {
    setOpen(true);
  }, []);

  return (
    <>
      <button onClick={onOpen}>Открыть эдитор</button>
      <ElementEditor
        element={elementExample}
        onRemove={onRemove}
        onEdit={editHandler}
        open={open}
        onClose={closeHandler}
      />
    </>
  );
}

export default {
  component: Wrapper,
  title: 'ElementEditor',
  args: {
    element: mockedElement,
    onRemove: fn(),
    onEdit: fn(),
    onClose: fn(),
  },
  decorators: [
    (Story) => {
      // Если убрать, сообщения будут сохраняться между сторисами. Не очень хорошо.
      // Из-за этого одни тесты, могут повлиять на другие.
      message.destroy();
      return <Story />;
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
    withMockedApi((apiClient) => {
      apiClient.override({
        elements: {
          delete: () => Promise.resolve(mockedElement),
          patch: () => Promise.resolve(mockedElement),
        },
      });
    }),
  ],
} satisfies ElementEditorMeta;

export const Default: ElementEditorStory = {};
