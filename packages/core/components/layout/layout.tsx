import { Layout as AntdLayout, Menu, type MenuProps } from 'antd';
import { useMemo } from 'react';
import type { PropsWithChildren, ReactNode } from 'react';

import styles from './layout.module.css';
import { Sidebar } from './sidebar';
import { Link } from '../link';

export type Props = PropsWithChildren<{
  sidebar?: ReactNode;
  /** @default 'layout' */
  testId?: string;
}>;

export function Layout({ children, sidebar, testId = 'layout' }: Props) {
  const hasSidebar = useMemo(() => Boolean(sidebar), [sidebar]);

  const menuItems: MenuProps['items'] = useMemo(
    () => [
      { key: 'pages', label: <Link href="/pages">Страницы</Link> },
      { key: 'components', label: <Link href="/components/">Компоненты</Link> },
    ],
    []
  );

  return (
    <AntdLayout className={styles.root} data-testid={testId}>
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
