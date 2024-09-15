import { DeleteOutlined } from '@ant-design/icons';
import type { IElement } from '@colibrijs/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { message, Button, Popconfirm, Tooltip } from 'antd';
import { useCallback } from 'react';

import { useApi, ELEMENTS_KEY } from '../../hooks/use-api';

export interface Props {
  element: IElement;
  onRemove: () => void;
}

export function ElementRemove({ element, onRemove }: Props) {
  const api = useApi();
  const queryClient = useQueryClient();

  const { mutate: deleteElement, isPending } = useMutation({
    mutationFn: () => api.elements.delete(element.id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ELEMENTS_KEY] });
      message.success(
        <span data-testid="element-remove__success">
          Элемент “{element.component.name}” успешно удален
        </span>
      );
      onRemove();
    },
    onError: (error) => {
      message.error(<span data-testid="element-remove__error">{error.message}</span>);
    },
  });

  const confirmHandler = useCallback(() => {
    deleteElement();
  }, [deleteElement]);

  return (
    <Popconfirm
      title="Удалить элемент?"
      description={`Элемент “${element.component.name}” будет удален с концами`}
      okText={<span data-testid="element-remove__confirm">Да</span>}
      cancelText="Галя, отмена"
      onConfirm={confirmHandler}
    >
      <Tooltip title="Удалить">
        <Button
          loading={isPending}
          icon={<DeleteOutlined />}
          htmlType="button"
          data-testid="element-remove"
          shape="circle"
          danger
          ghost
        />
      </Tooltip>
    </Popconfirm>
  );
}
