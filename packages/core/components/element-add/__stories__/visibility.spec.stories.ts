import { expect } from '@storybook/test';

import ElementAddStoriesMeta from './element-add.stories';
import type { ElementAddMeta, ElementAddStory } from './element-add.stories';
import { ElementAddTO } from '../test-object';

export default {
  ...ElementAddStoriesMeta,
  title: 'ElementAdd/tests/visibility',
} satisfies ElementAddMeta;

export const HiddenWhenOpenIsFalse: ElementAddStory = {
  name: 'Если open = false модалка с добавлением элемента не отображается',
  args: { open: false },
  play: async (context) => {
    const elementAdd = new ElementAddTO(context);
    const visible = await elementAdd.isVisible();

    expect(visible, 'Проверяю, что добавление элемента не отображается').toBe(false);
  },
};

export const VisibleWhenOpenIsTrue: ElementAddStory = {
  name: 'Если open = true модалка с добавлением элемента отображается',
  args: { open: true },
  play: async (context) => {
    const elementAdd = new ElementAddTO(context);
    const visible = await elementAdd.isVisible();

    expect(visible, 'Проверяю, что добавление элемента отображается').toBe(true);
  },
};
