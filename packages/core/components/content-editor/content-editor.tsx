import { MenuFoldOutlined, MenuUnfoldOutlined, PlusOutlined } from '@ant-design/icons';
import type { IElement, IPage } from '@colibrijs/types';
import {
  message,
  theme,
  Button,
  ConfigProvider,
  Drawer,
  Tree,
  type TreeDataNode,
  Tooltip,
} from 'antd';
import cn from 'classnames';
import { useCallback, useMemo, useState } from 'react';

import styles from './content-editor.module.css';
import { useContentEditorLogic, type ContentEditorLogicOptions } from './use-content-editor-logic';

import { Content } from '../content';
import { ElementAdd } from '../element-add';
import { ElementEditor } from '../element-editor';

export interface Props {
  page: IPage;
}

export function ContentEditor({ page }: Props) {
  const [treeOpened, setTreeOpened] = useState<boolean>(true);
  const toggleTree = useCallback(() => setTreeOpened((currentlyOpened) => !currentlyOpened), []);

  const [isElementAddOpen, setIsElementAddOpen] = useState(false);
  const toggleElementAddForm = useCallback(() => setIsElementAddOpen((prev) => !prev), []);

  const options: ContentEditorLogicOptions = useMemo(
    () => ({
      route: page.route,
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
    [page, toggleElementAddForm]
  );

  const { addController, editController, removeController, selectionController, content } =
    useContentEditorLogic(options);

  const darkTheme = useMemo(() => ({ algorithm: theme.darkAlgorithm }), []);

  const treeData = useMemo(() => {
    return content.map(
      (element: IElement): TreeDataNode => ({
        key: element.id,
        title: (
          <span data-testid={`content-editor__element-${element.id}`}>
            {element.component.name}
          </span>
        ),
        children: [],
      })
    );
  }, [content]);

  return (
    <div
      className={cn(styles.container, { [styles.opened!]: treeOpened })}
      data-testid="content-editor"
    >
      <ElementAdd
        open={isElementAddOpen}
        onClose={toggleElementAddForm}
        onReady={addController.addElement}
        pageId={page.id}
      />
      <ConfigProvider theme={darkTheme}>
        <Drawer
          rootClassName={styles.tree!}
          closable={false}
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
          <Tree
            selectedKeys={selectionController.selectedKeys}
            treeData={treeData}
            showLine
            onSelect={selectionController.selectElement}
            data-testid="content-editor__elements-tree"
          />
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
      {selectionController.selectedElement && (
        <ElementEditor
          element={selectionController.selectedElement}
          onEdit={editController.changeElement}
          onClose={selectionController.unselectElement}
          onRemove={removeController.remove}
          open
        />
      )}
    </div>
  );
}
