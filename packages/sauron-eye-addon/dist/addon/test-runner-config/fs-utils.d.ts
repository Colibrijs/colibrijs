import type { ScreenshotType, Settings } from './resolve-settings';
export declare function isDirectoryAvailable(directory: string): boolean;
type Screenshots = Record<ScreenshotType, Buffer>;
export declare function saveScreenshots(screenshotId: string, screenshots: Screenshots, settings: Settings): Promise<void>;
export {};
