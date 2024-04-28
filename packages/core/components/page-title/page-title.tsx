import type { IPage } from '@colibrijs/types';
import { Flex, Typography } from 'antd';
import React from 'react';

import { PageRemove } from '../page-remove';

export interface Props {
  page: IPage;
}

export function PageTitle({ page }: Props) {
  return (
    <Flex align="center" justify="space-between" data-testid="page-title">
      <Typography.Title level={1} data-testid="page-title__title">
        {page.route}
      </Typography.Title>
      <PageRemove page={page} />
    </Flex>
  );
}
