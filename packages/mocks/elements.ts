import type { IElement, IElementConstructorOptions } from '@colibrijs/types';

import { exampleComponent } from './components';
import { examplePage } from './pages';

export const exampleElement: IElement = {
  id: '1',
  component: exampleComponent,
  pageId: examplePage.id,
  props: {
    title: 'Заголовок',
  },
};

export const exampleElementConstructorOptions: IElementConstructorOptions = {
  component: exampleComponent,
  pageId: examplePage.id,
  props: {
    title: 'Заголовок',
  },
};

export const exampleElements: IElement[] = [
  {
    id: '1',
    component: exampleComponent,
    pageId: examplePage.id,
    props: {
      title: 'Заголовок',
    },
  },
  {
    id: '2',
    component: exampleComponent,
    pageId: examplePage.id,
    props: {
      title: 'Заголовок 2',
      text: 'Да ещё и текст',
    },
  },
];
