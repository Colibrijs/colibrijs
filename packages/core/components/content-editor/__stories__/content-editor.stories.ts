import { exampleElements } from '@colibrijs/mocks/elements';
import { examplePage } from '@colibrijs/mocks/pages';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { SidebarDecorator } from '../../layout/sidebar-decorator';
import { ContentEditor } from '../content-editor';

export type StoryMeta = Meta<typeof ContentEditor>;
export type Story = StoryObj<typeof ContentEditor>;

export default {
  component: ContentEditor,
  title: 'ContentEditor',
  decorators: [SidebarDecorator],
  args: {
    content: exampleElements,
    pageId: examplePage.id,
    onChange: fn(),
  },
} satisfies StoryMeta;

export const Default: Story = {};
