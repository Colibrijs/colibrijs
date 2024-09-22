import { exampleElement as mockedElement } from '@colibrijs/mocks/elements';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { message } from 'antd';

import { useCallback, useState } from 'react';

import { withMockedApi, type WithMockedApi } from '../../../hooks/use-api/mocked';
import { ElementEditor, type Props } from '../element-editor';

export type ElementRemoveMeta = Meta<WithMockedApi<Props>>;
export type ElementRemoveStory = StoryObj<WithMockedApi<Props>>;

function Wrapper({ element, onEdit, onRemove }: Props) {
  const [elementExample, setElementExample] = useState(element);

  const editHandler = useCallback(
    (props: object) => {
      onEdit(props);
      const elementClone = structuredClone(elementExample);
      elementClone.props = props;
      setElementExample(elementClone);
    },
    [elementExample, onEdit]
  );

  return <ElementEditor element={elementExample} onRemove={onRemove} onEdit={editHandler} />;
}

export default {
  component: Wrapper,
  title: 'ElementEditor',
  args: {
    element: mockedElement,
    onRemove: fn(),
    onEdit: fn(),
  },
  decorators: [
    (Story) => {
      // Если убрать, сообщения будут сохраняться между сторисами. Не очень хорошо.
      // Из-за этого одни тесты, могут повлиять на другие.
      message.destroy();
      return <Story />;
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
} satisfies ElementRemoveMeta;

export const Default: ElementRemoveStory = {};
