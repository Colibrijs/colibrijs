import type { ComponentType } from 'react';

import { Layout } from './layout';

export function LayoutDecorator(Story: ComponentType) {
  return (
    <Layout>
      <Story />
    </Layout>
  );
}
