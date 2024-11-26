import { type API } from '@storybook/manager-api';

type AssertionResult = {
  ancestorTitles: [string, string];
};

type TestResults = {
  name: string;
  status: 'passed' | 'failed';
  assertionResults: AssertionResult[];
};

export type Report = {
  testResults: TestResults[];
};

export type StoryData = {
  key: string;
  path: string;
  name: string;
  id: string;
  title: string;
};

export type ScreenshotsPanelProps = {
  active: boolean;
  api: API;
};
