export class NotFoundError extends Error {
  override name = 'NotFoundError';
  override message = 'Not found';
}
