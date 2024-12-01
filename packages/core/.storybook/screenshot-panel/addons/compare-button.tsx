import { IconButton } from '@storybook/components';
import { PhotoDragIcon } from '@storybook/icons';
import { useGlobals } from '@storybook/manager-api';
import type { API } from '@storybook/manager-api';
// @ts-expect-error: React is required for JSX but not explicitly used
import React, { useCallback } from 'react';

import type { StoryData } from '../types';

interface Props {
  failedStories: StoryData[];
  api: API;
}

export function CompareButton({ failedStories, api }: Props) {
  const [globals, updateGlobals] = useGlobals();

  const onClick = useCallback(() => {
    updateGlobals({ screenshotsComparatorActive: !globals.screenshotsComparatorActive });
  }, [globals.screenshotsComparatorActive, updateGlobals]);

  const currentStory = api.getCurrentStoryData();
  if (!currentStory) return;

  const isFailedStory = failedStories.some((story) => {
    const storyId = story.path + '--' + story.id;
    return currentStory.id === storyId;
  });

  if (!isFailedStory) {
    // сбрасывать только в случае, если сейчас true, иначе в бесконечный ререндер уходит
    if (globals.screenshotsComparatorActive) {
      updateGlobals({ screenshotsComparatorActive: false });
    }
    return;
  }

  return (
    <IconButton
      active={!!globals.screenshotsComparatorActive}
      title="Compare screenshots"
      onClick={onClick}
    >
      <PhotoDragIcon />
    </IconButton>
  );
}
