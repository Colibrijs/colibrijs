import { describe, expect, it } from '@jest/globals';
import path from 'node:path';

import { getEntryPoints } from '../get-entry-points';

describe(getEntryPoints.name, () => {
  it('точкой входа main является полный путь к fake-entry.ts', () => {
    expect.assertions(1);

    const pathToFakeEntry = path.resolve(__dirname, '../fake-entry.ts');
    const entryPoints = getEntryPoints();

    expect(entryPoints).toStrictEqual({ main: pathToFakeEntry });
  });
});
