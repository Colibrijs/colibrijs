import ContentEditorStoriesMeta from './content-editor.stories';
import type { Story, StoryMeta } from './content-editor.stories';

export default {
  ...ContentEditorStoriesMeta,
  title: 'ContentEditor/tests/integration-element-remove',
} satisfies StoryMeta;

export const HiddenByDefault: Story = {
  name: 'Удаление элемента скрыто по умолчанию',
};

export const VisibleOnClick: Story = {
  name: 'При клике на кнопку "удалить элемент", появляется интерфейс удаления',
};

export const HidesOnClose: Story = {
  name: 'Если удаление элемента отменено, интерфейс удаления скрывается',
};

export const HidesOnRemove: Story = {
  name: 'Когда элемент удаляется, интерфейс удаления скрывается',
};

export const RemovesOnRemove: Story = {
  name: 'Когда элемент удаляется, он удаляется из дерева',
};
