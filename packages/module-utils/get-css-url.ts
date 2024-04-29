import type { IComponent } from '@colibrijs/types';

import { getBaseUrl } from './get-base-url';

export function getCssUrl(component: IComponent): string {
  const baseUrl = getBaseUrl(component);

  return `${baseUrl}/component.css`;
}
