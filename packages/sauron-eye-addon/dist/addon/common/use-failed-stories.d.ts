import type { API } from '@storybook/manager-api';
import type { StoryData } from './types';
type StoriesQuery = {
    status: 'success';
    stories: StoryData[];
    error: null;
    isLoading: false;
} | {
    status: 'error';
    stories: StoryData[];
    error: Error;
    isLoading: false;
} | {
    status: 'loading';
    stories: StoryData[];
    error: null;
    isLoading: true;
} | {
    status: 'idle';
    stories: StoryData[];
    error: null;
    isLoading: false;
};
export declare function useFailedStories(api: API): StoriesQuery;
export {};
