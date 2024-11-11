import { loadComments, type Comment } from '../screenshot-panel/comments';
import type { StoryData } from '../screenshot-panel/types';

export function getParsedScreenshots(comments: Comment[]): StoryData[] {
  if (!comments.length) return [];
  const body = comments[0]?.body;
  const match = body!.match(/<pre id="screenshots-data">(.*?)<\/pre>/);
  const text = match![1];
  return JSON.parse(text!);
}

export async function getApprovedScreenshots(): Promise<StoryData[]> {
  const pullRequestNumber = Number(process.env.PULL_REQUEST_NUMBER);

  if (!pullRequestNumber || isNaN(pullRequestNumber)) {
    return [];
  }

  const comments = await loadComments(pullRequestNumber);
  return getParsedScreenshots(comments);
}
