import path from 'node:path';

/** Возвращает путь к package.json файлу */
export function getPackageJsonPath(root: string): string {
  return path.resolve(root, 'package.json');
}
