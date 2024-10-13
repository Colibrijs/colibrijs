import PropEditorStoriesMeta, { type PropEditorMeta, type Story } from '../prop-editor.stories';

// eslint-disable-next-line import/no-default-export -- переименовать файл в .stories.ts, когда придет время и всё будет работать
export default {
  ...PropEditorStoriesMeta,
  title: 'PropEditor/tests/screenshot',
} satisfies PropEditorMeta;

export const Screenshot: Story = {
  name: 'Хрень',
};
