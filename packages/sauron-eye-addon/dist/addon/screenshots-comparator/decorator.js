import { jsx as _jsx } from "react/jsx-runtime";
import { ScreenshotsComparator } from './screenshots-comparator';
export function withScreenshotsDecorator() {
    function ScreenshotsDecorator(Story, { globals, id }) {
        if (globals.screenshotsComparatorActive) {
            return (_jsx(ScreenshotsComparator, { storybookUrl: globals.sauronEye.testingStorybookUrl, storyId: id, children: _jsx(Story, {}) }));
        }
        return _jsx(Story, {});
    }
    ScreenshotsDecorator.displayName = 'ScreenshotsDecorator';
    return ScreenshotsDecorator;
}
//# sourceMappingURL=decorator.js.map