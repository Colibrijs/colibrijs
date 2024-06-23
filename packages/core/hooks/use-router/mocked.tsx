import { action } from '@storybook/addon-actions';
import type { Decorator, StoryContext } from '@storybook/react';
import type { ComponentType } from 'react';

import { RouterContext } from './context';
import type { Router } from './types';

export type WithMockedRouter<P> = ComponentType<P & { router: Router }>;

export function withMockedRouter(): Decorator {
  const mockedRouter: Router = {
    pathname: '/',
    query: {},
    route: '/',
    push: action('navigate(push)'),
  };

  function MockedRouterDecorator(Story: ComponentType, context: StoryContext) {
    // eslint-disable-next-line react/destructuring-assignment -- нужно добавить значение в args
    context.args.router = mockedRouter;

    return (
      <RouterContext.Provider value={mockedRouter}>
        <Story />
      </RouterContext.Provider>
    );
  }

  MockedRouterDecorator.displayName = 'MockedRouterDecorator';

  return MockedRouterDecorator;
}
