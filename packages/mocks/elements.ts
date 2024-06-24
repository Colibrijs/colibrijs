import type { IElement, IElementConstructorOptions } from '@colibrijs/types';

import { exampleComponent, imageComponent, textComponent } from './components';
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

export const textElement: IElement = {
  id: '2',
  component: textComponent,
  pageId: examplePage.id,
  props: {
    text: 'некий текст',
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
  {
    id: '3',
    component: imageComponent,
    pageId: examplePage.id,
    props: {
      alt: 'Описание картинки',
      src: 'https://sun1-85.userapi.com/s/v1/ig2/fGbW7lpEG27fl2q5LS4cPTgrN7EhZu_QbiLdQyMjqZubX8WbLgVqBZ9qDaKuPqYhzFv39IKGsupKx0PPzEZvJpnc.jpg?size=200x0&quality=96&crop=33,33,957,957&ava=1',
    },
  },
  {
    id: '4',
    component: textComponent,
    pageId: examplePage.id,
    props: {
      text: 'Некий текст',
    },
  },
];
