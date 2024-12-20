export interface Comment {
  body: string;
}

let responseBody: null | Comment[] = null;

export async function loadComments(pullRequestNumber: number): Promise<Comment[]> {
  if (responseBody !== null) {
    return responseBody;
  }

  const url = `https://api.github.com/repos/colibrijs/colibrijs/issues/${pullRequestNumber}/comments`;
  const response = await fetch(url);
  responseBody = (await response.json()) as Comment[];

  return responseBody;
}

export const APPROVE_TEXT =
  'Подтверждаю изменения в скриншотах\n<!-- thollander/actions-comment-pull-request "screenshot-approve" -->';
