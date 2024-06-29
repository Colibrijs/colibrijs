import { useQuery } from '@tanstack/react-query';
import { Skeleton } from 'antd';
import { useEffect } from 'react';

import { useApi } from '../../hooks/use-api';
import { Content } from '../content';
import { Layout } from '../layout';

export interface Props {
  pageRoute: string;
}

export function ContentEditorLayout({ pageRoute }: Props) {
  const apiClient = useApi();

  const {
    data: content,
    error,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: ['content', pageRoute],
    queryFn: () => apiClient.elements.get(pageRoute),
  });

  useEffect(() => {
    if (isError) {
      // eslint-disable-next-line no-console -- пока что обрабатываем ошибки только так
      console.error('Случилось неладное:', error);
    }
  }, [isError, error]);

  return (
    <Layout
      testId="content-editor-layout"
      sidebar={
        isSuccess ? (
          <div data-testid="content-editor-layout__content-editor">Редактор</div>
        ) : (
          <div data-testid="content-editor-layout__content-editor-skeleton">
            <Skeleton active />
          </div>
        )
      }
    >
      {isSuccess ? (
        <div data-testid="content-editor-layout__content">
          <Content content={content} />
        </div>
      ) : (
        <div data-testid="content-editor-layout__content-skeleton">
          <Skeleton active />
        </div>
      )}
    </Layout>
  );
}
