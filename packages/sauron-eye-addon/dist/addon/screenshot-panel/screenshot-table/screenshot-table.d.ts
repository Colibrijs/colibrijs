import { type API } from '@storybook/manager-api';
import { type ReactNode } from 'react';
import './screenshot-table.css';
import type { StoryData } from '../../common/types';
type Props = {
    storiesToApprove: StoryData[];
    approvedStories: StoryData[];
    stories: StoryData[];
    api: API;
    onChange: (storiesToApprove: StoryData[]) => void;
};
export declare function ScreenshotTable({ storiesToApprove, stories, api, onChange, approvedStories, }: Props): ReactNode;
export {};
