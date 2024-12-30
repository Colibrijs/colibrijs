import type { Decorator, StoryContext } from '@storybook/react';
import type { ComponentType } from 'react';

import { ScreenshotsComparator } from './screenshots-comparator';

export function withScreenshotsDecorator(): Decorator {
  function ScreenshotsDecorator(Story: ComponentType, { globals, id }: StoryContext) {
    if (globals.screenshotsComparatorActive) {
      return (
        <ScreenshotsComparator storybookUrl={globals.sauronEye.testingStorybookUrl} storyId={id}>
          <Story />
        </ScreenshotsComparator>
      );
    }

    return <Story />;
  }

  ScreenshotsDecorator.displayName = 'ScreenshotsDecorator';
  return ScreenshotsDecorator;
}
