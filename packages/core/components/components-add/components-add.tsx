import type { IComponentConstructorOptions } from '@colibrijs/types';
import { useMutation } from '@tanstack/react-query';
import { Alert, Button, Divider, Form, Input, type FormRule } from 'antd';
import React, { useMemo } from 'react';

import { useApi } from '../../hooks/use-api';

export interface Props {
  defaultValues?: Partial<IComponentConstructorOptions>;
}

export function ComponentsAdd({ defaultValues }: Props) {
  const api = useApi();
  const [form] = Form.useForm<IComponentConstructorOptions>();

  form.setFieldsValue({
    componentName: defaultValues?.componentName ?? '',
    libraryName: defaultValues?.libraryName ?? '',
    src: defaultValues?.src ?? '',
  });

  const {
    error,
    isPending,
    mutateAsync: addComponent,
  } = useMutation({
    mutationFn: (options: IComponentConstructorOptions) => api.components.post(options),
  });

  const rules = useMemo(
    (): Record<keyof IComponentConstructorOptions, FormRule[]> => ({
      componentName: [{ required: true, message: 'Параметр "Название компонента" обязательный' }],
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
        name="componentName"
        rules={rules.componentName}
        data-testid="components-add__component-name"
        required
      >
        <Input type="text" data-testid="components-add__component-name-input" />
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
