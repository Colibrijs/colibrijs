import type { IComponent } from '@colibrijs/types';

import { getBaseUrl } from '../microfrontend';

export function getComponentSchemaUrl(component: IComponent): string {
  const baseUrl = getBaseUrl(component);

  return `${baseUrl}/schema.json`;
}
