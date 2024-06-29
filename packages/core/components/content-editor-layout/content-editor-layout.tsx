import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { useQuery } from '@tanstack/react-query';
import { Button, ConfigProvider, Drawer, Skeleton, theme } from 'antd';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import styles from './content-editor-layout.module.css';
import { useApi } from '../../hooks/use-api';
import { Content } from '../content';
import { SIDEBAR_WIDTH } from '../layout';

export interface Props {
  editActivatedByDefault?: boolean;
  pageRoute: string;
}

export function ContentEditorLayout({ editActivatedByDefault, pageRoute }: Props) {
  const apiClient = useApi();
  const [editActivated, setEditActivated] = useState(editActivatedByDefault ?? true);
  const darkTheme = useMemo(() => ({ algorithm: theme.darkAlgorithm }), []);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const {
    data: content,
    error,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: ['content', pageRoute],
    queryFn: () => apiClient.elements.get(pageRoute),
  });

  const startEdit = useCallback(() => setEditActivated(true), []);
  const finishEdit = useCallback(() => setEditActivated(false), []);

  useEffect(() => {
    if (isError) {
      // eslint-disable-next-line no-console -- пока что обрабатываем ошибки только так
      console.error('Случилось неладное:', error);
    }
  }, [isError, error]);

  return (
    <div ref={containerRef} data-testid="content-editor-layout">
      {isSuccess ? (
        <div data-testid="content-editor-layout__content">
          <Content content={content} />
        </div>
      ) : (
        <div data-testid="content-editor-layout__content-skeleton">
          <Skeleton active />
        </div>
      )}
      <Button
        className={styles.edit_start!}
        icon={<ArrowLeftOutlined />}
        type="primary"
        onClick={startEdit}
        aria-label="Открыть редактор"
        data-testid="content-editor-layout__start-edit"
      />
      <ConfigProvider theme={darkTheme}>
        <Drawer
          closeIcon={null}
          getContainer={false}
          mask={false}
          open={editActivated}
          onClose={finishEdit}
          width={SIDEBAR_WIDTH}
        >
          <Button
            className={styles.edit_finish!}
            icon={<ArrowRightOutlined />}
            type="primary"
            onClick={finishEdit}
            aria-label="Закрыть редактор"
            data-testid="content-editor-layout__end-edit"
          />
          {isSuccess ? (
            <div data-testid="content-editor-layout__content-editor">Редактор</div>
          ) : (
            <div data-testid="content-editor-layout__content-editor-skeleton">
              <Skeleton active />
            </div>
          )}
        </Drawer>
      </ConfigProvider>
    </div>
  );
}
