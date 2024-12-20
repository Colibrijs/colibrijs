import type { API } from '@storybook/manager-api';
import React from 'react';

import { getReport } from './get-report';
import type { Report, StoryData } from './types';

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

type StoriesQuery =
  | {
      status: 'success';
      stories: StoryData[];
      error: null;
      isLoading: false;
    }
  | {
      status: 'error';
      stories: StoryData[];
      error: null;
      isLoading: false;
    }
  | {
      status: 'loading';
      stories: StoryData[];
      error: null;
      isLoading: true;
    }
  | {
      status: 'idle';
      stories: StoryData[];
      error: null;
      isLoading: false;
    };

export function useFailedStories(api: API): StoriesQuery {
  const [query, setQuery] = React.useState<StoriesQuery>({
    status: 'idle',
    stories: [],
    error: null,
    isLoading: false,
  });

  React.useEffect(() => {
    setQuery({ status: 'loading', isLoading: true, stories: [], error: null });

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
            const storyId = path + '--' + id;
            const title = api.getData(storyId).name;
            return { path, name, id, key: path, title };
          });
        });

        setQuery({ status: 'success', isLoading: false, stories: storiesData, error: null });
      })
      .catch((error) => {
        setQuery({ status: 'error', isLoading: false, stories: [], error });
      });
  }, [api]);

  return query;
}
