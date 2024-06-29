import { ConfigProvider, Layout, theme } from 'antd';
import cn from 'classnames';
import { useCallback, useMemo, useState, type PropsWithChildren } from 'react';

import styles from './layout.module.css';

export const SIDEBAR_WIDTH = 350;

type Props = PropsWithChildren<Record<never, never>>;

export function Sidebar({ children }: Props) {
  const [collapsed, setCollapsed] = useState(false);
  const darkTheme = useMemo(() => ({ algorithm: theme.darkAlgorithm }), []);

  const toggle = useCallback(() => {
    setCollapsed((currentlyCollapsed) => !currentlyCollapsed);
  }, []);

  return (
    <Layout.Sider
      className={cn(styles.sidebar, {
        [styles.sidebar_collapsed!]: collapsed,
      })}
      collapsed={collapsed}
      collapsedWidth={0}
      theme="dark"
      width={SIDEBAR_WIDTH}
      onCollapse={toggle}
      collapsible
    >
      <ConfigProvider theme={darkTheme}>{children}</ConfigProvider>
    </Layout.Sider>
  );
}
