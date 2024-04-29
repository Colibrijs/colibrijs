import { Layout as AntdLayout, Menu, Typography, type MenuProps } from 'antd';
import React, { useMemo } from 'react';
import type { PropsWithChildren, ReactNode } from 'react';

import styles from './layout.module.css';
import { Sidebar } from './sidebar';

export type Props = PropsWithChildren<{
  sidebar?: ReactNode;
}>;

export function Layout({ children, sidebar }: Props) {
  const hasSidebar = useMemo(() => Boolean(sidebar), [sidebar]);

  const menuItems: MenuProps['items'] = useMemo(
    () => [
      { key: 'pages', label: <Typography.Link href="/pages">Страницы</Typography.Link> },
      {
        key: 'components',
        label: <Typography.Link href="/components/">Компоненты</Typography.Link>,
      },
    ],
    []
  );

  return (
    <AntdLayout className={styles.root}>
      <AntdLayout.Header>
        <Menu items={menuItems} mode="horizontal" theme="dark" />
      </AntdLayout.Header>
      <AntdLayout hasSider={hasSidebar}>
        {hasSidebar && <Sidebar>{sidebar}</Sidebar>}
        <AntdLayout.Content className={styles.content}>{children}</AntdLayout.Content>
      </AntdLayout>
    </AntdLayout>
  );
}
