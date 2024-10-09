import type { IComponent } from './components';

export interface IElement {
  /** id элемента */
  id: string;
  /** id страницы к которой относится элемент */
  pageId: string;
  /** Компонент, который нужно отрендерить */
  component: IComponent;
  /** Пропсы с которыми нужно отрендерить элемент */
  props: object;
}

export type IElementConstructorOptions = Omit<IElement, 'id' | 'pageId'>;
export type IElementEditOptions = object;
