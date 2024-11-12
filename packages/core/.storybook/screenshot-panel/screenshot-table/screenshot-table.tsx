import { type API } from '@storybook/manager-api';
import { Divider, Table } from 'antd';
import type { TableColumnsType } from 'antd';
import React, { useMemo, useCallback, type ReactNode } from 'react';

import { isApprovedScreenshot } from '../../screenshoter-config/get-approved-screenshots';

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
  const rowSelection: TableRowSelection<StoryData> = useMemo(
    () => ({
      type: 'checkbox',
      onChange(_, selectedStory) {
        onChange(selectedStory);
      },
      getCheckboxProps: (currentStory: StoryData) => ({
        disabled: isApprovedScreenshot(approvedStories, currentStory),
      }),
    }),
    [approvedStories, onChange]
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
      const isApproved = isApprovedScreenshot(approvedStories, currentStory);
      return isApproved ? `${defaultClass}--approved` + ' ' + defaultClass : defaultClass;
    },
    [approvedStories]
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
