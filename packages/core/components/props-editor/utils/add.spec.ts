import { describe, expect, it } from '@jest/globals';

import { add } from './add';

describe(add.name, () => {
  it('для функции сложения работает переместительное свойство', () => {
    expect.assertions(1);
    expect(add(3, 2)).toBe(add(2, 3));
  });
});
