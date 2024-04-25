import type { IComponentConstructorOptions } from '@colibrijs/types';
import { Alert, Button, Divider, Form, Input, type FormRule } from 'antd';
import React, { useCallback, useMemo, useState } from 'react';

import { useApi } from '../../hooks/use-api';

type Status = 'idle' | 'loading' | 'error';

export interface Props {
  defaultValues?: Partial<IComponentConstructorOptions>;
}

export function ComponentsAdd({ defaultValues }: Props) {
  const api = useApi();
  const [form] = Form.useForm<IComponentConstructorOptions>();
  const [error, setError] = useState<Error | null>(null);
  const [status, setStatus] = useState<Status>('idle');

  form.setFieldsValue({
    componentName: defaultValues?.componentName ?? '',
    libraryName: defaultValues?.libraryName ?? '',
    src: defaultValues?.src ?? '',
  });

  const changeHandler = useCallback(() => {
    setError(null);
  }, []);

  const finishHandler = useCallback(
    (values: IComponentConstructorOptions) => {
      if (status === 'loading') return;

      setStatus('loading');
      api.components
        .post(values)
        .then(() => {
          setStatus('idle');
        })
        .catch((error) => {
          setError(error);
          setStatus('error');
        });
    },
    [api, status]
  );

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
    <Form layout="vertical" form={form} onChange={changeHandler} onFinish={finishHandler}>
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
      <Button htmlType="submit" type="primary" data-testid="components-add__submit">
        Добавить
      </Button>
    </Form>
  );
}
