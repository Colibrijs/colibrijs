import { type API } from '@storybook/manager-api';
import classNames from 'classnames';
import React, { type ReactNode, type ChangeEvent } from 'react';

import './screenshot-table.css';
import { isApprovedScreenshot } from '../../common/get-approved-screenshots';
import type { StoryData } from '../../common/types';

type Props = {
  storiesToApprove: StoryData[];
  approvedStories: StoryData[];
  stories: StoryData[];
  api: API;
  onChange: (storiesToApprove: StoryData[]) => void;
};

export function ScreenshotTable({
  storiesToApprove,
  stories,
  api,
  onChange,
  approvedStories,
}: Props): ReactNode {
  const onClick = React.useCallback(
    (screenshotStory: StoryData) => () => api.selectStory(screenshotStory.path, screenshotStory.id),
    [api]
  );

  const removeStoryToApprove = React.useCallback(
    (story: StoryData) => {
      const index = storiesToApprove.findIndex(
        (currentStory) => story.path === currentStory.path && story.name === currentStory.name
      );

      const cloneArray = [...storiesToApprove];
      cloneArray.splice(index, 1);
      onChange(cloneArray);
    },
    [onChange, storiesToApprove]
  );

  const addStoryToApprove = React.useCallback(
    (story: StoryData) => {
      const newStories = [...storiesToApprove, story];
      onChange(newStories);
    },
    [onChange, storiesToApprove]
  );

  const onCheck = React.useCallback(
    (story: StoryData) => {
      return (event: ChangeEvent<HTMLInputElement>) => {
        const isChecked = event.target.checked;
        if (!isChecked) {
          removeStoryToApprove(story);
        } else {
          addStoryToApprove(story);
        }
      };
    },
    [addStoryToApprove, removeStoryToApprove]
  );

  return (
    <table className="screenshot-table__panel">
      <thead className="screenshot-table__thead">
        <tr className="screenshot-table__tr">
          <th className="screenshot-table__th" />
          <th className="screenshot-table__th">Name</th>
          <th className="screenshot-table__th">Title</th>
        </tr>
      </thead>
      <tbody>
        {stories.map((story) => (
          <tr
            key={story.path + story.name}
            className={classNames('screenshot-table__tr', {
              'screenshot-table__approved': isApprovedScreenshot(approvedStories, story),
            })}
          >
            <td className="screenshot-table__td">
              <input
                disabled={isApprovedScreenshot(approvedStories, story)}
                className="screenshot-table__checkbox"
                onChange={onCheck(story)}
                type="checkbox"
              />
            </td>
            <td className="screenshot-table__td">{story.name}</td>
            <td className="screenshot-table__td">
              <button className="screenshot-table__button" onClick={onClick(story)}>
                {story.title}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
