import { type API } from '@storybook/manager-api';
import './screenshot-panel.css';
import { type ReactNode } from 'react';
export type ScreenshotsPanelProps = {
    active: boolean;
    api: API;
};
export declare function ScreenshotsPanel({ active, api }: ScreenshotsPanelProps): ReactNode;
