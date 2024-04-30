import React from 'react';

import type { Props } from './schema';

export function Text({ text }: Props) {
  return <p data-testid="text">{text}</p>;
}
