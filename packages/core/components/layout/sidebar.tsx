import { ConfigProvider, Layout, theme } from 'antd';
import { useMemo, type PropsWithChildren } from 'react';

import styles from './layout.module.css';

export const SIDEBAR_WIDTH = 350;

type Props = PropsWithChildren<Record<never, never>>;

export function Sidebar({ children }: Props) {
  const darkTheme = useMemo(() => ({ algorithm: theme.darkAlgorithm }), []);

  return (
    <Layout.Sider theme="dark" width={SIDEBAR_WIDTH} className={styles.sidebar}>
      <ConfigProvider theme={darkTheme}>{children}</ConfigProvider>
    </Layout.Sider>
  );
}
