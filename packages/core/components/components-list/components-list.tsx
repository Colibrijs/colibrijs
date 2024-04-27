import type { IComponent } from '@colibrijs/types';
import { useQuery } from '@tanstack/react-query';
import { Table, type TableColumnsType, Typography } from 'antd';
import React, { useCallback, useMemo } from 'react';

import { useApi, COMPONENTS_KEY } from '../../hooks/use-api';
import { ComponentsAdd } from '../components-add';
import { ComponentsRemove } from '../components-remove';
import { getBaseUrl } from '../microfrontend';

export function ComponentsList() {
  const api = useApi();

  const { data: components, isLoading } = useQuery({
    queryFn: () => api.components.get(),
    queryKey: [COMPONENTS_KEY],
  });

  const getComponentSchemaUrl = useCallback((component: IComponent) => {
    const baseUrl = getBaseUrl({ ...component, ssr: false });

    return `${baseUrl}/schema.json`;
  }, []);

  const columns = useMemo(
    (): TableColumnsType<IComponent> => [
      { title: 'Библиотека', dataIndex: 'libraryName', key: 'libraryName' },
      { title: 'Компонент', dataIndex: 'componentName', key: 'componentName' },
      {
        title: 'Ссылка',
        dataIndex: 'src',
        key: 'src',
        render: (_, component) => (
          <Typography.Link href={getComponentSchemaUrl(component)} target="_blank" rel="noreferrer">
            {getComponentSchemaUrl(component)}
          </Typography.Link>
        ),
      },
      {
        key: 'actions',
        render: (_, component) => <ComponentsRemove component={component} />,
      },
    ],
    [getComponentSchemaUrl]
  );

  const Footer = useCallback(() => {
    return <ComponentsAdd />;
  }, []);

  return (
    <Table
      columns={columns}
      dataSource={components}
      loading={isLoading}
      pagination={false}
      footer={Footer}
    />
  );
}
