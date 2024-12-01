import type { Decorator, StoryContext } from '@storybook/react';
import { type ComponentType, type ReactNode, useMemo } from 'react';

import { ScreenshotsComparator } from './screenshots-comparator';

interface ScreenshotsDecoratorProps {
  storyId: string;
  children: ReactNode;
}

function ScreenshotsDecorator({ storyId, children }: ScreenshotsDecoratorProps) {
  const currentBranch = process.env.REACT_APP_BRANCH_REF ?? 'main';
  const repositorySrc =
    process.env.REACT_APP_REPOSITORY_SRC ?? 'https://github.com/colibrijs/colibrijs/';

  return (
    <ScreenshotsComparator
      currentBranch={currentBranch}
      repositorySrc={repositorySrc}
      storyId={storyId}
    >
      {children}
    </ScreenshotsComparator>
  );
}

export function withScreenshotsDecorator(): Decorator {
  function StoryDecorator(Story: ComponentType, { globals, id }: StoryContext) {
    const isComparingScreenshots = useMemo(() => {
      return globals.screenshotsComparatorActive;
    }, [globals.screenshotsComparatorActive]);

    if (isComparingScreenshots) {
      return (
        <ScreenshotsDecorator storyId={id}>
          <Story />
        </ScreenshotsDecorator>
      );
    }

    return <Story />;
  }

  StoryDecorator.displayName = 'StoryDecorator';
  return StoryDecorator;
}
