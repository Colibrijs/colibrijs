import { IconButton } from '@storybook/components';
import { PhotoDragIcon } from '@storybook/icons';
import { useGlobals } from '@storybook/manager-api';
import type { API } from '@storybook/manager-api';
import React from 'react';

import { useFailedStories } from '../common/use-failed-stories';

interface Props {
  api: API;
}

export function CompareButton({ api }: Props) {
  const [globals, updateGlobals] = useGlobals();
  const { stories } = useFailedStories(api);

  const onClick = React.useCallback(() => {
    updateGlobals({ screenshotsComparatorActive: !globals.screenshotsComparatorActive });
  }, [globals.screenshotsComparatorActive, updateGlobals]);

  const currentStory = api.getCurrentStoryData();
  if (!currentStory) return;

  const isCurrentStoryFailed = stories.some((story) => {
    const storyId = story.path + '--' + story.id;
    return currentStory.id === storyId;
  });

  if (!isCurrentStoryFailed) {
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
