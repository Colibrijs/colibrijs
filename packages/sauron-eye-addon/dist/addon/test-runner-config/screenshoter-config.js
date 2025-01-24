var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getStoryContext } from '@storybook/test-runner';
import resemble from 'resemblejs';
import { saveScreenshots } from './fs-utils';
import { resolveSettings } from './resolve-settings';
import { APPROVE_TEXT } from '../common/comments';
import { getParsedScreenshots, isApprovedScreenshot } from '../common/get-approved-screenshots';
export function getScreenshoterConfig(config) {
    const settings = resolveSettings();
    function postVisit(page, story) {
        return __awaiter(this, void 0, void 0, function* () {
            const context = yield getStoryContext(page, story);
            if (!isScreenshotStory(context))
                return;
            const comments = yield page.evaluate(() => {
                // @ts-expect-error -- всё хорошо. В preview.ts есть код, который сохраняет в window коменты
                return window.pullRequestComments;
            }, APPROVE_TEXT);
            const approvedScreenshots = getParsedScreenshots(comments);
            if (isApprovedScreenshot(approvedScreenshots, { name: story.name, path: context.componentId }))
                return;
            const [referenceScreenshot, actualScreenshot] = yield Promise.all([
                getReferencePageScreenshot(page, context),
                page.screenshot(),
            ]);
            const result = yield compareImages(referenceScreenshot, actualScreenshot);
            if (result.rawMisMatchPercentage) {
                yield saveScreenshots(story.id, {
                    reference: referenceScreenshot,
                    actual: actualScreenshot,
                    diff: result.getBuffer(false),
                }, settings);
            }
            expect(result.rawMisMatchPercentage).toBe(0);
        });
    }
    function isScreenshotStory(storyData) {
        return storyData.parameters.fileName.includes('/screenshot/');
    }
    function getReferencePageScreenshot(actualStoryPage, context) {
        return __awaiter(this, void 0, void 0, function* () {
            const referencePage = yield actualStoryPage.context().newPage();
            // https://colibrijs.github.io/colibrijs/main/storybook/iframe.html?id=pagetitle-tests-screenshot--screenshot
            const referencePageUrl = `${config.referenceStorybookUrl}iframe.html?id=${context.id}`;
            yield referencePage.goto(referencePageUrl, { waitUntil: 'networkidle' });
            return referencePage.screenshot();
        });
    }
    function compareImages(reference, actual) {
        return new Promise((resolve) => {
            resemble(reference).compareTo(actual).onComplete(resolve);
        });
    }
    return { postVisit };
}
//# sourceMappingURL=screenshoter-config.js.map