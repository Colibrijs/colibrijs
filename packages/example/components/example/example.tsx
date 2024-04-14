import React from 'react';

import type { Props } from './example.schema';

export function Example({ title, text }: Props) {
  return (
    <article>
      <h1>{title}</h1>
      {Boolean(text) && <p>{text}</p>}
    </article>
  );
}

Example.displayName = 'Example';
