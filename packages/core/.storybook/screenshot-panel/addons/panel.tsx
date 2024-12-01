import { AddonPanel } from '@storybook/components';
import type { API } from '@storybook/manager-api';
// @ts-expect-error: React is required for JSX but not explicitly used
import React from 'react';

import { ScreenshotsPanel } from '../screenshot-panel';

interface Props {
  active: boolean;
  api: API;
}

export function Panel({ active, api }: Props) {
  return (
    <AddonPanel active={active}>
      <ScreenshotsPanel active={active} api={api} />
    </AddonPanel>
  );
}
