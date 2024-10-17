import type { IElement, IElementConstructorOptions } from '@colibrijs/types';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useCallback, useEffect, useState, type Key } from 'react';

import { useApi, ELEMENTS_KEY } from '../../hooks/use-api';

export interface ContentEditorLogicOptions {
  route: string;
  addControllerOptions: {
    onSuccess: (addedElement: IElement) => void;
    onError: (error: Error) => void;
  };
}

interface ContentEditorLogic {
  /** Контент страницы */
  content: IElement[];

  selectionController: {
    /** Выбранный элемент */
    selectedElement: IElement | null;

    /**
     * Выбрать элемент
     * @param selectedKeys - массив id выбранных элементов
     */
    selectElement: (selectedKeys: Key[]) => void;
  };

  /** Контроллер добавления элементов */
  addController: {
    /**
     * Добавить новый элемент в контент
     * @param elementData - данные о добавляемом элементе
     */
    addElement: (elementData: IElementConstructorOptions) => void;
  };

  /** Контроллер редактирования элементов */
  editController: {
    changeElement: (newElementProps: object) => void;
  };
}

const EMPTY_ARRAY: [] = [];

export function useContentEditorLogic({
  addControllerOptions,
  route,
}: ContentEditorLogicOptions): ContentEditorLogic {
  const api = useApi();
  const [content, setContent] = useState<IElement[]>([]);
  const [selectedElement, setSelectedElement] = useState<IElement | null>(null);

  const { data: loadedContent = EMPTY_ARRAY } = useQuery({
    queryKey: [ELEMENTS_KEY],
    queryFn: () => api.elements.get(route),
  });

  useEffect(() => {
    setContent(loadedContent);
  }, [loadedContent]);

  const { mutate: addElement } = useMutation({
    mutationFn: (element: IElementConstructorOptions) => api.elements.post(element),
    onError: addControllerOptions.onError,
    onSuccess: (addedElement) => {
      setContent([...content, addedElement]);
      addControllerOptions.onSuccess(addedElement);
    },
  });

  const changeElement = useCallback(
    (newElementProps: object) => {
      if (!selectedElement) return;

      const elementIndex = content.indexOf(selectedElement);
      const newElement: IElement = { ...selectedElement, props: newElementProps };
      const newContent = [...content];
      newContent.splice(elementIndex, 1, newElement);

      setSelectedElement(newElement);
      setContent(newContent);
    },
    [content, selectedElement]
  );

  const selectElement = useCallback(
    (selectedKeys: Key[]) => {
      const foundElement = content.find((element: IElement) => selectedKeys.includes(element.id));

      if (!foundElement) {
        throw new Error('А как так вышло? Пользователь выбрал несуществующий элемент');
      }

      setSelectedElement(foundElement);
    },
    [content]
  );

  return {
    content,
    addController: { addElement },
    editController: { changeElement },
    selectionController: { selectedElement, selectElement },
  };
}
