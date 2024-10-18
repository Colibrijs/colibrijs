import { MenuFoldOutlined, MenuUnfoldOutlined, PlusOutlined } from '@ant-design/icons';
import type { IElement } from '@colibrijs/types';
import {
  message,
  theme,
  Button,
  ConfigProvider,
  Drawer,
  Input,
  Tree,
  type TreeDataNode,
  Tooltip,
} from 'antd';
import cn from 'classnames';
import { useCallback, useMemo, useState, type ChangeEvent } from 'react';

import styles from './content-editor.module.css';
import { useContentEditorLogic, type ContentEditorLogicOptions } from './use-content-editor-logic';

import { Content } from '../content';
import { ElementAdd } from '../element-add';

export interface Props {
  route: string;
}

export function ContentEditor({ route }: Props) {
  const [treeOpened, setTreeOpened] = useState<boolean>(true);
  const toggleTree = useCallback(() => setTreeOpened((currentlyOpened) => !currentlyOpened), []);

  const [isElementAddOpen, setIsElementAddOpen] = useState(false);
  const toggleElementAddForm = useCallback(() => setIsElementAddOpen((prev) => !prev), []);

  const options: ContentEditorLogicOptions = useMemo(
    () => ({
      route,
      addControllerOptions: {
        onError: (error) => {
          message.error(<span data-testid="content-editor__error">{error.message}</span>);
        },
        onSuccess: (addedElement) => {
          toggleElementAddForm();
          message.success(
            <span data-testid="content-editor__success">
              Элемент “{addedElement.component.name}” успешно добавлен
            </span>
          );
        },
      },
    }),
    [route, toggleElementAddForm]
  );

  const { addController, editController, selectionController, content } =
    useContentEditorLogic(options);

  const darkTheme = useMemo(() => ({ algorithm: theme.darkAlgorithm }), []);

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
      const newProps = JSON.parse(event.target.value);
      editController.changeElement(newProps);
    },
    [editController]
  );

  return (
    <div
      className={cn(styles.container, { [styles.opened!]: treeOpened })}
      data-testid="content-editor"
    >
      <ElementAdd
        open={isElementAddOpen}
        onClose={toggleElementAddForm}
        onReady={addController.addElement}
        pageId={route}
      />
      <ConfigProvider theme={darkTheme}>
        <Drawer
          closable={false}
          getContainer={false}
          mask={false}
          placement="left"
          open={treeOpened}
          title="Контент"
          extra={
            <Tooltip title="Добавить элемент">
              <Button
                icon={<PlusOutlined />}
                onClick={toggleElementAddForm}
                data-testid="content-editor__add-element-button"
              />
            </Tooltip>
          }
        >
          <Tree treeData={treeData} showLine onSelect={selectionController.selectElement} />
        </Drawer>
        <Button
          className={cn(styles.toggler!)}
          icon={treeOpened ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
          size="large"
          htmlType="button"
          onClick={toggleTree}
        />
      </ConfigProvider>
      <Content content={content} />
      <ConfigProvider theme={darkTheme}>
        <Drawer
          data-testid="element-editor-drawer"
          closable={false}
          open={Boolean(selectionController.selectedElement)}
          mask={false}
          placement="right"
          title={
            <span data-testid="element-editor-drawer__title">
              {selectionController.selectedElement?.component.name}
            </span>
          }
        >
          {selectionController.selectedElement && (
            <Input.TextArea
              value={JSON.stringify(selectionController.selectedElement.props, null, 2)}
              onChange={changeElementHandler}
              autoSize
            />
          )}
        </Drawer>
      </ConfigProvider>
    </div>
  );
}
