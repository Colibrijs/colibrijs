import type { IComponent } from '@colibrijs/types';
import { Table, type TableColumnsType } from 'antd';
import React, { useEffect, useMemo, useState } from 'react';

import { useApi } from '../../hooks/use-api';

export function ComponentsList() {
  const api = useApi();
  const [components, setComponents] = useState<IComponent[]>([]);
  const [componentsLoading, setComponentsLoading] = useState(false);

  const columns = useMemo(
    (): TableColumnsType<IComponent> => [
      { title: 'Библиотека', dataIndex: 'libraryName', key: 'libraryName' },
      { title: 'Компонент', dataIndex: 'componentName', key: 'componentName' },
      {
        title: 'Ссылка',
        dataIndex: 'src',
        key: 'src',
        render: (src: string) => (
          <a href={src} target="_blank" rel="noreferrer">
            {src}
          </a>
        ),
      },
    ],
    []
  );

  useEffect(() => {
    setComponentsLoading(true);
    api.components
      .get()
      .then((loadedComponents) => setComponents(loadedComponents))
      .finally(() => setComponentsLoading(false));
  }, [api]);

  return <Table columns={columns} dataSource={components} loading={componentsLoading} />;
}
