import {
  exampleComponent,
  exampleComponentSchema,
  imageComponent,
  imageComponentSchema,
  textComponent,
  textComponentSchema,
} from '@colibrijs/mocks/components';

import type { JsonSchema } from '@colibrijs/schema';
import type { IComponent } from '@colibrijs/types';
import type { Decorator } from '@storybook/react';
import type { ComponentType } from 'react';

import { SchemaLoaderContext } from './use-schema';

function mockedSchemaLoader(component: IComponent): Promise<JsonSchema<object>> {
  switch (component.id) {
    case exampleComponent.id:
      return Promise.resolve(exampleComponentSchema);
    case imageComponent.id:
      return Promise.resolve(imageComponentSchema);
    case textComponent.id:
      return Promise.resolve(textComponentSchema);
    default:
      return Promise.reject(new Error(`Неизвестный компонент "${component.name}"`));
  }
}

export function withMockedSchemaLoader(): Decorator {
  function MockedSchemaLoaderDecorator(Story: ComponentType) {
    return (
      <SchemaLoaderContext.Provider value={mockedSchemaLoader}>
        <Story />
      </SchemaLoaderContext.Provider>
    );
  }

  MockedSchemaLoaderDecorator.displayName = 'MockedSchemaLoaderDecorator';

  return MockedSchemaLoaderDecorator;
}
