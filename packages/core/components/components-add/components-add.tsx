import type { IComponentConstructorOptions } from '@colibrijs/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Alert, Button, Divider, Form, Input, type FormRule } from 'antd';
import React, { useEffect, useMemo } from 'react';

import { useApi, COMPONENTS_KEY } from '../../hooks/use-api';

export interface Props {
  defaultValues?: Partial<IComponentConstructorOptions>;
}

export function ComponentsAdd({ defaultValues }: Props) {
  const api = useApi();
  const queryClient = useQueryClient();
  const [form] = Form.useForm<IComponentConstructorOptions>();

  useEffect(() => {
    form.setFieldsValue({
      name: defaultValues?.name ?? '',
      libraryName: defaultValues?.libraryName ?? '',
      src: defaultValues?.src ?? '',
    });
  }, [form, defaultValues]);

  const {
    error,
    isPending,
    mutateAsync: addComponent,
  } = useMutation({
    mutationFn: (options: IComponentConstructorOptions) => api.components.post(options),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [COMPONENTS_KEY] }),
  });

  const rules = useMemo(
    (): Record<keyof IComponentConstructorOptions, FormRule[]> => ({
      name: [{ required: true, message: 'Параметр "Название компонента" обязательный' }],
      libraryName: [{ required: true, message: 'Параметр "Название библиотеки" обязательный' }],
      src: [
        { required: true, message: 'Параметр "Ссылка на сборку" обязательный' },
        { type: 'url', message: 'Параметр "Ссылка на сборку" должен быть ссылкой' },
      ],
    }),
    []
  );

  return (
    <Form layout="vertical" form={form} onFinish={addComponent}>
      {error && (
        <>
          <Alert message={error.message} type="error" data-testid="components-add__error" />
          <Divider type="vertical" />
        </>
      )}
      <Form.Item
        label="Название компонента"
        name="name"
        rules={rules.name}
        data-testid="components-add__name"
        required
      >
        <Input type="text" data-testid="components-add__name-input" />
      </Form.Item>

      <Form.Item
        label="Название библиотеки"
        name="libraryName"
        rules={rules.libraryName}
        data-testid="components-add__library-name"
        required
      >
        <Input type="text" data-testid="components-add__library-name-input" />
      </Form.Item>

      <Form.Item
        label="Ссылка на сборку"
        name="src"
        rules={rules.src}
        data-testid="components-add__src"
        required
      >
        <Input type="url" data-testid="components-add__src-input" />
      </Form.Item>

      <Button
        htmlType="submit"
        loading={isPending}
        type="primary"
        data-testid="components-add__submit"
      >
        Добавить
      </Button>
    </Form>
  );
}
