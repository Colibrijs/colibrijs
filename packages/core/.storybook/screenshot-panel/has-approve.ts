interface Options {
  pullRequestNumber: string;
}

interface Comment {
  body: string;
}

const APPROVE_TEXT =
  'Подтверждаю изменения в скриншотах\n<!-- thollander/actions-comment-pull-request "screenshot-approve" -->';

/**
 * Возвращает информацию о том есть ли апрув изменений вёртски
 */
export async function hasApprove({ pullRequestNumber }: Options): Promise<boolean> {
  const url = `https://api.github.com/repos/colibrijs/colibrijs/issues/${pullRequestNumber}/comments`;
  const response = await fetch(url);
  const comments: Comment[] = await response.json();

  return comments.some((comment) => comment.body === APPROVE_TEXT);
}
