import { Layout } from 'antd';
import type { ComponentType } from 'react';

import { Sidebar, SIDEBAR_WIDTH } from './sidebar';

const layoutStyles = { maxWidth: SIDEBAR_WIDTH, height: '100vh' };

export function SidebarDecorator(Story: ComponentType) {
  return (
    <Layout style={layoutStyles}>
      <Sidebar>
        <Story />
      </Sidebar>
    </Layout>
  );
}
