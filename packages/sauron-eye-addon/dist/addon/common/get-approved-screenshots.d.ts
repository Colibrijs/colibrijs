import { type Comment } from './comments';
import type { SauronEyeConfig, StoryData } from './types';
type Story = {
    path: string;
    name: string;
};
export declare function getParsedScreenshots(comments: Comment[]): StoryData[];
export declare function isApprovedScreenshot(approvedScreenshots: StoryData[], story: Story): boolean;
export declare function getApprovedScreenshots(config: SauronEyeConfig): Promise<StoryData[]>;
export {};
