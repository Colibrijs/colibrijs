import type { IComponent } from '@colibrijs/types';

import { getBaseUrl } from './get-base-url';

export function getSchemaUrl(component: IComponent): string {
  const baseUrl = getBaseUrl(component);

  return `${baseUrl}/schema.json`;
}
