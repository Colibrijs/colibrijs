import { addons, types } from '@storybook/manager-api';
import React from 'react';

import { CompareButton } from './compare-button/compare-button';
import { ScreenshotsPanel } from './screenshot-panel/screenshot-panel';

const ADDON_ID = '@colibrijs/screenshots';
const PANEL_ID = `${ADDON_ID}/panel`;
const SCREENSHOTS_DIFF_TOOL_ID = `${ADDON_ID}/screenshots-diff-tool`;

export function screenshotsAddon(): void {
  addons.register(ADDON_ID, (api) => {
    addons.add(PANEL_ID, {
      type: types.PANEL,
      title: 'Screenshots',
      render: ({ active }) => React.createElement(ScreenshotsPanel, { active: !!active, api }),
    });
    addons.add(SCREENSHOTS_DIFF_TOOL_ID, {
      type: types.TOOL,
      title: 'Compare sheet',
      render: () => React.createElement(CompareButton, { api }),
    });
  });
}
