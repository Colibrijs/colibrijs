var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { loadComments } from './addon/common/comments';
import { withScreenshotsDecorator } from './addon/screenshots-comparator/decorator';
export default {
    decorators: [withScreenshotsDecorator()],
    loaders: [
        (context) => __awaiter(void 0, void 0, void 0, function* () {
            const config = context.globals.sauronEye;
            // @ts-expect-error -- всё хорошо, это нужно чтобы в тесте потом обратиться к этому значению
            if (window.pullRequestComments) {
                // @ts-expect-error -- всё хорошо, это нужно чтобы в тесте потом обратиться к этому значению
                return { comments: window.pullRequestComments };
            }
            const pullRequestNumber = Number(config.pullRequestNumber);
            if (!pullRequestNumber || isNaN(pullRequestNumber)) {
                // @ts-expect-error -- всё хорошо, это нужно чтобы в тесте потом обратиться к этому значению
                window.pullRequestComments = [];
                return { comments: [] };
            }
            const comments = yield loadComments(config);
            // @ts-expect-error -- всё хорошо, это нужно чтобы в тесте потом обратиться к этому значению
            window.pullRequestComments = comments;
            return { comments };
        }),
    ],
    globalTypes: {
        screenshotsComparatorActive: {
            defaultValue: false,
        },
    },
};
//# sourceMappingURL=preview.js.map