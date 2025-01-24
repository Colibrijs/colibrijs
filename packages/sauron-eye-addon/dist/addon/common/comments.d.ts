import type { SauronEyeConfig } from './types';
export interface Comment {
    body: string;
}
export declare function loadComments(config: SauronEyeConfig): Promise<Comment[]>;
export declare const APPROVE_TEXT = "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044E \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0432 \u0441\u043A\u0440\u0438\u043D\u0448\u043E\u0442\u0430\u0445\n<!-- thollander/actions-comment-pull-request \"screenshot-approve\" -->";
