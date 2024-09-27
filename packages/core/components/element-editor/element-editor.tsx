import { CheckOutlined } from '@ant-design/icons';
import type { IElement } from '@colibrijs/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { message, Drawer, Input, Space, Button } from 'antd';
import { useCallback, useMemo, useState, type ChangeEvent } from 'react';

import { ELEMENTS_KEY, useApi } from '../../hooks/use-api';
import { ElementRemove } from '../element-remove/element-remove';

export interface Props {
  element: IElement;
  onRemove: () => void;
  onEdit: (newProps: object) => void;
  isOpen: boolean;
  onClose: () => void;
}

export function ElementEditor({ element, onRemove, onEdit, isOpen, onClose }: Props) {
  const [lastSavedProps, setLastSavedProps] = useState(JSON.stringify(element.props));
  const api = useApi();
  const queryClient = useQueryClient();

  const showSaveButton = useMemo(() => {
    return lastSavedProps !== JSON.stringify(element.props);
  }, [element.props, lastSavedProps]);

  const changeElementHandler = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      let newValue = {};
      try {
        newValue = JSON.parse(event.target.value);
      } catch (error) {
        alert('Ты за базаром-то следи');
        return;
      }
      onEdit(newValue);
    },
    [onEdit]
  );

  const { mutate: saveChanges, isPending } = useMutation({
    mutationFn: () => api.elements.patch(element.id, element.props),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ELEMENTS_KEY] });
      message.success(
        <span data-testid="element-editor__success">
          Элемент “{element.component.name}” успешно обновлен
        </span>
      );
      setLastSavedProps(JSON.stringify(element.props));
    },
    onError: (error) => {
      message.error(<span data-testid="element-remove__error">{error.message}</span>);
    },
  });

  const onClick = useCallback(() => saveChanges(), [saveChanges]);

  return (
    <Drawer
      open={isOpen}
      mask={false}
      title={<span data-testid="element-editor__title">{element.component.name}</span>}
      data-testid="element-editor"
      extra={
        <Space>
          {showSaveButton && (
            <Button
              loading={isPending}
              icon={<CheckOutlined />}
              htmlType="button"
              data-testid="element-editor__save"
              shape="circle"
              onClick={onClick}
            />
          )}
          <ElementRemove onRemove={onRemove} element={element} />
        </Space>
      }
      onClose={onClose}
    >
      <Input.TextArea
        data-testid="element-editor__textarea"
        value={JSON.stringify(element.props, null, 2)}
        onInput={changeElementHandler}
        autoSize
      />
    </Drawer>
  );
}
