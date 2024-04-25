import path from 'node:path';

import type { PackageJson } from '../types';

/**
 * Возвращает путь к экспортируемому компоненту относительно сборки. То есть, если сборка в папке
 * /root/dist и функция вернёт ./component-a/, это означает, что все фалы компонента, можно найти в
 * /root/dist/component-a/
 */
export function getExportOutputDirectory(moduleName: string, packageJson: PackageJson): string {
  const dirname = path.join(`./${packageJson.name}`, moduleName);

  return `./${dirname}`;
}
