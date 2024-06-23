import type { IPageConstructorOptions } from '@colibrijs/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Alert, Button, Divider, Form, Input, type FormRule } from 'antd';
import { useEffect, useMemo } from 'react';

import { useApi, PAGES_KEY } from '../../hooks/use-api';

export interface Props {
  defaultValues?: Partial<IPageConstructorOptions>;
  onReady?: () => void;
}

export function PageAdd({ defaultValues, onReady }: Props) {
  const api = useApi();
  const queryClient = useQueryClient();
  const [form] = Form.useForm<IPageConstructorOptions>();

  useEffect(() => {
    form.setFieldsValue({
      name: defaultValues?.name ?? '',
      route: defaultValues?.route ?? '',
    });
  }, [form, defaultValues]);

  const {
    error,
    isPending,
    mutateAsync: addPage,
  } = useMutation({
    mutationFn: (options: IPageConstructorOptions) => api.pages.post(options),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [PAGES_KEY] });
      if (onReady) onReady();
    },
  });

  const rules = useMemo(
    (): Record<keyof IPageConstructorOptions, FormRule[]> => ({
      name: [{ required: true, message: 'Параметр "Название" обязательный' }],
      route: [{ required: true, message: 'Параметр "Адрес" обязательный' }],
    }),
    []
  );

  return (
    <Form layout="vertical" form={form} onFinish={addPage} data-testid="page-add">
      {error && (
        <>
          <Alert message={error.message} type="error" data-testid="page-add__error" />
          <Divider type="vertical" />
        </>
      )}

      <Form.Item
        label="Название"
        name="name"
        rules={rules.name}
        data-testid="page-add__name"
        required
      >
        <Input type="text" data-testid="page-add__name-input" />
      </Form.Item>

      <Form.Item
        label="Адрес"
        name="route"
        rules={rules.route}
        data-testid="page-add__route"
        required
      >
        <Input type="text" data-testid="page-add__route-input" />
      </Form.Item>

      <Button htmlType="submit" loading={isPending} type="primary" data-testid="page-add__submit">
        Добавить
      </Button>
    </Form>
  );
}
