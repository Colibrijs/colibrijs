export type ScreenshotType = 'reference' | 'actual' | 'diff';
export interface Settings {
    output: Record<ScreenshotType | 'directory', string>;
}
export declare function resolveSettings(): Settings;
