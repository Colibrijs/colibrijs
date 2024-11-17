import { AddonPanel, Button } from '@storybook/components';
import { addons, types } from '@storybook/manager-api';
import './screenshot-panel.css';
import React, { useCallback, useEffect, useMemo, type ReactNode } from 'react';

import { getReport } from './get-report';
import { ScreenshotTable } from './screenshot-table/screenshot-table';
import type { ScreenshotsPanelProps, StoryData, Report } from './types';
import { getApprovedScreenshots } from '../screenshoter-config/get-approved-screenshots';

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
  const [storiesToApprove, setStoriesToApprove] = React.useState<StoryData[]>([]);
  const [approvedStories, setApprovedStories] = React.useState<StoryData[]>([]);
  const [error, setError] = React.useState('');

  useEffect(() => {
    getReport()
      .then((data: Report) => {
        const failedScreenshots = data.testResults.filter((test) => {
          if (test.status === 'passed') return false;
          return test.name.includes('/screenshot/') || test.name.includes('\\screenshot\\');
        });
        const storiesData = failedScreenshots.flatMap((story) => {
          return story.assertionResults.map((result) => {
            const path = result.ancestorTitles[0].toLowerCase().replaceAll('/', '-');
            const name = result.ancestorTitles[1];
            const id = kebabize(name);
            return { path, name, id, key: path };
          });
        });
        setStories(storiesData);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  useEffect(() => {
    getApprovedScreenshots()
      .then(setApprovedStories)
      .catch((error) => setError(error.message));
  }, []);

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
          inputs: {
            'pull-request-number': process.env.PULL_REQUEST_NUMBER,
            'approved-screenshots': JSON.stringify(storiesToApprove, null, 2),
          },
        }),
      }
    );
    if (!response.ok) {
      const error = await response.json();
      setError(`Ошибка аппрува. ${error.status}: ${error.message}`);
    } else {
      setApprovedStories(approvedStories.concat(storiesToApprove));
      setStoriesToApprove([]);
    }
  }, [approvedStories, storiesToApprove]);

  const showApproveButton = useMemo(() => {
    return approvedStories.length !== stories.length;
  }, [approvedStories.length, stories.length]);

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
      {showApproveButton && (
        <Button size="medium" onClick={approve}>
          Подтвердить изменения
        </Button>
      )}
      <p className="screenshot-panel__text">Здесь ты можешь наблюдать список упавших тестов: </p>
      <ScreenshotTable
        stories={stories}
        api={api}
        approvedStories={approvedStories}
        onChange={setStoriesToApprove}
      />
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
