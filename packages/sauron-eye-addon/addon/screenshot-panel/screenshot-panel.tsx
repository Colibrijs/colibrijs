import { AddonPanel, Button } from '@storybook/components';
import { useGlobals, type API } from '@storybook/manager-api';
import './screenshot-panel.css';
import React, { type ReactNode } from 'react';

import { ScreenshotTable } from './screenshot-table/screenshot-table';
import { getApprovedScreenshots } from '../common/get-approved-screenshots';
import type { SauronEyeConfig, StoryData } from '../common/types';
import { useFailedStories } from '../common/use-failed-stories';

export type ScreenshotsPanelProps = {
  active: boolean;
  api: API;
};

export function ScreenshotsPanel({ active, api }: ScreenshotsPanelProps): ReactNode {
  const [globals] = useGlobals();
  const config: SauronEyeConfig = globals.sauronEye;

  const { status, stories, error: failedStoriesError } = useFailedStories(api);
  const [storiesToApprove, setStoriesToApprove] = React.useState<StoryData[]>([]);
  const [approvedStories, setApprovedStories] = React.useState<StoryData[]>([]);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    getApprovedScreenshots(config)
      .then(setApprovedStories)
      .catch((error) => setError(error.message));
  }, [config]);

  const approve = React.useCallback(async () => {
    const token = config.githubToken
      .split(',')
      .map((code) => String.fromCharCode(Number(code)))
      .join('');

    const response = await fetch(
      `https://api.github.com/repos/${config.repositoryOwner}/${config.repositoryName}/actions/workflows/screenshot-approve.yml/dispatches`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ref: config.branchName,
          inputs: {
            'pull-request-number': config.pullRequestNumber,
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
  }, [config, approvedStories, storiesToApprove]);

  if (!active) {
    return null;
  }

  if (status === 'error' || error) {
    return (
      <div className="screenshot-panel">
        <p className="screenshot-panel__text">Произошло неладное: </p>
        <pre className="screenshot-panel__text">{failedStoriesError?.message || error}</pre>
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
