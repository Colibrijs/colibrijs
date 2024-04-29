import { DeleteOutlined } from '@ant-design/icons';
import type { IPage } from '@colibrijs/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { message, Button, Popconfirm, Tooltip } from 'antd';
import React, { useCallback, type ReactNode } from 'react';

import { useApi, PAGES_KEY } from '../../hooks/use-api';

export interface Props {
  page: IPage;
}

export function PageRemove({ page }: Props): ReactNode {
  const api = useApi();
  const queryClient = useQueryClient();

  const { mutate: deletePage, isPending } = useMutation({
    mutationFn: () => api.pages.delete(page.id),
    onError: (error) =>
      message.error(<span data-testid="page-remove__error">{error.message}</span>),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [PAGES_KEY] });
      message.success(
        <span data-testid="page-remove__success">
          Страница “{page.name}” ({page.route}) успешно удалена
        </span>
      );
    },
  });

  const confirmHandler = useCallback(() => {
    deletePage();
  }, [deletePage]);

  return (
    <Popconfirm
      title="Удалить страницу?"
      description={`Страница “${page.name}” (${page.route}) будет удалена с концами`}
      okText={<span data-testid="page-remove__confirm">Да</span>}
      cancelText="Галя, отмена"
      onConfirm={confirmHandler}
    >
      <Tooltip title="Удалить">
        <Button
          loading={isPending}
          icon={<DeleteOutlined />}
          htmlType="button"
          data-testid="page-remove"
          shape="circle"
          danger
          ghost
        />
      </Tooltip>
    </Popconfirm>
  );
}
