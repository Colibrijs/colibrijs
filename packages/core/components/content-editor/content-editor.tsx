import { PlusOutlined } from '@ant-design/icons';
import type { IElement } from '@colibrijs/types';
import { Button, Drawer, Flex, Input, Tree, type TreeDataNode, Tooltip, Typography } from 'antd';
import { useCallback, useMemo, useState, type Key, type ChangeEvent } from 'react';

import styles from './content-editor.module.css';

export interface Props {
  content: IElement[];
  onChange: (content: IElement[]) => void;
}

export function ContentEditor({ content, onChange }: Props) {
  const [selectedElement, setSelectedElement] = useState<IElement | null>(null);

  const treeData = useMemo(() => {
    return content.map(
      (element): TreeDataNode => ({
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
      const foundElement = content.find((element) => selectedKeys.includes(element.id));

      if (!foundElement) {
        // eslint-disable-next-line no-console -- вместо мониторинга
        console.error('А как так вышло? Пользователь выбрал несуществующий элемент');
        return;
      }

      setSelectedElement(foundElement);
    },
    [content]
  );

  return (
    <div className={styles.container} data-testid="content-editor">
      <Typography.Title level={3}>
        <Flex align="center" justify="space-between">
          <span>Контент</span>
          <Tooltip title="Добавить элемент">
            <Button icon={<PlusOutlined />} />
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
