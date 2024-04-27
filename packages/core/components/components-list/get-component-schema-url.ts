import type { IComponent } from '@colibrijs/types';

import { getBaseUrl } from '../microfrontend';

export function getComponentSchemaUrl(component: IComponent): string {
  const baseUrl = getBaseUrl({ ...component, ssr: false });

  return `${baseUrl}/schema.json`;
}
