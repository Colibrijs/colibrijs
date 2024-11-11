import { loadComments, type Comment } from '../screenshot-panel/comments';
import type { StoryData } from '../screenshot-panel/types';

export function getParsedScreenshots(comments: Comment[]): StoryData[] {
  if (!comments.length) return [];
  const div = document.createElement('div');
  div.innerHTML = comments[0]!.body;
  const pre = div.querySelector('#screenshots-data');
  const text = pre!.textContent;
  const approvedScreenshots = JSON.parse(text!);
  return approvedScreenshots;
}

export async function getApprovedScreenshots(): Promise<StoryData[]> {
  const pullRequestNumber = Number(process.env.PULL_REQUEST_NUMBER);

  if (!pullRequestNumber || isNaN(pullRequestNumber)) {
    return [];
  }

  const comments = await loadComments(pullRequestNumber);
  return getParsedScreenshots(comments);
}
