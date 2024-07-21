import type { JsonSchema, SchemaValues } from '@colibrijs/schema';
import type { IComponent } from '@colibrijs/types';

import { getSchemaUrl } from './get-schema-url';

/**
 * Загружает схему указанного компонента и возвращает её
 */
export async function loadSchema(
  component: IComponent
): Promise<JsonSchema<Record<string, SchemaValues>>> {
  const response = await fetch(getSchemaUrl(component));
  const body = (await response.json()) as JsonSchema<Record<string, SchemaValues>>;

  return body;
}
