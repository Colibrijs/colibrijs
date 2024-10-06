import { PlusOutlined } from '@ant-design/icons';
import type { IElement, IElementConstructorOptions } from '@colibrijs/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  message,
  Button,
  Drawer,
  Flex,
  Input,
  Tree,
  type TreeDataNode,
  Tooltip,
  Typography,
} from 'antd';
import { useCallback, useMemo, useState, type Key, type ChangeEvent } from 'react';

import styles from './content-editor.module.css';
import { useApi, ELEMENTS_KEY } from '../../hooks/use-api';

import { ElementAdd } from '../element-add';

export interface Props {
  content: IElement[];
  onChange: (content: IElement[]) => void;
}

export function ContentEditor({ content, onChange }: Props) {
  const api = useApi();
  const queryClient = useQueryClient();

  const { mutate: addElement } = useMutation({
    mutationFn: (element: IElementConstructorOptions) => api.elements.post(element),
    onError: (error) =>
      message.error(<span data-testid="component-editor__error">{error.message}</span>),
    onSuccess: (addedElement) => {
      if (onChange) {
        onChange([...content, addedElement]);
      }

      queryClient.invalidateQueries({ queryKey: [ELEMENTS_KEY] });
      message.success(
        <span data-testid="component-editor__success">
          Элемент “{addedElement.component.name}” успешно добавлен
        </span>
      );
    },
  });

  const [selectedElement, setSelectedElement] = useState<IElement | null>(null);
  const [isElementAddOpen, setIsElementAddOpen] = useState(false);

  const treeData = useMemo(() => {
    return content.map(
      (element: IElement): TreeDataNode => ({
        key: element.id,
        title: <span data-testid={`content-editor__${element.id}`}>{element.component.name}</span>,
        children: [],
      })
    );
  }, [content]);

  const changeElementHandler = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      if (!selectedElement) return;

      const elementIndex = content.indexOf(selectedElement);
      const newElement: IElement = { ...selectedElement, props: JSON.parse(event.target.value) };
      const newContent = [...content];
      newContent.splice(elementIndex, 1, newElement);

      setSelectedElement(newElement);
      onChange(newContent);
    },
    [content, selectedElement, onChange]
  );

  const selectHandler = useCallback(
    (selectedKeys: Key[]) => {
      const foundElement = content.find((element: IElement) => selectedKeys.includes(element.id));
      if (!foundElement) {
        // eslint-disable-next-line no-console -- вместо мониторинга
        console.error('А как так вышло? Пользователь выбрал несуществующий элемент');
        return;
      }

      setSelectedElement(foundElement);
    },
    [content]
  );

  const toggleElementAddForm = useCallback(() => setIsElementAddOpen((prev) => !prev), []);
  const saveChanges = useCallback(
    (element: IElementConstructorOptions) => {
      addElement(element);
      toggleElementAddForm();
    },
    [addElement, toggleElementAddForm]
  );

  return (
    <div className={styles.container} data-testid="content-editor">
      <ElementAdd
        open={isElementAddOpen}
        pageId={'3'}
        onClose={toggleElementAddForm}
        onReady={saveChanges}
        testId="content-editor-element-add"
      />
      <Typography.Title level={3}>
        <Flex align="center" justify="space-between">
          <span>Контент</span>
          <Tooltip title="Добавить элемент">
            <Button
              icon={<PlusOutlined />}
              onClick={toggleElementAddForm}
              data-testid="content-editor__add-element-button"
            />
          </Tooltip>
        </Flex>
      </Typography.Title>
      <Tree treeData={treeData} showLine onSelect={selectHandler} />
      <Drawer
        open={Boolean(selectedElement)}
        mask={false}
        title={
          <span data-testid="element-editor-drawer__title">{selectedElement?.component.name}</span>
        }
        data-testid="element-editor-drawer"
      >
        {selectedElement && (
          <Input.TextArea
            value={JSON.stringify(selectedElement.props, null, 2)}
            onChange={changeElementHandler}
            autoSize
          />
        )}
      </Drawer>
    </div>
  );
}
