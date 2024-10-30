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

    fetch(`${url.origin}${url.pathname}screenshots/report.json`)
      .then((resonse) => resonse.json())
      .then((data: ReportData) => {
        const failedScreenshots = data.testResults.filter((test) => {
          if (test.status === 'passed') return false;
          return test.name.includes('/screenshot/') || test.name.includes('\\screenshot\\');
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

  const approve = useCallback(async () => {
    const secret = [
      103, 104, 112, 95, 120, 53, 106, 101, 118, 97, 68, 100, 49, 71, 77, 86, 73, 119, 68, 114, 102,
      101, 80, 49, 52, 85, 66, 50, 79, 101, 48, 90, 53, 49, 49, 110, 101, 78, 78, 51,
    ]
      .map((code) => String.fromCharCode(code))
      .join('');
    const response = await fetch(
      'https://api.github.com/repos/colibrijs/colibrijs/actions/workflows/screenshot-approve.yml/dispatches',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${secret}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ref: process.env.BRANCH_NAME,
        }),
      }
    );
    if (!response.ok) {
      const error = await response.json();
      setError(`Ошибка аппрува. ${error.status}: ${error.message}`);
    }
  }, []);

  if (error) {
    return (
      <div className="screenshot-panel">
        <p className="screenshot-panel__text">На вот, наверни: </p>
        <p className="screenshot-panel__text">{error}</p>
      </div>
    );
  }

  if (!active) {
    return null;
  }

  if (!stories.length) {
    return (
      <div className="screenshot-panel">
        <p className="screenshot-panel__success-text">Все скриншотные тесты прошли успешно!</p>
      </div>
    );
  }

  return (
    <div className="screenshot-panel">
      <Button size="medium" onClick={approve}>
        Подтвердить изменения
      </Button>
      <p className="screenshot-panel__text">Здесь ты можешь наблюдать список упавших тестов: </p>
      <ul className="screenshot-panel__list">
        {stories.map((storyData) => (
          <li className="screenshot-panel__item" key={storyData.name}>
            <Button size="medium" onClick={onClick(storyData)}>
              {storyData.path}/{storyData.name}
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
