import { PlusOutlined } from '@ant-design/icons';
import type { IPage } from '@colibrijs/types';
import { useQuery } from '@tanstack/react-query';
import { Button, ConfigProvider, Flex, Tree, theme, Typography } from 'antd';
import type { TreeDataNode } from 'antd';
import React, { useCallback, useMemo, useState, type ReactNode } from 'react';

import styles from './pages-list.module.css';
import { getPageHref, pagesToTree } from './utils';
import { useApi, PAGES_KEY } from '../../hooks/use-api';
import { PageAddModal } from '../page-add-modal';

const EMPTY_ARRAY: TreeDataNode[] = [];

export function PagesList() {
  const api = useApi();
  const lightTheme = useMemo(() => ({ algorithm: theme.defaultAlgorithm }), []);
  const [adding, setAdding] = useState(false);

  const startAdding = useCallback(() => setAdding(true), []);
  const endAdding = useCallback(() => setAdding(false), []);

  const wrapTitle = useCallback(
    (title: string, page: IPage): ReactNode => (
      <Typography.Link
        href={getPageHref(page)}
        type="secondary"
        data-testid={`pages-list__${page.id}`}
      >
        {title}
      </Typography.Link>
    ),
    []
  );

  const { data: treeData = EMPTY_ARRAY } = useQuery({
    queryFn: () => api.pages.get(),
    queryKey: [PAGES_KEY],
    select: pagesToTree.bind(null, { wrapTitle }),
  });

  return (
    <div className={styles.root} data-testid="pages-list">
      <Typography.Title level={3}>
        <Flex align="center" justify="space-between">
          <span>Страницы</span>
          <Button icon={<PlusOutlined />} onClick={startAdding} data-testid="pages-list__add" />
        </Flex>
      </Typography.Title>
      <ConfigProvider theme={lightTheme}>
        <PageAddModal open={adding} onClose={endAdding} />
      </ConfigProvider>
      <Tree.DirectoryTree treeData={treeData} multiple />
    </div>
  );
}
