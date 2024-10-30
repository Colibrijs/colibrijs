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

  const onApprove = useCallback(() => {
    fetch(
      'https://api.github.com/repos/colibrijs/colibrijs/actions/workflows/screenshot-approve.yml/dispatches',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.GH_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ref: process.env.BRANCH_NAME,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data, process.env.GH_TOKEN, process.env.BRANCH_NAME);
        if (!data.ok) setError(`Ошибка аппрува. ${data.status}: ${data.message}`);
      });
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
      <Button size="medium" onClick={onApprove}>
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
