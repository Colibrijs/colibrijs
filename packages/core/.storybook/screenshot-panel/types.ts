import { type API } from '@storybook/manager-api';

type AssertionResult = {
  ancestorTitles: [string, string];
};

type TestResults = {
  name: string;
  status: 'passed' | 'failed';
  assertionResults: AssertionResult[];
  approved?: boolean | undefined;
};

export type ReportData = {
  testResults: TestResults[];
};

export type StoryData = {
  path: string;
  name: string;
  id: string;
  approved?: boolean | undefined;
};

export type ScreenshotsPanelProps = {
  active: boolean;
  api: API;
};
