import { type API } from '@storybook/manager-api';
import { Divider, Table } from 'antd';
import type { TableColumnsType } from 'antd';
import React, { useMemo, useCallback, type ReactNode } from 'react';

import './screenshot-table.css';
import type { StoryData } from '../types';

const columns: TableColumnsType<StoryData> = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Path',
    dataIndex: 'path',
  },
];

type Props = {
  approvedStories: StoryData[];
  stories: StoryData[];
  api: API;
  onChange: (storiesToApprove: StoryData[]) => void;
};

type RowSelectionType = 'checkbox' | 'radio';
interface TableRowSelection<T> {
  type?: RowSelectionType;
  onChange?: (selectedRowKeys: React.Key[], selectedRows: T[]) => void;
}

export function ScreenshotTable({ stories, api, onChange, approvedStories }: Props): ReactNode {
  const isApprovedStory = useCallback(
    (story: StoryData) => {
      return approvedStories.some(
        (approvedStory) => story.path === approvedStory.path && story.name === approvedStory.name
      );
    },
    [approvedStories]
  );

  const rowSelection: TableRowSelection<StoryData> = useMemo(
    () => ({
      type: 'checkbox',
      onChange(_, selectedStory) {
        onChange(selectedStory);
      },
      getCheckboxProps: (currentStory: StoryData) => ({
        disabled: isApprovedStory(currentStory),
      }),
    }),
    [isApprovedStory, onChange]
  );

  const onRow = useCallback(
    (screenshotStory: StoryData) => ({
      onClick: () => api.selectStory(screenshotStory.path, screenshotStory.id),
    }),
    [api]
  );

  const getClasses = useCallback(
    (currentStory: StoryData) => {
      const defaultClass = 'screenshot-table__row';
      const isApproved = isApprovedStory(currentStory);
      return isApproved ? `${defaultClass}--approved` + ' ' + defaultClass : defaultClass;
    },
    [isApprovedStory]
  );

  return (
    <div className="screenshot-table">
      <Divider />
      <Table<StoryData>
        rowSelection={rowSelection}
        columns={columns}
        dataSource={stories}
        onRow={onRow}
        rowClassName={getClasses}
      />
    </div>
  );
}
