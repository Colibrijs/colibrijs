import type { Property } from '@colibrijs/schema';

export type BaseProps<T> = {
  /* data-testid аттрибут для компонента */
  testId?: string;

  /* Имя инпута */
  name: string;

  /** Редактируемое свойство */
  property: Property<T>;

  /** Значение по умолчанию */
  value: T;

  /** Функция, которая будет вызвана, когда пропсы поменяются */
  onChange: (value: T) => void;
};
