import { loadComments, type Comment } from '../screenshot-panel/comments';
import type { StoryData } from '../screenshot-panel/types';

type Story = {
  path: string;
  name: string;
};

const CAN_NOT_FIND_COMMENT_ERROR = 'Не нашел комментарий с подтверждением изменений скриншотов';
const CAN_NOT_FIND_BODY_ERROR =
  'Не нашел body внутри комментария с подтверждением изменений скриншотов';
const CAN_NOT_FIND_APPROVED_STORY_ERROR = 'Не найден комментарий с данными апрувнутых тестов';

export function getParsedScreenshots(comments: Comment[]): StoryData[] {
  if (!comments.length) return [];

  const approveComment = comments.find((comment) =>
    comment.body.includes('Подтверждаю изменения в скриншотах')
  );
  if (!approveComment) throw new Error(CAN_NOT_FIND_COMMENT_ERROR);

  const { body } = approveComment;
  if (!body) throw new Error(CAN_NOT_FIND_BODY_ERROR);

  const match = body
    .replace(/\s+/g, ' ')
    .trim() // удаляем все ненужные символы по типу \n
    .match(/<pre id="screenshots-data">(.*?)<\/pre>/); // достаем все что находится внутри <pre> тега
  if (!match || !match.length || !match[1]) throw new Error(CAN_NOT_FIND_APPROVED_STORY_ERROR);

  const text = match[1];
  return JSON.parse(text!);
}

export function isApprovedScreenshot(approvedScreenshots: StoryData[], story: Story) {
  return approvedScreenshots.some(
    (screenshot) => screenshot.name === story.name && screenshot.path === story.path
  );
}

export async function getApprovedScreenshots(): Promise<StoryData[]> {
  const pullRequestNumber = Number(process.env.PULL_REQUEST_NUMBER);

  if (!pullRequestNumber || isNaN(pullRequestNumber)) {
    return [];
  }

  const comments = await loadComments(pullRequestNumber);
  return getParsedScreenshots(comments);
}
