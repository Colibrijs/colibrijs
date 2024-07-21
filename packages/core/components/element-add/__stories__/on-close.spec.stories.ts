import { expect, fn } from '@storybook/test';

import ElementAddStoriesMeta from './element-add.stories';
import type { ElementAddMeta, ElementAddStory } from './element-add.stories';
import { ElementAddTO } from '../test-object';

export default {
  ...ElementAddStoriesMeta,
  title: 'ElementAdd/tests/on-close',
} satisfies ElementAddMeta;

export const CallsOnClose: ElementAddStory = {
  name: 'onClose вызывается при клике на крестик',
  args: { onClose: fn() },
  play: async (context) => {
    const elementAdd = new ElementAddTO(context);
    await elementAdd.clickClose();

    await expect(context.args.onClose, 'Проверяю, что onClose был вызван').toHaveBeenCalled();
  },
};
