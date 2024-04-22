import { describe, expect, it } from '@jest/globals';

import { encodePackageName } from './encode-package-name';

describe(encodePackageName.name, () => {
  it('заменяет "@" на подчёркивание', () => {
    expect.assertions(1);

    const input = '@test';
    const sanitized = encodePackageName(input);

    expect(sanitized).toBe('_test');
  });

  it('заменяет "/" двумя подчёркиваниями', () => {
    expect.assertions(1);

    const input = 'test/package';
    const sanitized = encodePackageName(input);

    expect(sanitized).toBe('test__package');
  });

  it('заменяет несколько "@" и "/"', () => {
    expect.assertions(1);

    const input = '@test/@package/with/multiple/slashes';
    const sanitized = encodePackageName(input);

    expect(sanitized).toBe('_test___package__with__multiple__slashes');
  });
});
