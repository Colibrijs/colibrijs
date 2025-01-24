var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { loadComments } from './comments';
const CAN_NOT_FIND_BODY_ERROR = 'Не нашел body внутри комментария с подтверждением изменений скриншотов';
const CAN_NOT_FIND_APPROVED_STORY_ERROR = 'Не найден комментарий с данными апрувнутых тестов';
export function getParsedScreenshots(comments) {
    if (!comments.length)
        return [];
    const approveComment = comments.find((comment) => comment.body.includes('Подтверждаю изменения в скриншотах'));
    if (!approveComment)
        return [];
    const { body } = approveComment;
    if (!body)
        throw new Error(CAN_NOT_FIND_BODY_ERROR);
    const match = body
        .replace(/\s+/g, ' ')
        .trim() // удаляем все ненужные символы по типу \n
        .match(/<pre id="screenshots-data">(.*?)<\/pre>/); // достаем все что находится внутри <pre> тега
    if (!match || !match.length || !match[1])
        throw new Error(CAN_NOT_FIND_APPROVED_STORY_ERROR);
    const text = match[1];
    return JSON.parse(text);
}
export function isApprovedScreenshot(approvedScreenshots, story) {
    return approvedScreenshots.some((screenshot) => screenshot.name === story.name && screenshot.path === story.path);
}
export function getApprovedScreenshots(config) {
    return __awaiter(this, void 0, void 0, function* () {
        const pullRequestNumber = Number(config.pullRequestNumber);
        if (!pullRequestNumber || isNaN(pullRequestNumber)) {
            return [];
        }
        const comments = yield loadComments(config);
        const result = getParsedScreenshots(comments);
        return result;
    });
}
//# sourceMappingURL=get-approved-screenshots.js.map