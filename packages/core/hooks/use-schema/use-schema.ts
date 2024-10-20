import { loadSchema as defaultSchemaLoader, type SchemaLoader } from '@colibrijs/module-utils';
import type { JsonSchema } from '@colibrijs/schema';
import type { IComponent } from '@colibrijs/types';
import { useQuery, type UseQueryOptions, type UseQueryResult } from '@tanstack/react-query';
import { createContext, useContext, useMemo } from 'react';

export const SchemaLoaderContext = createContext<SchemaLoader>(defaultSchemaLoader);

type UseSchemaOptions = Omit<UseQueryOptions<JsonSchema<object>>, 'queryFn' | 'queryKey'>;

type UseSchemaResult = UseQueryResult<JsonSchema<object>>;

/**
 * Возвращает query со схемой указанного компонента
 * @param component - компонент, схему которого нужно подгрузить
 */
export function useSchema(
  component: IComponent | null,
  options: UseSchemaOptions = {}
): UseSchemaResult {
  const loadSchema = useContext(SchemaLoaderContext);

  const enabled = useMemo(() => {
    const localEnabled = Boolean(component);
    const optionsEnabled = options.enabled ?? true;

    return optionsEnabled && localEnabled;
  }, [component, options.enabled]);

  return useQuery({
    ...options,
    enabled,
    queryKey: component ? ['schema', component.id] : [],
    queryFn: () => {
      if (!component) {
        const message =
          'Не указан компонент, схему которого нужно загружать.' +
          'А почему тогда эта функция вызвалась? Видимо enabled неправильно вычисляется.';

        return Promise.reject(new Error(message));
      }

      return loadSchema(component);
    },
  });
}
