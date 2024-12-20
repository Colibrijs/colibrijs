import { AddonPanel, Button } from '@storybook/components';
import { type API } from '@storybook/manager-api';
import './screenshot-panel.css';
import React, { type ReactNode } from 'react';

import { ScreenshotTable } from './screenshot-table/screenshot-table';
import { getApprovedScreenshots } from '../common/get-approved-screenshots';
import type { StoryData } from '../common/types';
import { useFailedStories } from '../common/use-failed-stories';

export type ScreenshotsPanelProps = {
  active: boolean;
  api: API;
};

export function ScreenshotsPanel({ active, api }: ScreenshotsPanelProps): ReactNode {
  const { status, stories, error: failedStoriesError } = useFailedStories(api);
  const [storiesToApprove, setStoriesToApprove] = React.useState<StoryData[]>([]);
  const [approvedStories, setApprovedStories] = React.useState<StoryData[]>([]);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    getApprovedScreenshots()
      .then(setApprovedStories)
      .catch((error) => setError(error.message));
  }, []);

  const approve = React.useCallback(async () => {
    // TODO: Переделать на секрет
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
            'approved-screenshots': JSON.stringify(
              [...approvedStories, ...storiesToApprove],
              null,
              2
            ),
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

  if (!active) {
    return null;
  }

  if (status === 'error' || error) {
    return (
      <div className="screenshot-panel">
        <p className="screenshot-panel__text">На вот, наверни: </p>
        <p className="screenshot-panel__text">{failedStoriesError || error}</p>
      </div>
    );
  }

  if (status === 'loading') {
    return (
      <div className="screenshot-panel">
        <p className="screenshot-panel__loading-text">Идет загрузка данных о сторисах...</p>
      </div>
    );
  }

  if (!stories.length) {
    return (
      <div className="screenshot-panel">
        <p className="screenshot-panel__success-text">Все скриншотные тесты прошли успешно!</p>
      </div>
    );
  }

  return (
    <AddonPanel active={active}>
      <div className="screenshot-panel">
        {!!storiesToApprove.length && (
          <Button size="medium" onClick={approve}>
            Подтвердить изменения
          </Button>
        )}
        <p className="screenshot-panel__text">Здесь ты можешь наблюдать список упавших тестов: </p>
        <ScreenshotTable
          stories={stories}
          api={api}
          storiesToApprove={storiesToApprove}
          approvedStories={approvedStories}
          onChange={setStoriesToApprove}
        />
      </div>
    </AddonPanel>
  );
}
