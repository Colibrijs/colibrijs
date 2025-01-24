var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let responseBody = null;
export function loadComments(config) {
    return __awaiter(this, void 0, void 0, function* () {
        if (responseBody !== null) {
            return responseBody;
        }
        const url = `https://api.github.com/repos/${config.repositoryOwner}/${config.repositoryName}/issues/${config.pullRequestNumber}/comments`;
        const response = yield fetch(url);
        responseBody = (yield response.json());
        return responseBody;
    });
}
export const APPROVE_TEXT = 'Подтверждаю изменения в скриншотах\n<!-- thollander/actions-comment-pull-request "screenshot-approve" -->';
//# sourceMappingURL=comments.js.map