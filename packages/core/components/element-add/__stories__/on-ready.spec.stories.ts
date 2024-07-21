import { textComponent, textComponentSchema } from '@colibrijs/mocks/components';
import { getDefaultValues } from '@colibrijs/schema';
import { expect, fn } from '@storybook/test';

import ElementAddStoriesMeta from './element-add.stories';
import type { ElementAddMeta, ElementAddStory } from './element-add.stories';
import { withMockedApi } from '../../../hooks/use-api/mocked';
import { ElementAddTO } from '../test-object';

export default {
  ...ElementAddStoriesMeta,
  title: 'ElementAdd/tests/on-ready',
} satisfies ElementAddMeta;

export const CallsWithSelectedComponent: ElementAddStory = {
  name: 'onReady вызывается с выбранным компонентом',
  args: { onReady: fn() },
  decorators: [
    withMockedApi((apiClient) => {
      apiClient.override({
        components: {
          get: () => Promise.resolve([textComponent]),
        },
      });
    }),
  ],
  play: async (context) => {
    const elementAdd = new ElementAddTO(context);
    await elementAdd.selectComponent(textComponent.id);
    await elementAdd.clickAdd();

    expect(context.args.onReady).toHaveBeenCalledWith({
      component: textComponent,
      pageId: context.args.pageId,
      props: getDefaultValues(textComponentSchema),
    });
  },
};

export const CallsWithDefaultProps: ElementAddStory = {
  name: 'onReady вызывается с дефолтными пропсами для выбранного компонента',
  args: { onReady: fn() },
  decorators: [
    withMockedApi((apiClient) => {
      apiClient.override({
        components: {
          get: () => Promise.resolve([textComponent]),
        },
      });
    }),
  ],
  play: async (context) => {
    const elementAdd = new ElementAddTO(context);
    await elementAdd.selectComponent(textComponent.id);
    await elementAdd.clickAdd();

    expect(context.args.onReady).toHaveBeenCalledWith({
      component: textComponent,
      pageId: context.args.pageId,
      props: getDefaultValues(textComponentSchema),
    });
  },
};

export const CallsWithPageId: ElementAddStory = {
  name: 'onReady вызывается с pageId переданным в пропсах',
  args: { onReady: fn() },
  decorators: [
    withMockedApi((apiClient) => {
      apiClient.override({
        components: {
          get: () => Promise.resolve([textComponent]),
        },
      });
    }),
  ],
  play: async (context) => {
    const elementAdd = new ElementAddTO(context);
    await elementAdd.selectComponent(textComponent.id);
    await elementAdd.clickAdd();

    expect(context.args.onReady).toHaveBeenCalledWith({
      component: textComponent,
      pageId: context.args.pageId,
      props: getDefaultValues(textComponentSchema),
    });
  },
};
