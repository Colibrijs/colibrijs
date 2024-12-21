import type { Decorator, StoryContext } from '@storybook/react';
import type { ComponentType } from 'react';

import { ScreenshotsComparator } from './screenshots-comparator';

export function withScreenshotsDecorator(): Decorator {
  function ScreenshotsDecorator(Story: ComponentType, { globals, id }: StoryContext) {
    if (globals.screenshotsComparatorActive) {
      return (
        <ScreenshotsComparator storybookUrl={process.env.STORYBOOK_URL!} storyId={id}>
          <Story />
        </ScreenshotsComparator>
      );
    }

    return <Story />;
  }

  ScreenshotsDecorator.displayName = 'ScreenshotsDecorator';
  return ScreenshotsDecorator;
}
