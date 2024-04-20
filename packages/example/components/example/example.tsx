import React from 'react';

import type { Props } from './example.schema';

export function Example({ title, text }: Props) {
  return (
    <article data-testid="example">
      <h1 data-testid="example__title">{title}</h1>
      {Boolean(text) && <p data-testid="example__text">{text}</p>}
    </article>
  );
}

Example.displayName = 'Example';
