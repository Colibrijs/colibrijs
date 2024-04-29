import { DeleteOutlined } from '@ant-design/icons';
import type { IComponent } from '@colibrijs/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { message, Button, Popconfirm, Tooltip } from 'antd';
import React, { useCallback, type ReactNode } from 'react';

import { useApi, COMPONENTS_KEY } from '../../hooks/use-api';

export interface Props {
  component: IComponent;
  onRemove?: (component: IComponent) => void;
}

export function ComponentRemove({ component, onRemove }: Props): ReactNode {
  const api = useApi();
  const queryClient = useQueryClient();

  const { mutate: deleteComponent, isPending } = useMutation({
    mutationFn: () => api.components.delete(component.id),
    onError: (error) =>
      message.error(<span data-testid="component-remove__error">{error.message}</span>),
    onSuccess: (removedComponent) => {
      if (onRemove) {
        onRemove(removedComponent);
      }

      queryClient.invalidateQueries({ queryKey: [COMPONENTS_KEY] });
      message.success(
        <span data-testid="component-remove__success">
          Компонент “{component.name}” успешно удалён
        </span>
      );
    },
  });

  const confirmHandler = useCallback(() => {
    deleteComponent();
  }, [deleteComponent]);

  return (
    <Popconfirm
      title="Удалить компонент?"
      description={`Компонент “${component.name}” будет удалён с концами`}
      okText={<span data-testid="component-remove__confirm">Да</span>}
      cancelText="Галя, отмена"
      onConfirm={confirmHandler}
    >
      <Tooltip title="Удалить">
        <Button
          loading={isPending}
          icon={<DeleteOutlined />}
          htmlType="button"
          data-testid="component-remove__remove"
          shape="circle"
          danger
          ghost
        />
      </Tooltip>
    </Popconfirm>
  );
}
