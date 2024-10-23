import { AddonPanel } from '@storybook/components';
import { addons, types } from '@storybook/manager-api';
import React, { type ReactElement } from 'react';

const ADDON_ID = 'storybook/screenshots';
const PANEL_ID = `${ADDON_ID}/panel`;

interface ScreenshotsPanelProps {
  active: boolean;
}

function ScreenshotsPanel({ active }: ScreenshotsPanelProps): ReactElement | null {
  if (!active) {
    return null;
  }

  return React.createElement('div', {}, 'gavna naverni');
}

function registerScreenshotsAddon(): void {
  addons.register(ADDON_ID, () => {
    addons.add(PANEL_ID, {
      type: types.PANEL,
      title: 'Screenshots',
      render: ({ active }) => (
        <AddonPanel active={!!active}>
          <ScreenshotsPanel active={!!active} />
        </AddonPanel>
      ),
    });
  });
}

registerScreenshotsAddon();
