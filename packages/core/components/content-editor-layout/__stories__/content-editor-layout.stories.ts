import { examplePage } from '@colibrijs/mocks/pages';
import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';

import type { WithMockedApi } from '../../../hooks/use-api/mocked';
import { ContentEditorLayout } from '../content-editor-layout';

export type StoryMeta = Meta<WithMockedApi<ComponentProps<typeof ContentEditorLayout>>>;
export type Story = StoryObj<WithMockedApi<ComponentProps<typeof ContentEditorLayout>>>;

export default {
  component: ContentEditorLayout,
  title: 'ContentEditorLayout',
  args: {
    pageRoute: examplePage.route,
  },
} satisfies StoryMeta;

export const Default: Story = {};
