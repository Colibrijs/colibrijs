import { CheckOutlined } from '@ant-design/icons';
import type { IElement } from '@colibrijs/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { message, Button, Drawer, Skeleton, Space } from 'antd';
import { useCallback, useMemo, useState } from 'react';

import { ELEMENTS_KEY, useApi } from '../../hooks/use-api';
import { useSchema } from '../../hooks/use-schema';
import { ElementRemove } from '../element-remove/element-remove';
import { PropsEditor } from '../props-editor';

export interface Props {
  element: IElement;
  onRemove: () => void;
  onEdit: (newProps: object) => void;
  open: boolean;
  onClose: () => void;
}

export function ElementEditor({ element, onRemove, onEdit, open, onClose }: Props) {
  const [lastSavedProps, setLastSavedProps] = useState(JSON.stringify(element.props));
  const api = useApi();
  const queryClient = useQueryClient();

  const showSaveButton = useMemo(() => {
    return lastSavedProps !== JSON.stringify(element.props);
  }, [element.props, lastSavedProps]);

  const { data: schema, isLoading, isSuccess } = useSchema(element.component);

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
      message.error(<span data-testid="element-editor__error">{error.message}</span>);
    },
  });

  const onClick = useCallback(() => saveChanges(), [saveChanges]);

  return (
    <Drawer
      open={open}
      mask={false}
      title={<span data-testid="element-editor__title">{element.component.name}</span>}
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
      <Skeleton loading={isLoading}>
        {isSuccess && <PropsEditor schema={schema} onChange={onEdit} value={element.props} />}
      </Skeleton>
    </Drawer>
  );
}
