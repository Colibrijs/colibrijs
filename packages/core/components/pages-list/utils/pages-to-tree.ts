import type { IPage } from '@colibrijs/types';
import type { TreeDataNode } from 'antd';
import type { ReactNode } from 'react';

import { getChildren } from './get-children';
import { getTitle, type Options } from './get-title';
import { isLeafOrSubtree } from './is-leaf-or-subtree';

/** Преобразует список страниц в дерево */
export function pagesToTree<T extends ReactNode>(
  options: Options<T>,
  pages: IPage[]
): TreeDataNode[] {
  return pages
    .filter((page) => isLeafOrSubtree(page, pages))
    .map((page) => ({
      isLeaf: getChildren(page, pages).length === 0,
      title: getTitle(page, options),
      key: page.id,
      children: pagesToTree(options, getChildren(page, pages)),
    }));
}
