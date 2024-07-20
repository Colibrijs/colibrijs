import { loadSchema } from '@colibrijs/module-utils';
import { getDefaultValues } from '@colibrijs/schema';
import type { IElementConstructorOptions, IComponent } from '@colibrijs/types';
import { useQuery } from '@tanstack/react-query';
import { Button, Flex, Form, Input, Modal, Select, type SelectProps } from 'antd';
import { useCallback, useMemo, useState } from 'react';

import { COMPONENTS_KEY, useApi } from '../../hooks/use-api';

export interface Props {
  open: boolean;
  pageId: string;
  testId?: string;
  onClose: () => void;
  onReady: (options: IElementConstructorOptions) => void;
}

export function ElementAdd({ open, pageId, testId = 'element-add', onClose, onReady }: Props) {
  const api = useApi();
  const [component, setComponent] = useState<IComponent | null>(null);

  const {
    data: components,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: [COMPONENTS_KEY],
    queryFn: () => api.components.get(),
  });

  const { data: schema } = useQuery({
    enabled: Boolean(component),
    queryKey: [COMPONENTS_KEY, 'schema', component?.id],
    // будет выполняться только если enabled true, а enabled = true, только если указан component
    // eslint-disable-next-line no-restricted-syntax -- выше описал
    queryFn: () => loadSchema(component!),
  });

  const componentsOptions: SelectProps<string>['options'] = useMemo(() => {
    if (!isSuccess) return [];

    return components.map((component) => ({
      label: (
        <span data-testid="component-option" data-value={component.id}>
          {component.name}
        </span>
      ),
      value: component.id,
    }));
  }, [components, isSuccess]);

  const changeComponentHandler = useCallback(
    (componentId: string) => {
      if (!isSuccess) return;

      const component = components.find((component) => component.id === componentId) ?? null;
      setComponent(component);
    },
    [components, isSuccess]
  );

  const submitHandler = useCallback(() => {
    if (!component || !schema) return;

    onReady({
      component,
      pageId,
      props: getDefaultValues(schema),
    });
  }, [component, pageId, schema, onReady]);

  return (
    <Modal
      footer={null}
      open={open}
      title="Добавить элемент"
      onClose={onClose}
      onCancel={onClose}
      data-testid={testId}
    >
      <Form layout="vertical" onFinish={submitHandler}>
        <Form.Item label="Выберите компонент" required>
          <Select
            loading={isLoading}
            onChange={changeComponentHandler}
            options={componentsOptions}
            value={component?.id ?? null}
            data-testid="element-add__select"
            data-value={String(component?.id ?? null)}
          />
        </Form.Item>
        {schema && (
          <Form.Item label="Пропсы">
            <Input.TextArea
              value={JSON.stringify(getDefaultValues(schema), null, 2)}
              data-testid="element-add__props"
              autoSize
              disabled
            />
          </Form.Item>
        )}
        <Flex justify="end">
          <Button
            disabled={!component || !schema}
            htmlType="submit"
            type="primary"
            data-testid="element-add__submit"
          >
            Добавить
          </Button>
        </Flex>
      </Form>
    </Modal>
  );
}
