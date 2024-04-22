import { describe, expect, it } from '@jest/globals';

import { decodePackageName } from '../decode-package-name';

describe(decodePackageName.name, () => {
  it('заменяет подчёркивание на "@"', () => {
    expect.assertions(1);

    const input = '_test';
    const decoded = decodePackageName(input);

    expect(decoded).toBe('@test');
  });

  it('заменяет два подчёркивания на "/"', () => {
    expect.assertions(1);

    const input = 'test__package';
    const decoded = decodePackageName(input);

    expect(decoded).toBe('test/package');
  });

  it('если в исходной строке есть три подчёркивания, заменяет их на "/@"', () => {
    expect.assertions(1);

    const input = '_test___package__with__multiple__slashes';
    const decoded = decodePackageName(input);

    expect(decoded).toBe('@test/@package/with/multiple/slashes');
  });
});
