import type { IPage } from '@colibrijs/types';
import { Flex, Typography } from 'antd';

import { PageRemove } from '../page-remove';

export interface Props {
  page: IPage;
}

export function PageTitle({ page }: Props) {
  return (
    <Flex align="baseline" justify="space-between" data-testid="page-title">
      <Typography.Title level={1} data-testid="page-title__name">
        {page.name}
      </Typography.Title>
      <PageRemove page={page} />
    </Flex>
  );
}
