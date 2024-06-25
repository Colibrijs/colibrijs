import type { IElement } from '@colibrijs/types';

import { Microfrontend } from '../microfrontend';

export interface Props {
  content: IElement[];
}

export function Content({ content }: Props) {
  return (
    <div data-testid="content">
      {content.map((element) => (
        <Microfrontend
          key={element.id}
          id={element.id}
          component={element.component}
          props={element.props}
        />
      ))}
    </div>
  );
}
