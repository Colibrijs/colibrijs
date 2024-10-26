import { AddonPanel, Button } from '@storybook/components';
import { addons, types } from '@storybook/manager-api';
import './screenshot-panel.css';
import React, { useCallback, useEffect, type ReactNode } from 'react';

import type { ScreenshotsPanelProps, StoryData, ReportData } from './types';

const ADDON_ID = '@colibrijs/screenshots';
const PANEL_ID = `${ADDON_ID}/panel`;

function kebabize(str: string) {
  return str
    .split('')
    .map((letter, idx) => {
      return letter.toUpperCase() === letter
        ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
        : letter;
    })
    .join('');
}

function ScreenshotsPanel({ active, api }: ScreenshotsPanelProps): ReactNode {
  const [stories, setStories] = React.useState<StoryData[]>([]);
  const [error, setError] = React.useState('');

  useEffect(() => {
    const url = new URL(window.location.href);

    fetch(`${url.origin}/screenshots/report.json`)
      .then((resonse) => resonse.json())
      .then((data: ReportData) => {
        const failedScreenshots = data.testResults.filter((test) => {
          const path = new URL(test.name);
          return path.pathname.includes('/screenshot/');
        });
        const storiesData = failedScreenshots.flatMap((story) => {
          return story.assertionResults.map((result) => {
            const path = result.ancestorTitles[0].toLowerCase().replaceAll('/', '-');
            const name = result.ancestorTitles[1];
            const id = kebabize(name);
            return { path, name, id };
          });
        });
        setStories(storiesData);
      })
      .catch((errorData) => {
        setError(errorData.message);
      });
  }, []);

  const onClick = useCallback(
    (storyData: StoryData) => {
      return (): void => {
        api.selectStory(storyData.path, storyData.id);
      };
    },
    [api]
  );

  if (error) {
    return (
      <div className="screenshot-panel">
        <p className="screenshot-panel__text">На вот, наверни: </p>
        <p className="screenshot-panel__text">{error}</p>
      </div>
    );
  }

  if (!active || !stories.length) {
    return null;
  }

  return (
    <div className="screenshot-panel">
      <p className="screenshot-panel__text">Здесь ты можешь наблюдать список упавших тестов: </p>
      <ul className="screenshot-panel__list">
        {stories.map((storyData) => (
          <li className="screenshot-panel__item" key={storyData.name}>
            <Button size="medium" onClick={onClick(storyData)}>
              {storyData.name}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function registerScreenshotsAddon(): void {
  addons.register(ADDON_ID, (api) => {
    addons.add(PANEL_ID, {
      type: types.PANEL,
      title: 'Screenshots',
      render: ({ active }) => (
        <AddonPanel active={!!active}>
          <ScreenshotsPanel active={!!active} api={api} />
        </AddonPanel>
      ),
    });
  });
}
